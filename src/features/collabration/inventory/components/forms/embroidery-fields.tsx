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

export function EmbroideryFields() {
	const form = useMaterialFormContext();
	return (
		<div className="grid grid-cols-1 gap-6">
			{/* Row 1 */}
			<div className="grid grid-cols-3 gap-6">
				<form.Field
					name="embroidery.threadType"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Loại Chỉ Thêu
							</FieldLabel>
							<Select
								value={field.state.value ?? ""}
								onValueChange={(val) => {
									if (val !== null) field.handleChange(val);
								}}
							>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Chọn độ bóng" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="matte">Matte</SelectItem>
									<SelectItem value="semi-gloss">Semi Gloss</SelectItem>
									<SelectItem value="high-gloss">High Gloss</SelectItem>
								</SelectContent>
							</Select>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
				<form.Field
					name="embroidery.texWeight"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Tex / Weight
							</FieldLabel>
							<Input
								placeholder="40 / 120D"
								value={field.state.value ?? ""}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
							/>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
				<form.Field
					name="embroidery.brand"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Thương Hiệu (Brand)
							</FieldLabel>
							<Input
								placeholder="Madeira, Gunold, Sulky"
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
			<div className="grid grid-cols-3 gap-6">
				<form.Field
					name="embroidery.material"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Material (%)
							</FieldLabel>
							<Select
								value={field.state.value ?? ""}
								onValueChange={(val) => {
									if (val !== null) field.handleChange(val);
								}}
							>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Chọn độ bóng" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="matte">Matte</SelectItem>
									<SelectItem value="semi-gloss">Semi Gloss</SelectItem>
									<SelectItem value="high-gloss">High Gloss</SelectItem>
								</SelectContent>
							</Select>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
				<form.Field
					name="embroidery.colorType"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Loại Màu
							</FieldLabel>
							<Select
								value={field.state.value ?? ""}
								onValueChange={(val) => {
									if (val !== null) field.handleChange(val);
								}}
							>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Chọn độ bóng" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="matte">Matte</SelectItem>
									<SelectItem value="semi-gloss">Semi Gloss</SelectItem>
									<SelectItem value="high-gloss">High Gloss</SelectItem>
								</SelectContent>
							</Select>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
				<form.Field
					name="embroidery.shineGrade"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Độ Bóng
							</FieldLabel>
							<Select
								value={field.state.value ?? ""}
								onValueChange={(val) => {
									if (val !== null) field.handleChange(val);
								}}
							>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Chọn độ bóng" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="matte">Matte</SelectItem>
									<SelectItem value="semi-gloss">Semi Gloss</SelectItem>
									<SelectItem value="high-gloss">High Gloss</SelectItem>
								</SelectContent>
							</Select>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
			</div>

			{/* Row 3 */}
			<div className="grid grid-cols-2 gap-6">
				<form.Field
					name="embroidery.stitchType"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Mũi May
							</FieldLabel>
							<Input
								placeholder="Satin / Fill / Running"
								value={field.state.value ?? ""}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
							/>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
				<form.Field
					name="embroidery.machineType"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Loại Máy
							</FieldLabel>
							<Input
								placeholder="Multi-head Embroidery"
								value={field.state.value ?? ""}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
							/>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
			</div>

			{/* Row 5 */}
			<div className="grid grid-cols-4 gap-6 border-t border-surface-container-high pt-4">
				<form.Field
					name="embroidery.wastePercent"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Hao Hụt %
							</FieldLabel>
							<Input
								placeholder="10%"
								value={field.state.value ?? ""}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
							/>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
				<form.Field
					name="embroidery.leadTime"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Thời Gian Chuẩn Bị
							</FieldLabel>
							<Input
								placeholder="15-30 ngày"
								value={field.state.value ?? ""}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
							/>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
				<form.Field
					name="embroidery.unit"
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
									<SelectValue placeholder="Chọn độ bóng" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="matte">Matte</SelectItem>
									<SelectItem value="semi-gloss">Semi Gloss</SelectItem>
									<SelectItem value="high-gloss">High Gloss</SelectItem>
								</SelectContent>
							</Select>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
				<form.Field
					name="embroidery.price"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Giá / Đơn Vị
							</FieldLabel>
							<Input
								type="number"
								placeholder="46,000"
								value={field.state.value === 0 ? "" : field.state.value}
								onChange={(e) => field.handleChange(Number(e.target.value))}
								onBlur={field.handleBlur}
							/>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
			</div>
			<form.Field
				name="embroidery.note"
				children={(field) => (
					<Field>
						<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
							Ghi chú
						</FieldLabel>
						<Textarea
							placeholder="Mật độ chỉ, độ căng thêu khuyến nghị..."
							value={field.state.value ?? ""}
							onChange={(e) => field.handleChange(e.target.value)}
							className="resize-none"
						/>
						<FieldError errors={field.state.meta.errors} />
					</Field>
				)}
			/>
		</div>
	);
}
