export const FACTORY_NAME = "Xưởng may A1";
export const REPORT_TYPE = "Báo cáo định kỳ";
export const REPORT_DATE = "Thứ Hai, 24 Tháng 6, 2024";

export const MANUFACTURING_STATS = [
	{
		id: "orders",
		label: "Tổng đơn hàng đang chạy",
		value: "12",
		delta: "+2 so với tuần trước",
	},
	{
		id: "output",
		label: "Tổng sản lượng",
		value: "45,000",
		unit: "pcs",
	},
	{
		id: "capacity",
		label: "% Công suất sử dụng",
		value: "92%",
		capacity: 92,
	},
] as const;

export type OrderStatus =
	| "Đang sản xuất"
	| "Hoàn thành"
	| "Đã chuẩn bị xong"
	| "Chưa sẵn sàng";

export const ORDER_STATUS_STYLES: Record<OrderStatus, string> = {
	"Đang sản xuất": "bg-primary/10 text-primary",
	"Hoàn thành": "bg-secondary-container text-on-secondary-container",
	"Đã chuẩn bị xong": "bg-surface-container-highest text-on-surface-variant",
	"Chưa sẵn sàng": "bg-error-container text-on-error-container",
} as const;

export type NoteType = "normal" | "warning";

export const PRIORITY_ORDERS = [
	{
		id: "#MH-2024-001",
		name: "Áo Blazer Linen Cao Cấp",
		quantity: 5000,
		status: "Đang sản xuất" as OrderStatus,
		note: "May",
		noteValue: "+3 ngày",
		noteType: "normal" as NoteType,
		bordered: false,
	},
	{
		id: "#MH-2024-042",
		name: "Quần Tây Oxford Nam",
		quantity: 2500,
		status: "Hoàn thành" as OrderStatus,
		note: "Hoàn thiện",
		noteValue: "+2 ngày",
		noteType: "normal" as NoteType,
		bordered: false,
	},
	{
		id: "#MH-2024-089",
		name: "Đầm Dạ Hội Silk",
		quantity: 1200,
		status: "Đã chuẩn bị xong" as OrderStatus,
		note: "Cắt",
		noteValue: "Đúng hạn",
		noteType: "normal" as NoteType,
		bordered: false,
	},
	{
		id: "#MH-2024-105",
		name: "Sơ Mi Công Sở Nữ",
		quantity: 8000,
		status: "Chưa sẵn sàng" as OrderStatus,
		note: "Vải",
		noteValue: "Chậm 1 ngày",
		noteType: "warning" as NoteType,
		bordered: true,
	},
] as const;

export const STAFF_TIERS = [
	{
		label: "Thợ phổ thông",
		description: "Sơ cấp, đóng gói, cắt chỉ",
		percentage: 45,
	},
	{
		label: "Thợ trung kỳ",
		description: "May ráp, hoàn thiện cơ bản",
		percentage: 35,
	},
	{
		label: "Thợ kỹ",
		description: "Mẫu, túi, cổ, kỹ thuật khó",
		percentage: 20,
	},
] as const;

export const OUTPUT_TIERS = [
	{ label: "Phổ thông", quantity: 20000 },
	{ label: "Trung kỳ", quantity: 12000 },
	{ label: "Thợ kỹ", quantity: 6000 },
] as const;

export const TECHNICAL_CATEGORIES = [
	"Áo thun (T-shirt)",
	"Áo Polo",
	"Áo Sơ mi (Shirt)",
	"Sportswear",
] as const;

export const PARTNER_BRANDS = [
	"NIKE MANUFACTURING",
	"ADIDAS ECO-THREADS",
	"UNIQLO QUALITY CIRCLE",
	"ZARA SUPPLY CHAIN",
	"H&M GLOBAL STANDARD",
	"GAP INC. PARTNERS",
] as const;

// ── Capacity Detail Page ──────────────────────────────────────────────────────

export const WORKER_SKILL_TABS = [
	"Thợ Phổ Thông",
	"Thợ Trung Kỹ",
	"Thợ Kỹ",
	"Thợ Cao Cấp",
] as const;

export type WorkerSkillTab = (typeof WORKER_SKILL_TABS)[number];

export const WORKER_EXPERIENCE_OPTIONS = [
	{ value: "none", label: "Không có" },
	{ value: "one", label: "Có 1 người" },
	{ value: "two_plus", label: "Có >= 2 người" },
] as const;

export const OPERATION_SCALE = {
	productionLines: 12,
	workingDaysPerMonth: 26,
	efficiencyPercent: 85,
} as const;

export const MAX_OUTPUT_PER_MONTH = [
	{ label: "Hàng phổ thông", quantity: 15000 },
	{ label: "Hàng trung kỹ", quantity: 8000 },
	{ label: "Hàng kỹ thuật cao", quantity: 3500 },
] as const;

export type ColorBlendingRow = {
	id: string;
	fabricCode: string;
	quantity: number;
	dyeingProcess: string;
	printingMethod: string;
	greyScaleTest: string;
	isoTest: string;
	fastnessRating: string;
	notes: string;
	level: string;
	leadTime: string;
	specialNote: string;
};

export const COLOR_BLENDING_DATA: ColorBlendingRow[] = [
	{
		id: "cb-001",
		fabricCode: "Cotton 100%",
		quantity: 12,
		dyeingProcess: "Nhuộm & In truyền thống",
		printingMethod: "In lụa",
		greyScaleTest: "Grey Scale: 4.0 / 5 / ΔE 1.2",
		isoTest: "Tốt (ISO 4)",
		fastnessRating: "Grey Scale: 4.5 / 5",
		notes: "Vải mỏng nhạy nhiệt",
		level: "Trung kỳ",
		leadTime: "7-10 ngày",
		specialNote: "Kiểm soát nhiệt độ sấy < 150°C",
	},
];

export type MaterialEffectTag = {
	id: string;
	label: string;
};

export type MaterialProcessingRow = {
	id: string;
	fabricType: string;
	processingMethod: string;
	processingStyle: string;
	machinery: string;
	effect: string;
	shrinkageLength: string;
	shrinkageWidth: string;
	sideEffects: MaterialEffectTag[];
	duration: string;
	segment: string;
	note: string;
};

export const MATERIAL_PROCESSING_DATA: MaterialProcessingRow[] = [
	{
		id: "mp-001",
		fabricType: "Denim/Jean",
		processingMethod: "Enzyme Wash",
		processingStyle: "Acid Wash",
		machinery: "Máy nhuộm quay",
		effect: "Mềm mướt, vintage",
		shrinkageLength: "< 1%",
		shrinkageWidth: "3-5%",
		sideEffects: [
			{ id: "se-1", label: "Vặn ống" },
			{ id: "se-2", label: "Sờn mép" },
			{ id: "se-3", label: "Cháy chỉ" },
			{ id: "se-4", label: "Bạc màu cục bộ" },
		],
		duration: "45 phút",
		segment: "Premium",
		note: "Yêu cầu kiểm soát nồng độ Clo",
	},
	{
		id: "mp-002",
		fabricType: "Cotton 100%",
		processingMethod: "Softener Wash",
		processingStyle: "Anti-pilling",
		machinery: "Máy giặt cửa ngang",
		effect: "Hạn chế xù lông",
		shrinkageLength: "~0.5%",
		shrinkageWidth: "< 2%",
		sideEffects: [
			{ id: "se-5", label: "Bóng nhẹ" },
			{ id: "se-6", label: "Co rút dọc" },
			{ id: "se-7", label: "Biến màu nhẹ" },
		],
		duration: "30 phút",
		segment: "Standard",
		note: "Dùng nước xả chuyên dụng cao cấp",
	},
];
