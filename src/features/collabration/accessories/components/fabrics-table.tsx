import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	COMPOSITION_MAP,
	FABRIC_GROUP_MAP,
	FABRIC_STATUS_MAP,
} from "@/features/collabration/accessories/constant";
import { cn } from "@/lib/utils";
import type { Fabric } from "@/types/material";

interface FabricsTableProps {
	items: Fabric[];
	totalCount: number;
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

export function FabricsTable({
	items,
	// totalCount,
	// currentPage,
	// totalPages,
	// onPageChange,
}: FabricsTableProps) {
	// const [openMenuId, setOpenMenuId] = useState<string | null>(null);
	// const startItem = (currentPage - 1) * 5 + 1;
	// const endItem = Math.min(currentPage * 5, totalCount);

	// function handleMenuToggle(id: string) {
	// 	setOpenMenuId((prev) => (prev === id ? null : id));
	// }

	// function handleMenuClose() {
	// 	setOpenMenuId(null);
	// }

	// const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

	return (
		<div className="bg-surface-container-lowest rounded-lg shadow overflow-hidden">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold py-4 px-4">
							Mã vải
						</TableHead>
						<TableHead className="text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold py-4 px-4">
							Tên vải
						</TableHead>
						<TableHead className="text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold py-4 px-4">
							Loại vải
						</TableHead>
						<TableHead className="text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold py-4 px-4">
							Thành phần
						</TableHead>
						<TableHead className="text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold py-4 px-4">
							Nhóm
						</TableHead>
						<TableHead className="text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold py-4 px-4">
							Trạng thái
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{items.map((item) => {
						const statusConfig = FABRIC_STATUS_MAP[item.status];
						const groupConfig = FABRIC_GROUP_MAP[item.group];
						const compositionConfig = COMPOSITION_MAP[item.composition] ?? {
							label: item.composition,
							className: "bg-surface-container text-on-surface-variant",
						};

						return (
							<TableRow key={item.id}>
								<TableCell className="py-4 px-4">
									<span className="text-label-sm font-mono text-on-surface-variant">
										{item.code}
									</span>
								</TableCell>
								<TableCell className="py-4 px-4">
									<span className="text-body-lg font-semibold text-on-surface">
										{item.name}
									</span>
								</TableCell>
								<TableCell className="py-4 px-4">
									<span className="text-body-lg text-on-surface-variant">
										{item.type}
									</span>
								</TableCell>
								<TableCell className="py-4 px-4">
									<span
										className={cn(
											"text-label-sm font-medium px-2.5 py-1 rounded-full",
											compositionConfig.className,
										)}
									>
										{compositionConfig.label}
									</span>
								</TableCell>
								<TableCell className="py-4 px-4">
									<span className="text-body-lg text-on-surface-variant">
										{groupConfig.label}
									</span>
								</TableCell>
								<TableCell className="py-4 px-4">
									<span
										className={cn(
											"text-label-sm font-semibold px-3 py-1 rounded-full inline-flex items-center gap-1",
											statusConfig.className,
										)}
									>
										<span className="w-1.5 h-1.5 rounded-full bg-current" />
										{statusConfig.label}
									</span>
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</div>
	);
}
