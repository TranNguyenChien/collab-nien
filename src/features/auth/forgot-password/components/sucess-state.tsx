import { CheckCircle2Icon } from "lucide-react";
import type { FC } from "react";
import { Button } from "@/components/ui/button";

const SuccessState: FC = () => (
	<main className="min-h-screen pt-24 flex items-center justify-center relative overflow-hidden">
		<div className="max-w-xl w-full px-6 py-20 z-10 text-center">
			<div className="p-6 rounded-lg shadow-2xl shadow-primary/5 flex flex-col items-center bg-surface-container-lowest">
				<div className="mb-10">
					<CheckCircle2Icon className="size-20 text-" />
				</div>
				<h1 className="font-heads text-5xl font-extrabold tracking-tight text-on-surface mb-6 leading-tight">
					Đã gửi email thành công
				</h1>
				<p className="text-body text-lg text-on-surface-variant leading-relaxed mb-12 max-w-sm mx-auto">
					Chúng tôi đã gửi một liên kết khôi phục mật khẩu đến hộp thư đến của
					bạn. Vui lòng kiểm tra email để tiếp tục.
				</p>
				<div className="w-full space-y-6">
					<Button className="w-full uppercase font-bold" size="lg">
						Quay lại đăng nhập
					</Button>
					<div className="flex flex-col items-center space-y-2">
						<p className="text-label-sm uppercase tracking-[0.15em] text-on-surface-variant/60 font-semibold">
							Chưa nhận được email?
						</p>
						<Button
							variant="outline"
							className="w-full font-bold uppercase"
							size="lg"
						>
							Gửi lại email
						</Button>
					</div>
				</div>
				<div className="mt-16 pt-8 border-t border-outline-variant/10 w-full">
					<p className="text-sm tracking-[0.2em] font-medium text-on-surface-variant/40">
						Hỗ trợ kỹ thuật: support@dhnson.vn
					</p>
				</div>
			</div>
		</div>
	</main>
);

export default SuccessState;
