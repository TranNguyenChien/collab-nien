import { Link } from "@tanstack/react-router";
import { Loader2, MoveLeft } from "lucide-react";
import type { FC } from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from "@/components/ui/input-otp";
import { useOTPFormContext } from "@/features/collabration/otp/hooks/use-otp-form";

const OTPForm: FC = () => {
	const form = useOTPFormContext();
	return (
		<FieldGroup>
			<form.Field
				name="otp"
				children={(field) => {
					const isInValid = !field.state.meta.isValid;
					return (
						<Field data-invalid={isInValid}>
							<InputOTP
								maxLength={6}
								containerClassName='justify-between sm:[&>[data-slot="input-otp-group"]>div]:w-12'
								onBlur={field.handleBlur}
								onChange={(e) => field.handleChange(e)}
							>
								<InputOTPGroup className="flex justify-between w-full">
									<InputOTPSlot index={0} />
									<InputOTPSlot index={1} />
									<InputOTPSlot index={2} />
									<InputOTPSlot index={3} />
									<InputOTPSlot index={4} />
									<InputOTPSlot index={5} />
								</InputOTPGroup>
							</InputOTP>
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
						{isSubmitting ? <Loader2 className="animate-spin" /> : "Xác thực"}
					</Button>
				)}
			/>
			<div className="text-center pt-4">
				<div className="flex flex-col gap-4 pt-4 items-center">
					<button
						className="text-sm font-medium text-primary hover:underline underline-offset-4 transition-all"
						type="button"
					>
						Gửi lại mã
					</button>
					<Link
						className="flex items-center gap-2 text-on-surface-variant/70 hover:text-primary transition-colors text-sm group"
						to="/collabration/sign-in"
					>
						<MoveLeft />
						Trở về đăng nhập
					</Link>
				</div>
			</div>
		</FieldGroup>
	);
};

export default OTPForm;
