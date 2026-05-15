import { useStore } from "@tanstack/react-form";
import {
	type ColumnDef,
	getCoreRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { PlusIcon } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import {
	EXPERIENCE_OPTIONS,
	type ExperienceValue,
	type TechniqueRow,
	WORKER_SKILL_OPTIONS,
	type WorkerSkillValue,
} from "../constant";
import type { CapacityForm } from "../hooks/use-capacity-form";

interface CapacityStaffInfoProps {
	form: CapacityForm;
}

const TECHNIQUE_LEVELS = [
	{ key: "phoThong" as const, label: "PHỔ THÔNG" },
	{ key: "trungKy" as const, label: "TRUNG KỸ" },
	{ key: "ky" as const, label: "KỸ" },
];

function TechniqueTable({ form }: { form: CapacityForm }) {
	const techniques = useStore(form.store, (s) => s.values.techniques);

	const columns: ColumnDef<TechniqueRow>[] = [
		{
			accessorKey: "name",
			header: "KỸ THUẬT MAY / PHÂN KHÚC",
			cell: ({ row }) => (
				<form.Field name={`techniques[${row.index}].name`}>
					{(field) => (
						<Input
							className="h-8 text-sm min-w-40"
							placeholder="Nhập kỹ thuật..."
							value={field.state.value}
							onChange={(e) => field.handleChange(e.target.value)}
						/>
					)}
				</form.Field>
			),
		},
		...TECHNIQUE_LEVELS.map((level) => ({
			id: level.key,
			header: level.label,
			cell: ({ row }: { row: { index: number } }) => (
				<form.Field
					name={
						`techniques[${row.index}].${level.key}` as `techniques[${number}].phoThong`
					}
				>
					{(field) => (
						<div className="flex justify-center">
							<Checkbox
								checked={field.state.value as boolean}
								onCheckedChange={(v) => field.handleChange(v as boolean)}
							/>
						</div>
					)}
				</form.Field>
			),
		})),
	];

	const table = useReactTable({
		data: techniques,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	function handleAddRow() {
		form.setFieldValue("techniques", [
			...techniques,
			{
				id: `row-${Date.now()}`,
				name: "",
				phoThong: false,
				trungKy: false,
				ky: false,
			},
		]);
	}

	return (
		<div className="flex flex-col gap-2">
			<p className="text-label-xs font-bold text-on-surface-variant uppercase tracking-widest">
				Kỹ thuật thực hiện
			</p>
			<div className="rounded-lg overflow-hidden border border-outline-variant/30">
				<Table>
					<TableHeader className="bg-surface-container-high">
						{table.getHeaderGroups().map((hg) => (
							<TableRow key={hg.id} className="hover:bg-transparent">
								{hg.headers.map((header) => (
									<TableHead
										key={header.id}
										className="text-label-xs font-bold text-on-surface-variant uppercase tracking-wider py-2 px-3"
									>
										{header.column.columnDef.header as string}
									</TableHead>
								))}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows.map((row) => (
							<TableRow key={row.id} className="border-outline-variant/20">
								{row.getVisibleCells().map((cell) => (
									<TableCell key={cell.id} className="py-2 px-3">
										{(cell.column.columnDef.cell as Function)({ row })}
									</TableCell>
								))}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
			<button
				type="button"
				onClick={handleAddRow}
				className="flex items-center gap-1.5 text-label-sm text-primary font-medium hover:underline self-start mt-1"
			>
				<PlusIcon className="size-3.5" />
				Thêm kỹ thuật thực hiện
			</button>
		</div>
	);
}

export function CapacityStaffInfo({ form }: CapacityStaffInfoProps) {
	const workerSkills = useStore(form.store, (s) => s.values.workerSkills);
	const seniorExperience = useStore(
		form.store,
		(s) => s.values.seniorExperience,
	);

	function toggleSkill(value: WorkerSkillValue) {
		const next = workerSkills.includes(value)
			? workerSkills.filter((v) => v !== value)
			: [...workerSkills, value];
		form.setFieldValue("workerSkills", next);
	}

	return (
		<div className="bg-surface-container-low rounded-xl p-6 flex flex-col gap-5 shadow-sm">
			<div>
				<h2 className="text-title-md font-bold text-on-surface uppercase tracking-wide">
					Thông tin Nhân sự
				</h2>
				<p className="text-body-sm text-on-surface-variant mt-0.5">
					Đánh giá đội ngũ lao động và trình độ tay nghề kỹ thuật của thợ xưởng.
				</p>
			</div>

			<div className="flex flex-col gap-2">
				<p className="text-label-xs font-bold text-on-surface-variant uppercase tracking-widest">
					Tay nghề thợ xưởng
				</p>
				<div className="grid grid-cols-2 gap-x-6 gap-y-3">
					{WORKER_SKILL_OPTIONS.map((opt) => (
						<label
							key={opt.value}
							className="flex items-center gap-2.5 cursor-pointer"
						>
							<Checkbox
								checked={workerSkills.includes(opt.value)}
								onCheckedChange={() => toggleSkill(opt.value)}
							/>
							<span className="text-label-sm font-medium text-on-surface uppercase">
								{opt.label}
							</span>
						</label>
					))}
				</div>
			</div>

			<div className="grid grid-cols-2 gap-4">
				<form.Field name="currentWorkers">
					{(field) => (
						<div className="flex flex-col gap-1.5">
							<label className="text-label-xs font-bold text-on-surface-variant uppercase tracking-widest">
								Lao động hiện tại
							</label>
							<Input
								type="number"
								min={0}
								value={field.state.value}
								onChange={(e) => field.handleChange(Number(e.target.value))}
								className="h-10"
							/>
						</div>
					)}
				</form.Field>
				<form.Field name="seamsters">
					{(field) => (
						<div className="flex flex-col gap-1.5">
							<label className="text-label-xs font-bold text-on-surface-variant uppercase tracking-widest">
								Thợ/Chuyên may
							</label>
							<Input
								type="number"
								min={0}
								value={field.state.value}
								onChange={(e) => field.handleChange(Number(e.target.value))}
								className="h-10"
							/>
						</div>
					)}
				</form.Field>
			</div>

			<div className="flex flex-col gap-2">
				<p className="text-label-xs font-bold text-on-surface-variant uppercase tracking-widest">
					Kinh nghiệm thợ kỹ &gt; 5 năm
				</p>
				<div className="flex gap-2">
					{EXPERIENCE_OPTIONS.map((opt) => (
						<button
							key={opt.value}
							type="button"
							onClick={() =>
								form.setFieldValue(
									"seniorExperience",
									opt.value as ExperienceValue,
								)
							}
							className={cn(
								"flex-1 rounded-lg border px-3 py-2 text-label-sm font-semibold transition-colors",
								seniorExperience === opt.value
									? "border-primary bg-primary text-on-primary"
									: "border-outline-variant text-on-surface hover:bg-surface-container",
							)}
						>
							{opt.label}
						</button>
					))}
				</div>
			</div>

			<TechniqueTable form={form} />
		</div>
	);
}
