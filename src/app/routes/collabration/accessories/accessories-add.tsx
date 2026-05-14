import { useNavigate } from "@tanstack/react-router";
import { FabricForm } from "@/features/collabration/accessories/components/fabric-form";
import type { TFabricAddSchema } from "@/features/collabration/accessories/schema";

export function AddAccessoriesPage() {
	const navigate = useNavigate();

	function handleCancel() {
		navigate({ to: "/collabration/accessories" });
	}

	function handleSubmit(data: TFabricAddSchema) {
		console.log("Lưu nguyên liệu:", data);
		navigate({ to: "/collabration/accessories" });
	}

	return (
		<div className="min-h-screen flex flex-col bg-background">
			<main className="flex-1">
				<div className="page-wrap py-4">
					{/* Header */}
					<div className="mb-8">
						<h1 className="text-headline-md font-extrabold text-on-surface">
							Thêm Nguyên Liệu Mới
						</h1>
					</div>

					{/* Form */}
					<FabricForm onCancel={handleCancel} onSubmit={handleSubmit} />
				</div>
			</main>
		</div>
	);
}
