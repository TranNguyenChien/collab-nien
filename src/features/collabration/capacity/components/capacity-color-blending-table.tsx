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
	type ColorBlendingRow,
	DYEING_PROCESS_OPTIONS,
	PRINTING_METHOD_OPTIONS,
} from "../constant";
import type { CapacityForm } from "../hooks/use-capacity-form";

interface CapacityColorBlendingTableProps {
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
			<SelectTrigger className="h-9 text-sm w-full min-w-36">
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

export function CapacityColorBlendingTable({
	form,
}: CapacityColorBlendingTableProps) {
	const colorBlending = useStore(form.store, (s) => s.values.colorBlending);

	const columns: ColumnDef<ColorBlendingRow>[] = [
		{
			accessorKey: "fabricCode",
			header: "Chất liệu phù hợp",
			cell: ({ row }) => (
				<form.Field name={`colorBlending[${row.index}].fabricCode`}>
					{(field) => (
						<Input
							className="h-9 text-sm min-w-32"
							value={field.state.value}
							onChange={(e) => field.handleChange(e.target.value)}
						/>
					)}
				</form.Field>
			),
		},
		{
			accessorKey: "maxColors",
			header: "Màu MAX",
			cell: ({ row }) => (
				<form.Field name={`colorBlending[${row.index}].maxColors`}>
					{(field) => (
						<Input
							type="number"
							min={0}
							className="h-9 text-sm w-16"
							value={field.state.value}
							onChange={(e) => field.handleChange(Number(e.target.value))}
						/>
					)}
				</form.Field>
			),
		},
		{
			accessorKey: "dyeingProcess",
			header: "Loại phối màu hỗ trợ",
			cell: ({ row }) => (
				<form.Field name={`colorBlending[${row.index}].dyeingProcess`}>
					{(field) => (
						<SelectCell
							value={field.state.value}
							onChange={(v) => field.handleChange(v ?? "")}
							options={DYEING_PROCESS_OPTIONS}
						/>
					)}
				</form.Field>
			),
		},
		{
			accessorKey: "printingMethod",
			header: "Công nghệ/Thiết bị",
			cell: ({ row }) => (
				<form.Field name={`colorBlending[${row.index}].printingMethod`}>
					{(field) => (
						<SelectCell
							value={field.state.value}
							onChange={(v) => field.handleChange(v ?? "")}
							options={PRINTING_METHOD_OPTIONS}
						/>
					)}
				</form.Field>
			),
		},
		{
			accessorKey: "colorStability",
			header: "Độ ổn định màu",
			cell: ({ row }) => (
				<form.Field name={`colorBlending[${row.index}].colorStability`}>
					{(field) => (
						<Input
							className="h-9 text-sm min-w-36"
							value={field.state.value}
							onChange={(e) => field.handleChange(e.target.value)}
						/>
					)}
				</form.Field>
			),
		},
		{
			accessorKey: "colorFastness",
			header: "Giữ màu sau wash",
			cell: ({ row }) => (
				<form.Field name={`colorBlending[${row.index}].colorFastness`}>
					{(field) => (
						<Input
							className="h-9 text-sm min-w-28"
							value={field.state.value}
							onChange={(e) => field.handleChange(e.target.value)}
						/>
					)}
				</form.Field>
			),
		},
		{
			accessorKey: "lotMatching",
			header: "Matching giữa lô",
			cell: ({ row }) => (
				<form.Field name={`colorBlending[${row.index}].lotMatching`}>
					{(field) => (
						<Input
							className="h-9 text-sm min-w-28"
							value={field.state.value}
							onChange={(e) => field.handleChange(e.target.value)}
						/>
					)}
				</form.Field>
			),
		},
		{
			accessorKey: "restrictions",
			header: "Hạn chế / Không làm",
			cell: ({ row }) => (
				<form.Field name={`colorBlending[${row.index}].restrictions`}>
					{(field) => (
						<Input
							className="h-9 text-sm min-w-36"
							value={field.state.value}
							onChange={(e) => field.handleChange(e.target.value)}
						/>
					)}
				</form.Field>
			),
		},
	];

	const table = useReactTable({
		data: colorBlending,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	function handleAddRow() {
		form.setFieldValue("colorBlending", [
			...colorBlending,
			{
				id: `cb-${Date.now()}`,
				fabricCode: "",
				maxColors: 0,
				dyeingProcess: DYEING_PROCESS_OPTIONS[0],
				printingMethod: PRINTING_METHOD_OPTIONS[0],
				colorStability: "",
				colorFastness: "",
				lotMatching: "",
				restrictions: "",
			},
		]);
	}

	return (
		<section className="flex flex-col gap-4">
			<div className="flex items-start justify-between">
				<div>
					<h2 className="text-title-md font-bold text-on-surface uppercase tracking-wide">
						Bảng năng lực phối màu
					</h2>
					<p className="text-body-sm text-on-surface-variant mt-0.5">
						Chi tiết kỹ thuật hoàn thiện bề mặt và hiệu ứng màu sắc cho các dòng
						sản phẩm.
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
					Thêm kỹ thuật phối màu
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
