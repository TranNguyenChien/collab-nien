import { useStore } from "@tanstack/react-form";
import { PlusCircle, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import type { MachineRow } from "../constant";
import type { EquipmentForm } from "../hooks/use-equipment-form";

interface EquipmentFacilitiesProps {
	form: EquipmentForm;
}

export function EquipmentFacilities({ form }: EquipmentFacilitiesProps) {
	const machines = useStore(form.store, (s) => s.values.machines);

	function handleAddMachine() {
		const newMachine: MachineRow = {
			id: `m-${Date.now()}`,
			name: "",
			quantity: 0,
			operators: 0,
		};
		form.setFieldValue("machines", [...machines, newMachine]);
	}

	function handleRemoveMachine(index: number) {
		form.setFieldValue(
			"machines",
			machines.filter((_, i) => i !== index),
		);
	}

	return (
		<div className="bg-surface-container-low rounded-xl p-6 shadow-sm">
			<div className="flex items-start justify-between mb-2">
				<div>
					<h2 className="text-title-md font-bold text-on-surface uppercase tracking-wide">
						Cơ sở vật chất
					</h2>
					<p className="text-body-sm text-on-surface-variant mt-0.5">
						Máy/mũi may tương ứng xưởng sử dụng và số người vận hành
					</p>
				</div>
				<Button
					type="button"
					variant="outline"
					size="sm"
					className="gap-1.5 shrink-0"
					onClick={handleAddMachine}
				>
					<PlusCircle className="size-4" />
					Thêm máy/mũi
				</Button>
			</div>

			<div className="rounded-lg border border-outline-variant/30 overflow-hidden mt-4">
				<Table>
					<TableHeader className="bg-surface-container">
						<TableRow className="hover:bg-transparent border-outline-variant/20">
							<TableHead className="text-label-xs font-bold text-on-surface-variant uppercase tracking-wider py-3 px-4">
								Loại máy/mũi may
							</TableHead>
							<TableHead className="text-label-xs font-bold text-on-surface-variant uppercase tracking-wider py-3 px-4">
								Số lượng
							</TableHead>
							<TableHead className="text-label-xs font-bold text-on-surface-variant uppercase tracking-wider py-3 px-4">
								Nhân sự vận hành
							</TableHead>
							<TableHead className="text-label-xs font-bold text-on-surface-variant uppercase tracking-wider py-3 px-4 text-right">
								Thao tác
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{machines.map((machine, index) => (
							<TableRow
								key={machine.id}
								className="border-outline-variant/20 hover:bg-surface-container/50"
							>
								<TableCell className="py-2 px-4">
									<form.Field name={`machines[${index}].name`}>
										{(field) => (
											<Input
												placeholder="Tên máy..."
												value={field.state.value}
												onChange={(e) => field.handleChange(e.target.value)}
												className="h-9 text-sm"
											/>
										)}
									</form.Field>
								</TableCell>
								<TableCell className="py-2 px-4">
									<form.Field name={`machines[${index}].quantity`}>
										{(field) => (
											<Input
												type="number"
												min={0}
												value={field.state.value}
												onChange={(e) =>
													field.handleChange(Number(e.target.value))
												}
												className="h-9 text-sm w-24"
											/>
										)}
									</form.Field>
								</TableCell>
								<TableCell className="py-2 px-4">
									<form.Field name={`machines[${index}].operators`}>
										{(field) => (
											<Input
												type="number"
												min={0}
												value={field.state.value}
												onChange={(e) =>
													field.handleChange(Number(e.target.value))
												}
												className="h-9 text-sm w-24"
											/>
										)}
									</form.Field>
								</TableCell>
								<TableCell className="py-2 px-4 text-right">
									<button
										type="button"
										onClick={() => handleRemoveMachine(index)}
										className="text-error hover:text-error/80 transition-colors p-1"
										aria-label="Xóa máy"
									>
										<Trash2 className="size-4" />
									</button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
