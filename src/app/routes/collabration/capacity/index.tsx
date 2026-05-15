import { useNavigate } from "@tanstack/react-router";
import { Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CapacityColorBlendingTable } from "@/features/collabration/capacity/components/capacity-color-blending-table";
import { CapacityMaterialProcessingTable } from "@/features/collabration/capacity/components/capacity-material-processing-table";
import { CapacityOperationScale } from "@/features/collabration/capacity/components/capacity-operation-scale";
import { CapacityStaffInfo } from "@/features/collabration/capacity/components/capacity-staff-info";
import { useCapacityForm } from "@/features/collabration/capacity/hooks/use-capacity-form";
import { FACTORY_NAME } from "@/features/collabration/manufacturing/constant";

export function CapacityPage() {
	const navigate = useNavigate();
	const { form } = useCapacityForm();

	function handleCancel() {
		navigate({ to: "/collabration/manufacturing" });
	}

	return (
		<div className="flex flex-col bg-background">
			<main className="flex-1">
				<div className="page-wrap py-8">
					<header className="mb-10">
						<p className="text-label-sm text-on-surface-variant uppercase tracking-widest mb-1">
							{FACTORY_NAME}
						</p>
						<h1 className="text-4xl font-bold uppercase text-primary">
							Năng lực sản xuất
						</h1>
						<p className="text-body-md text-on-surface-variant mt-2">
							Hệ thống quản lý chỉ số vận hành và năng lực kỹ thuật chuyên sâu
							dành cho các đơn vị xưởng may cao cấp thuộc Atelier Group.
						</p>
					</header>

					<form
						onSubmit={(e) => {
							e.preventDefault();
							form.handleSubmit();
						}}
						className="flex flex-col gap-8"
					>
						<div className="grid grid-cols-[3fr_2fr] gap-6 items-start">
							<CapacityStaffInfo form={form} />
							<CapacityOperationScale form={form} />
						</div>

						<CapacityColorBlendingTable form={form} />

						<CapacityMaterialProcessingTable form={form} />

						<div className="flex items-center justify-end gap-3 p-4 bg-surface-container-lowest shadow rounded-lg sticky bottom-2">
							<Button
								type="button"
								variant="ghost"
								size="sm"
								onClick={handleCancel}
							>
								Hủy bỏ thay đổi
							</Button>
							<Button type="submit" size="sm" className="gap-1.5">
								<Save className="size-4" />
								Lưu
							</Button>
						</div>
					</form>
				</div>
			</main>
		</div>
	);
}
