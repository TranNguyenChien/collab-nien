import { useNavigate } from "@tanstack/react-router";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OperationsMoq } from "@/features/collabration/manufacturing/components/operations-moq";
import { OperationsPaymentTerms } from "@/features/collabration/manufacturing/components/operations-payment-terms";
import { OperationsPriceSegment } from "@/features/collabration/manufacturing/components/operations-price-segment";
import { OperationsTimeSection } from "@/features/collabration/manufacturing/components/operations-time-section";
import { FACTORY_NAME } from "@/features/collabration/manufacturing/constant";
import { useOperationsForm } from "@/features/collabration/manufacturing/hooks/use-operations-form";

export function OperationsPage() {
	const navigate = useNavigate();
	const { form } = useOperationsForm();

	function handleSaveDraft() {
		console.log("Lưu nháp", form.state.values);
	}

	return (
		<div className="flex flex-col bg-background">
			{/* Hero header */}
			<div className="relative overflow-hidden bg-[#2a1a0d] min-h-[160px] flex items-end">
				<div
					className="absolute inset-0 opacity-30"
					style={{
						backgroundImage:
							"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
						backgroundSize: "200px 200px",
					}}
				/>
				<div className="relative page-wrap py-8 w-full">
					<p className="text-label-xs font-bold text-amber-400/70 uppercase tracking-widest mb-2">
						Hệ thống quản trị đối tác
					</p>
					<h1 className="text-4xl font-bold uppercase text-white tracking-wide mb-2">
						Vận hành &amp; Độ tin cậy
					</h1>
					<p className="text-body-sm text-white/60 max-w-xl">
						Cập nhật dữ liệu năng lực sản xuất cho{" "}
						<span className="font-semibold text-white/80">{FACTORY_NAME}</span>.
						Quy trình chuẩn hóa nhằm tối ưu hiệu suất cung ứng.
					</p>
				</div>
			</div>

			<main className="flex-1">
				<div className="page-wrap py-8">
					<form
						onSubmit={(e) => {
							e.preventDefault();
							form.handleSubmit();
						}}
						className="flex flex-col gap-8"
					>
						<OperationsTimeSection form={form} />
						<OperationsMoq form={form} />
						<OperationsPriceSegment form={form} />
						<OperationsPaymentTerms form={form} />

						<div className="flex items-center justify-end gap-3 p-4 bg-surface-container-lowest shadow rounded-lg sticky bottom-2">
							<Button
								type="button"
								variant="ghost"
								size="sm"
								onClick={handleSaveDraft}
							>
								Lưu nháp
							</Button>
							<Button
								type="submit"
								size="sm"
								className="gap-1.5"
								onClick={() => navigate({ to: "/collabration/manufacturing" })}
							>
								<Send className="size-4" />
								Gửi phê duyệt
							</Button>
						</div>
					</form>
				</div>
			</main>
		</div>
	);
}
