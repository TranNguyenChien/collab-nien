import { AlertTriangle } from "lucide-react";

export function CollabDashboardBanner() {
	return (
		<div className="mt-2">
			<div className="page-wrap px-6 py-4 flex items-center justify-between gap-4 bg-error-container rounded-lg">
				<div className="flex items-center gap-3">
					<AlertTriangle className="w-4 h-4 text-on-error-container shrink-0" />
					<p className="text-xs text-on-error-container">
						Tài khoản chưa được xác thực. Vui lòng cập nhật hồ sơ để bắt đầu quy
						trình sản xuất chính thức.
					</p>
				</div>
				<button
					type="button"
					className="text-xs font-bold text-on-error-container whitespace-nowrap hover:underline"
				>
					Cập nhật ngay
				</button>
			</div>
		</div>
	);
}
