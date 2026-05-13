import type {} from "@tanstack/react-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useMaterialFormContext } from "@/features/collabration/inventory/hooks/use-add-material-form";

export function ElasticFields() {
	const form = useMaterialFormContext();
	return (
		<div className="grid grid-cols-1 gap-6">
			{/* Row 1 */}
			<div className="grid grid-cols-3 gap-6">
				<form.Field
					name="elastic_bias.productName"
					children={(field) => (
						<Field className="col-span-2">
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Tên Sản Phẩm
							</FieldLabel>
							<Input
								placeholder="Dây thun dệt kim mặc/cotton"
								value={field.state.value ?? ""}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
							/>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
				<form.Field
					name="elastic_bias.composition"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Thành Phần (%)
							</FieldLabel>
							<Input
								placeholder="70% Cotton / 30% Spandex"
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
			<div className="grid grid-cols-4 gap-6">
				<form.Field
					name="elastic_bias.width"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Rộng (mm)
							</FieldLabel>
							<Input
								placeholder="22mm, 35mm..."
								value={field.state.value ?? ""}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
							/>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
				<form.Field
					name="elastic_bias.stretchPercent"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Độ Co Giãn (%)
							</FieldLabel>
							<Input
								placeholder="150%, 200%..."
								value={field.state.value ?? ""}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
							/>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
				<form.Field
					name="elastic_bias.foldType"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Kiểu Dây
							</FieldLabel>
							<Select
								value={field.state.value ?? ""}
								onValueChange={(val) => {
									if (val !== null) field.handleChange(val);
								}}
							>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Chọn kiểu" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="single-fold">Single Fold</SelectItem>
									<SelectItem value="double-fold">Double Fold</SelectItem>
									<SelectItem value="plain">Plain</SelectItem>
									<SelectItem value="ribbed">Ribbed</SelectItem>
								</SelectContent>
							</Select>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
				<form.Field
					name="elastic_bias.fabricType"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Woven / Knitted
							</FieldLabel>
							<Input
								placeholder="Woven, Knitted..."
								value={field.state.value ?? ""}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
							/>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
			</div>

			{/* Row 3 */}
			<div className="grid grid-cols-2 gap-6">
				<form.Field
					name="elastic_bias.pantone"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Pantone TCX
							</FieldLabel>
							<Input
								placeholder="Mã màu chuẩn"
								value={field.state.value ?? ""}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
							/>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
				<form.Field
					name="elastic_bias.materialType"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Loại NPL
							</FieldLabel>
							<Input
								placeholder="Bias tape / Elastic..."
								value={field.state.value ?? ""}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
							/>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
			</div>

			{/* Row 4 */}
			<div className="grid grid-cols-3 gap-6 border-t border-surface-container-high pt-4">
				<form.Field
					name="elastic_bias.wastePercent"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Hao Hụt (%)
							</FieldLabel>
							<Input
								placeholder="3% - 5%"
								value={field.state.value ?? ""}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
							/>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
				<form.Field
					name="elastic_bias.leadTime"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Thời Gian Chuẩn Bị
							</FieldLabel>
							<Input
								placeholder="7-10 ngày"
								value={field.state.value ?? ""}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
							/>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
				<form.Field
					name="elastic_bias.price"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Giá (VND/MÉT)
							</FieldLabel>
							<Input
								type="number"
								placeholder="8,500"
								value={field.state.value === 0 ? "" : field.state.value}
								onChange={(e) => field.handleChange(Number(e.target.value))}
								onBlur={field.handleBlur}
							/>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
			</div>
		</div>
	);
}
