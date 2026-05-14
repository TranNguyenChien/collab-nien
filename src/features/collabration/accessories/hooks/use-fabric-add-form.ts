import { useAppForm, useFormContext } from "@/context/form-context";
import {
	fabricAddSchema,
	type TFabricAddSchema,
} from "@/features/collabration/accessories/schema";

const DEFAULT_VALUES: TFabricAddSchema = {
	info: {
		name: "",
		fabricType: "",
		alias: "",
		gsm: "",
		compositions: [{ component: "", percentage: "" }],
		widthCm: "",
		origin: "",
		leadTimeDays: "",
		segment: "",
		suitableFor: "",
	},
	components: [],
};

export function useFabricAddForm(onSubmit: (data: TFabricAddSchema) => void) {
	const form = useAppForm({
		defaultValues: DEFAULT_VALUES,
		validators: {
			onSubmit: fabricAddSchema,
		},
		onSubmit: ({ value }) => {
			onSubmit(value);
		},
	});

	return { form };
}

export type FabricFormInstance = ReturnType<typeof useFabricAddForm>["form"];

export function useFabricFormContext(): FabricFormInstance {
	return useFormContext() as unknown as FabricFormInstance;
}
