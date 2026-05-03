export interface OrgInfo {
	name: string;
	businessType: string;
	registrationLocation: string;
	taxCode: string;
	establishedDate: string;
	authorizationDoc: string;
	address: string;
}

export interface RepresentativeInfo {
	fullName: string;
	position: string;
	nationalId: string;
	idIssueDate: string;
	idIssuePlace: string;
	phone: string;
	dateOfBirth: string;
	gender: string;
	contactAddress: string;
}

export interface WorkshopInfo {
	type: "FOB" | "OEM" | "";
	experience: Array<"local_brand" | "high_end" | "designer" | "export">;
}

export interface BankInfo {
	accountNumber: string;
	accountName: string;
	bankName: string;
}

export interface SignUpFormData {
	org: OrgInfo;
	representative: RepresentativeInfo;
	workshop: WorkshopInfo;
	bank: BankInfo;
	agreedToAccuracy: boolean;
	agreedToTerms: boolean;
}
