import { Calendar } from "lucide-react";
import { FACTORY_NAME, REPORT_DATE, REPORT_TYPE } from "../constant";

export function ManufacturingPageHeader() {
	return (
		<header className="mb-12 flex items-end justify-between">
			<div>
				<p className="text-label-sm text-on-surface-variant uppercase tracking-widest mb-2">
					{FACTORY_NAME} • {REPORT_TYPE}
				</p>
				<h1 className="text-5xl font-bold text-primary">
					Tiến độ sản xuất hiện tại
				</h1>
			</div>
			<div className="flex items-center gap-2 bg-surface-container-low rounded-lg px-4 py-2 text-label-sm text-secondary font-medium">
				<Calendar className="size-4" />
				<span>{REPORT_DATE}</span>
			</div>
		</header>
	);
}
