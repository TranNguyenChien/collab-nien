export const DASHBOARD_NAV_ITEMS = [
	{ label: "Trang chủ", active: true },
	{ label: "Giao dịch", active: false },
	{ label: "Sản xuất", active: false },
	{ label: "Nguyên liệu", active: false, to: "/collabration/accessories" },
	{ label: "Phụ liệu", active: false, to: "/collabration/inventory" },
	{ label: "Đơn hàng", active: false },
	{ label: "Tài chính", active: false },
] as const;
