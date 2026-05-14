import { FlaskConical, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useFabricFormContext } from "@/features/collabration/accessories/hooks/use-fabric-add-form";
import { cn } from "@/lib/utils";

function generateFabricCode(name: string, pantoneTcx: string): string {
	if (!name && !pantoneTcx) return "";
	const namePart = name
		.split(" ")
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
		.join("")
		.replace(/[^a-zA-Z]/g, "");
	const codePart = pantoneTcx.replace("-", "").slice(0, 6).toUpperCase();
	return `${namePart}-${codePart}-TCX`.replace(/^-|-$/g, "");
}

export function FabricComponentsTable() {
	const form = useFabricFormContext();

	return (
		<div>
			<div className="flex items-start justify-between mb-4">
				<div className="flex items-center gap-2">
					<FlaskConical className="size-5 text-primary" />
					<div>
						<h3 className="font-heading font-bold text-primary text-2xl">
							Thành phần & Thông số kỹ thuật
						</h3>
						<p className="text-xs text-on-surface-variant mt-0.5 uppercase tracking-wide">
							Hệ thống mã: (Việt/Anh) + (Pantone) + TCX
						</p>
					</div>
				</div>
				<form.Field
					name="components"
					mode="array"
					children={(field) => (
						<Button
							type="button"
							size="sm"
							variant="outline"
							className="gap-2 shrink-0"
							onClick={() =>
								field.pushValue({
									id: crypto.randomUUID(),
									name: "",
									pantoneTcx: "",
									pantoneColor: "#FFFFFF",
									wastagePercent: "",
									shrinkagePercent: "",
									pricePerMeter: undefined,
								})
							}
						>
							<Plus className="size-4" />
							Thêm thành phần
						</Button>
					)}
				/>
			</div>

			<form.Field
				name="components"
				mode="array"
				children={(componentsField) => (
					<div>
						<div className="bg-surface-container-lowest rounded-lg shadow overflow-hidden">
							{/* Header */}
							<div className="grid grid-cols-[2fr_2.5fr_1.5fr_1fr_1fr_1.5fr_auto] gap-px bg-surface-container-highest text-label-sm uppercase font-semibold text-on-surface-variant tracking-wider px-4 py-3">
								<span>Tên vải</span>
								<span>Mã vải (Auto)</span>
								<span>Pantone TCX</span>
								<span>Hao hụt %</span>
								<span>Độ co rút %</span>
								<span>Giá/m (VNĐ)</span>
								<span />
							</div>

							{componentsField.state.value.length === 0 && (
								<div className="py-10 text-center text-sm text-on-surface-variant">
									Chưa có thành phần nào. Nhấn "Thêm thành phần" để bắt đầu.
								</div>
							)}

							{componentsField.state.value.map((row, index) => (
								<div
									key={row.id}
									className={cn(
										"grid grid-cols-[2fr_2.5fr_1.5fr_1fr_1fr_1.5fr_auto] gap-3 px-4 py-3 items-start",
										index % 2 === 0
											? "bg-white"
											: "bg-surface-container-lowest",
									)}
								>
									{/* Tên vải */}
									<form.Field
										name={`components[${index}].name`}
										children={(nameField) => (
											<div>
												<Input
													placeholder="Lụa Mulberry Cao Cấp"
													value={nameField.state.value}
													onChange={(e) =>
														nameField.handleChange(e.target.value)
													}
													onBlur={nameField.handleBlur}
													className="h-10 text-sm"
												/>
												<FieldError errors={nameField.state.meta.errors} />
											</div>
										)}
									/>

									{/* Mã vải (Auto) */}
									<form.Field
										name={`components[${index}].pantoneTcx`}
										children={(pantoneTcxField) => {
											const autoCode = generateFabricCode(
												row.name,
												pantoneTcxField.state.value ?? "",
											);
											return (
												<div className="h-10 flex items-center px-2.5 rounded-lg bg-surface-container text-label-sm font-mono text-on-surface-variant border border-surface-container-high truncate">
													{autoCode || (
														<span className="text-muted-foreground">Auto</span>
													)}
												</div>
											);
										}}
									/>

									{/* Pantone TCX */}
									<form.Field
										name={`components[${index}].pantoneTcx`}
										children={(pantoneTcxField) => (
											<div>
												<div className="flex items-center gap-2">
													<form.Field
														name={`components[${index}].pantoneColor`}
														children={(colorField) => (
															<input
																type="color"
																value={colorField.state.value ?? "#FFFFFF"}
																onChange={(e) =>
																	colorField.handleChange(e.target.value)
																}
																className="size-7 rounded border-0 cursor-pointer shrink-0 bg-transparent"
																title="Chọn màu Pantone"
															/>
														)}
													/>
													<Input
														placeholder="11-0103"
														value={pantoneTcxField.state.value ?? ""}
														onChange={(e) =>
															pantoneTcxField.handleChange(e.target.value)
														}
														onBlur={pantoneTcxField.handleBlur}
														className="h-10 text-sm"
													/>
												</div>
												<FieldError
													errors={pantoneTcxField.state.meta.errors}
												/>
											</div>
										)}
									/>

									{/* Hao hụt % */}
									<form.Field
										name={`components[${index}].wastagePercent`}
										children={(field) => (
											<div>
												<Input
													placeholder="5"
													type="number"
													value={field.state.value ?? ""}
													onChange={(e) => field.handleChange(e.target.value)}
													onBlur={field.handleBlur}
													className="h-10 text-sm"
												/>
												<FieldError errors={field.state.meta.errors} />
											</div>
										)}
									/>

									{/* Độ co rút % */}
									<form.Field
										name={`components[${index}].shrinkagePercent`}
										children={(field) => (
											<div>
												<Input
													placeholder="2"
													type="number"
													value={field.state.value ?? ""}
													onChange={(e) => field.handleChange(e.target.value)}
													onBlur={field.handleBlur}
													className="h-10 text-sm"
												/>
												<FieldError errors={field.state.meta.errors} />
											</div>
										)}
									/>

									{/* Giá/m */}
									<form.Field
										name={`components[${index}].pricePerMeter`}
										children={(field) => (
											<div>
												<Input
													placeholder="450000"
													type="number"
													value={
														field.state.value === 0 ? "" : field.state.value
													}
													onChange={(e) =>
														field.handleChange(parseFloat(e.target.value) || 0)
													}
													onBlur={field.handleBlur}
													className="h-10 text-sm"
												/>
												<FieldError errors={field.state.meta.errors} />
											</div>
										)}
									/>

									{/* Xóa */}
									<Button
										type="button"
										variant="ghost"
										size="sm"
										className="text-on-surface-variant hover:text-destructive"
										onClick={() => componentsField.removeValue(index)}
									>
										<Trash2 className="size-4" />
									</Button>
								</div>
							))}
						</div>

						<FieldError errors={componentsField.state.meta.errors} />
					</div>
				)}
			/>
		</div>
	);
}
