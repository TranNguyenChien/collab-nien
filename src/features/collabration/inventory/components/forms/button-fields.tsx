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

export function ButtonFields() {
	const form = useMaterialFormContext();
	return (
		<div className="grid grid-cols-1 gap-6">
			{/* Row 1 */}
			<div className="grid grid-cols-3 gap-6">
				<form.Field
					name="button_snap.productName"
					children={(field) => {
						const inValid = field.state.meta.isValid;
						return (
							<Field className="col-span-2">
								<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
									Tên Sản Phẩm
								</FieldLabel>
								<Input
									placeholder="Cúc sừng 4 lỗ tự nhiên"
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
					name="button_snap.material"
					children={(field) => {
						const inValid = field.state.meta.isValid;
						return (
							<Field>
								<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
									Vật Liệu
								</FieldLabel>
								<Input
									placeholder="Sừng, Gỗ, Nhựa, Kim loại..."
									value={field.state.value ?? ""}
									onChange={(e) => field.handleChange(e.target.value)}
									onBlur={field.handleBlur}
								/>
								{inValid && <FieldError errors={field.state.meta.errors} />}
							</Field>
						);
					}}
				/>
			</div>

			{/* Row 2 */}
			<div className="grid grid-cols-4 gap-6">
				<form.Field
					name="button_snap.size"
					children={(field) => {
						const inValid = field.state.meta.isValid;
						return (
							<Field>
								<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
									SIZE (LIGNE)
								</FieldLabel>
								<Input
									placeholder="18, 24, 32..."
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
					name="button_snap.diameter"
					children={(field) => {
						const inValid = field.state.meta.isValid;
						return (
							<Field>
								<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
									Đường Kính (mm)
								</FieldLabel>
								<Input
									placeholder="0.5mm, 1mm..."
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
					name="button_snap.buttonType"
					children={(field) => {
						const inValid = field.state.meta.isValid;
						return (
							<Field>
								<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
									Kiểu Nút
								</FieldLabel>
								<Select
									value={field.state.value ?? ""}
									onValueChange={(val) => {
										if (val !== null) field.handleChange(val);
									}}
								>
									<SelectTrigger className="w-full">
										<SelectValue placeholder="4 lỗ" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="economy">Economy</SelectItem>
										<SelectItem value="standard">Standard</SelectItem>
										<SelectItem value="premium">Premium</SelectItem>
										<SelectItem value="luxury">Luxury</SelectItem>
									</SelectContent>
								</Select>
								{inValid && <FieldError errors={field.state.meta.errors} />}
							</Field>
						);
					}}
				/>
				<form.Field
					name="button_snap.thickness"
					children={(field) => {
						const inValid = field.state.meta.isValid;
						return (
							<Field>
								<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
									Độ Dày
								</FieldLabel>
								<Input
									placeholder="2mm, 3.5mm..."
									value={field.state.value ?? ""}
									onChange={(e) => field.handleChange(e.target.value)}
									onBlur={field.handleBlur}
								/>
								{inValid && <FieldError errors={field.state.meta.errors} />}
							</Field>
						);
					}}
				/>
			</div>

			{/* Row 3 */}
			<div className="grid grid-cols-3 gap-6">
				<form.Field
					name="button_snap.pantoneColor"
					children={(field) => {
						const inValid = field.state.meta.isValid;
						return (
							<Field>
								<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
									Pantone / Màu Sắc
								</FieldLabel>
								<Input
									placeholder="Pantone 19-4052TCX"
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
					name="button_snap.finish"
					children={(field) => {
						const inValid = field.state.meta.isValid;
						return (
							<Field>
								<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
									Finish (Hoàn Thiện)
								</FieldLabel>
								<Input
									placeholder="Matt, Glossy, Antique..."
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
					name="button_snap.brand"
					children={(field) => {
						const inValid = field.state.meta.isValid;
						return (
							<Field>
								<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
									Thương Hiệu
								</FieldLabel>
								<Input
									placeholder="TonNCC / Grand"
									value={field.state.value ?? ""}
									onChange={(e) => field.handleChange(e.target.value)}
									onBlur={field.handleBlur}
								/>
								{inValid && <FieldError errors={field.state.meta.errors} />}
							</Field>
						);
					}}
				/>
			</div>

			{/* Row 4 */}
			<div className="grid grid-cols-3 gap-6 border-t border-surface-container-high pt-4">
				<form.Field
					name="button_snap.leadTime"
					children={(field) => {
						const inValid = field.state.meta.isValid;
						return (
							<Field>
								<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
									Thời Gian Chuẩn Bị
								</FieldLabel>
								<Input
									placeholder="10 ngày"
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
					name="button_snap.segment"
					children={(field) => {
						const inValid = field.state.meta.isValid;
						return (
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
								{inValid && <FieldError errors={field.state.meta.errors} />}
							</Field>
						);
					}}
				/>
				<form.Field
					name="button_snap.price"
					children={(field) => {
						const inValid = field.state.meta.isValid;
						return (
							<Field>
								<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
									Giá (VND/GROSS)
								</FieldLabel>
								<Input
									type="number"
									placeholder="160,000"
									value={field.state.value === 0 ? "" : field.state.value}
									onChange={(e) => field.handleChange(Number(e.target.value))}
									onBlur={field.handleBlur}
								/>
								{inValid && <FieldError errors={field.state.meta.errors} />}
							</Field>
						);
					}}
				/>
			</div>
		</div>
	);
}
