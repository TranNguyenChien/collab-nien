import { WEEKLY_STATS } from "@/features/collabration/dashboard/constant";

export function CollabWeeklyStats() {
	return (
		<div className="bg-surface-container-lowest rounded-lg p-6 relative shadow">
			<div className="mb-6">
				<span className="bg-primary-container text-on-primary-container text-label-sm font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
					Giao dịch của bạn tuần qua
				</span>
				<p className="text-body-lg text-on-surface-variant mt-3">
					Tổng hợp dữ liệu/số liệu chính để bạn hiểu rõ hiệu suất và phát triển.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
				{WEEKLY_STATS.map((stat) => (
					<div key={stat.label}>
						<p className="text-label-sm text-on-surface-variant uppercase tracking-widest mb-1">
							{stat.label}
						</p>
						<p className="text-headline-md font-extrabold text-on-surface">
							{stat.value}
						</p>
						<p className="text-body-lg text-on-surface-variant">{stat.unit}</p>
						<div className={`h-0.5 mt-2 w-16 ${stat.accentColor}`} />
					</div>
				))}
			</div>
		</div>
	);
}
