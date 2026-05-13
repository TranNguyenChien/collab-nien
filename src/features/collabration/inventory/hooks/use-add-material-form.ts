import { useAppForm, useFormContext } from "@/context/form-context";
import type { TMaterialSchema } from "@/features/collabration/inventory/schema";
import { materialSchema } from "@/features/collabration/inventory/schema";

const DEFAULT_ZIPPER_VALUES = {
	type: "khoa-keo" as const,
	productName: "",
	brand: "",
	zipperTypeRange: "",
	material: "",
	openClose: "open-end" as const,
	sliderPullType: "",
	lengthWidth: "",
	colorFinish: "",
	leadTime: "",
	segment: "premium" as const,
	price: 0,
};

const DEFAULT_BUTTON_VALUES = {
	type: "cuc-nut" as const,
	productName: "",
	material: "",
	size: "",
	diameter: "",
	buttonType: "",
	thickness: "",
	pantoneColor: "",
	finish: "",
	brand: "",
	leadTime: "",
	segment: "premium" as const,
	price: 0,
};

const DEFAULT_ELASTIC_VALUES = {
	type: "day-thun-bias" as const,
	productName: "",
	composition: "",
	width: "",
	stretchPercent: "",
	foldType: "single-fold" as const,
	fabricType: "",
	pantone: "",
	materialType: "",
	wastePercent: "",
	leadTime: "",
	price: 0,
};

const DEFAULT_HOOK_VALUES = {
	type: "moc-cai-khoa" as const,
	productName: "",
	brand: "",
	sizeDimension: "",
	rowsColumns: "",
	colorFinish: "",
	description: "",
	leadTime: "",
	segment: "premium" as const,
	price: 0,
};

const DEFAULT_THREAD_VALUES = {
	type: "chi-may" as const,
	threadType: "",
	tex: "",
	brand: "",
	material: [""],
	twist: "s-twist" as const,
	colorTable: [{ pantone: "", colorCode: "", colorRef: "" }],
	stitchType: "",
	machineType: "",
	wastePercent: "",
	leadTime: "",
	unit: "",
	price: 0,
};

const DEFAULT_EMBROIDERY_VALUES = {
	type: "chi-theu" as const,
	threadType: "",
	texWeight: "",
	brand: "",
	material: "",
	colorType: "",
	shineGrade: "",
	stitchType: "",
	machineType: "",
	wastePercent: "",
	leadTime: "",
	unit: "",
	price: 0,
};

const DEFAULT_VALUES_BY_TYPE = {
	zipper: DEFAULT_ZIPPER_VALUES,
	button_snap: DEFAULT_BUTTON_VALUES,
	elastic_bias: DEFAULT_ELASTIC_VALUES,
	hook_clasp: DEFAULT_HOOK_VALUES,
	sewing_thread: DEFAULT_THREAD_VALUES,
	embroidery: DEFAULT_EMBROIDERY_VALUES,
} as const;

export function useMaterialForm(
	onSubmit: (data: TMaterialSchema) => void,
	defaultValues?: TMaterialSchema,
) {
	const initialValues = defaultValues ?? DEFAULT_VALUES_BY_TYPE;

	const form = useAppForm({
		defaultValues: initialValues as TMaterialSchema,
		validators: {
			onSubmit: materialSchema,
		},
		onSubmit: ({ value }) => {
			onSubmit(value);
		},
	});

	return { form };
}

export type MaterialFormInstance = ReturnType<typeof useMaterialForm>["form"];

export function useMaterialFormContext(): MaterialFormInstance {
	return useFormContext() as unknown as MaterialFormInstance;
}
