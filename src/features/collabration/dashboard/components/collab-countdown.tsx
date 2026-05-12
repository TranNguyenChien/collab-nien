import Clock from "@/assets/icons/clock.svg?react";
import { Button } from "@/components/ui/button";
import { COUNTDOWN } from "@/features/collabration/dashboard/constant";

const TIME_UNITS = [
	{ value: COUNTDOWN.days, label: "Ngày" },
	{ value: COUNTDOWN.hours, label: "Giờ" },
	{ value: COUNTDOWN.minutes, label: "Phút" },
] as const;

export function CollabCountdown() {
	return (
		<div className="bg-surface-container-lowest rounded-lg p-6 flex flex-col items-center gap-6 relative">
			<div className="flex items-center justify-between w-full ">
				<h2 className="text-title-md font-bold text-on-surface uppercase tracking-wide text-center flex-1">
					Thời gian ước tính còn lại
				</h2>
				<Clock className="absolute top-2 right-2" />
			</div>

			<div className="flex flex-col items-center gap-4 w-full bg-background p-4 rounded">
				<p className="text-label-sm text-on-surface-variant uppercase tracking-[0.3em]">
					Đếm ngược
				</p>
				<div className="flex items-end gap-2">
					{TIME_UNITS.map((unit, index) => (
						<div key={unit.label} className="flex items-end gap-2">
							{index > 0 && (
								<p className="text-[48px] font-extrabold text-on-surface-variant leading-none mb-4 font-heads">
									:
								</p>
							)}
							<div className="text-center">
								<p className="text-[56px] font-extrabold text-on-surface leading-none font-heads">
									{unit.value}
								</p>
								<p className="text-label-sm text-on-surface-variant uppercase tracking-widest mt-1">
									{unit.label}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>

			<Button variant="outline" className="w-full" size="lg">
				Gia hạn thời gian
			</Button>
		</div>
	);
}
