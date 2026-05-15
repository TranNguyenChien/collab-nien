import { useForm } from "@tanstack/react-form";
import {
	DEFAULT_CHANGEOVER_TIME,
	DEFAULT_COMPLETION_TIME,
	DEFAULT_MOQ,
	DEFAULT_PAYMENT_TERMS,
	DEFAULT_PRICE_SEGMENTS,
} from "../constant";

export function useOperationsForm() {
	const form = useForm({
		defaultValues: {
			changeoverTime: DEFAULT_CHANGEOVER_TIME.map((r) => ({ ...r })),
			completionTime: DEFAULT_COMPLETION_TIME.map((r) => ({ ...r })),
			moq: DEFAULT_MOQ.map((r) => ({ ...r })),
			priceSegments: DEFAULT_PRICE_SEGMENTS.map((r) => ({
				...r,
				selectedRanges: [...r.selectedRanges],
			})),
			paymentTerms: {
				...DEFAULT_PAYMENT_TERMS,
				progressItems: DEFAULT_PAYMENT_TERMS.progressItems.map((p) => ({
					...p,
				})),
			},
		},
		onSubmit: async ({ value }) => {
			// TODO: integrate with API
			console.log("submit", value);
		},
	});

	return { form };
}

export type OperationsForm = ReturnType<typeof useOperationsForm>["form"];
