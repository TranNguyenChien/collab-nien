export interface PendingOrder {
	id: string;
	price: string;
	quantity: string;
	wait: string;
	ceiling: string;
	deviation: string;
	floor: string;
}

export const PENDING_ORDERS: PendingOrder[] = [
	{
		id: "#SEN-2024-001",
		price: "1,250,000",
		quantity: "50",
		wait: "2h",
		ceiling: "1,400",
		deviation: "-2.5%",
		floor: "HCM-01",
	},
	{
		id: "#SEN-2024-042",
		price: "890,000",
		quantity: "120",
		wait: "5h",
		ceiling: "950",
		deviation: "+1.2%",
		floor: "HN-02",
	},
	{
		id: "#SEN-2024-078",
		price: "2,100,000",
		quantity: "30",
		wait: "1h",
		ceiling: "2,200",
		deviation: "+0.8%",
		floor: "HCM-03",
	},
	{
		id: "#SEN-2024-095",
		price: "450,000",
		quantity: "200",
		wait: "8h",
		ceiling: "500",
		deviation: "-4.1%",
		floor: "DN-01",
	},
	{
		id: "#SEN-2024-103",
		price: "3,750,000",
		quantity: "15",
		wait: "3h",
		ceiling: "3,900",
		deviation: "+2.3%",
		floor: "HN-05",
	},
	{
		id: "#SEN-2024-117",
		price: "670,000",
		quantity: "80",
		wait: "6h",
		ceiling: "720",
		deviation: "-1.7%",
		floor: "HCM-07",
	},
	{
		id: "#SEN-2024-134",
		price: "1,890,000",
		quantity: "45",
		wait: "4h",
		ceiling: "2,000",
		deviation: "+3.5%",
		floor: "CT-02",
	},
];

export const WEEKLY_STATS = [
	{
		label: "Doanh thu/Tháng",
		value: "425.8",
		unit: "triệu VND",
		accentColor: "bg-primary",
	},
	{ label: "GMV", value: "1.2", unit: "tỷ VND", accentColor: "bg-primary" },
	{
		label: "Hợp đồng đến hạn",
		value: "08",
		unit: "hợp đồng",
		accentColor: "bg-error",
	},
] as const;

export const COUNTDOWN = { days: "02", hours: "14", minutes: "35" } as const;

export const DASHBOARD_NAV_ITEMS = [
	{ label: "Trang chủ", active: true },
	{ label: "Giao dịch", active: false },
	{ label: "Sản xuất", active: false },
	{ label: "Nguyên liệu", active: false },
	{ label: "Phụ liệu", active: false },
	{ label: "Đơn hàng", active: false },
	{ label: "Tài chính", active: false },
] as const;
