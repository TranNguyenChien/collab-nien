import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { useSignUpFormContext } from "@/features/auth/sign-up/hooks/use-sign-up-form";

export function TermsAndSubmit() {
	const form = useSignUpFormContext();

	return (
		<div className="flex flex-col gap-4 max-w-xl mx-auto mt-8">
			<form.Field
				name="agreedToAccuracy"
				children={(field) => {
					const isInvalid = !field.state.meta.isValid;
					return (
						<div className="flex flex-col gap-1">
							<Field orientation="horizontal" className="items-start">
								<Checkbox
									id="info-accept"
									name="info-accept"
									className="size-5"
								/>
								<FieldLabel htmlFor="info-accept">
									Tôi cam kết mọi thông tin cung cấp trên đây là hoàn toàn chính
									xác và chịu trách nhiệm trước pháp luật về tính xác thực của
									các thông tin này.
								</FieldLabel>
							</Field>
							{isInvalid && <FieldError errors={field.state.meta.errors} />}
						</div>
					);
				}}
			/>
			<form.Field
				name="agreedToTerms"
				children={(field) => {
					const isInvalid = !field.state.meta.isValid;
					return (
						<div className="flex flex-col gap-1">
							<Field orientation="horizontal" className="items-start">
								<Checkbox
									id="terms-accept"
									name="terms-accept"
									className="size-5"
								/>
								<FieldLabel htmlFor="terms-accept">
									Tôi đã đọc, hiểu rõ và đồng ý với Điều khoản sử dụng và Chính
									sách bảo mật của SEN NGHỆ THUẬT.
								</FieldLabel>
							</Field>
							{isInvalid && <FieldError errors={field.state.meta.errors} />}
						</div>
					);
				}}
			/>
			<form.Subscribe
				selector={(state) => ({
					isSubmitting: state.isSubmitting,
					canSubmit: state.canSubmit,
				})}
				children={({ isSubmitting, canSubmit }) => (
					<Button
						type="submit"
						disabled={!canSubmit || isSubmitting}
						className="w-full h-14 text-base font-bold uppercase tracking-widest"
					>
						{isSubmitting ? "Đang gửi..." : "Đăng ký"}
					</Button>
				)}
			/>
		</div>
	);
}
