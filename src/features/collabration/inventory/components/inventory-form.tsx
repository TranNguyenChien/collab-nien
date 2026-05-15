import { Loader2 } from "lucide-react";
import type { FC } from "react";
import { Button } from "@/components/ui/button";
import { MATERIAL_TYPE_OPTIONS } from "@/features/collabration/inventory/constant";
import { useMaterialForm } from "@/features/collabration/inventory/hooks/use-add-material-form";
import type { TMaterialSchema } from "@/features/collabration/inventory/schema";

interface FormContentProps {
	onSubmit: (data: TMaterialSchema) => void;
	defaultValues?: TMaterialSchema;
	onCancel?: () => void;
}

const InventoryForm: FC<FormContentProps> = ({
	defaultValues,
	onCancel,
	onSubmit,
}) => {
	const { form } = useMaterialForm(onSubmit, defaultValues);
	return (
		<form.AppForm>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					form.handleSubmit();
				}}
			>
				<div className="space-y-6 mb-6">
					{MATERIAL_TYPE_OPTIONS.map((item) => {
						return (
							<div key={item.label}>
								<div className="flex items-center gap-2">
									<item.icon className="size-5 text-primary" />
									<h3 className="font-heading font-bold text-primary text-2xl">
										{item.label}
									</h3>
								</div>
								<p className="mt-2 mb-6 text-sm">{item.description}</p>
								<div className="bg-surface-container-lowest p-6 rounded-lg shadow">
									<item.component />
								</div>
							</div>
						);
					})}
				</div>

				<div className="sticky bottom-2 bg-surface-container-highest rounded-lg shadow p-4 flex items-center justify-between gap-4">
					<p className="text-body-sm text-on-surface-variant">
						Tất cả thông tin sẽ được mã hóa và lưu bảo mật theo tiêu chuẩn của
						NIÉN.
					</p>
					<div className="flex items-center gap-3 shrink-0">
						<Button
							type="button"
							variant="ghost"
							size="default"
							onClick={onCancel}
						>
							Hủy bỏ
						</Button>
						<form.Subscribe
							selector={(state) => ({
								isSubmitting: state.isSubmitting,
								canSubmit: state.canSubmit,
								isDirty: state.isDirty,
							})}
							children={({ isSubmitting, canSubmit, isDirty }) => (
								<Button
									type="submit"
									size="sm"
									disabled={!canSubmit || isSubmitting || !isDirty}
								>
									{isSubmitting ? (
										<Loader2 className="animate-spin" />
									) : (
										"Lưu thông tin"
									)}
								</Button>
							)}
						/>
					</div>
				</div>
			</form>
		</form.AppForm>
	);
};

export default InventoryForm;
