import z from "zod";

export const signInSchema = z.object({
	email: z.email({
		error: (iss) =>
			iss.input === "" ? "Vui lòng nhập email của bạn" : undefined,
	}),
	password: z
		.string()
		.min(1, "Vui lòng nhập mật khẩu của bạn")
		.min(7, "Mật khẩu phải có ít nhất 7 ký tự"),
});
export type TSignUpSchema = z.infer<typeof signInSchema>;
