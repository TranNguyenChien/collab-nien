import { z } from "zod";

const orgSchema = z.object({
	name: z.string().min(1, "Tên tổ chức không được để trống"),
	businessType: z.string().min(1, "Loại hình kinh doanh không được để trống"),
	registrationLocation: z
		.string()
		.min(1, "Nơi đăng ký kinh doanh không được để trống"),
	taxCode: z
		.string()
		.min(1, "Mã số thuế không được để trống")
		.regex(/^\d{10}(-\d{3})?$/, "Mã số thuế không hợp lệ (10 hoặc 13 chữ số)"),
	establishedDate: z.date().min(1, "Ngày thành lập không được để trống"),
	authorizationDoc: z.string().min(1, "Giấy tờ ủy quyền không được để trống"),
	address: z.string().min(1, "Địa chỉ không được để trống"),
});

const representativeSchema = z.object({
	fullName: z.string().min(1, "Họ và tên không được để trống"),
	position: z.string().min(1, "Chức vụ không được để trống"),
	nationalId: z
		.string()
		.min(1, "Số CCCD/CMND không được để trống")
		.regex(/^\d{12}$/, "Số CCCD phải gồm 12 chữ số"),
	idIssueDate: z.date().min(1, "Ngày cấp không được để trống"),
	idIssuePlace: z.string().min(1, "Nơi cấp không được để trống"),
	phone: z
		.string()
		.min(1, "Số điện thoại không được để trống")
		.regex(/^(0|\+84)[0-9]{9}$/, "Số điện thoại không hợp lệ"),
	dateOfBirth: z.date().min(1, "Ngày sinh không được để trống"),
	gender: z.string().min(1, "Giới tính không được để trống"),
	contactAddress: z.string().min(1, "Địa chỉ liên hệ không được để trống"),
});

const workshopSchema = z.object({
	type: z.enum(["FOB", "OEM"], {
		error: "Loại xưởng may không được để trống",
	}),
	experience: z
		.array(z.enum(["local_brand", "high_end", "designer", "export"]))
		.min(1, "Vui lòng chọn ít nhất một kinh nghiệm"),
});

const bankSchema = z.object({
	accountNumber: z.string().min(1, "Số tài khoản không được để trống"),
	accountName: z.string().min(1, "Tên Tài khoản không được để trống"),
	bankName: z.string().min(1, "Tên ngân hàng không được để trống"),
});

export const signUpSchema = z.object({
	org: orgSchema,
	representative: representativeSchema,
	workshop: workshopSchema,
	bank: bankSchema,
	agreedToAccuracy: z.literal(true, {
		error: "Bạn cần xác nhận tính chính xác của thông tin",
	}),
	agreedToTerms: z.literal(true, {
		error: "Bạn cần đồng ý với điều khoản sử dụng",
	}),
});

export type TSignUpSchema = z.infer<typeof signUpSchema>;
