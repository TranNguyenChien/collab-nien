import { useNavigate } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { InventoryFilters } from "@/features/collabration/inventory/components/inventory-filters";
import { InventoryStats } from "@/features/collabration/inventory/components/inventory-stats";
import { InventorySuppliers } from "@/features/collabration/inventory/components/inventory-suppliers";
import { InventoryTable } from "@/features/collabration/inventory/components/inventory-table";
import {
	ITEMS_PER_PAGE,
	MATERIAL_ITEMS,
} from "@/features/collabration/inventory/constant";
import type { Material } from "@/types/material";

function filterMaterials(items: Material[], tab: string): Material[] {
	if (tab === "all") return items;
	return items.filter((item) => item.categoryLabel === tab);
}

export function CollabInventoryPage() {
	const navigate = useNavigate();
	const [activeTab, setActiveTab] = useState("all");
	const [currentPage, setCurrentPage] = useState(1);

	const filteredItems = filterMaterials(MATERIAL_ITEMS, activeTab);
	const totalCount = filteredItems.length;
	const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
	const paginatedItems = filteredItems.slice(
		(currentPage - 1) * ITEMS_PER_PAGE,
		currentPage * ITEMS_PER_PAGE,
	);

	function handleTabChange(tab: string) {
		setActiveTab(tab);
		setCurrentPage(1);
	}

	function handleAddNew() {
		navigate({ to: "/collabration/inventory/add" });
	}

	return (
		<div className="flex flex-col bg-background">
			<main className="flex-1">
				<div className="page-wrap py-4">
					{/* Header */}
					<div className="flex items-start justify-between mb-2">
						<div>
							<h1 className="text-headline-md font-extrabold text-on-surface">
								Quản lý Phụ liệu
							</h1>
							<p className="text-body-lg text-on-surface-variant mt-1 max-w-lg">
								Danh mục chi tiết các phụ liệu sản xuất, phụ kiện may mặc và vật
								tư đóng gói cho các đơn hàng hiện tại.
							</p>
						</div>
						<Button
							type="button"
							className="gap-2"
							size="sm"
							onClick={handleAddNew}
						>
							<Plus className="size-4" />
							Thêm vật tư mới
						</Button>
					</div>

					{/* Stats */}
					<div className="mt-4">
						<InventoryStats />
					</div>

					{/* Filters */}
					<InventoryFilters
						activeTab={activeTab}
						onTabChange={handleTabChange}
					/>

					{/* Table */}
					<InventoryTable
						items={paginatedItems}
						totalCount={totalCount}
						currentPage={currentPage}
						totalPages={totalPages}
						onPageChange={setCurrentPage}
					/>

					{/* Suppliers */}
					<InventorySuppliers />
				</div>
			</main>
		</div>
	);
}
