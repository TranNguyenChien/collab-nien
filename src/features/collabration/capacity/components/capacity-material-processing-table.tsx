import { useStore } from "@tanstack/react-form";
import {
	type ColumnDef,
	getCoreRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	ADVANCED_PROCESSING_OPTIONS,
	BASIC_PROCESSING_OPTIONS,
	EFFECT_OPTIONS,
	FABRIC_TYPE_OPTIONS,
	MACHINERY_OPTIONS,
	type MaterialProcessingRow,
} from "../constant";
import type { CapacityForm } from "../hooks/use-capacity-form";

interface CapacityMaterialProcessingTableProps {
	form: CapacityForm;
}

function SelectCell({
	value,
	onChange,
	options,
}: {
	value: string;
	onChange: (v: string | null) => void;
	options: readonly string[];
}) {
	return (
		<Select value={value} onValueChange={onChange}>
			<SelectTrigger className="h-9 text-sm w-full min-w-32">
				<SelectValue />
			</SelectTrigger>
			<SelectContent>
				{options.map((opt) => (
					<SelectItem key={opt} value={opt}>
						{opt}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}

export function CapacityMaterialProcessingTable({
	form,
}: CapacityMaterialProcessingTableProps) {
	const materialProcessing = useStore(
		form.store,
		(s) => s.values.materialProcessing,
	);

	const columns: ColumnDef<MaterialProcessingRow>[] = [
		{
			accessorKey: "fabricType",
			header: "Chất liệu phù hợp",
			cell: ({ row }) => (
				<form.Field name={`materialProcessing[${row.index}].fabricType`}>
					{(field) => (
						<SelectCell
							value={field.state.value}
							onChange={(v) => field.handleChange(v ?? "")}
							options={FABRIC_TYPE_OPTIONS}
						/>
					)}
				</form.Field>
			),
		},
		{
			accessorKey: "basicProcessing",
			header: "Xử lý cơ bản",
			cell: ({ row }) => (
				<form.Field name={`materialProcessing[${row.index}].basicProcessing`}>
					{(field) => (
						<SelectCell
							value={field.state.value}
							onChange={(v) => field.handleChange(v ?? "")}
							options={BASIC_PROCESSING_OPTIONS}
						/>
					)}
				</form.Field>
			),
		},
		{
			accessorKey: "advancedProcessing",
			header: "Xử lý nâng cao",
			cell: ({ row }) => (
				<form.Field
					name={`materialProcessing[${row.index}].advancedProcessing`}
				>
					{(field) => (
						<SelectCell
							value={field.state.value}
							onChange={(v) => field.handleChange(v ?? "")}
							options={ADVANCED_PROCESSING_OPTIONS}
						/>
					)}
				</form.Field>
			),
		},
		{
			accessorKey: "machinery",
			header: "Công nghệ",
			cell: ({ row }) => (
				<form.Field name={`materialProcessing[${row.index}].machinery`}>
					{(field) => (
						<SelectCell
							value={field.state.value}
							onChange={(v) => field.handleChange(v ?? "")}
							options={MACHINERY_OPTIONS}
						/>
					)}
				</form.Field>
			),
		},
		{
			accessorKey: "effect",
			header: "Hiệu quả đạt được",
			cell: ({ row }) => (
				<form.Field name={`materialProcessing[${row.index}].effect`}>
					{(field) => (
						<SelectCell
							value={field.state.value}
							onChange={(v) => field.handleChange(v ?? "")}
							options={EFFECT_OPTIONS}
						/>
					)}
				</form.Field>
			),
		},
		{
			accessorKey: "shrinkagePercent",
			header: "Tỷ lệ co %",
			cell: ({ row }) => (
				<form.Field name={`materialProcessing[${row.index}].shrinkagePercent`}>
					{(field) => (
						<Input
							className="h-9 text-sm w-20"
							value={field.state.value}
							onChange={(e) => field.handleChange(e.target.value)}
						/>
					)}
				</form.Field>
			),
		},
		{
			accessorKey: "shrinkageWidth",
			header: "Co rút (%)",
			cell: ({ row }) => (
				<form.Field name={`materialProcessing[${row.index}].shrinkageWidth`}>
					{(field) => (
						<Input
							className="h-9 text-sm w-20"
							value={field.state.value}
							onChange={(e) => field.handleChange(e.target.value)}
						/>
					)}
				</form.Field>
			),
		},
	];

	const table = useReactTable({
		data: materialProcessing,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	function handleAddRow() {
		form.setFieldValue("materialProcessing", [
			...materialProcessing,
			{
				id: `mp-${Date.now()}`,
				fabricType: FABRIC_TYPE_OPTIONS[0],
				basicProcessing: BASIC_PROCESSING_OPTIONS[0],
				advancedProcessing: ADVANCED_PROCESSING_OPTIONS[0],
				machinery: MACHINERY_OPTIONS[0],
				effect: EFFECT_OPTIONS[0],
				shrinkagePercent: "",
				shrinkageWidth: "",
			},
		]);
	}

	return (
		<section className="flex flex-col gap-4">
			<div className="flex items-start justify-between">
				<div>
					<h2 className="text-title-md font-bold text-on-surface uppercase tracking-wide">
						Bảng xử lý chất liệu
					</h2>
					<p className="text-body-sm text-on-surface-variant mt-0.5">
						Quản lý quy trình xử lý và các hiệu ứng vật lý đặc thù theo tiêu
						chuẩn kỹ thuật.
					</p>
				</div>
				<Button
					type="button"
					size="sm"
					variant="outline"
					onClick={handleAddRow}
					className="gap-1.5 shrink-0"
				>
					<PlusIcon className="size-3.5" />
					Thêm loại xử lý
				</Button>
			</div>

			<div className="rounded-xl border border-outline-variant/30 overflow-hidden shadow-sm">
				<Table>
					<TableHeader className="bg-surface-container-high">
						{table.getHeaderGroups().map((hg) => (
							<TableRow
								key={hg.id}
								className="hover:bg-transparent border-outline-variant/20"
							>
								{hg.headers.map((header) => (
									<TableHead
										key={header.id}
										className="text-label-xs font-bold text-on-surface-variant uppercase tracking-wider py-3 px-3 whitespace-nowrap"
									>
										{header.column.columnDef.header as string}
									</TableHead>
								))}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows.map((row) => (
							<TableRow
								key={row.id}
								className="border-outline-variant/20 hover:bg-surface-container/30"
							>
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
		</section>
	);
}
