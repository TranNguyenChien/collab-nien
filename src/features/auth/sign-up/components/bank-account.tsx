import { Landmark } from "lucide-react";
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
	FieldLegend,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useSignUpFormContext } from "@/features/auth/sign-up/hooks/use-sign-up-form";

export function BankAccountSection() {
	const form = useSignUpFormContext();

	return (
		<div className="bg-surface-container-lowest rounded-lg p-6 shadow">
			<FieldLegend className="flex items-center gap-4 mb-4">
				<Landmark className="size-5 text-primary" />
				<h2 className="text-xl font-bold text-on-surface font-heads uppercase">
					5. Tài khoản ngân hàng
				</h2>
			</FieldLegend>
			<Separator className="mb-8" />
			<FieldGroup className="grid grid-cols-2">
				<form.Field
					name="bank.accountNumber"
					children={(field) => {
						const isInvalid = !field.state.meta.isValid;
						return (
							<Field data-invalid={isInvalid}>
								<FieldLabel
									htmlFor={field.name}
									className="uppercase font-bold"
								>
									Số tài khoản
								</FieldLabel>
								<Input
									id={field.name}
									name={field.name}
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
									aria-invalid={isInvalid}
									placeholder="Nhập số tài khoản"
									autoComplete="off"
								/>
								{isInvalid && <FieldError errors={field.state.meta.errors} />}
							</Field>
						);
					}}
				/>

				<form.Field
					name="bank.bankName"
					children={(field) => {
						const isInvalid = !field.state.meta.isValid;
						return (
							<Field data-invalid={isInvalid}>
								<FieldLabel
									htmlFor={field.name}
									className="uppercase font-bold"
								>
									Tên ngân hàng &amp; Chi nhánh
								</FieldLabel>
								<Input
									id={field.name}
									name={field.name}
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
									aria-invalid={isInvalid}
									placeholder="Ví dụ: Vietcombank – Chi nhánh HCM"
									autoComplete="off"
								/>
								{isInvalid && <FieldError errors={field.state.meta.errors} />}
							</Field>
						);
					}}
				/>
				<form.Field
					name="bank.accountName"
					children={(field) => {
						const isInvalid = !field.state.meta.isValid;
						return (
							<Field
								data-invalid={isInvalid}
								className="col-span-2 pointer-events-none"
								aria-disabled
							>
								<FieldLabel
									htmlFor={field.name}
									className="uppercase font-bold"
								>
									Tên tài khoản
								</FieldLabel>
								<Input
									id={field.name}
									name={field.name}
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
									aria-invalid={isInvalid}
									placeholder="Ví dụ: NGUYEN VAN A"
									autoComplete="off"
									disabled
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
