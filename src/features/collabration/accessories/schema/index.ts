import { z } from "zod";

// ─── Enums ────────────────────────────────────────────────────────────────────

export const fabricTypeEnum = z.enum(["vai-chinh", "vai-lot", "phu-lieu"], {
	error: "Vui lòng chọn loại vải",
});

export const fabricSegmentEnum = z.enum(["cao-cap", "trung-cap", "pho-thong"], {
	error: "Vui lòng chọn phân khúc",
});

// ─── Composition row ──────────────────────────────────────────────────────────

export const compositionRowSchema = z.object({
	component: z.string().min(1, "Thành phần không được để trống"),
	percentage: z.string().min(1, "Thông số không được để trống"),
});

export type TCompositionRow = z.infer<typeof compositionRowSchema>;

// ─── Fabric info section ──────────────────────────────────────────────────────

export const fabricInfoSchema = z.object({
	name: z.string().min(1, "Tên vải không được để trống"),
	fabricType: z.string().optional(),
	alias: z.string().optional(),
	gsm: z.string().optional(),
	compositions: z
		.array(compositionRowSchema)
		.min(1, "Cần ít nhất 1 thành phần"),
	widthCm: z.string().optional(),
	origin: z.string().optional(),
	leadTimeDays: z.string().optional(),
	segment: z.string().optional(),
	suitableFor: z.string().optional(),
});

export type TFabricInfoSchema = z.infer<typeof fabricInfoSchema>;

// ─── Fabric component row (kỹ thuật) ─────────────────────────────────────────

export const fabricComponentSchema = z.object({
	id: z.string(),
	name: z.string().min(1, "Tên vải không được để trống"),
	pantoneTcx: z.string().optional(),
	pantoneColor: z.string().optional(),
	wastagePercent: z.string().optional(),
	shrinkagePercent: z.string().optional(),
	pricePerMeter: z
		.number({ error: "Giá phải là số" })
		.nonnegative("Giá không được âm")
		.optional(),
});

export type TFabricComponentSchema = z.infer<typeof fabricComponentSchema>;

// ─── Combined schema ──────────────────────────────────────────────────────────

export const fabricAddSchema = z.object({
	info: fabricInfoSchema,
	components: z.array(fabricComponentSchema),
});

export type TFabricAddSchema = z.infer<typeof fabricAddSchema>;
