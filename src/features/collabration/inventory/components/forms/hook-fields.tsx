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

export function HookFields() {
	const form = useMaterialFormContext();
	return (
		<div className="grid grid-cols-1 gap-6">
			<div className="grid grid-cols-3 gap-6">
				<form.Field
					name="hook_clasp.productName"
					children={(field) => (
						<Field className="col-span-2">
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Tên Sản Phẩm
							</FieldLabel>
							<Input
								placeholder="Móc carbon loại chống ăn mòn ký"
								value={field.state.value ?? ""}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
							/>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
				<form.Field
					name="hook_clasp.brand"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Thương Hiệu
							</FieldLabel>
							<Input
								placeholder="Nhà cung cấp"
								value={field.state.value ?? ""}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
							/>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
			</div>

			<div className="grid grid-cols-3 gap-6">
				<form.Field
					name="hook_clasp.sizeDimension"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Size / Kích Thước
							</FieldLabel>
							<Input
								placeholder="38mm / Small / Medium"
								value={field.state.value ?? ""}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
							/>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
				<form.Field
					name="hook_clasp.rowsColumns"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Số Lượng / Số Hộc
							</FieldLabel>
							<Input
								placeholder="2 hàng 3 hộc"
								value={field.state.value ?? ""}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
							/>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
				<form.Field
					name="hook_clasp.colorFinish"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Màu / Hoàn Thiện
							</FieldLabel>
							<Input
								placeholder="Silver / Gold / Rose Gold"
								value={field.state.value ?? ""}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
							/>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
			</div>

			<form.Field
				name="hook_clasp.description"
				children={(field) => (
					<Field>
						<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
							Mô Tả Đặc Điểm Kỹ Thuật
						</FieldLabel>
						<Textarea
							placeholder="Ghi chú về kiểu dáng, yêu cầu đặc biệt và để liêu..."
							value={field.state.value ?? ""}
							onChange={(e) => field.handleChange(e.target.value)}
							onBlur={field.handleBlur}
							rows={3}
							className="w-full rounded-lg border border-input bg-white px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
						/>
						<FieldError errors={field.state.meta.errors} />
					</Field>
				)}
			/>

			<div className="grid grid-cols-3 gap-6 border-t border-surface-container-high pt-4">
				<form.Field
					name="hook_clasp.leadTime"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Thời Gian Chuẩn Bị
							</FieldLabel>
							<Input
								placeholder="12 ngày"
								value={field.state.value ?? ""}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
							/>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
				<form.Field
					name="hook_clasp.segment"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Phân Khúc
							</FieldLabel>
							<Select
								value={field.state.value ?? ""}
								onValueChange={(val) => {
									if (val !== null) field.handleChange(val);
								}}
							>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Chọn phân khúc" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="economy">Economy</SelectItem>
									<SelectItem value="standard">Standard</SelectItem>
									<SelectItem value="premium">Premium</SelectItem>
									<SelectItem value="luxury">Luxury</SelectItem>
								</SelectContent>
							</Select>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
				<form.Field
					name="hook_clasp.price"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Giá (VND/CÁI)
							</FieldLabel>
							<Input
								type="number"
								placeholder="4,200"
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
