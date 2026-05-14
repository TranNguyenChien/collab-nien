import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFabricAddForm } from "@/features/collabration/accessories/hooks/use-fabric-add-form";
import type { TFabricAddSchema } from "@/features/collabration/accessories/schema";
import { FabricComponentsTable } from "./form/fabric-components-table";
import { FabricInfoSection } from "./form/fabric-info-section";

interface FabricAddFormProps {
	onCancel: () => void;
	onSubmit: (data: TFabricAddSchema) => void;
}

export function FabricForm({ onCancel, onSubmit }: FabricAddFormProps) {
	const { form } = useFabricAddForm(onSubmit);

	return (
		<form.AppForm>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					form.handleSubmit();
				}}
			>
				<div className="space-y-8 mb-6">
					<FabricInfoSection />
					<FabricComponentsTable />
				</div>

				{/* Sticky footer */}
				<form.Subscribe
					selector={(state) => ({
						components: state.values.components,
						isSubmitting: state.isSubmitting,
						canSubmit: state.canSubmit,
						isDirty: state.isDirty,
					})}
					children={({ components, isSubmitting, canSubmit, isDirty }) => {
						const totalPrice = components.reduce(
							(sum, row) => sum + (row.pricePerMeter ?? 0),
							0,
						);

						return (
							<div className="sticky bottom-2 bg-surface-container-highest rounded-lg shadow p-4 flex items-center justify-between gap-4">
								<div>
									<p className="text-label-sm text-on-surface-variant uppercase tracking-wide">
										Tổng định mức ước tính
									</p>
									<p className="text-2xl font-extrabold text-on-surface mt-0.5">
										{totalPrice.toLocaleString("vi-VN")}{" "}
										<span className="text-sm font-normal text-on-surface-variant">
											VNĐ/m
										</span>
									</p>
								</div>
								<div className="flex items-center gap-3 shrink-0">
									<Button
										type="button"
										variant="ghost"
										size="default"
										onClick={onCancel}
									>
										Hủy bỏ
									</Button>
									<Button
										type="submit"
										size="sm"
										disabled={!canSubmit || isSubmitting || !isDirty}
									>
										{isSubmitting ? (
											<Loader2 className="animate-spin" />
										) : (
											"Lưu nguyên liệu"
										)}
									</Button>
								</div>
							</div>
						);
					}}
				/>
			</form>
		</form.AppForm>
	);
}
