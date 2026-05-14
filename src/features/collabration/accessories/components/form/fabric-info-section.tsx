import { BookText, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useFabricFormContext } from "@/features/collabration/accessories/hooks/use-fabric-add-form";

const FABRIC_TYPE_OPTIONS = [
	{ value: "vai-chinh", label: "Vải chính" },
	{ value: "vai-lot", label: "Vải lót" },
	{ value: "phu-lieu", label: "Phụ liệu" },
] as const;

const SEGMENT_OPTIONS = [
	{ value: "cao-cap", label: "Cao cấp" },
	{ value: "trung-cap", label: "Trung cấp" },
	{ value: "pho-thong", label: "Phổ thông" },
] as const;

const COMPOSITION_OPTIONS = [
	"Cotton",
	"Silk",
	"Linen",
	"Polyester",
	"Wool",
	"Nylon",
	"Tencel",
	"Viscose",
	"Spandex",
] as const;

export function FabricInfoSection() {
	const form = useFabricFormContext();

	return (
		<div>
			<div className="flex items-center gap-2 mb-4">
				<BookText className="size-5 text-primary" />
				<h3 className="font-heading font-bold text-primary text-2xl">
					Thông tin chi tiết vải
				</h3>
			</div>

			<div className="bg-surface-container-lowest p-6 rounded-lg shadow space-y-5">
				{/* Row 1 */}
				<div className="grid grid-cols-2 gap-5">
					<form.Field
						name="info.name"
						children={(field) => (
							<Field>
								<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
									Tên vải
								</FieldLabel>
								<Input
									placeholder="VD: Lụa tơ tằm Bảo Lộc"
									value={field.state.value}
									onChange={(e) => field.handleChange(e.target.value)}
									onBlur={field.handleBlur}
								/>
								<FieldError errors={field.state.meta.errors} />
							</Field>
						)}
					/>
					<form.Field
						name="info.fabricType"
						children={(field) => (
							<Field>
								<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
									Loại vải
								</FieldLabel>
								<Select
									value={field.state.value ?? ""}
									onValueChange={(v) => {
										if (v !== null) field.handleChange(v);
									}}
								>
									<SelectTrigger className="w-full">
										<SelectValue placeholder="Chọn loại vải" />
									</SelectTrigger>
									<SelectContent>
										{FABRIC_TYPE_OPTIONS.map((opt) => (
											<SelectItem key={opt.value} value={opt.value}>
												{opt.label}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
								<FieldError errors={field.state.meta.errors} />
							</Field>
						)}
					/>
				</div>

				{/* Row 2 */}
				<div className="grid grid-cols-2 gap-5">
					<form.Field
						name="info.alias"
						children={(field) => (
							<Field>
								<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
									Tên gọi khác
								</FieldLabel>
								<Input
									placeholder="Silk BL"
									value={field.state.value ?? ""}
									onChange={(e) => field.handleChange(e.target.value)}
									onBlur={field.handleBlur}
								/>
								<FieldError errors={field.state.meta.errors} />
							</Field>
						)}
					/>
					<form.Field
						name="info.gsm"
						children={(field) => (
							<Field>
								<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
									GSM
								</FieldLabel>
								<Input
									placeholder="120"
									type="number"
									value={field.state.value ?? ""}
									onChange={(e) => field.handleChange(e.target.value)}
									onBlur={field.handleBlur}
								/>
								<FieldError errors={field.state.meta.errors} />
							</Field>
						)}
					/>
				</div>

				{/* Row 3 – Thành phần (array) */}
				<form.Field
					name="info.compositions"
					mode="array"
					children={(compositionsField) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant mb-2 block">
								Thành phần – % Thông số
							</FieldLabel>

							<div className="space-y-3">
								{compositionsField.state.value.map((_, index) => (
									<div
										key={index}
										className="grid grid-cols-2 gap-5 items-start"
									>
										<form.Field
											name={`info.compositions[${index}].component`}
											children={(componentField) => (
												<Field>
													<Select
														value={componentField.state.value ?? ""}
														onValueChange={(v) => {
															if (v !== null) componentField.handleChange(v);
														}}
													>
														<SelectTrigger className="w-full">
															<SelectValue placeholder="Thành phần" />
														</SelectTrigger>
														<SelectContent>
															{COMPOSITION_OPTIONS.map((opt) => (
																<SelectItem key={opt} value={opt}>
																	{opt}
																</SelectItem>
															))}
														</SelectContent>
													</Select>
													<FieldError
														errors={componentField.state.meta.errors}
													/>
												</Field>
											)}
										/>
										<div className="flex gap-2 items-start">
											<form.Field
												name={`info.compositions[${index}].percentage`}
												children={(percentField) => (
													<Field className="flex-1">
														<Input
															placeholder="Thông số"
															value={percentField.state.value ?? ""}
															onChange={(e) =>
																percentField.handleChange(e.target.value)
															}
															onBlur={percentField.handleBlur}
														/>
														<FieldError
															errors={percentField.state.meta.errors}
														/>
													</Field>
												)}
											/>
											{compositionsField.state.value.length > 1 && (
												<Button
													type="button"
													variant="ghost"
													size="sm"
													className="text-destructive hover:text-destructive mt-0.5 shrink-0"
													onClick={() => compositionsField.removeValue(index)}
												>
													<Trash2 className="size-4" />
												</Button>
											)}
										</div>
									</div>
								))}
							</div>

							<Button
								type="button"
								onClick={() =>
									compositionsField.pushValue({ component: "", percentage: "" })
								}
								size="sm"
								variant="outline"
								className="border border-dashed"
							>
								<Plus className="size-4" />
								Thêm TP và TS
							</Button>

							<FieldError errors={compositionsField.state.meta.errors} />
						</Field>
					)}
				/>

				{/* Row 4 */}
				<div className="grid grid-cols-2 gap-5">
					<form.Field
						name="info.widthCm"
						children={(field) => (
							<Field>
								<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
									Khổ vải (cm)
								</FieldLabel>
								<Input
									placeholder="150"
									type="number"
									value={field.state.value ?? ""}
									onChange={(e) => field.handleChange(e.target.value)}
									onBlur={field.handleBlur}
								/>
								<FieldError errors={field.state.meta.errors} />
							</Field>
						)}
					/>
					<form.Field
						name="info.origin"
						children={(field) => (
							<Field>
								<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
									Xuất xứ
								</FieldLabel>
								<Input
									placeholder="Bảo Lộc, Việt Nam"
									value={field.state.value ?? ""}
									onChange={(e) => field.handleChange(e.target.value)}
									onBlur={field.handleBlur}
								/>
								<FieldError errors={field.state.meta.errors} />
							</Field>
						)}
					/>
				</div>

				{/* Row 5 */}
				<div className="grid grid-cols-2 gap-5">
					<form.Field
						name="info.leadTimeDays"
						children={(field) => (
							<Field>
								<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
									Thời gian chuẩn bị (ngày)
								</FieldLabel>
								<Input
									placeholder="7-10"
									value={field.state.value ?? ""}
									onChange={(e) => field.handleChange(e.target.value)}
									onBlur={field.handleBlur}
								/>
								<FieldError errors={field.state.meta.errors} />
							</Field>
						)}
					/>
					<form.Field
						name="info.segment"
						children={(field) => (
							<Field>
								<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
									Phân khúc
								</FieldLabel>
								<Select
									value={field.state.value ?? ""}
									onValueChange={(v) => {
										if (v !== null) field.handleChange(v);
									}}
								>
									<SelectTrigger className="w-full">
										<SelectValue placeholder="Chọn phân khúc" />
									</SelectTrigger>
									<SelectContent>
										{SEGMENT_OPTIONS.map((opt) => (
											<SelectItem key={opt.value} value={opt.value}>
												{opt.label}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
								<FieldError errors={field.state.meta.errors} />
							</Field>
						)}
					/>
				</div>

				{/* Row 6 */}
				<form.Field
					name="info.suitableFor"
					children={(field) => (
						<Field>
							<FieldLabel className="text-label-sm uppercase font-semibold text-on-surface-variant">
								Phù hợp
							</FieldLabel>
							<Textarea
								placeholder="Sơ mi, Váy đầm cao cấp"
								value={field.state.value ?? ""}
								onChange={(e) => field.handleChange(e.target.value)}
								onBlur={field.handleBlur}
								className="min-h-20"
							/>
							<FieldError errors={field.state.meta.errors} />
						</Field>
					)}
				/>
			</div>
		</div>
	);
}
