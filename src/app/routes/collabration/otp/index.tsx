import type { FC } from "react";
import OTPForm from "@/features/collabration/otp/components/otp-form";
import { useOTPForm } from "@/features/collabration/otp/hooks/use-otp-form";

const OTPCollabrationPage: FC = () => {
	const { form } = useOTPForm();
	return (
		<main className="grow flex items-center justify-center p-6 relative overflow-hidden min-h-screen">
			<div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
				<div className="hidden md:block relative overflow-hidden group">
					<img
						alt="Atelier interior"
						className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
						data-alt="Close-up of high-quality organic linen fabric rolls in warm beige and cream tones in a sun-drenched artisan textile atelier"
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoxsVavK2gjf5ZStkkFZlbkd9tbj8DhJ2p1hM4CX37aygMFmAeHOhq2lYn7zNRrF4ea4CJxyNsJmxb2MhsZ0NA3cb5lAlTgFPiTLuYPEOixaCThnAaMkYsfr6q96ezlYveKeIYmO-165eY2KNBv-JJTfXKADOsCo7JwqZW6jHDvBEfgyF43D1bJeYNep09OWM06wAlHBlTJB_4zjtxJ4RYSnPAwxrXDOIpjPjzasBGwcPnJmo2jgq2Jam4yBl8xd3gGOESgp0PiHk"
					/>
					<div className="absolute inset-0 bg-linear-to-t from-[#28180d]/60 to-transparent"></div>
					<div className="absolute bottom-12 left-12 right-12 text-white">
						<p className="text-sm uppercase tracking-[0.2em] mb-2 opacity-80">
							Quy trình sản xuất
						</p>
						<h2 className="text-3xl font-bold leading-tight">
							Gìn giữ giá trị <br />
							thủ công bản địa.
						</h2>
					</div>
				</div>
				<div className="p-12 md:p-16 flex flex-col justify-center">
					<div className="mb-10">
						<h1 className="text-3xl font-extrabold text-on-surface uppercase tracking-tight mb-3">
							Xác thực OTP - Đối tác sản xuất
						</h1>
						<p className="text-on-surface-variant leading-relaxed">
							Vui lòng nhập mã 6 chữ số đã được gửi đến email đăng ký của bạn để
							tiếp tục.
						</p>
					</div>
					<form.AppForm>
						<form
							onSubmit={(e) => {
								e.preventDefault();
								form.handleSubmit();
							}}
						>
							<OTPForm />
						</form>
					</form.AppForm>
					<div className="mt-12 pt-8 border-t border-outline-variant/15">
						<p className="text-[0.6875rem] uppercase tracking-widest text-on-surface-variant/50">
							Phiên làm việc bảo mật • 256-bit encryption
						</p>
					</div>
				</div>
			</div>
		</main>
	);
};

export default OTPCollabrationPage;
