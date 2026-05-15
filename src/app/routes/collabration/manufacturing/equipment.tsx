import { useNavigate } from "@tanstack/react-router";
import { Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EquipmentFacilities } from "@/features/collabration/manufacturing/components/equipment-facilities";
import { EquipmentPerformanceQuality } from "@/features/collabration/manufacturing/components/equipment-performance-quality";
import { EquipmentQcProcess } from "@/features/collabration/manufacturing/components/equipment-qc-process";
import { FACTORY_NAME } from "@/features/collabration/manufacturing/constant";
import { useEquipmentForm } from "@/features/collabration/manufacturing/hooks/use-equipment-form";

export function EquipmentPage() {
	const navigate = useNavigate();
	const { form } = useEquipmentForm();

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
							Thiết bị &amp; Chất lượng
						</h1>
						<p className="text-body-md text-on-surface-variant mt-2">
							Vui lòng cung cấp thông tin chi tiết về năng lực sản xuất và tiêu
							chuẩn kiểm soát chất lượng tại xưởng của bạn để tối ưu hóa quy
							trình vận hành.
						</p>
					</header>

					<form
						onSubmit={(e) => {
							e.preventDefault();
							form.handleSubmit();
						}}
						className="flex flex-col gap-8"
					>
						<EquipmentFacilities form={form} />

						<EquipmentPerformanceQuality form={form} />

						<EquipmentQcProcess form={form} />

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
