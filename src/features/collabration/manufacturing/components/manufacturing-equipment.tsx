import { Link } from "@tanstack/react-router";
import {
	AlertTriangle,
	Bug,
	CheckCircle2,
	Factory,
	ShieldCheck,
	TrendingDown,
} from "lucide-react";

function EquipmentQualityCard() {
	return (
		<div className="bg-surface-container-low p-6 rounded-lg shadow">
			<div className="flex mb-6 items-center justify-between">
				<div className="flex items-center gap-3">
					<Factory className="size-6 text-primary" />
					<h2 className="text-title-md font-bold uppercase tracking-wide">
						Thiết bị &amp; Chất lượng
					</h2>
				</div>
				<Link
					to="/collabration/manufacturing/equipment"
					className="text-sm font-medium text-primary underline-offset-4 hover:underline"
				>
					Chi tiết
				</Link>
			</div>
			<div className="grid grid-cols-2 gap-6 mb-8">
				<div className="flex flex-col gap-1">
					<p className="text-label-xs font-bold text-on-surface-variant uppercase tracking-wide">
						Máy đang chạy
					</p>
					<div className="flex items-baseline gap-1.5">
						<span className="text-headline-sm font-bold text-on-surface">
							32
						</span>
						<span className="text-body-md text-on-surface-variant">/ 35</span>
					</div>
				</div>
				<div className="flex flex-col gap-1">
					<p className="text-label-xs font-bold text-on-surface-variant uppercase tracking-wide">
						Tỷ lệ lỗi sản phẩm
					</p>
					<div className="flex items-baseline gap-1.5">
						<span className="text-headline-sm font-bold text-secondary">
							0.8%
						</span>
						<TrendingDown className="size-4 text-green-600 mb-0.5" />
					</div>
				</div>
			</div>
			<div className="flex items-center gap-3 bg-error-container/20 p-4 rounded-lg">
				<AlertTriangle className="size-5 text-error shrink-0" />
				<p className="text-label-sm font-medium text-on-surface">
					Cảnh báo: Máy may Brother #04 cần bảo trì định kỳ trong 48 giờ tới.
				</p>
			</div>
		</div>
	);
}

function OperationsReliabilityCard() {
	return (
		<div className="bg-surface-container-low p-6 rounded-lg shadow">
			<div className="mb-6 flex items-center justify-between">
				<div className="flex items-center gap-3 ">
					<ShieldCheck className="size-6 text-primary" />
					<h2 className="text-title-md font-bold uppercase tracking-wide">
						Vận hành &amp; Độ tin cậy
					</h2>
				</div>
				<Link
					to="/collabration/manufacturing/operations"
					className="text-sm font-medium text-primary underline-offset-4 hover:underline"
				>
					Chi tiết
				</Link>
			</div>
			<div className="flex flex-col gap-6">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-4">
						<div className="size-3 rounded-full bg-green-500 animate-pulse" />
						<div>
							<p className="text-title-md font-bold text-on-surface">
								Đang vận hành ổn định
							</p>
							<p className="text-label-xs text-on-surface-variant font-medium">
								Cập nhật lúc: 14:30 hôm nay
							</p>
						</div>
					</div>
					<div className="text-right">
						<p className="text-label-xs font-bold text-on-surface-variant uppercase tracking-wide">
							Tỷ lệ Uptime
						</p>
						<p className="text-title-lg font-bold text-primary">99.2%</p>
					</div>
				</div>
				<div className="flex items-center justify-between border-t border-outline-variant/20 pt-6">
					<div className="flex items-center gap-2">
						<Bug className="size-4 text-on-surface-variant" />
						<span className="text-label-sm font-medium text-on-surface-variant">
							Số sự cố trong tuần
						</span>
					</div>
					<span className="text-title-lg font-bold text-on-surface">02</span>
				</div>
				<div className="flex items-center gap-2 pt-2">
					<CheckCircle2 className="size-4 text-green-600" />
					<p className="text-label-sm text-on-surface-variant">
						Không có sự cố nghiêm trọng trong 30 ngày qua
					</p>
				</div>
			</div>
		</div>
	);
}

export function ManufacturingEquipment() {
	return (
		<section className="grid grid-cols-2 gap-6">
			<EquipmentQualityCard />
			<OperationsReliabilityCard />
		</section>
	);
}
