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

export function ZipperFields() {
	const form = useMaterialFormContext();
	return (
		<div className="grid grid-cols-1 gap-6">
			{/* Row 1 */}
			<div className="grid grid-cols-3 gap-6">
				<form.Field
					name="zipper.productName"
					children={(field) => {
						const inValid = !field.state.meta.isValid;
						return (
							<Field className="col-span-2">
								<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
									Tên Sản Phẩm
								</FieldLabel>
								<Input
									placeholder="VD: Khóa đồng YKK #5 Song đề"
									value={field.state.value ?? ""}
									onChange={(e) => field.handleChange(e.target.value)}
									onBlur={field.handleBlur}
								/>
								{inValid && <FieldError errors={field.state.meta.errors} />}
							</Field>
						);
					}}
				/>
				<form.Field
					name="zipper.brand"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Thương Hiệu
							</FieldLabel>
							<Input
								placeholder="YKK, SBS, CCK..."
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
					name="zipper.zipperTypeRange"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Loại Khóa & Răng
							</FieldLabel>
							<Select
								value={field.state.value ?? ""}
								onValueChange={(val) => {
									if (val !== null) field.handleChange(val);
								}}
							>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Khóa phao" />
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
					name="zipper.size"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Size
							</FieldLabel>
							<Input
								placeholder="Metal, Nylon..."
								value={field.state.value ?? ""}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
							/>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
				<form.Field
					name="zipper.material"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Vật Liệu
							</FieldLabel>
							<Input
								placeholder="Metal, Nylon..."
								value={field.state.value ?? ""}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
							/>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
				<form.Field
					name="zipper.openClose"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								OPEN/CLOSE
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
									<SelectItem value="open-end">Open end</SelectItem>
									<SelectItem value="close-end">Close end</SelectItem>
									<SelectItem value="two-way">Two way</SelectItem>
								</SelectContent>
							</Select>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
			</div>

			{/* Row 3 */}
			<div className="grid grid-cols-3 gap-6">
				<form.Field
					name="zipper.sliderPullType"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Đầu Khóa & Kiểu Kéo
							</FieldLabel>
							<Input
								placeholder="Auto lock, Non-lock..."
								value={field.state.value ?? ""}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
							/>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
				<form.Field
					name="zipper.lengthWidth"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Chiều Dài/Rộng (CM/MM)
							</FieldLabel>
							<Input
								placeholder="60cm / 32mm"
								value={field.state.value ?? ""}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
							/>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
				<form.Field
					name="zipper.colorFinish"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Màu Dây/Răng/Slider
							</FieldLabel>
							<Input
								placeholder="Pantone TCX / Finish"
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
					name="zipper.leadTime"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Thời Gian Chuẩn Bị
							</FieldLabel>
							<Input
								placeholder="15-20 ngày"
								value={field.state.value ?? ""}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
							/>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
				<form.Field
					name="zipper.segment"
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
					name="zipper.price"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Giá (VND/Đơn Vị)
							</FieldLabel>
							<Input
								type="number"
								placeholder="75,000"
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
