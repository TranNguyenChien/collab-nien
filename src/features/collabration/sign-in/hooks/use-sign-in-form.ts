import { useAppForm, useFormContext } from "@/context/form-context";
import { signInSchema } from "@/features/collabration/sign-in/schema";

export function useSignInForm() {
	const form = useAppForm({
		defaultValues: {
			email: "",
			password: "",
		},
		validators: {
			onSubmit: signInSchema,
		},
	});

	return { form };
}

export type SignInFormInstance = ReturnType<typeof useSignInForm>["form"];

export function useSignInFormContext(): SignInFormInstance {
	return useFormContext() as unknown as SignInFormInstance;
}
