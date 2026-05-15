export const WORKER_SKILL_OPTIONS = [
	{ value: "pho_thong", label: "THỢ PHỔ THÔNG" },
	{ value: "trung_ky", label: "THỢ TRUNG KỸ" },
	{ value: "ky", label: "THỢ KỸ" },
	{ value: "cao_cap", label: "THỢ CAO CẤP" },
] as const;

export type WorkerSkillValue = (typeof WORKER_SKILL_OPTIONS)[number]["value"];

export const EXPERIENCE_OPTIONS = [
	{ value: "none", label: "Không có" },
	{ value: "one", label: "Có 1 người" },
	{ value: "two_plus", label: "Có >= 2 người" },
] as const;

export type ExperienceValue = (typeof EXPERIENCE_OPTIONS)[number]["value"];

export const OPERATION_SCALE_STATS = [
	{ id: "lines", label: "SỐ CHUYỀN MAY", value: 12, unit: "" },
	{ id: "days", label: "SỐ NGÀY LÀM/THÁNG", value: 26, unit: "" },
	{ id: "efficiency", label: "HIỆU SUẤT (%)", value: 85, unit: "%" },
] as const;

export const DEFAULT_MAX_OUTPUT = [
	{ label: "Phổ thông", quantity: 15000 },
	{ label: "Trung kỹ", quantity: 8000 },
	{ label: "Kỹ", quantity: 3500 },
] as const;

export const DYEING_PROCESS_OPTIONS = [
	"Nhuộm & In truyền thống",
	"Nhuộm phản ứng",
	"Nhuộm hoạt tính",
	"Nhuộm trực tiếp",
] as const;

export const PRINTING_METHOD_OPTIONS = [
	"In lụa",
	"In kỹ thuật số",
	"In nhiệt",
	"In offset",
] as const;

export const FABRIC_TYPE_OPTIONS = [
	"Denim/Jean",
	"Cotton 100%",
	"Polyester",
	"Linen",
	"Silk",
	"Wool",
] as const;

export const BASIC_PROCESSING_OPTIONS = [
	"Enzyme Wash",
	"Softener Wash",
	"Stone Wash",
	"Bleach Wash",
] as const;

export const ADVANCED_PROCESSING_OPTIONS = [
	"Acid Wash",
	"Anti-pilling",
	"Mercerizing",
	"Sanforizing",
] as const;

export const MACHINERY_OPTIONS = [
	"Máy nhuộm quay",
	"Máy giặt cửa ngang",
	"Máy nhuộm liên tục",
	"Máy hoàn tất",
] as const;

export const EFFECT_OPTIONS = [
	"Mềm mướt, vintage",
	"Hạn chế xù lông",
	"Bóng mịn",
	"Co rút kiểm soát",
] as const;

export type TechniqueRow = {
	id: string;
	name: string;
	phoThong: boolean;
	trungKy: boolean;
	ky: boolean;
};

export type OutputRow = {
	label: string;
	quantity: number;
};

export type ColorBlendingRow = {
	id: string;
	fabricCode: string;
	maxColors: number;
	dyeingProcess: string;
	printingMethod: string;
	colorStability: string;
	colorFastness: string;
	lotMatching: string;
	restrictions: string;
};

export type MaterialProcessingRow = {
	id: string;
	fabricType: string;
	basicProcessing: string;
	advancedProcessing: string;
	machinery: string;
	effect: string;
	shrinkagePercent: string;
	shrinkageWidth: string;
};

export const DEFAULT_TECHNIQUES: TechniqueRow[] = [
	{
		id: "example",
		name: "Ví dụ: Tra khóa giọt lệ",
		phoThong: false,
		trungKy: false,
		ky: false,
	},
	{ id: "row2", name: "", phoThong: false, trungKy: false, ky: false },
	{ id: "row3", name: "", phoThong: false, trungKy: false, ky: false },
];

export const DEFAULT_COLOR_BLENDING: ColorBlendingRow[] = [
	{
		id: "cb-001",
		fabricCode: "Mơ vải Cotton 100%",
		maxColors: 12,
		dyeingProcess: "Nhuộm & In truyền thống",
		printingMethod: "In lụa",
		colorStability: "Grey Scale: 4.0 / 5 / ΔE 1.2",
		colorFastness: "Tốt (ISO 4)",
		lotMatching: "Grey Scale: 4.5 / 5",
		restrictions: "Vải mỏng nhạy nhiệt",
	},
];

export const DEFAULT_MATERIAL_PROCESSING: MaterialProcessingRow[] = [
	{
		id: "mp-001",
		fabricType: "Denim/Jean",
		basicProcessing: "Enzyme Wash",
		advancedProcessing: "Acid Wash",
		machinery: "Máy nhuộm quay",
		effect: "Mềm mướt, vintage",
		shrinkagePercent: "< 1%",
		shrinkageWidth: "3-5%",
	},
	{
		id: "mp-002",
		fabricType: "Cotton 100%",
		basicProcessing: "Softener Wash",
		advancedProcessing: "Anti-pilling",
		machinery: "Máy giặt cửa ngang",
		effect: "Hạn chế xù lông",
		shrinkagePercent: "~0.5%",
		shrinkageWidth: "< 2%",
	},
];
