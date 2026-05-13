import { Spool } from "lucide-react";
import type { FC, SVGProps } from "react";
import ButtonSnap from "@/assets/icons/button-snap.svg?react";
import ElasticBias from "@/assets/icons/elastic-bias.svg?react";
import Embroidery from "@/assets/icons/embroidery.svg?react";
import HookClasp from "@/assets/icons/hook-clasp.svg?react";
import SewingThread from "@/assets/icons/sewing-thread.svg?react";

import { ButtonFields } from "@/features/collabration/inventory/components/forms/button-fields";
import { ElasticFields } from "@/features/collabration/inventory/components/forms/elastic-fields";
import { EmbroideryFields } from "@/features/collabration/inventory/components/forms/embroidery-fields";
import { HookFields } from "@/features/collabration/inventory/components/forms/hook-fields";
import { ThreadFields } from "@/features/collabration/inventory/components/forms/thread-fields";
import { ZipperFields } from "@/features/collabration/inventory/components/forms/zipper-fields";
import type {
	Material,
	MaterialStats,
	SupplierPartner,
} from "@/types/material";

export const MATERIAL_STATS: MaterialStats = {
	totalStock: 2840,
	stockGrowth: "+8%",
	needRestock: 21,
	suppliers: 12,
	warehouseValue: "412M",
};

export const MATERIAL_ITEMS: Material[] = [
	{
		id: "1",
		productStyle: "Polo SS24-01",
		categoryType: "Nhãn chính",
		categoryLabel: "phu-lieu-may",
		icon: "label",
		materialName: "Nhãn dệt Satin",
		brandSupplier: "Avery Dennison",
		spec: "50x20mm, Center Fold, Soft finish",
		unit: "pcs",
		status: "san-hang",
		stockCount: 1200,
	},
	{
		id: "2",
		productStyle: "Outdoor Jkt-02",
		categoryType: "Nhãn size & Care",
		categoryLabel: "phu-lieu-may",
		icon: "label",
		materialName: "Nhãn in Nylon",
		brandSupplier: "NCC Nội địa",
		spec: "25mm width, Roll form",
		unit: "pcs",
		status: "san-hang",
		stockCount: 2500,
	},
	{
		id: "3",
		productStyle: "Premium Line",
		categoryType: "Túi đựng đồ",
		categoryLabel: "dong-goi",
		icon: "bag",
		materialName: "Túi Zipper PE tái chế",
		brandSupplier: "Bao Bì Xanh",
		spec: "A3 Size, 50 micron, Printed logo",
		unit: "set",
		status: "sap-het",
		stockCount: 85,
	},
	{
		id: "4",
		productStyle: "Gift Set A1",
		categoryType: "Hộp giấy",
		categoryLabel: "dong-goi",
		icon: "box",
		materialName: "Hộp Carton 3 lớp",
		brandSupplier: "VietPack Co.",
		spec: "25x15x10cm, Kraft brown",
		unit: "pcs",
		status: "san-hang",
		stockCount: 450,
	},
	{
		id: "5",
		productStyle: "All Orders",
		categoryType: "Phụ kiện bổ",
		categoryLabel: "dong-goi",
		icon: "package",
		materialName: "Gói hút ẩm Clay",
		brandSupplier: "Desiccant Pro",
		spec: "2g sachet, Tyvek paper",
		unit: "pcs",
		status: "het-hang",
		stockCount: 0,
	},
	{
		id: "6",
		productStyle: "Casual SS24-03",
		categoryType: "Khóa kéo",
		categoryLabel: "phu-lieu-may",
		icon: "label",
		materialName: "Khóa kéo YKK #5",
		brandSupplier: "YKK Vietnam",
		spec: "5mm, Nylon coil, Auto lock",
		unit: "pcs",
		status: "san-hang",
		stockCount: 3800,
	},
	{
		id: "7",
		productStyle: "Denim Line",
		categoryType: "Nút bấm",
		categoryLabel: "phu-lieu-may",
		icon: "label",
		materialName: "Nút bấm đồng thau",
		brandSupplier: "Coats Vietnam",
		spec: "15mm, Antique brass finish",
		unit: "pcs",
		status: "sap-het",
		stockCount: 320,
	},
	{
		id: "8",
		productStyle: "Sport Line",
		categoryType: "Chỉ may",
		categoryLabel: "phu-lieu-may",
		icon: "label",
		materialName: "Chỉ polyester 40/2",
		brandSupplier: "Amann Group",
		spec: "5000m/cone, Tex 27",
		unit: "cone",
		status: "san-hang",
		stockCount: 240,
	},
	{
		id: "9",
		productStyle: "Premium Line",
		categoryType: "Nhãn chính",
		categoryLabel: "phu-lieu-may",
		icon: "label",
		materialName: "Nhãn dệt Jacquard",
		brandSupplier: "Avery Dennison",
		spec: "60x30mm, Woven, Full color",
		unit: "pcs",
		status: "san-hang",
		stockCount: 1800,
	},
	{
		id: "10",
		productStyle: "Gift Set B2",
		categoryType: "Túi vải",
		categoryLabel: "dong-goi",
		icon: "bag",
		materialName: "Túi vải canvas",
		brandSupplier: "EcoPack VN",
		spec: "30x40cm, 280gsm, Natural",
		unit: "pcs",
		status: "sap-het",
		stockCount: 120,
	},
	{
		id: "11",
		productStyle: "Outdoor Jkt-05",
		categoryType: "Dây kéo",
		categoryLabel: "phu-lieu-may",
		icon: "label",
		materialName: "Dây kéo phản quang",
		brandSupplier: "Gutermann",
		spec: "3M Scotchlite, 150cm",
		unit: "m",
		status: "het-hang",
		stockCount: 0,
	},
	{
		id: "12",
		productStyle: "Casual SS24-05",
		categoryType: "Băng dính",
		categoryLabel: "dong-goi",
		icon: "package",
		materialName: "Băng dính OPP in logo",
		brandSupplier: "VietPack Co.",
		spec: "48mm x 100m, Transparent",
		unit: "cuộn",
		status: "san-hang",
		stockCount: 680,
	},
];

export const SUPPLIER_PARTNERS: SupplierPartner[] = [
	{ name: "Coats Threads", initials: "CT", color: "bg-amber-700" },
	{ name: "Avery Dennison", initials: "AD", color: "bg-stone-600" },
	{ name: "Gutermann", initials: "GU", color: "bg-neutral-500" },
	{ name: "Amann Group", initials: "AG", color: "bg-slate-400" },
	{ name: "YKK Zippers", initials: "YK", color: "bg-zinc-600" },
	{ name: "VietPack Co.", initials: "VP", color: "bg-amber-600" },
	{ name: "EcoPack VN", initials: "EP", color: "bg-green-700" },
	{ name: "Bao Bì Xanh", initials: "BB", color: "bg-emerald-600" },
];

export const MATERIAL_CATEGORY_TABS = [
	{ label: "Tất cả", value: "all" },
	{ label: "Phụ liệu may", value: "phu-lieu-may" },
	{ label: "Đóng gói", value: "dong-goi" },
] as const;

export const MATERIAL_STATUS_MAP = {
	"san-hang": { label: "Sẵn hàng", className: "text-green-700 bg-green-50" },
	"sap-het": { label: "Sắp hết", className: "text-error bg-error-container" },
	"het-hang": {
		label: "Hết hàng",
		className: "text-on-surface-variant bg-surface-container",
	},
} as const;

export const MATERIAL_CATEGORY_LABEL_MAP: Record<
	string,
	{ label: string; className: string }
> = {
	"Nhãn chính": {
		label: "Nhãn chính",
		className: "bg-amber-100 text-amber-800",
	},
	"Nhãn size & Care": {
		label: "Nhãn size & Care",
		className: "bg-green-100 text-green-800",
	},
	"Túi đựng đồ": {
		label: "Túi đựng đồ",
		className: "bg-blue-100 text-blue-800",
	},
	"Hộp giấy": { label: "Hộp giấy", className: "bg-purple-100 text-purple-800" },
	"Phụ kiện bổ": {
		label: "Phụ kiện bổ",
		className: "bg-orange-100 text-orange-800",
	},
	"Khóa kéo": { label: "Khóa kéo", className: "bg-rose-100 text-rose-800" },
	"Nút bấm": { label: "Nút bấm", className: "bg-indigo-100 text-indigo-800" },
	"Chỉ may": { label: "Chỉ may", className: "bg-teal-100 text-teal-800" },
	"Túi vải": { label: "Túi vải", className: "bg-cyan-100 text-cyan-800" },
	"Dây kéo": { label: "Dây kéo", className: "bg-violet-100 text-violet-800" },
	"Băng dính": {
		label: "Băng dính",
		className: "bg-yellow-100 text-yellow-800",
	},
};

export const ITEMS_PER_PAGE = 5;

export const MATERIAL_TYPE_OPTIONS: {
	label: string;
	icon: FC<SVGProps<SVGSVGElement>>;
	description: string;
	component: FC;
}[] = [
	{
		label: "Khóa kéo",
		icon: Spool,
		description: "Chi tiết về khóa, đầu kéo và kích thước sản phẩm",
		component: ZipperFields,
	},
	{
		label: "Cúc & nút",
		icon: ButtonSnap,
		description:
			"Quy cách kỹ thuật cho các loại cúc, các quần áo và các loại trạng thái",
		component: ButtonFields,
	},
	{
		label: "Dây thun & Bias",
		icon: ElasticBias,
		description: "Chi tiết về độ co giãn, màu phần và phương pháp gấp mép",
		component: ElasticFields,
	},
	{
		label: "Móc cài/Khóa",
		icon: HookClasp,
		description:
			"Thông số kỹ thuật cho móc airbolt, móc cài và các phụ kiện khóa đặc biệt",
		component: HookFields,
	},
	{
		label: "Chỉ may",
		icon: SewingThread,
		description: "Chi tiết về độ co giãn, màu phần và phương pháp gấp mép",
		component: ThreadFields,
	},
	{
		label: "Chỉ thêu",
		icon: Embroidery,
		description:
			"Thông số mới cho logo, hoa tiết và ký tên màu sắc nhuộm màu sáng",
		component: EmbroideryFields,
	},
];
