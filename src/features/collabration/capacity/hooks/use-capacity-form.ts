import { useForm } from "@tanstack/react-form";
import {
	type ColorBlendingRow,
	DEFAULT_COLOR_BLENDING,
	DEFAULT_MATERIAL_PROCESSING,
	DEFAULT_MAX_OUTPUT,
	DEFAULT_TECHNIQUES,
	type ExperienceValue,
	type MaterialProcessingRow,
	type OutputRow,
	type TechniqueRow,
	type WorkerSkillValue,
} from "../constant";

export type CapacityFormValues = {
	workerSkills: WorkerSkillValue[];
	currentWorkers: number;
	seamsters: number;
	seniorExperience: ExperienceValue;
	techniques: TechniqueRow[];
	maxOutput: OutputRow[];
	colorBlending: ColorBlendingRow[];
	materialProcessing: MaterialProcessingRow[];
};

export function useCapacityForm() {
	const form = useForm({
		defaultValues: {
			workerSkills: [] as WorkerSkillValue[],
			currentWorkers: 0 as number,
			seamsters: 0 as number,
			seniorExperience: "none" as ExperienceValue,
			techniques: DEFAULT_TECHNIQUES as TechniqueRow[],
			maxOutput: DEFAULT_MAX_OUTPUT.map((o) => ({ ...o })) as OutputRow[],
			colorBlending: DEFAULT_COLOR_BLENDING as ColorBlendingRow[],
			materialProcessing:
				DEFAULT_MATERIAL_PROCESSING as MaterialProcessingRow[],
		},
		onSubmit: async ({ value }) => {
			// TODO: integrate with API
			console.log("submit", value);
		},
	});

	return { form };
}

export type CapacityForm = ReturnType<typeof useCapacityForm>["form"];
