import { useStore } from "@tanstack/react-form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { OperationsForm } from "../hooks/use-operations-form";

interface OperationsPaymentTermsProps {
	form: OperationsForm;
}

const PAYMENT_STEPS = ["ĐẶT CỌC", "TIẾN ĐỘ", "XUẤT XƯỞNG", "CÔNG NỢ"] as const;
const ACTIVE_STEPS = 2;

export function OperationsPaymentTerms({ form }: OperationsPaymentTermsProps) {
	const paymentTerms = useStore(form.store, (s) => s.values.paymentTerms);

	return (
		<div className="bg-surface-container-low rounded-xl p-6 shadow-sm">
			<h2 className="text-title-sm font-bold text-on-surface mb-6">
				4. Cách thức thanh toán (Payment Terms)
			</h2>

			{/* Progress steps */}
			<div className="flex items-center mb-8">
				{PAYMENT_STEPS.map((step, idx) => {
					const isActive = idx < ACTIVE_STEPS;
					const isLast = idx === PAYMENT_STEPS.length - 1;

					return (
						<div key={step} className="flex items-center flex-1 last:flex-none">
							<div className="flex flex-col items-center gap-1.5">
								<div
									className={cn(
										"size-9 rounded-full flex items-center justify-center border-2 transition-colors",
										isActive
											? "bg-primary border-primary text-on-primary"
											: "bg-surface-container border-outline-variant text-on-surface-variant",
									)}
								>
									{isActive ? (
										<span className="text-label-xs font-bold">{idx + 1}</span>
									) : (
										<span className="text-label-xs font-bold text-on-surface-variant">
											{idx + 1}
										</span>
									)}
								</div>
								<span
									className={cn(
										"text-label-xs font-bold uppercase whitespace-nowrap",
										isActive ? "text-primary" : "text-on-surface-variant",
									)}
								>
									{step}
								</span>
							</div>
							{!isLast && (
								<div
									className={cn(
										"h-0.5 flex-1 mx-2 mb-5",
										idx < ACTIVE_STEPS - 1
											? "bg-primary"
											: "bg-outline-variant/40",
									)}
								/>
							)}
						</div>
					);
				})}
			</div>

			{/* Payment phases */}
			<div className="grid grid-cols-3 gap-6">
				{/* GĐ1: Đặt cọc */}
				<div className="space-y-3">
					<p className="text-label-xs font-bold text-on-surface-variant uppercase tracking-wide">
						GĐ1 <span className="text-primary">Đặt cọc</span>
					</p>
					<div className="flex items-center gap-2">
						<span className="text-body-sm text-on-surface-variant">Tỷ lệ:</span>
						<form.Field name="paymentTerms.depositRate">
							{(field) => (
								<Input
									type="number"
									min={0}
									max={100}
									value={field.state.value}
									onChange={(e) => field.handleChange(Number(e.target.value))}
									className="h-9 text-sm w-20 text-right"
								/>
							)}
						</form.Field>
						<span className="text-body-sm font-bold text-on-surface">%</span>
					</div>
				</div>

				{/* GĐ2: Tiến độ */}
				<div className="space-y-3">
					<p className="text-label-xs font-bold text-on-surface-variant uppercase tracking-wide">
						GĐ2 <span className="text-primary">Tiến độ</span>
					</p>
					<div className="flex flex-col gap-2">
						{paymentTerms.progressItems.map((item, index) => (
							<div key={item.key} className="flex items-center gap-2">
								<span className="text-body-sm text-on-surface-variant flex-1">
									{item.label}
								</span>
								<form.Field name={`paymentTerms.progressItems[${index}].rate`}>
									{(field) => (
										<Input
											type="number"
											min={0}
											max={100}
											value={field.state.value}
											onChange={(e) =>
												field.handleChange(Number(e.target.value))
											}
											className="h-8 text-sm w-16 text-right"
										/>
									)}
								</form.Field>
								<span className="text-body-sm font-bold text-on-surface">
									%
								</span>
							</div>
						))}
					</div>
				</div>

				{/* GĐ3: Hoàn thành */}
				<div className="space-y-3">
					<p className="text-label-xs font-bold text-on-surface-variant uppercase tracking-wide">
						GĐ3 <span className="text-primary">Hoàn thành</span>
					</p>
					<div className="flex flex-col gap-2">
						<div className="flex items-center gap-2">
							<span className="text-body-sm text-on-surface-variant flex-1">
								Tỷ lệ cuối:
							</span>
							<form.Field name="paymentTerms.finalRate">
								{(field) => (
									<Input
										type="number"
										min={0}
										max={100}
										value={field.state.value}
										onChange={(e) => field.handleChange(Number(e.target.value))}
										className="h-8 text-sm w-16 text-right"
									/>
								)}
							</form.Field>
							<span className="text-body-sm font-bold text-on-surface">%</span>
						</div>
						<div className="flex items-center gap-2">
							<span className="text-body-sm text-on-surface-variant flex-1">
								Công nợ:
							</span>
							<form.Field name="paymentTerms.debtDays">
								{(field) => (
									<Input
										type="number"
										min={0}
										value={field.state.value}
										onChange={(e) => field.handleChange(Number(e.target.value))}
										className="h-8 text-sm w-16 text-right"
									/>
								)}
							</form.Field>
							<span className="text-body-sm font-bold text-on-surface">
								Ngày
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
