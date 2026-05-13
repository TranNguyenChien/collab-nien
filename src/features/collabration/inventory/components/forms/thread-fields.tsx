import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useMaterialFormContext } from "@/features/collabration/inventory/hooks/use-add-material-form";
import type { TColorRow } from "@/features/collabration/inventory/schema";

export function ThreadFields() {
	const form = useMaterialFormContext();
	return (
		<div className="grid grid-cols-1 gap-6">
			{/* Row 1 */}
			<div className="grid grid-cols-3 gap-6">
				<form.Field
					name="sewing_thread.threadType"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Loại Chỉ May
							</FieldLabel>
							<Select
								value={field.state.value ?? ""}
								onValueChange={(val) => {
									if (val !== null) field.handleChange(val);
								}}
							>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Spun Polyester" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="s-twist">S-Twist</SelectItem>
									<SelectItem value="z-twist">Z-Twist</SelectItem>
								</SelectContent>
							</Select>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
				<form.Field
					name="sewing_thread.tex"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Tex
							</FieldLabel>
							<div className="flex items-center gap-2">
								<Input
									placeholder="27 / kt"
									value={field.state.value ?? ""}
									onChange={(e) => field.handleChange(e.target.value)}
									onBlur={field.handleBlur}
								/>
								<p className="text-sm font-bold">/TKT</p>
								<Input
									placeholder="27 / kt"
									value={field.state.value ?? ""}
									onChange={(e) => field.handleChange(e.target.value)}
									onBlur={field.handleBlur}
								/>
							</div>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
				<form.Field
					name="sewing_thread.brand"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Thương Hiệu / Brand
							</FieldLabel>
							<Input
								placeholder="Coats, A&C, Amann"
								value={field.state.value ?? ""}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
							/>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
			</div>

			{/* Row 2 */}
			<div className="grid grid-cols-2 gap-6">
				<form.Field
					name="sewing_thread.material"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Material (%)
							</FieldLabel>
							{field.state.value.map((item: string, index: number) => (
								<form.Field
									key={item + index}
									name={`sewing_thread.material[${index}]`}
									children={(subField) => {
										return (
											<div className="flex items-center gap-1">
												<Select
													value={field.state.value[index] ?? ""}
													onValueChange={(val) => {
														if (val !== null) subField.handleChange(val);
													}}
												>
													<SelectTrigger className="w-full">
														<SelectValue placeholder="Chọn type" />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value="s-twist">S-Twist</SelectItem>
														<SelectItem value="z-twist">Z-Twist</SelectItem>
													</SelectContent>
												</Select>
												<Button
													type="button"
													variant="ghost"
													onClick={() => {
														const current = field.state.value;
														if (current.length > 1) {
															field.removeValue(index);
														}
													}}
													disabled={field.state.value.length <= 1}
													size="icon-lg"
													aria-label="Xóa dòng"
												>
													<Trash2 className="size-5" />
												</Button>
											</div>
										);
									}}
								/>
							))}
							<Button
								variant="outline"
								className="border border-dashed"
								size="sm"
								onClick={() => {
									field.pushValue("");
								}}
							>
								<Plus className="size-4" />
								Thêm material
							</Button>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
				<form.Field
					name="sewing_thread.twist"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Type
							</FieldLabel>
							<Select
								value={field.state.value ?? ""}
								onValueChange={(val) => {
									if (val !== null) field.handleChange(val);
								}}
							>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Chọn type" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="s-twist">S-Twist</SelectItem>
									<SelectItem value="z-twist">Z-Twist</SelectItem>
								</SelectContent>
							</Select>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
			</div>

			{/* Color table */}
			<form.Field
				name="sewing_thread.colorTable"
				mode="array"
				children={(field) => (
					<Field>
						<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
							Bảng Màu (Color Table)
						</FieldLabel>
						<div className="rounded-lg overflow-hidden">
							<div className="grid grid-cols-[1fr_1fr_1fr_auto] bg-accent px-3 py-5 gap-3">
								<span className="text-label-sm font-semibold text-on-surface-variant uppercase">
									MÀU (VN/EN)
								</span>
								<span className="text-label-sm font-semibold text-on-surface-variant uppercase">
									MÃ MÀU (CODE)
								</span>
								<span className="text-label-sm font-semibold text-on-surface-variant uppercase">
									HẬU TỐ (SUFFIX)
								</span>
								<span className="w-8" />
							</div>
							{(field.state.value as TColorRow[]).map(
								(_: TColorRow, index: number) => (
									<div
										key={`color-row-${index}`}
										className="grid grid-cols-[1fr_1fr_1fr_auto] p-3 gap-3 items-center"
									>
										<form.Field
											name={`sewing_thread.colorTable[${index}].pantone`}
											children={(subField) => (
												<Input
													placeholder="Pantone"
													value={subField.state.value}
													onChange={(e) =>
														subField.handleChange(e.target.value)
													}
													className="h-8"
												/>
											)}
										/>
										<form.Field
											name={`sewing_thread.colorTable[${index}].colorCode`}
											children={(subField) => (
												<Input
													placeholder="#FF9999"
													value={subField.state.value}
													onChange={(e) =>
														subField.handleChange(e.target.value)
													}
													className="h-8"
												/>
											)}
										/>
										<form.Field
											name={`sewing_thread.colorTable[${index}].colorRef`}
											children={(subField) => (
												<Input
													placeholder="G12"
													value={subField.state.value}
													onChange={(e) =>
														subField.handleChange(e.target.value)
													}
													className="h-8"
												/>
											)}
										/>
										<Button
											type="button"
											onClick={() => {
												const current = field.state.value as TColorRow[];
												if (current.length > 1) {
													field.removeValue(index);
												}
											}}
											disabled={(field.state.value as TColorRow[]).length <= 1}
											size="icon"
											aria-label="Xóa dòng"
										>
											<Trash2 className="size-3.5" />
										</Button>
									</div>
								),
							)}
							<div className="px-3 py-2 bg-primary/30 flex items-center justify-center">
								<Button
									type="button"
									variant="ghost"
									onClick={() => {
										field.pushValue({
											pantone: "",
											colorCode: "",
											colorRef: "",
										});
									}}
								>
									<Plus className="size-3.5" />
									Thêm dòng mới
								</Button>
							</div>
						</div>
					</Field>
				)}
			/>

			{/* Row 4 */}
			<div className="grid grid-cols-2 gap-6">
				<form.Field
					name="sewing_thread.stitchType"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Mũi May
							</FieldLabel>
							<Select
								value={field.state.value ?? ""}
								onValueChange={(val) => {
									if (val !== null) field.handleChange(val);
								}}
							>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Chọn type" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="s-twist">S-Twist</SelectItem>
									<SelectItem value="z-twist">Z-Twist</SelectItem>
								</SelectContent>
							</Select>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
				<form.Field
					name="sewing_thread.machineType"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Loại Máy
							</FieldLabel>
							<Select
								value={field.state.value ?? ""}
								onValueChange={(val) => {
									if (val !== null) field.handleChange(val);
								}}
							>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Chọn type" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="s-twist">S-Twist</SelectItem>
									<SelectItem value="z-twist">Z-Twist</SelectItem>
								</SelectContent>
							</Select>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
			</div>

			{/* Row 5 */}
			<div className="grid grid-cols-4 gap-6 border-t border-surface-container-high pt-4">
				<form.Field
					name="sewing_thread.wastePercent"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Hao Hụt %
							</FieldLabel>
							<Input
								placeholder="5%"
								value={field.state.value ?? ""}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
							/>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
				<form.Field
					name="sewing_thread.leadTime"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Thời Gian Chuẩn Bị
							</FieldLabel>
							<Input
								placeholder="1-10 ngày"
								value={field.state.value ?? ""}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
							/>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
				<form.Field
					name="sewing_thread.unit"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Đơn Vị
							</FieldLabel>
							<Select
								value={field.state.value ?? ""}
								onValueChange={(val) => {
									if (val !== null) field.handleChange(val);
								}}
							>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Chọn type" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="s-twist">S-Twist</SelectItem>
									<SelectItem value="z-twist">Z-Twist</SelectItem>
								</SelectContent>
							</Select>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
				<form.Field
					name="sewing_thread.price"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Giá / Đơn Vị
							</FieldLabel>
							<Input
								type="number"
								placeholder="33,000"
								value={field.state.value === 0 ? "" : field.state.value}
								onChange={(e) => field.handleChange(Number(e.target.value))}
								onBlur={field.handleBlur}
							/>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
			</div>

			{/* Row 6 */}
			<form.Field
				name="sewing_thread.note"
				children={(field) => (
					<Field>
						<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
							Ghi chú
						</FieldLabel>
						<Textarea
							placeholder="Yêu cầu về độ bền đứt, độ đàn hồi..."
							value={field.state.value ?? ""}
							onChange={(e) => field.handleChange(e.target.value)}
							onBlur={field.handleBlur}
							rows={3}
							className="resize-none"
						/>
						<FieldError errors={field.state.meta.errors} />
					</Field>
				)}
			/>
		</div>
	);
}
