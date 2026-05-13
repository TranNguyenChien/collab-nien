import { useNavigate } from "@tanstack/react-router";
import InventoryForm from "@/features/collabration/inventory/components/inventory-form";

export function AddInventoryPage() {
	const navigate = useNavigate();

	function handleCancel() {
		navigate({ to: "/collabration/inventory" });
	}

	return (
		<div className="min-h-screen flex flex-col bg-background">
			<main className="flex-1">
				<div className="page-wrap py-4">
					{/* Header */}
					<div className="mb-6">
						<h1 className="text-headline-md font-extrabold text-on-surface">
							Thêm Phụ Liệu Mới
						</h1>
						<p className="text-body-lg text-on-surface-variant mt-1 max-w-2xl">
							Đăng ký thông tin kỹ thuật chi tiết cho các phụ liệu mới trong
							chuỗi cung ứng Merino. Thông tin này sẽ được sử dụng cho mục tiêu
							sản xuất và quản lý kho.
						</p>
					</div>

					{/* Form */}
					<InventoryForm
						onCancel={handleCancel}
						onSubmit={(data) => {
							console.log(data);
						}}
					/>
				</div>
			</main>
		</div>
	);
}
