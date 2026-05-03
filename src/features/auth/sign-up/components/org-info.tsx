import { Building2 } from "lucide-react";
import { DatePicker } from "@/components/ui/datepicker";
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
	FieldLegend,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useSignUpFormContext } from "@/features/auth/sign-up/hooks/use-sign-up-form";

const BUSINESS_TYPE_OPTIONS = [
	{ value: "tu_nhan", label: "Doanh nghiệp Tư nhân" },
	{ value: "co_phan", label: "Công ty Cổ phần" },
	{ value: "tnhh", label: "Công ty TNHH" },
	{ value: "hop_danh", label: "Công ty Hợp danh" },
	{ value: "ho_kinh_doanh", label: "Hộ kinh doanh" },
];

export function OrgInfoSection() {
	const form = useSignUpFormContext();

	return (
		<div className="bg-surface-container-lowest rounded-lg p-6 shadow">
			<FieldLegend className="flex items-center gap-4 mb-4">
				<Building2 className="size-5 text-primary" />
				<h2 className="text-xl font-bold text-on-surface font-heads uppercase">
					1. Thông tin tổ chức
				</h2>
			</FieldLegend>
			<Separator className="mb-8" />
			<FieldGroup className="grid grid-cols-2">
				<form.Field
					name="org.name"
					children={(field) => {
						const isInvalid = !field.state.meta.isValid;
						return (
							<Field data-invalid={isInvalid}>
								<FieldLabel
									htmlFor={field.name}
									className="uppercase font-bold"
								>
									Tên tổ chức / Doanh nghiệp
								</FieldLabel>
								<Input
									id={field.name}
									name={field.name}
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
									aria-invalid={isInvalid}
									placeholder="Nhập tên đầy đủ"
									autoComplete="off"
								/>
								{isInvalid && <FieldError errors={field.state.meta.errors} />}
							</Field>
						);
					}}
				/>
				<form.Field
					name="org.businessType"
					children={(field) => {
						const isInvalid = !field.state.meta.isValid;
						return (
							<Field data-invalid={isInvalid}>
								<FieldLabel
									htmlFor={field.name}
									className="uppercase font-bold"
								>
									Loại hình
								</FieldLabel>
								<Select
									value={field.state.value}
									onValueChange={(val) => field.handleChange(val ?? "")}
									onOpenChange={() => field.handleBlur()}
								>
									<SelectTrigger className="w-full h-12! bg-white">
										<SelectValue placeholder="Chọn loại hình" />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											{BUSINESS_TYPE_OPTIONS.map((item) => (
												<SelectItem key={item.value} value={item.value}>
													{item.label}
												</SelectItem>
											))}
										</SelectGroup>
									</SelectContent>
								</Select>
								{isInvalid && <FieldError errors={field.state.meta.errors} />}
							</Field>
						);
					}}
				/>
				<form.Field
					name="org.registrationLocation"
					children={(field) => {
						const isInvalid = !field.state.meta.isValid;
						return (
							<Field data-invalid={isInvalid}>
								<FieldLabel
									htmlFor={field.name}
									className="uppercase font-bold"
								>
									Nơi đăng ký kinh doanh
								</FieldLabel>
								<Input
									id={field.name}
									name={field.name}
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
									aria-invalid={isInvalid}
									placeholder="Ví dụ: Thành phố Hồ Chí Minh"
									autoComplete="off"
								/>
								{isInvalid && <FieldError errors={field.state.meta.errors} />}
							</Field>
						);
					}}
				/>
				<form.Field
					name="org.taxCode"
					children={(field) => {
						const isInvalid = !field.state.meta.isValid;
						return (
							<Field data-invalid={isInvalid}>
								<FieldLabel
									htmlFor={field.name}
									className="uppercase font-bold"
								>
									Mã số thuế
								</FieldLabel>
								<Input
									id={field.name}
									name={field.name}
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
									aria-invalid={isInvalid}
									placeholder="10 hoặc 13 chữ số"
									autoComplete="off"
								/>
								{isInvalid && <FieldError errors={field.state.meta.errors} />}
							</Field>
						);
					}}
				/>
				<form.Field
					name="org.establishedDate"
					children={(field) => {
						const isInvalid = !field.state.meta.isValid;
						return (
							<Field data-invalid={isInvalid}>
								<FieldLabel
									htmlFor={field.name}
									className="uppercase font-bold"
								>
									Ngày thành lập
								</FieldLabel>
								<DatePicker
									value={field.state.value}
									placeholder="Chọn ngày thành lập"
									onChange={(value) =>
										field.handleChange(new Date(value || ""))
									}
								/>
								{isInvalid && <FieldError errors={field.state.meta.errors} />}
							</Field>
						);
					}}
				/>
				<form.Field
					name="org.authorizationDoc"
					children={(field) => {
						const isInvalid = !field.state.meta.isValid;
						return (
							<Field data-invalid={isInvalid}>
								<FieldLabel
									htmlFor={field.name}
									className="uppercase font-bold"
								>
									Giấy tờ ủy quyền
								</FieldLabel>
								<Input
									id={field.name}
									name={field.name}
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
									aria-invalid={isInvalid}
									placeholder="Số hiệu văn bản"
									autoComplete="off"
								/>
								{isInvalid && <FieldError errors={field.state.meta.errors} />}
							</Field>
						);
					}}
				/>
				<form.Field
					name="org.address"
					children={(field) => {
						const isInvalid = !field.state.meta.isValid;
						return (
							<Field className="col-span-2" data-invalid={isInvalid}>
								<FieldLabel
									htmlFor={field.name}
									className="uppercase font-bold"
								>
									Địa chỉ
								</FieldLabel>
								<Input
									id={field.name}
									name={field.name}
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
									aria-invalid={isInvalid}
									placeholder="Tên đường, Phường, Thành phố"
									autoComplete="off"
								/>
								{isInvalid && <FieldError errors={field.state.meta.errors} />}
							</Field>
						);
					}}
				/>
			</FieldGroup>
		</div>
	);
}
