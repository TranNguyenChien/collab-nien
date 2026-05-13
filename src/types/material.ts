export type MaterialCategory = "phu-lieu-may" | "dong-goi";

export type MaterialStatus = "san-hang" | "sap-het" | "het-hang";

export interface Material {
	id: string;
	productStyle: string;
	categoryType: string;
	categoryLabel: MaterialCategory;
	icon: string;
	materialName: string;
	brandSupplier: string;
	spec: string;
	unit: string;
	status: MaterialStatus;
	stockCount: number;
}

export interface MaterialStats {
	totalStock: number;
	stockGrowth: string;
	needRestock: number;
	suppliers: number;
	warehouseValue: string;
}

export interface SupplierPartner {
	name: string;
	initials: string;
	color: string;
}
