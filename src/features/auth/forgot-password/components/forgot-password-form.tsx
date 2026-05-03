import { useForm } from "@tanstack/react-form";
import { Link } from "@tanstack/react-router";
import { MoveLeft } from "lucide-react";
import type { FC } from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import SuccessState from "@/features/auth/forgot-password/components/sucess-state";
import { useForgotPassword } from "@/features/auth/forgot-password/hooks/use-forgot-password";
import { forgotPasswordSchema } from "@/features/auth/forgot-password/schema";

export const ForgotPasswordForm: FC = () => {
	const { isSuccess } = useForgotPassword();

	const form = useForm({
		defaultValues: { email: "" },
		validators: { onSubmit: forgotPasswordSchema },
		onSubmit: () => {},
	});

	if (isSuccess) {
		return <SuccessState />;
	}

	return (
		<main className="grow flex flex-col items-center justify-center pt-32 pb-16 px-6 relative overflow-hidden">
			<div className="w-full max-w-4xl flex flex-col items-center text-center relative z-10">
				<h1 className="font-heads font-black text-8xl leading-[0.9] tracking-tighter text-on-surface mb-8 select-none">
					Quên mật
					<br />
					khẩu
				</h1>
				<p className="font-body text-lg  text-on-surface-variant max-w-lg mb-12 leading-relaxed opacity-80">
					Đừng lo lắng. Hãy nhập địa chỉ email bạn đã sử dụng để đăng ký. Chúng
					tôi sẽ gửi cho bạn một liên kết để khôi phục quyền truy cập vào
					Collabb With NIÉN của bạn.
				</p>
				<div className="glass-card w-full max-w-lg p-6 rounded-lg shadow-[0_32px_64px_-16px_rgba(40,24,13,0.08)] bg-surface-container-lowest">
					<form
						className="space-y-6"
						onSubmit={(e) => {
							e.preventDefault();
							form.handleSubmit();
						}}
					>
						<form.Field
							name="email"
							children={(field) => {
								return (
									<Field>
										<FieldLabel className="uppercase text-base font-bold">
											Địa chỉ Email
										</FieldLabel>
										<Input
											placeholder="Nhập địa chỉ Email"
											value={field.state.value}
											onChange={(e) => field.handleChange(e.target.value)}
										/>
									</Field>
								);
							}}
						/>
						<Button
							type="submit"
							className="w-full uppercase font-bold"
							size="lg"
						>
							Gửi yêu cầu
						</Button>
					</form>
					<div className="mt-12 text-center">
						<Link
							className="group inline-flex items-center space-x-3 text-primary font-bold tracking-tight hover:opacity-70 transition-all duration-300"
							to="/"
						>
							<MoveLeft />
							<span className="border-b-2 border-primary/20 group-hover:border-primary pb-0.5 transition-all">
								Quay lại đăng nhập
							</span>
						</Link>
					</div>
				</div>
				<div className="mt-24 max-w-md opacity-30 select-none hidden md:block">
					<p className="font-display italic text-2xl text-primary font-light">
						"Nghệ thuật không bao giờ kết thúc, chỉ bị bỏ rơi."
					</p>
					<p className="font-label text-[10px] uppercase tracking-widest mt-4">
						Leonardo da Vinci
					</p>
				</div>
			</div>
		</main>
	);
};
