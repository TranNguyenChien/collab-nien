import { Box, Package, ShoppingBag, Tag } from "lucide-react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	MATERIAL_CATEGORY_LABEL_MAP,
	MATERIAL_STATUS_MAP,
} from "@/features/collabration/inventory/constant";
import { cn } from "@/lib/utils";
import type { Material } from "@/types/material";

const MATERIAL_ICON_MAP = {
	label: Tag,
	bag: ShoppingBag,
	box: Box,
	package: Package,
} as const;

type IconKey = keyof typeof MATERIAL_ICON_MAP;

interface InventoryTableProps {
	items: Material[];
	totalCount: number;
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

export function InventoryTable({
	items,
	totalCount,
	currentPage,
	totalPages,
	onPageChange,
}: InventoryTableProps) {
	const startItem = (currentPage - 1) * 5 + 1;
	const endItem = Math.min(currentPage * 5, totalCount);

	return (
		<div className="bg-surface-container-lowest rounded-lg shadow overflow-hidden">
			<Table>
				<TableHeader>
					<TableRow className="py-3">
						<TableHead className="text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold py-4 px-4">
							Sản Phẩm / Style
						</TableHead>
						<TableHead className="text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold py-4 px-4">
							Loại NPL / Đóng Gói
						</TableHead>
						<TableHead className="text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold py-4 px-4">
							Tên Vật Liệu
						</TableHead>
						<TableHead className="text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold py-4 px-4">
							Brand/NCC
						</TableHead>
						<TableHead className="text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold py-4 px-4">
							Spec / Mô Tả
						</TableHead>
						<TableHead className="text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold py-4 px-4">
							Đơn Vị
						</TableHead>
						<TableHead className="text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold py-4 px-4">
							Trạng Thái
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{items.map((item) => {
						const IconComponent =
							MATERIAL_ICON_MAP[(item.icon as IconKey) ?? "package"];
						const statusConfig = MATERIAL_STATUS_MAP[item.status];
						const categoryConfig =
							MATERIAL_CATEGORY_LABEL_MAP[item.categoryType];

						return (
							<TableRow key={item.id}>
								<TableCell className="py-4 px-4">
									<span className="text-body-lg font-semibold text-on-surface">
										{item.productStyle}
									</span>
								</TableCell>
								<TableCell className="py-4 px-4">
									<span
										className={cn(
											"text-label-sm font-medium px-2.5 py-1 rounded-full",
											categoryConfig?.className ??
												"bg-surface-container text-on-surface-variant",
										)}
									>
										{item.categoryType}
									</span>
								</TableCell>
								<TableCell className="py-4 px-4">
									<div className="flex items-center gap-3">
										<div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
											<IconComponent className="w-4 h-4 text-on-surface-variant" />
										</div>
										<span className="text-body-lg font-medium text-on-surface">
											{item.materialName}
										</span>
									</div>
								</TableCell>
								<TableCell className="py-4 px-4">
									<span className="text-body-lg text-on-surface-variant">
										{item.brandSupplier}
									</span>
								</TableCell>
								<TableCell className="py-4 px-4 max-w-50">
									<span className="text-body-lg text-on-surface-variant line-clamp-2">
										{item.spec}
									</span>
								</TableCell>
								<TableCell className="py-4 px-4">
									<span className="text-body-lg text-on-surface-variant">
										{item.unit}
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
										{item.stockCount > 0 && (
											<span className="opacity-70">
												({item.stockCount.toLocaleString("vi-VN")})
											</span>
										)}
									</span>
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>

			{/* Footer */}
			<div className="flex items-center justify-between px-4 py-3 border-t border-outline-variant">
				<span className="text-label-sm text-on-surface-variant">
					Hiển thị {startItem}–{endItem} trong số {totalCount} danh mục
				</span>

				<div className="flex items-center gap-1">
					<button
						type="button"
						onClick={() => onPageChange(currentPage - 1)}
						disabled={currentPage === 1}
						className="w-8 h-8 rounded-lg flex items-center justify-center text-sm text-on-surface-variant hover:bg-surface-container disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
						aria-label="Trang trước"
					>
						‹
					</button>

					{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
						<button
							key={page}
							type="button"
							onClick={() => onPageChange(page)}
							className={cn(
								"w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium transition-colors",
								currentPage === page
									? "bg-primary text-on-primary"
									: "text-on-surface-variant hover:bg-surface-container",
							)}
							aria-label={`Trang ${page}`}
							aria-current={currentPage === page ? "page" : undefined}
						>
							{page}
						</button>
					))}

					<button
						type="button"
						onClick={() => onPageChange(currentPage + 1)}
						disabled={currentPage === totalPages}
						className="w-8 h-8 rounded-lg flex items-center justify-center text-sm text-on-surface-variant hover:bg-surface-container disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
						aria-label="Trang tiếp"
					>
						›
					</button>
				</div>
			</div>
		</div>
	);
}
