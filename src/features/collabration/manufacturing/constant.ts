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

// ── Equipment & Quality Page ──────────────────────────────────────────────────

export type MachineRow = {
	id: string;
	name: string;
	quantity: number;
	operators: number;
};

export const DEFAULT_MACHINES: MachineRow[] = [
	{ id: "m-001", name: "Máy 1 kim", quantity: 12, operators: 12 },
	{ id: "m-002", name: "Máy vắt sổ", quantity: 5, operators: 5 },
	{ id: "m-003", name: "Máy đính cúc", quantity: 2, operators: 1 },
];

export type SegmentKey = "phoThong" | "trungKy" | "kyCapCao";

export const SEGMENT_LABELS: Record<SegmentKey, string> = {
	phoThong: "Phổ thông",
	trungKy: "Trung kỳ",
	kyCapCao: "Kỹ (Cao cấp)",
} as const;

export type OutputRow = {
	segment: SegmentKey;
	quantity: number;
};

export const DEFAULT_OUTPUT: OutputRow[] = [
	{ segment: "phoThong", quantity: 25000 },
	{ segment: "trungKy", quantity: 10000 },
	{ segment: "kyCapCao", quantity: 5000 },
];

export type ErrorRateRow = {
	segment: SegmentKey;
	rate: number;
};

export const DEFAULT_ERROR_RATES: ErrorRateRow[] = [
	{ segment: "phoThong", rate: 3.5 },
	{ segment: "trungKy", rate: 1.8 },
	{ segment: "kyCapCao", rate: 0.8 },
];

export type QcMethod =
	| "inlineFinalChecklist"
	| "inlineFinal"
	| "finalPrePack"
	| "chiFinal"
	| "camTinh"
	| "khongQc";

export const QC_METHOD_LABELS: Record<QcMethod, string> = {
	inlineFinalChecklist: "INLINE + FINAL + CHECKLIST",
	inlineFinal: "INLINE + FINAL",
	finalPrePack: "FINAL + PRE-PACK",
	chiFinal: "CHỈ FINAL",
	camTinh: "QC CẢM TÍNH / KHÔNG BIỂU MẪU",
	khongQc: "KHÔNG CÓ QC",
} as const;

export const QC_METHODS: QcMethod[] = [
	"inlineFinalChecklist",
	"inlineFinal",
	"finalPrePack",
	"chiFinal",
	"camTinh",
	"khongQc",
];

export type QcProcessRow = {
	segment: SegmentKey;
	method: QcMethod;
};

export const DEFAULT_QC_PROCESS: QcProcessRow[] = [
	{ segment: "phoThong", method: "finalPrePack" },
	{ segment: "trungKy", method: "inlineFinal" },
	{ segment: "kyCapCao", method: "inlineFinalChecklist" },
];

// ── Operations & Reliability Page ─────────────────────────────────────────────

export type PriceRange =
	| "under300"
	| "range300to500"
	| "range500to1m"
	| "range1mto3m"
	| "over3m";

export const PRICE_RANGES: PriceRange[] = [
	"under300",
	"range300to500",
	"range500to1m",
	"range1mto3m",
	"over3m",
];

export const PRICE_RANGE_LABELS: Record<PriceRange, string> = {
	under300: "Dưới 300 nghìn đồng",
	range300to500: "Từ 300 - 500 nghìn đồng",
	range500to1m: "Từ 500 - 1 triệu đồng",
	range1mto3m: "Từ 1tr - 3 triệu đồng",
	over3m: "Từ 3 triệu trở lên",
} as const;

export const MAX_PRICE_RANGES_PER_SEGMENT = 2;

export type TimeRow = {
	segment: SegmentKey;
	hours: number | null;
};

export const DEFAULT_CHANGEOVER_TIME: TimeRow[] = [
	{ segment: "phoThong", hours: null },
	{ segment: "trungKy", hours: null },
	{ segment: "kyCapCao", hours: null },
];

export const DEFAULT_COMPLETION_TIME: TimeRow[] = [
	{ segment: "phoThong", hours: null },
	{ segment: "trungKy", hours: null },
	{ segment: "kyCapCao", hours: null },
];

export type MoqRow = {
	segment: SegmentKey;
	quantity: number;
};

export const DEFAULT_MOQ: MoqRow[] = [
	{ segment: "phoThong", quantity: 0 },
	{ segment: "trungKy", quantity: 0 },
	{ segment: "kyCapCao", quantity: 0 },
];

export type PriceSegmentRow = {
	segment: SegmentKey;
	selectedRanges: PriceRange[];
};

export const DEFAULT_PRICE_SEGMENTS: PriceSegmentRow[] = [
	{ segment: "phoThong", selectedRanges: [] },
	{ segment: "trungKy", selectedRanges: [] },
	{ segment: "kyCapCao", selectedRanges: [] },
];

export type ProgressItem = {
	key: string;
	label: string;
	rate: number;
};

export const DEFAULT_PROGRESS_ITEMS: ProgressItem[] = [
	{ key: "chuanBiVatTu", label: "Chuẩn bị vật tư", rate: 10 },
	{ key: "mayMau", label: "May mẫu", rate: 10 },
	{ key: "mayHangLoat", label: "May hàng loạt", rate: 20 },
	{ key: "hoanThien", label: "Hoàn thiện", rate: 5 },
];

export type PaymentTermsValues = {
	depositRate: number;
	progressItems: ProgressItem[];
	finalRate: number;
	debtDays: number;
};

export const DEFAULT_PAYMENT_TERMS: PaymentTermsValues = {
	depositRate: 30,
	progressItems: DEFAULT_PROGRESS_ITEMS.map((p) => ({ ...p })),
	finalRate: 25,
	debtDays: 30,
};

export type OperationsFormValues = {
	changeoverTime: TimeRow[];
	completionTime: TimeRow[];
	moq: MoqRow[];
	priceSegments: PriceSegmentRow[];
	paymentTerms: PaymentTermsValues;
};
