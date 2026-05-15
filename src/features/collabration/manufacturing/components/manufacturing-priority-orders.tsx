import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ORDER_STATUS_STYLES, PRIORITY_ORDERS } from "../constant";

interface OrderCardProps {
	id: string;
	name: string;
	quantity: number;
	status: keyof typeof ORDER_STATUS_STYLES;
	note: string;
	noteValue: string;
	noteType: "normal" | "warning";
	bordered: boolean;
}

function OrderCard({
	id,
	name,
	quantity,
	status,
	note,
	noteValue,
	noteType,
	bordered,
}: OrderCardProps) {
	return (
		<div
			className={cn(
				"bg-surface-container-lowest p-6 rounded-lg flex flex-col gap-4 shadow",
				bordered && "border border-dashed border-outline-variant/30",
			)}
		>
			<div>
				<div className="flex justify-between gap-1 items-center">
					<p className="text-label-xs font-bold text-primary tracking-tighter">
						{id}
					</p>
					<p
						className={cn(
							"font-bold px-2 py-1 rounded uppercase shrink-0",
							ORDER_STATUS_STYLES[status],
							"text-label-sm",
						)}
					>
						{status}
					</p>
				</div>
				<h3 className="text-title-md font-bold text-on-surface leading-tight mt-1">
					{name}
				</h3>
			</div>
			<div className="py-2">
				<span className="text-headline-sm font-bold text-primary">
					{quantity.toLocaleString("vi-VN")}
				</span>
				<span className="text-on-surface-variant font-medium ml-1">pcs</span>
			</div>
			<div className="flex items-center justify-between text-label-sm mt-auto">
				<span className="text-on-surface-variant">
					{note}:{" "}
					<span
						className={cn(
							"font-bold",
							noteType === "warning" ? "text-error" : "text-on-surface",
						)}
					>
						{noteValue}
					</span>
				</span>
			</div>
		</div>
	);
}

export function ManufacturingPriorityOrders() {
	return (
		<section className="mb-6">
			<div className="flex items-center justify-between mb-4">
				<h2 className="text-title-lg font-bold text-on-surface uppercase">
					Danh sách đơn hàng ưu tiên
				</h2>
				<Button type="button" variant="link">
					Xem tất cả đơn hàng
				</Button>
			</div>
			<div className="grid grid-cols-4 gap-6">
				{PRIORITY_ORDERS.map((order) => (
					<OrderCard
						key={order.id}
						id={order.id}
						name={order.name}
						quantity={order.quantity}
						status={order.status}
						note={order.note}
						noteValue={order.noteValue}
						noteType={order.noteType}
						bordered={order.bordered}
					/>
				))}
			</div>
		</section>
	);
}
