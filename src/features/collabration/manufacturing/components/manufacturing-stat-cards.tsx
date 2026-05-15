import { ClipboardList, Package, Zap } from "lucide-react";
import { MANUFACTURING_STATS } from "../constant";

const STAT_ICONS = [ClipboardList, Package, Zap] as const;

const STAT_ICON_BG = [
	"bg-primary-container text-on-primary-container",
	"bg-secondary-container text-on-secondary-container",
	"bg-surface-container-highest text-on-surface-variant",
] as const;

interface StatCardProps {
	label: string;
	value: string;
	delta?: string;
	unit?: string;
	capacity?: number;
	Icon: React.ElementType;
	iconBg: string;
}

function StatCard({
	label,
	value,
	delta,
	unit,
	capacity,
	Icon,
	iconBg,
}: StatCardProps) {
	return (
		<div className="bg-surface-container-low p-6 rounded-lg hover:bg-surface-container transition-colors flex flex-col gap-4 flex-1 shadow">
			<div className="flex items-center gap-3">
				<div className={`p-2 rounded-lg ${iconBg}`}>
					<Icon className="size-5" />
				</div>
				<p className="text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">
					{label}
				</p>
			</div>
			<div className="flex items-baseline gap-2">
				<span className="text-headline-md font-bold text-primary">{value}</span>
				{unit && (
					<span className="text-body-md text-on-surface-variant font-medium">
						{unit}
					</span>
				)}
				{delta && (
					<span className="text-body-sm text-on-surface-variant">{delta}</span>
				)}
				{capacity !== undefined && (
					<div className="h-2 grow bg-surface-container-high rounded-full overflow-hidden max-w-24">
						<div
							className="h-full bg-primary rounded-full"
							style={{ width: `${capacity}%` }}
						/>
					</div>
				)}
			</div>
		</div>
	);
}

export function ManufacturingStatCards() {
	return (
		<section className="flex gap-6 mb-6">
			{MANUFACTURING_STATS.map((stat, index) => (
				<StatCard
					key={stat.id}
					label={stat.label}
					value={stat.value}
					delta={"delta" in stat ? stat.delta : undefined}
					unit={"unit" in stat ? stat.unit : undefined}
					capacity={"capacity" in stat ? stat.capacity : undefined}
					Icon={STAT_ICONS[index]}
					iconBg={STAT_ICON_BG[index]}
				/>
			))}
		</section>
	);
}
