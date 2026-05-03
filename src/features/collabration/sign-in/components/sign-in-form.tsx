import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useSignInFormContext } from "@/features/collabration/sign-in/hooks/use-sign-in-form";

const SignInForm = () => {
	const form = useSignInFormContext();
	return (
		<FieldGroup>
			<form.Field
				name="email"
				children={(field) => {
					const isInValid = !field.state.meta.isValid;
					return (
						<Field data-invalid={isInValid}>
							<FieldLabel htmlFor={field.name} className="uppercase font-bold">
								Email
							</FieldLabel>
							<Input
								id={field.name}
								type="email"
								name={field.name}
								value={field.state.value}
								onBlur={field.handleBlur}
								onChange={(e) => field.handleChange(e.target.value)}
								aria-invalid={isInValid}
								placeholder="Nhập Email"
								autoComplete="off"
							/>
							{isInValid && <FieldError errors={field.state.meta.errors} />}
						</Field>
					);
				}}
			/>
			<form.Field
				name="password"
				children={(field) => {
					const isInValid = !field.state.meta.isValid;
					return (
						<Field data-invalid={isInValid}>
							<FieldLabel htmlFor={field.name} className="uppercase font-bold">
								Mật khẩu
							</FieldLabel>
							<Input
								id={field.name}
								name={field.name}
								value={field.state.value}
								onBlur={field.handleBlur}
								onChange={(e) => field.handleChange(e.target.value)}
								type="password"
								placeholder="Nhập mật khẩu"
								aria-invalid={isInValid}
							/>
							{isInValid && <FieldError errors={field.state.meta.errors} />}
						</Field>
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
						{isSubmitting ? "Đang gửi..." : "Đăng nhập"}
					</Button>
				)}
			/>
			<div className="text-center pt-4">
				<p className="text-on-surface-variant text-sm font-body">
					Chưa phải là đối tác?
					<Link
						className="text-primary font-semibold hover:underline underline-offset-4 ml-1"
						to="/sign-up"
					>
						Đăng ký đối tác mới
					</Link>
				</p>
			</div>
		</FieldGroup>
	);
};

export default SignInForm;
