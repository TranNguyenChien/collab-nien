import { useForm } from "@tanstack/react-form";
import {
	DEFAULT_ERROR_RATES,
	DEFAULT_MACHINES,
	DEFAULT_OUTPUT,
	DEFAULT_QC_PROCESS,
	type ErrorRateRow,
	type MachineRow,
	type OutputRow,
	type QcProcessRow,
} from "../constant";

export type EquipmentFormValues = {
	machines: MachineRow[];
	output: OutputRow[];
	errorRates: ErrorRateRow[];
	qcProcess: QcProcessRow[];
};

export function useEquipmentForm() {
	const form = useForm({
		defaultValues: {
			machines: DEFAULT_MACHINES.map((m) => ({ ...m })) as MachineRow[],
			output: DEFAULT_OUTPUT.map((o) => ({ ...o })) as OutputRow[],
			errorRates: DEFAULT_ERROR_RATES.map((e) => ({ ...e })) as ErrorRateRow[],
			qcProcess: DEFAULT_QC_PROCESS.map((q) => ({ ...q })) as QcProcessRow[],
		},
		onSubmit: async ({ value }) => {
			// TODO: integrate with API
			console.log("submit", value);
		},
	});

	return { form };
}

export type EquipmentForm = ReturnType<typeof useEquipmentForm>["form"];
