import { useStore } from "@tanstack/react-form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
	QC_METHOD_LABELS,
	QC_METHODS,
	type QcMethod,
	SEGMENT_LABELS,
	type SegmentKey,
} from "../constant";
import type { EquipmentForm } from "../hooks/use-equipment-form";

interface EquipmentQcProcessProps {
	form: EquipmentForm;
}

export function EquipmentQcProcess({ form }: EquipmentQcProcessProps) {
	const qcProcess = useStore(form.store, (s) => s.values.qcProcess);

	const segmentOrder: SegmentKey[] = ["phoThong", "trungKy", "kyCapCao"];

	return (
		<div className="bg-surface-container-low rounded-xl p-6 shadow-sm">
			<div className="mb-4">
				<h2 className="text-title-md font-bold text-on-surface uppercase tracking-wide">
					Quy trình QC
				</h2>
				<p className="text-body-sm text-on-surface-variant mt-0.5">
					Phương thức kiểm hàng áp dụng cho từng phân khúc. (Chọn một phương
					thức cho mỗi phân khúc)
				</p>
			</div>

			<div className="rounded-lg border border-outline-variant/30 overflow-x-auto">
				<table className="w-full min-w-max">
					<thead className="bg-surface-container">
						<tr className="border-b border-outline-variant/20">
							<th className="text-label-xs font-bold text-on-surface-variant uppercase tracking-wider py-3 px-4 text-left whitespace-nowrap">
								Phân khúc
							</th>
							{QC_METHODS.map((method) => (
								<th
									key={method}
									className="text-label-xs font-bold text-on-surface-variant uppercase tracking-wider py-3 px-4 text-center whitespace-nowrap"
								>
									{QC_METHOD_LABELS[method]}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{segmentOrder.map((segment) => {
							const index = qcProcess.findIndex((q) => q.segment === segment);
							return (
								<tr
									key={segment}
									className="border-b border-outline-variant/20 last:border-0 hover:bg-surface-container/50"
								>
									<td className="py-3 px-4 text-body-sm font-medium text-on-surface whitespace-nowrap">
										{SEGMENT_LABELS[segment]}
									</td>
									<form.Field name={`qcProcess[${index}].method`}>
										{(field) => (
											<>
												{QC_METHODS.map((method) => (
													<td key={method} className="py-3 px-4 text-center">
														<RadioGroup
															value={field.state.value}
															onValueChange={(val) =>
																field.handleChange(val as QcMethod)
															}
															className="flex justify-center"
														>
															<RadioGroupItem
																value={method}
																aria-label={`${SEGMENT_LABELS[segment]} - ${QC_METHOD_LABELS[method]}`}
															/>
														</RadioGroup>
													</td>
												))}
											</>
										)}
									</form.Field>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}
