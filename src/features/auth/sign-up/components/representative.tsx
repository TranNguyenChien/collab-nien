"use client";

import { UserCheck } from "lucide-react";
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

const GENDER_OPTIONS = [
	{ value: "nam", label: "Nam" },
	{ value: "nu", label: "Nữ" },
	{ value: "khac", label: "Khác" },
];

export function RepresentativeSection() {
	const form = useSignUpFormContext();

	return (
		<div className="bg-surface-container-lowest rounded-lg p-6 shadow">
			<FieldLegend className="flex items-center gap-4 mb-4">
				<UserCheck className="size-5 text-primary" />
				<h2 className="text-xl font-bold text-on-surface font-heads uppercase">
					2. Thông tin người đại diện
				</h2>
			</FieldLegend>
			<Separator className="mb-8" />
			<FieldGroup className="grid grid-cols-3">
				<form.Field
					name="representative.fullName"
					children={(field) => {
						const isInvalid = !field.state.meta.isValid;
						return (
							<Field data-invalid={isInvalid} className="col-span-2">
								<FieldLabel
									htmlFor={field.name}
									className="uppercase font-bold"
								>
									Họ và tên
								</FieldLabel>
								<Input
									id={field.name}
									name={field.name}
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
									aria-invalid={isInvalid}
									placeholder="Nguyễn Văn A"
									autoComplete="name"
								/>
								{isInvalid && <FieldError errors={field.state.meta.errors} />}
							</Field>
						);
					}}
				/>
				<form.Field
					name="representative.position"
					children={(field) => {
						const isInvalid = !field.state.meta.isValid;
						return (
							<Field data-invalid={isInvalid}>
								<FieldLabel
									htmlFor={field.name}
									className="uppercase font-bold"
								>
									Chức vụ
								</FieldLabel>
								<Input
									id={field.name}
									name={field.name}
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
									aria-invalid={isInvalid}
									placeholder="Giám đốc / Chủ xưởng"
									autoComplete="organization-title"
								/>
								{isInvalid && <FieldError errors={field.state.meta.errors} />}
							</Field>
						);
					}}
				/>
				<form.Field
					name="representative.nationalId"
					children={(field) => {
						const isInvalid = !field.state.meta.isValid;
						return (
							<Field data-invalid={isInvalid}>
								<FieldLabel
									htmlFor={field.name}
									className="uppercase font-bold"
								>
									Số CCCD / CMND
								</FieldLabel>
								<Input
									id={field.name}
									name={field.name}
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
									aria-invalid={isInvalid}
									placeholder="12 chữ số"
									autoComplete="off"
								/>
								{isInvalid && <FieldError errors={field.state.meta.errors} />}
							</Field>
						);
					}}
				/>
				<form.Field
					name="representative.idIssueDate"
					children={(field) => {
						const isInvalid = !field.state.meta.isValid;
						return (
							<Field data-invalid={isInvalid}>
								<FieldLabel
									htmlFor={field.name}
									className="uppercase font-bold"
								>
									Ngày cấp
								</FieldLabel>
								<DatePicker
									className="w-full"
									value={field.state.value}
									placeholder="Chọn ngày cấp"
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
					name="representative.idIssuePlace"
					children={(field) => {
						const isInvalid = !field.state.meta.isValid;
						return (
							<Field data-invalid={isInvalid}>
								<FieldLabel
									htmlFor={field.name}
									className="uppercase font-bold"
								>
									Nơi cấp
								</FieldLabel>
								<Input
									id={field.name}
									name={field.name}
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
									aria-invalid={isInvalid}
									placeholder="Cục CS QLHC về TTXH"
									autoComplete="off"
								/>
								{isInvalid && <FieldError errors={field.state.meta.errors} />}
							</Field>
						);
					}}
				/>
				<form.Field
					name="representative.phone"
					children={(field) => {
						const isInvalid = !field.state.meta.isValid;
						return (
							<Field data-invalid={isInvalid}>
								<FieldLabel
									htmlFor={field.name}
									className="uppercase font-bold"
								>
									Số điện thoại
								</FieldLabel>
								<Input
									id={field.name}
									name={field.name}
									type="tel"
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
									aria-invalid={isInvalid}
									placeholder="0XXXXXXXXX"
									autoComplete="tel"
								/>
								{isInvalid && <FieldError errors={field.state.meta.errors} />}
							</Field>
						);
					}}
				/>
				<form.Field
					name="representative.dateOfBirth"
					children={(field) => {
						const isInvalid = !field.state.meta.isValid;
						return (
							<Field data-invalid={isInvalid}>
								<FieldLabel
									htmlFor={field.name}
									className="uppercase font-bold"
								>
									Ngày sinh
								</FieldLabel>
								<DatePicker
									className="w-full"
									value={field.state.value}
									placeholder="Chọn ngày sinh"
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
					name="representative.gender"
					children={(field) => {
						const isInvalid = !field.state.meta.isValid;
						return (
							<Field data-invalid={isInvalid}>
								<FieldLabel
									htmlFor={field.name}
									className="uppercase font-bold"
								>
									Giới tính
								</FieldLabel>
								<Select
									value={field.state.value}
									onValueChange={(val) => field.handleChange(val ?? "")}
									onOpenChange={() => field.handleBlur()}
								>
									<SelectTrigger className="w-full h-12! bg-white">
										<SelectValue placeholder="Chọn giới tính" />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											{GENDER_OPTIONS.map((item) => (
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
					name="representative.contactAddress"
					children={(field) => {
						const isInvalid = !field.state.meta.isValid;
						return (
							<Field className="col-span-3" data-invalid={isInvalid}>
								<FieldLabel
									htmlFor={field.name}
									className="uppercase font-bold"
								>
									Địa chỉ liên lạc
								</FieldLabel>
								<Input
									id={field.name}
									name={field.name}
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
									aria-invalid={isInvalid}
									placeholder="Tên đường, Phường, Tỉnh/Thành Phố"
									autoComplete="street-address"
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
