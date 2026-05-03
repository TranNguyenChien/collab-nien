import type { FC } from "react";
import { SiteFooter } from "@/components/layouts/SiteFooter";
import { SiteHeader } from "@/components/layouts/SiteHeader";
import { Marquee } from "@/components/ui/marquee";
import { BankAccountSection } from "@/features/auth/sign-up/components/bank-account";
import { OrgInfoSection } from "@/features/auth/sign-up/components/org-info";
import { RepresentativeSection } from "@/features/auth/sign-up/components/representative";
import { SignUpHero } from "@/features/auth/sign-up/components/sign-up-hero";
import { TermsAndSubmit } from "@/features/auth/sign-up/components/tems-and-submit";
import { WorkshopExperienceSection } from "@/features/auth/sign-up/components/workshop-experience";
import { useSignUpForm } from "@/features/auth/sign-up/hooks/use-sign-up-form";

const SignUp: FC = () => {
	const { form } = useSignUpForm();

	return (
		<>
			<SiteHeader />
			<form.AppForm>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						form.handleSubmit();
					}}
				>
					<SignUpHero />
					<div className="page-wrap px-6 pb-16 flex flex-col gap-6">
						<OrgInfoSection />
						<RepresentativeSection />
						<WorkshopExperienceSection />
						<BankAccountSection />
						<TermsAndSubmit />
					</div>
				</form>
			</form.AppForm>
			<Marquee repeat={6}>
				<span className="text-display-lg font-extrabold uppercase text-outline-variant tracking-widest px-8">
					SEN NGHỆ THUẬT • TRADITION • CRAFTSMANSHIP • MODERN ATELIER • QUALITY
				</span>
			</Marquee>
			<SiteFooter />
		</>
	);
};

export default SignUp;
