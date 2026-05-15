import { Link } from "@tanstack/react-router";
import { CheckCircle2, Gauge, TrendingUp, Users } from "lucide-react";
import { OUTPUT_TIERS, STAFF_TIERS, TECHNICAL_CATEGORIES } from "../constant";

function StaffStructureCard() {
	return (
		<div className="bg-surface-container-low p-6 rounded-lg flex flex-col shadow">
			<div className="flex items-center gap-3 mb-6">
				<Users className="size-5 text-primary" />
				<h3 className="text-title-md font-bold text-on-surface">
					Cơ cấu nhân sự
				</h3>
			</div>
			<div className="flex flex-col gap-6 flex-1">
				{STAFF_TIERS.map((tier) => (
					<div key={tier.label}>
						<div className="flex items-end justify-between mb-1.5">
							<div>
								<p className="text-label-md font-semibold text-on-surface-variant">
									{tier.label}
								</p>
								<p className="text-label-xs text-on-surface-variant/70 italic">
									{tier.description}
								</p>
							</div>
							<span className="text-title-md font-bold text-primary">
								{tier.percentage}%
							</span>
						</div>
						<div className="h-1.5 rounded-full bg-surface-container-high overflow-hidden">
							<div
								className="h-full rounded-full bg-primary transition-all"
								style={{ width: `${tier.percentage}%` }}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

function OutputCapacityCard() {
	return (
		<div className="bg-surface-container-low p-6 rounded-lg flex flex-col shadow">
			<div className="flex items-center gap-3 mb-6">
				<Gauge className="size-5 text-primary" />
				<h3 className="text-title-md font-bold text-on-surface">
					Sản lượng tối đa/Tháng
				</h3>
			</div>
			<div className="flex flex-col gap-4">
				{OUTPUT_TIERS.map((tier) => (
					<div
						key={tier.label}
						className="bg-surface-container p-4 rounded-lg flex items-center justify-between border border-outline-variant/20"
					>
						<div>
							<p className="text-label-xs font-bold text-on-surface-variant uppercase tracking-widest opacity-70">
								{tier.label}
							</p>
							<p className="text-title-lg font-bold text-primary">
								{tier.quantity.toLocaleString("vi-VN")}
								<span className="text-label-sm font-medium text-on-surface-variant ml-1">
									pcs
								</span>
							</p>
						</div>
						<TrendingUp className="size-4 text-outline-variant" />
					</div>
				))}
			</div>
		</div>
	);
}

function TechnicalCategoriesCard() {
	return (
		<div className="bg-surface-container-low p-6 rounded-lg flex flex-col shadow">
			<div className="flex items-center gap-3 mb-6">
				<CheckCircle2 className="size-5 text-primary" />
				<h3 className="text-title-md font-bold text-on-surface">
					Danh mục kỹ thuật
				</h3>
			</div>
			<div className="flex flex-col gap-3 flex-1">
				{TECHNICAL_CATEGORIES.map((cat) => (
					<div
						key={cat}
						className="flex items-center justify-between p-3 bg-primary/5 rounded-lg border border-primary/10"
					>
						<span className="text-body-md font-semibold text-secondary">
							{cat}
						</span>
						<CheckCircle2 className="size-4 text-white stroke-primary" />
					</div>
				))}
				<p className="text-label-xs text-on-surface-variant/60 uppercase tracking-widest text-center mt-auto pt-2">
					Đã được kiểm định chất lượng nội bộ
				</p>
			</div>
		</div>
	);
}

export function ManufacturingCapacityDetail() {
	return (
		<section className="mb-6">
			<div className="flex items-center justify-between mb-4">
				<h2 className="text-title-lg font-bold text-on-surface uppercase tracking-wide">
					Năng lực sản xuất
				</h2>
				<Link
					to="/collabration/capacity"
					className="text-sm font-medium text-primary underline-offset-4 hover:underline"
				>
					Chi tiết
				</Link>
			</div>
			<div className="grid grid-cols-3 gap-6">
				<StaffStructureCard />
				<OutputCapacityCard />
				<TechnicalCategoriesCard />
			</div>
		</section>
	);
}
