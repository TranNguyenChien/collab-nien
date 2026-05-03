import { useAppForm, useFormContext } from "@/context/form-context";
import { signUpSchema } from "@/features/auth/sign-up/schema";

export function useSignUpForm() {
	const now = new Date();
	const form = useAppForm({
		defaultValues: {
			org: {
				name: "",
				businessType: "",
				registrationLocation: "",
				taxCode: "",
				establishedDate: now,
				authorizationDoc: "",
				address: "",
			},
			representative: {
				fullName: "",
				position: "",
				nationalId: "",
				idIssueDate: now,
				idIssuePlace: "",
				phone: "",
				dateOfBirth: now,
				gender: "",
				contactAddress: "",
			},
			workshop: {
				type: "FOB" as "FOB" | "OEM",
				experience: [] as Array<
					"local_brand" | "high_end" | "designer" | "export"
				>,
			},
			bank: {
				accountNumber: "",
				accountName: "",
				bankName: "",
			},
			agreedToAccuracy: false,
			agreedToTerms: false,
		},
		validators: {
			onSubmit: signUpSchema,
		},
	});

	return { form };
}

export type SignUpFormInstance = ReturnType<typeof useSignUpForm>["form"];

export function useSignUpFormContext(): SignUpFormInstance {
	return useFormContext() as unknown as SignUpFormInstance;
}
