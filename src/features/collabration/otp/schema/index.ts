import z from "zod";

export const OTPSchema = z.object({
	otp: z
		.string()
		.min(6, "Vui lòng nhập mã 6 chữ số.")
		.max(6, "Vui lòng nhập mã 6 chữ số."),
});
export type TSignUpSchema = z.infer<typeof OTPSchema>;
