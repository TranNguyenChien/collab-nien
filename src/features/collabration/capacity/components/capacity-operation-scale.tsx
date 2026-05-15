import { useStore } from "@tanstack/react-form";
import { Package } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { OPERATION_SCALE_STATS } from "../constant";
import type { CapacityForm } from "../hooks/use-capacity-form";

interface CapacityOperationScaleProps {
	form: CapacityForm;
}

function StatCard({
	label,
	value,
	unit,
}: {
	label: string;
	value: number;
	unit: string;
}) {
	return (
		<div className="bg-surface-container rounded-lg p-4 flex flex-col gap-1 flex-1">
			<p className="text-label-xs font-bold text-on-surface-variant uppercase tracking-widest">
				{label}
			</p>
			<p className="text-2xl font-bold text-on-surface">
				{value}
				{unit}
			</p>
		</div>
	);
}

function MaxOutputTable({ form }: { form: CapacityForm }) {
	const maxOutput = useStore(form.store, (s) => s.values.maxOutput);

	return (
		<div className="rounded-lg border border-outline-variant/30 overflow-hidden">
			<div className="flex items-center gap-2 px-4 py-3 bg-surface-container-high border-b border-outline-variant/30">
				<Package className="size-4 text-primary" />
				<h3 className="text-label-sm font-bold text-on-surface uppercase tracking-wide">
					Sản lượng tối đa/tháng
				</h3>
			</div>
			<Table>
				<TableHeader className="bg-surface-container">
					<TableRow className="hover:bg-transparent border-outline-variant/20">
						<TableHead className="text-label-xs font-bold text-on-surface-variant uppercase tracking-wider py-2 px-4">
							Hạng mục sản phẩm
						</TableHead>
						<TableHead className="text-label-xs font-bold text-on-surface-variant uppercase tracking-wider py-2 px-4">
							Dự kiến (PCS/Tháng)
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{maxOutput.map(
						(row: { label: string; quantity: number }, index: number) => (
							<TableRow
								key={row.label}
								className="border-outline-variant/20 hover:bg-surface-container/50"
							>
								<TableCell className="py-2 px-4 text-body-sm font-medium text-on-surface">
									{row.label}
								</TableCell>
								<TableCell className="py-2 px-4">
									<form.Field name={`maxOutput[${index}].quantity`}>
										{(field) => (
											<Input
												type="number"
												min={0}
												value={field.state.value}
												onChange={(e) =>
													field.handleChange(Number(e.target.value))
												}
												className="h-9 text-sm"
											/>
										)}
									</form.Field>
								</TableCell>
							</TableRow>
						),
					)}
				</TableBody>
			</Table>
		</div>
	);
}

export function CapacityOperationScale({ form }: CapacityOperationScaleProps) {
	return (
		<div className="bg-surface-container-low rounded-xl p-6 flex flex-col gap-5 shadow-sm">
			<div>
				<h2 className="text-title-md font-bold text-on-surface uppercase tracking-wide">
					Quy mô Vận hành
				</h2>
				<p className="text-body-sm text-on-surface-variant mt-0.5">
					Các chỉ số đo lường hiệu suất và công suất sản xuất thực tế theo
					tháng.
				</p>
			</div>

			<div className="flex gap-3">
				{OPERATION_SCALE_STATS.map((stat) => (
					<StatCard
						key={stat.id}
						label={stat.label}
						value={stat.value}
						unit={stat.unit}
					/>
				))}
			</div>

			<MaxOutputTable form={form} />
		</div>
	);
}
