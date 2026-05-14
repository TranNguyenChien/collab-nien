import { useNavigate } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FabricsStats } from "@/features/collabration/accessories/components/fabrics-stats";
import { FabricsTable } from "@/features/collabration/accessories/components/fabrics-table";
import {
	FABRIC_ITEMS,
	ITEMS_PER_PAGE,
} from "@/features/collabration/accessories/constant";
import type { Fabric } from "@/types/material";

function paginateFabrics(items: Fabric[], page: number): Fabric[] {
	return items.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);
}

export function CollabAccessoriesPage() {
	const navigate = useNavigate();
	const [currentPage, setCurrentPage] = useState(1);

	const totalCount = FABRIC_ITEMS.length;
	const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
	const paginatedItems = paginateFabrics(FABRIC_ITEMS, currentPage);

	return (
		<div className="flex flex-col bg-background">
			<main className="flex-1">
				<div className="page-wrap py-4">
					{/* Header */}
					<div className="flex items-start justify-between mb-6">
						<div>
							<h1 className="text-headline-md font-extrabold text-on-surface">
								Quản lý Nguyên liệu
							</h1>
							<p className="text-body-lg text-on-surface-variant mt-1 max-w-lg">
								Cập nhật và theo dõi danh mục vật tư sản xuất của xưởng.
							</p>
						</div>
						<div className="flex items-center gap-3">
							<Button
								size="sm"
								className="gap-2"
								onClick={() =>
									navigate({ to: "/collabration/accessories/add" })
								}
							>
								<Plus className="size-4" />
								Thêm nguyên liệu mới
							</Button>
						</div>
					</div>

					{/* Table */}
					<FabricsTable
						items={paginatedItems}
						totalCount={totalCount}
						currentPage={currentPage}
						totalPages={totalPages}
						onPageChange={setCurrentPage}
					/>

					{/* Stats */}
					<div className="mt-6">
						<FabricsStats />
					</div>
				</div>
			</main>
		</div>
	);
}
