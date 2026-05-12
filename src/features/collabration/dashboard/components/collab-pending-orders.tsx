import {
	type ColumnDef,
	flexRender,
	getCoreRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	PENDING_ORDERS,
	type PendingOrder,
} from "@/features/collabration/dashboard/constant";
import { cn } from "@/lib/utils";

const DEVIATION_STYLES = {
	positive: "text-green-700",
	negative: "text-error",
} as const;

const COLUMNS: ColumnDef<PendingOrder>[] = [
	{ accessorKey: "id", header: "MÃ ĐƠN" },
	{ accessorKey: "price", header: "GIÁ GỐC" },
	{ accessorKey: "quantity", header: "KL" },
	{ accessorKey: "wait", header: "ĐỢI" },
	{ accessorKey: "ceiling", header: "TRẦN" },
	{
		accessorKey: "deviation",
		header: "LỆCH",
		cell: ({ getValue }) => {
			const value = getValue<string>();
			return (
				<span
					className={cn(
						"font-semibold",
						value.startsWith("-")
							? DEVIATION_STYLES.negative
							: DEVIATION_STYLES.positive,
					)}
				>
					{value}
				</span>
			);
		},
	},
	{ accessorKey: "floor", header: "SÀN" },
];

export function CollabPendingOrders() {
	const data = useMemo(() => PENDING_ORDERS, []);

	const table = useReactTable({
		data,
		columns: COLUMNS,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div className="bg-surface-container-lowest rounded-lg p-6 flex flex-col gap-4 shadow">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<h2 className="text-title-md font-bold text-on-surface uppercase tracking-wide">
						Giao dịch đang chờ
					</h2>
					<span className="bg-primary text-on-primary text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
						{table.getRowModel().rows.length}
					</span>
				</div>
				<Button
					type="button"
					variant="link"
					className="text-label-sm text-primary hover:underline"
				>
					Xem tất cả
				</Button>
			</div>

			<Table>
				<TableHeader>
					{table.getHeaderGroups().map((headerGroup) => (
						<TableRow key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<TableHead
									key={header.id}
									className="text-label-sm text-on-surface-variant uppercase font-medium"
								>
									{flexRender(
										header.column.columnDef.header,
										header.getContext(),
									)}
								</TableHead>
							))}
						</TableRow>
					))}
				</TableHeader>
				<TableBody>
					{table.getRowModel().rows.map((row) => (
						<TableRow key={row.id}>
							{row.getVisibleCells().map((cell) => (
								<TableCell
									key={cell.id}
									className="text-label-sm text-on-surface"
								>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
