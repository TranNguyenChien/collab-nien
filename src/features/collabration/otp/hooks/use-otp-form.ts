import { useAppForm, useFormContext } from "@/context/form-context";
import { OTPSchema } from "@/features/collabration/otp/schema";

export function useOTPForm() {
	const form = useAppForm({
		defaultValues: {
			otp: "",
		},
		validators: {
			onSubmit: OTPSchema,
		},
	});

	return { form };
}

export type OTPFormInstance = ReturnType<typeof useOTPForm>["form"];

export function useOTPFormContext(): OTPFormInstance {
	return useFormContext() as unknown as OTPFormInstance;
}
