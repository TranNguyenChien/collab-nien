import { Shirt } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Field,
	FieldError,
	FieldLabel,
	FieldLegend,
} from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { useSignUpFormContext } from "@/features/auth/sign-up/hooks/use-sign-up-form";
import type { TSignUpSchema } from "@/features/auth/sign-up/schema";

type WorkshopType = TSignUpSchema["workshop"]["type"];
type ExperienceValue = TSignUpSchema["workshop"]["experience"][number];

const WORKSHOP_TYPES: {
	value: WorkshopType;
	label: string;
	description: string;
}[] = [
	{
		value: "FOB",
		label: "Sản xuất FOB",
		description: "Free on Board — xưởng tự chủ nguyên liệu và sản xuất",
	},
	{
		value: "OEM",
		label: "Sản xuất OEM",
		description: "Original Equipment Manufacturer — sản xuất theo mẫu",
	},
];

const EXPERIENCE_OPTIONS: { value: ExperienceValue; label: string }[] = [
	{ value: "local_brand", label: "Local Brand" },
	{ value: "high_end", label: "High-end Brand" },
	{ value: "designer", label: "Designer" },
	{ value: "export", label: "Export" },
];

export function WorkshopExperienceSection() {
	const form = useSignUpFormContext();

	return (
		<div className="grid grid-cols-2 gap-6">
			<div className="bg-surface-container-lowest rounded-lg p-6 shadow">
				<FieldLegend className="flex items-center gap-4 mb-4">
					<Shirt className="size-5 text-primary" />
					<h2 className="text-xl font-bold text-on-surface font-heads uppercase">
						3. Loại xưởng
					</h2>
				</FieldLegend>
				<Separator className="mb-8" />
				<form.Field
					name="workshop.type"
					children={(field) => {
						const isInvalid = !field.state.meta.isValid;
						return (
							<Field>
								<RadioGroup className="w-fit flex flex-col gap-4 mt-2">
									{WORKSHOP_TYPES.map((option) => (
										<div className="flex items-center gap-3" key={option.value}>
											<RadioGroupItem
												value={option.value}
												id={`r1-${option.value}`}
												className="size-5"
											/>
											<Label htmlFor={`r1-${option.value}`}>
												{option.label} ( {option.description} )
											</Label>
										</div>
									))}
								</RadioGroup>
								{isInvalid && <FieldError errors={field.state.meta.errors} />}
							</Field>
						);
					}}
				/>
			</div>
			<div className="bg-surface-container-lowest rounded-lg p-6 shadow">
				<FieldLegend className="flex items-center gap-4 mb-4">
					<Shirt className="size-5 text-primary" />
					<h2 className="text-xl font-bold text-on-surface font-heads uppercase">
						4. Kinh nghiệm
					</h2>
				</FieldLegend>
				<Separator className="mb-8" />
				<div className="">
					<form.Field
						name="workshop.experience"
						children={(field) => {
							const isInvalid = !field.state.meta.isValid;
							return (
								<div className="rounded-lg flex flex-col gap-4">
									<div className="grid grid-cols-2 gap-3">
										{EXPERIENCE_OPTIONS.map((option) => {
											const checked = field.state.value.includes(option.value);
											return (
												<Field orientation="horizontal" key={option.value}>
													<Checkbox
														id="toggle-checkbox"
														name="toggle-checkbox"
														checked={checked}
													/>
													<FieldLabel htmlFor="toggle-checkbox">
														{option.label}
													</FieldLabel>
												</Field>
											);
										})}
									</div>
									<div className="bg-primary-container/40 border border-primary-container rounded-lg p-3">
										<p className="text-xs text-on-primary-container">
											<span className="font-semibold">Lưu ý:</span> Vui lòng gửi
											hồ sơ năng lực theo địa chỉ email:{" "}
											<a href="mailto:info@snnson.vn" className="underline">
												info@dhnson.vn
											</a>
											. Chấp nhận file pdf, hình ảnh, tài liệu minh chứng.
										</p>
									</div>
									{isInvalid && <FieldError errors={field.state.meta.errors} />}
								</div>
							);
						}}
					/>
				</div>
			</div>
		</div>
	);
}
