import { useStore } from "@tanstack/react-form";
import { Input } from "@/components/ui/input";
import { SEGMENT_LABELS, type SegmentKey } from "../constant";
import type { OperationsForm } from "../hooks/use-operations-form";

interface OperationsTimeSectionProps {
	form: OperationsForm;
}

const SEGMENT_ORDER: SegmentKey[] = ["phoThong", "trungKy", "kyCapCao"];

function TimeTable({
	title,
	fieldPrefix,
	form,
}: {
	title: string;
	fieldPrefix: "changeoverTime" | "completionTime";
	form: OperationsForm;
}) {
	const rows = useStore(form.store, (s) => s.values[fieldPrefix]);

	return (
		<div className="bg-surface-container-low rounded-xl p-6 shadow-sm">
			<h2 className="text-title-sm font-bold text-on-surface mb-4">{title}</h2>
			<div className="rounded-lg border border-outline-variant/30 overflow-hidden">
				<table className="w-full">
					<thead className="bg-surface-container">
						<tr className="border-b border-outline-variant/20">
							<th className="text-label-xs font-bold text-on-surface-variant uppercase tracking-wider py-3 px-4 text-left">
								Phân loại
							</th>
							<th className="text-label-xs font-bold text-on-surface-variant uppercase tracking-wider py-3 px-4 text-right">
								Thời gian
							</th>
						</tr>
					</thead>
					<tbody>
						{SEGMENT_ORDER.map((segment) => {
							const index = rows.findIndex((r) => r.segment === segment);
							return (
								<tr
									key={segment}
									className="border-b border-outline-variant/20 last:border-0 hover:bg-surface-container/50"
								>
									<td className="py-3 px-4 text-body-sm font-medium text-on-surface">
										{SEGMENT_LABELS[segment]}
									</td>
									<td className="py-2 px-4">
										<form.Field name={`${fieldPrefix}[${index}].hours`}>
											{(field) => (
												<div className="flex items-center gap-2 justify-end">
													<Input
														type="number"
														min={0}
														placeholder="..."
														value={field.state.value ?? ""}
														onChange={(e) => {
															const val = e.target.value;
															field.handleChange(
																val === "" ? null : Number(val),
															);
														}}
														className="h-9 text-sm w-24 text-right"
													/>
													<span className="text-body-sm text-on-surface-variant shrink-0">
														Giờ
													</span>
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

export function OperationsTimeSection({ form }: OperationsTimeSectionProps) {
	return (
		<div className="grid grid-cols-2 gap-6">
			<TimeTable
				title="1. Thời gian xưởng thay đổi mẫu trung bình"
				fieldPrefix="changeoverTime"
				form={form}
			/>
			<TimeTable
				title="2. Thời gian trung bình xưởng hoàn thiện cho 1 sản phẩm"
				fieldPrefix="completionTime"
				form={form}
			/>
		</div>
	);
}
