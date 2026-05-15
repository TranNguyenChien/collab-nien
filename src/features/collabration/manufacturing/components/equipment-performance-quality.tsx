import { useStore } from "@tanstack/react-form";
import { Info } from "lucide-react";
import { Input } from "@/components/ui/input";
import { SEGMENT_LABELS } from "../constant";
import type { EquipmentForm } from "../hooks/use-equipment-form";

interface EquipmentPerformanceQualityProps {
	form: EquipmentForm;
}

function OutputTable({ form }: { form: EquipmentForm }) {
	const output = useStore(form.store, (s) => s.values.output);

	return (
		<div className="bg-surface-container-low rounded-xl p-6 shadow-sm flex-1">
			<h2 className="text-title-md font-bold text-on-surface uppercase tracking-wide mb-4">
				Hiệu suất &amp; Sản lượng
			</h2>
			<div className="rounded-lg border border-outline-variant/30 overflow-hidden">
				<table className="w-full">
					<thead className="bg-surface-container">
						<tr className="border-b border-outline-variant/20">
							<th className="text-label-xs font-bold text-on-surface-variant uppercase tracking-wider py-3 px-4 text-left">
								Phân khúc
							</th>
							<th className="text-label-xs font-bold text-on-surface-variant uppercase tracking-wider py-3 px-4 text-right">
								Sản lượng / Tháng (SP)
							</th>
						</tr>
					</thead>
					<tbody>
						{output.map((row, index) => (
							<tr
								key={row.segment}
								className="border-b border-outline-variant/20 last:border-0 hover:bg-surface-container/50"
							>
								<td className="py-2 px-4 text-body-sm font-medium text-on-surface">
									{SEGMENT_LABELS[row.segment]}
								</td>
								<td className="py-2 px-4">
									<form.Field name={`output[${index}].quantity`}>
										{(field) => (
											<Input
												type="number"
												min={0}
												value={field.state.value}
												onChange={(e) =>
													field.handleChange(Number(e.target.value))
												}
												className="h-9 text-sm text-right font-semibold"
											/>
										)}
									</form.Field>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

function ErrorRateTable({ form }: { form: EquipmentForm }) {
	const errorRates = useStore(form.store, (s) => s.values.errorRates);

	return (
		<div className="bg-surface-container-low rounded-xl p-6 shadow-sm flex-1">
			<h2 className="text-title-md font-bold text-on-surface uppercase tracking-wide mb-4">
				Kiểm soát chất lượng
			</h2>
			<div className="rounded-lg border border-outline-variant/30 overflow-hidden">
				<table className="w-full">
					<thead className="bg-surface-container">
						<tr className="border-b border-outline-variant/20">
							<th className="text-label-xs font-bold text-on-surface-variant uppercase tracking-wider py-3 px-4 text-left">
								Phân khúc
							</th>
							<th className="text-label-xs font-bold text-on-surface-variant uppercase tracking-wider py-3 px-4 text-right">
								Tỷ lệ lỗi TB (%)
							</th>
						</tr>
					</thead>
					<tbody>
						{errorRates.map((row, index) => (
							<tr
								key={row.segment}
								className="border-b border-outline-variant/20 last:border-0 hover:bg-surface-container/50"
							>
								<td className="py-2 px-4 text-body-sm font-medium text-on-surface">
									{SEGMENT_LABELS[row.segment]}
								</td>
								<td className="py-2 px-4">
									<form.Field name={`errorRates[${index}].rate`}>
										{(field) => (
											<div className="flex items-center justify-end gap-1.5">
												<Input
													type="number"
													min={0}
													step={0.1}
													value={field.state.value}
													onChange={(e) =>
														field.handleChange(Number(e.target.value))
													}
													className="h-9 text-sm text-right font-semibold w-24"
												/>
												<span className="text-body-sm text-on-surface-variant font-medium">
													%
												</span>
											</div>
										)}
									</form.Field>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className="mt-3 flex items-start gap-2 bg-secondary-container/40 rounded-lg p-3">
				<Info className="size-4 text-secondary shrink-0 mt-0.5" />
				<p className="text-label-xs text-on-surface-variant">
					Tỷ lệ lỗi dưới 1.0% là tiêu chuẩn vàng cho các đơn hàng quốc tế.
				</p>
			</div>
		</div>
	);
}

export function EquipmentPerformanceQuality({
	form,
}: EquipmentPerformanceQualityProps) {
	return (
		<div className="grid grid-cols-2 gap-6">
			<OutputTable form={form} />
			<ErrorRateTable form={form} />
		</div>
	);
}
