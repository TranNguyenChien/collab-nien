import type { Fabric, FabricStats } from "@/types/material";

export const FABRIC_STATS: FabricStats = {
	totalTypes: 128,
	waitingImport: 14,
	belowMinimum: 6,
};

export const FABRIC_STATUS_MAP = {
	"con-hang": { label: "Còn hàng", className: "text-green-700 bg-green-50" },
	"sap-het": { label: "Sắp hết", className: "text-error bg-error-container" },
	"het-hang": {
		label: "Hết hàng",
		className: "text-on-surface-variant bg-surface-container",
	},
	"cho-nhap": {
		label: "Chờ nhập",
		className: "text-amber-700 bg-amber-50",
	},
} as const;

export const FABRIC_GROUP_MAP = {
	"vai-chinh": { label: "Vải chính", className: "bg-blue-100 text-blue-800" },
	"vai-lot": { label: "Vải lót", className: "bg-purple-100 text-purple-800" },
	"phu-lieu": { label: "Phụ liệu", className: "bg-orange-100 text-orange-800" },
} as const;

export const COMPOSITION_MAP: Record<
	string,
	{ label: string; className: string }
> = {
	Cotton: { label: "Cotton", className: "bg-amber-100 text-amber-800" },
	"Organic Cotton": {
		label: "Organic Cotton",
		className: "bg-green-100 text-green-800",
	},
	"Linen (Flax)": {
		label: "Linen (Flax)",
		className: "bg-rose-100 text-rose-800",
	},
	Silk: { label: "Silk", className: "bg-indigo-100 text-indigo-800" },
	Wool: { label: "Wool", className: "bg-neutral-200 text-neutral-700" },
	Polyester: { label: "Polyester", className: "bg-cyan-100 text-cyan-800" },
	Nylon: { label: "Nylon", className: "bg-teal-100 text-teal-800" },
	Tencel: { label: "Tencel", className: "bg-emerald-100 text-emerald-800" },
};

export const FABRIC_ITEMS: Fabric[] = [
	{
		id: "1",
		code: "CT-POP-001",
		name: "Cotton",
		type: "Poplin",
		composition: "Cotton",
		group: "vai-chinh",
		status: "con-hang",
	},
	{
		id: "2",
		code: "CT-LWN-002",
		name: "Cotton",
		type: "Lawn",
		composition: "Organic Cotton",
		group: "vai-lot",
		status: "con-hang",
	},
	{
		id: "3",
		code: "CT-VOI-003",
		name: "Cotton",
		type: "Voile (Vải voan cotton)",
		composition: "Linen (Flax)",
		group: "phu-lieu",
		status: "sap-het",
	},
	{
		id: "4",
		code: "CT-OXF-004",
		name: "Cotton",
		type: "Oxford",
		composition: "Silk",
		group: "vai-chinh",
		status: "con-hang",
	},
	{
		id: "5",
		code: "CT-TWI-005",
		name: "Cotton",
		type: "Twill (Vải chéo)",
		composition: "Wool",
		group: "vai-chinh",
		status: "het-hang",
	},
	{
		id: "6",
		code: "PL-JER-006",
		name: "Polyester",
		type: "Jersey",
		composition: "Polyester",
		group: "vai-chinh",
		status: "con-hang",
	},
	{
		id: "7",
		code: "NY-RIP-007",
		name: "Nylon",
		type: "Ripstop",
		composition: "Nylon",
		group: "vai-chinh",
		status: "cho-nhap",
	},
	{
		id: "8",
		code: "TC-LYO-008",
		name: "Tencel",
		type: "Lyocell",
		composition: "Tencel",
		group: "vai-lot",
		status: "con-hang",
	},
	{
		id: "9",
		code: "WL-GAB-009",
		name: "Wool",
		type: "Gabardine",
		composition: "Wool",
		group: "vai-chinh",
		status: "sap-het",
	},
	{
		id: "10",
		code: "CT-CAN-010",
		name: "Cotton",
		type: "Canvas",
		composition: "Cotton",
		group: "phu-lieu",
		status: "cho-nhap",
	},
	{
		id: "11",
		code: "SK-SAT-011",
		name: "Silk",
		type: "Satin",
		composition: "Silk",
		group: "vai-lot",
		status: "con-hang",
	},
	{
		id: "12",
		code: "CT-DEN-012",
		name: "Cotton",
		type: "Denim",
		composition: "Cotton",
		group: "vai-chinh",
		status: "het-hang",
	},
];

export const ITEMS_PER_PAGE = 5;
