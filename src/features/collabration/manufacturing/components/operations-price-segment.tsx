import { useStore } from "@tanstack/react-form";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import {
	MAX_PRICE_RANGES_PER_SEGMENT,
	PRICE_RANGE_LABELS,
	PRICE_RANGES,
	type PriceRange,
	SEGMENT_LABELS,
	type SegmentKey,
} from "../constant";
import type { OperationsForm } from "../hooks/use-operations-form";

interface OperationsPriceSegmentProps {
	form: OperationsForm;
}

const SEGMENT_ORDER: SegmentKey[] = ["phoThong", "trungKy", "kyCapCao"];

export function OperationsPriceSegment({ form }: OperationsPriceSegmentProps) {
	const priceSegments = useStore(form.store, (s) => s.values.priceSegments);

	function handleToggle(segmentIndex: number, range: PriceRange) {
		const current = priceSegments[segmentIndex].selectedRanges;
		const isSelected = current.includes(range);

		if (isSelected) {
			form.setFieldValue(
				`priceSegments[${segmentIndex}].selectedRanges`,
				current.filter((r) => r !== range),
			);
		} else if (current.length < MAX_PRICE_RANGES_PER_SEGMENT) {
			form.setFieldValue(`priceSegments[${segmentIndex}].selectedRanges`, [
				...current,
				range,
			]);
		}
	}

	return (
		<div className="bg-surface-container-low rounded-xl p-6 shadow-sm">
			<div className="mb-4">
				<h2 className="text-title-sm font-bold text-on-surface">
					3. Phân khúc giá sản phẩm trung bình
				</h2>
				<p className="text-body-sm text-on-surface-variant mt-1">
					Chọn tối đa {MAX_PRICE_RANGES_PER_SEGMENT} phân khúc giá mục tiêu cho
					mỗi loại hình xưởng.
				</p>
			</div>
			<div className="rounded-lg border border-outline-variant/30 overflow-x-auto">
				<table className="w-full min-w-max">
					<thead className="bg-surface-container">
						<tr className="border-b border-outline-variant/20">
							<th className="text-label-xs font-bold text-on-surface-variant uppercase tracking-wider py-3 px-4 text-left whitespace-nowrap">
								Phân khúc
							</th>
							{PRICE_RANGES.map((range) => (
								<th
									key={range}
									className="text-label-xs font-bold text-on-surface-variant uppercase tracking-wider py-3 px-4 text-center whitespace-nowrap"
								>
									{PRICE_RANGE_LABELS[range]}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{SEGMENT_ORDER.map((segment) => {
							const segmentIndex = priceSegments.findIndex(
								(r) => r.segment === segment,
							);
							const selectedRanges =
								priceSegments[segmentIndex]?.selectedRanges ?? [];

							return (
								<tr
									key={segment}
									className="border-b border-outline-variant/20 last:border-0 hover:bg-surface-container/50"
								>
									<td className="py-3 px-4 text-body-sm font-medium text-on-surface whitespace-nowrap">
										{SEGMENT_LABELS[segment]}
									</td>
									{PRICE_RANGES.map((range) => {
										const isChecked = selectedRanges.includes(range);
										const isDisabled =
											!isChecked &&
											selectedRanges.length >= MAX_PRICE_RANGES_PER_SEGMENT;

										return (
											<td key={range} className="py-3 px-4 text-center">
												<Checkbox
													checked={isChecked}
													disabled={isDisabled}
													onCheckedChange={() =>
														handleToggle(segmentIndex, range)
													}
													aria-label={`${SEGMENT_LABELS[segment]} - ${PRICE_RANGE_LABELS[range]}`}
													className={cn(isDisabled && "opacity-40")}
												/>
											</td>
										);
									})}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}
