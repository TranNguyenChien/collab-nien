import { useStore } from "@tanstack/react-form";
import { Input } from "@/components/ui/input";
import { SEGMENT_LABELS, type SegmentKey } from "../constant";
import type { OperationsForm } from "../hooks/use-operations-form";

interface OperationsMoqProps {
	form: OperationsForm;
}

const SEGMENT_ORDER: SegmentKey[] = ["phoThong", "trungKy", "kyCapCao"];

export function OperationsMoq({ form }: OperationsMoqProps) {
	const moq = useStore(form.store, (s) => s.values.moq);

	return (
		<div className="bg-surface-container-low rounded-xl p-6 shadow-sm">
			<h2 className="text-title-sm font-bold text-on-surface mb-4">
				2. Đơn tối thiểu (MOQ)
			</h2>
			<div className="rounded-lg border border-outline-variant/30 overflow-hidden">
				<table className="w-full">
					<thead className="bg-surface-container">
						<tr className="border-b border-outline-variant/20">
							<th className="text-label-xs font-bold text-on-surface-variant uppercase tracking-wider py-3 px-4 text-left">
								Phân khúc
							</th>
							<th className="text-label-xs font-bold text-on-surface-variant uppercase tracking-wider py-3 px-4 text-right">
								Số lượng sản phẩm
							</th>
						</tr>
					</thead>
					<tbody>
						{SEGMENT_ORDER.map((segment) => {
							const index = moq.findIndex((r) => r.segment === segment);
							return (
								<tr
									key={segment}
									className="border-b border-outline-variant/20 last:border-0 hover:bg-surface-container/50"
								>
									<td className="py-3 px-4 text-body-sm font-medium text-on-surface">
										{SEGMENT_LABELS[segment]}
									</td>
									<td className="py-2 px-4">
										<form.Field name={`moq[${index}].quantity`}>
											{(field) => (
												<div className="flex justify-end">
													<Input
														type="number"
														min={0}
														value={field.state.value}
														onChange={(e) =>
															field.handleChange(Number(e.target.value))
														}
														className="h-9 text-sm w-28 text-right"
													/>
												</div>
											)}
										</form.Field>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}
