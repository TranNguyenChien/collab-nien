import { z } from "zod";

// ─── Shared fields ────────────────────────────────────────────────────────────

const segmentEnum = z.enum(["economy", "standard", "premium", "luxury"], {
	error: "Vui lòng chọn phân khúc",
});

// ─── Khóa kéo (Zipper) ────────────────────────────────────────────────────────

export const zipperSchema = z.object({
	productName: z.string().min(1, "Tên sản phẩm không được để trống"),
	brand: z.string().min(1, "Thương hiệu không được để trống"),
	zipperTypeRange: z.string().min(1, "Loại khóa không được để trống"),
	size: z.string().min(1, "Kích thước không được để trống"),
	material: z.string().min(1, "Vật liệu không được để trống"),
	openClose: z.enum(["open-end", "close-end", "two-way"], {
		error: "Vui lòng chọn kiểu Open/Close",
	}),
	sliderPullType: z.string().min(1, "Đầu khóa & kiểu kéo không được để trống"),
	lengthWidth: z.string().min(1, "Chiều dài/Rộng không được để trống"),
	colorFinish: z.string().min(1, "Màu đầu/Răng/Slider không được để trống"),
	leadTime: z.string().min(1, "Thời gian chuẩn bị không được để trống"),
	segment: segmentEnum,
	price: z.number({ error: "Giá phải là số" }).positive("Giá phải lớn hơn 0"),
});

export type TZipperSchema = z.infer<typeof zipperSchema>;

// ─── Cúc & nút (Button / Snap) ───────────────────────────────────────────────

export const buttonSchema = z.object({
	productName: z.string().min(1, "Tên sản phẩm không được để trống"),
	material: z.string().min(1, "Vật liệu không được để trống"),
	size: z.string().min(1, "Size không được để trống"),
	diameter: z.string().min(1, "Đường kính không được để trống"),
	buttonType: z.string().min(1, "Kiểu nút không được để trống"),
	thickness: z.string().min(1, "Độ dày không được để trống"),
	pantoneColor: z.string().min(1, "Pantone / màu sắc không được để trống"),
	finish: z.string().min(1, "Finish không được để trống"),
	brand: z.string().min(1, "Thương hiệu không được để trống"),
	leadTime: z.string().min(1, "Thời gian chuẩn bị không được để trống"),
	segment: segmentEnum,
	price: z.number({ error: "Giá phải là số" }).positive("Giá phải lớn hơn 0"),
});

export type TButtonSchema = z.infer<typeof buttonSchema>;

// ─── Dây thun & Bias (Elastic / Bias) ────────────────────────────────────────

export const elasticSchema = z.object({
	productName: z.string().min(1, "Tên sản phẩm không được để trống"),
	composition: z.string().min(1, "Thành phần không được để trống"),
	width: z.string().min(1, "Chiều rộng không được để trống"),
	stretchPercent: z.string().min(1, "Độ co giãn không được để trống"),
	foldType: z.enum(["single-fold", "double-fold", "plain", "ribbed"], {
		error: "Vui lòng chọn kiểu dây",
	}),
	fabricType: z.string().min(1, "Woven/Knitted không được để trống"),
	pantone: z.string().optional(),
	materialType: z.string().min(1, "Loại NPL không được để trống"),
	wastePercent: z.string().optional(),
	leadTime: z.string().min(1, "Thời gian chuẩn bị không được để trống"),
	price: z.number({ error: "Giá phải là số" }).positive("Giá phải lớn hơn 0"),
});

export type TElasticSchema = z.infer<typeof elasticSchema>;

// ─── Móc cài / Khóa (Hook / Clasp) ───────────────────────────────────────────

export const hookSchema = z.object({
	productName: z.string().min(1, "Tên sản phẩm không được để trống"),
	brand: z.string().min(1, "Thương hiệu không được để trống"),
	sizeDimension: z.string().min(1, "Size / Kích thước không được để trống"),
	rowsColumns: z.string().min(1, "Số lượng / Số hộc không được để trống"),
	colorFinish: z.string().min(1, "Màu / Hoàn thiện không được để trống"),
	description: z.string().optional(),
	leadTime: z.string().min(1, "Thời gian chuẩn bị không được để trống"),
	segment: segmentEnum,
	price: z.number({ error: "Giá phải là số" }).positive("Giá phải lớn hơn 0"),
});

export type THookSchema = z.infer<typeof hookSchema>;

// ─── Color row (shared for thread sections) ───────────────────────────────────

const colorRowSchema = z.object({
	pantone: z.string().min(1, "Pantone không được để trống"),
	colorCode: z.string().min(1, "Mã màu không được để trống"),
	colorRef: z.string().optional(),
});

export type TColorRow = z.infer<typeof colorRowSchema>;

// ─── Chỉ may (Sewing Thread) ─────────────────────────────────────────────────

export const threadSchema = z.object({
	threadType: z.string().min(1, "Loại chỉ may không được để trống"),
	tex: z.string().min(1, "Tex không được để trống"),
	brand: z.string().min(1, "Thương hiệu không được để trống"),
	material: z.array(z.string()).min(1, "Cần ít nhất 1 Material"),
	twist: z.enum(["s-twist", "z-twist"], { error: "Vui lòng chọn type" }),
	colorTable: z.array(colorRowSchema).min(1, "Cần ít nhất 1 màu"),
	stitchType: z.string().min(1, "Mũi may không được để trống"),
	machineType: z.string().min(1, "Loại máy không được để trống"),
	wastePercent: z.string().optional(),
	leadTime: z.string().min(1, "Thời gian chuẩn bị không được để trống"),
	unit: z.string().min(1, "Đơn vị không được để trống"),
	price: z.number({ error: "Giá phải là số" }).positive("Giá phải lớn hơn 0"),
	note: z.string().optional(),
});

export type TThreadSchema = z.infer<typeof threadSchema>;

// ─── Chỉ thêu (Embroidery Thread) ────────────────────────────────────────────

export const embroiderySchema = z.object({
	threadType: z.string().min(1, "Loại chỉ thêu không được để trống"),
	texWeight: z.string().min(1, "TEX/Weight không được để trống"),
	brand: z.string().min(1, "Thương hiệu không được để trống"),
	material: z.string().min(1, "Material không được để trống"),
	colorType: z.string().min(1, "Type không được để trống"),
	shineGrade: z.string().min(1, "Độ bóng / bền màu không được để trống"),
	stitchType: z.string().min(1, "Mũi may không được để trống"),
	machineType: z.string().min(1, "Loại máy không được để trống"),
	wastePercent: z.string().optional(),
	leadTime: z.string().min(1, "Thời gian chuẩn bị không được để trống"),
	unit: z.string().min(1, "Đơn vị không được để trống"),
	price: z.number({ error: "Giá phải là số" }).positive("Giá phải lớn hơn 0"),
	note: z.string().optional(),
});

export type TEmbroiderySchema = z.infer<typeof embroiderySchema>;

// ─── Discriminated union ──────────────────────────────────────────────────────

export const materialSchema = z.object({
	zipper: zipperSchema,
	button_snap: buttonSchema,
	elastic_bias: elasticSchema,
	hook_clasp: hookSchema,
	sewing_thread: threadSchema,
	embroidery: embroiderySchema,
});

export type TMaterialSchema = z.infer<typeof materialSchema>;
