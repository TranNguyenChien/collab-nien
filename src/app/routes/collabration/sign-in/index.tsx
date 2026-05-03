import type { FC } from "react";
import SignInForm from "@/features/collabration/sign-in/components/sign-in-form";
import { useSignInForm } from "@/features/collabration/sign-in/hooks/use-sign-in-form";

const SignInCollabrationPage: FC = () => {
	const { form } = useSignInForm();
	return (
		<main className="grow flex items-center justify-center p-6 relative overflow-hidden min-h-screen">
			<div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
				<img
					alt=""
					className="w-full h-full object-cover grayscale"
					data-alt="Close-up of high-end tailoring details with raw linen fabrics and measuring tapes in a sun-drenched artisan studio"
					src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ8kBBVoG_DWrEGSIk3oxnQ0nKgp7EsnlkDlA1MTfOOjHh3FZjnqGgoKPdLfvto1DtSQd7QRfBYX_uzAwD9724x8rwf8k8Bj3CblW8FuuiP78b0vffvmAL2VA5sDdcTmaS7hARw8YfYTu0czfqxHIxKwyr5Ttz65kKLE0Hx9-knht3zWJGtH63KT_xxEvPNZvA2PndnpOQjZ5rN2aWHm6K1kI8b-7PRXJhOn2yW_8ku8YqVxt5kdP4FvApmT4m82FxsY6Ask5IvTg"
				/>
			</div>
			<div className="relative z-10 w-full max-w-275 grid md:grid-cols-2 rounded-lg overflow-hidden shadow-[0_32px_64px_-12px_rgba(40,24,13,0.04)]">
				<div className="relative overflow-hidden ">
					<img
						alt=""
						className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
						data-alt="Elegant interior of a modern atelier with limestone surfaces and high-quality fabrics on wooden racks in warm lighting"
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu5YUBJrtyhOndhDDpA4ZKwdWasUNYOwSYl4DU8sMs_rQ4g_WDYZD1dUDLorLCaoSq_OnjnPMNmL_WFm_ad9U9w6e5B4vuUiWdVWcwG9hIEjbmAr42MscXCPmwAlXHWi4p4Hci1kF5BHp-MW9N9R3s2k-9CmG1msnZEsw7DnC0QF51ORKuvDf0blARI4skiN1DrE-UPIZ51R85ln4vw0Jd3YcXgB0MJfYf3fWpPi8OJEOhQFxgyGNyEEaKHI6PG7mfMRnqOV2QBUI"
					/>
					<div className="relative z-20 p-12 h-full flex flex-col justify-end text-white">
						<span className="font-label text-xs uppercase tracking-[0.3em] mb-4 text-primary-fixed">
							Production Portal
						</span>
						<h2 className="text-3xl font-headline font-bold leading-tight mb-6">
							Elevating craftsmanship through digital connectivity.
						</h2>
						<p className="text-white font-body leading-relaxed max-w-sm">
							Kết nối tinh hoa nghệ thuật cùng hệ thống quản lý sản xuất tối ưu
							của SEN NGHỆ THUẬT.
						</p>
					</div>
				</div>
				<div className="p-8 md:p-16 flex flex-col justify-center bg-surface-container-low">
					<div className="mb-10">
						<h1 className="text-3xl font-heading font-extrabold text-on-surface tracking-tight mb-3">
							ĐĂNG NHẬP ĐỐI TÁC
						</h1>
						<p className="text-on-surface-variant font-body leading-relaxed">
							Chào mừng bạn trở lại với hệ thống quản lý sản xuất của{" "}
							<span className="font-semibold">SEN NGHỆ THUẬT</span>.
						</p>
					</div>
					<form.AppForm>
						<form
							onSubmit={(e) => {
								e.preventDefault();
								form.handleSubmit();
							}}
						>
							<SignInForm />
						</form>
					</form.AppForm>
				</div>
			</div>
		</main>
	);
};

export default SignInCollabrationPage;
