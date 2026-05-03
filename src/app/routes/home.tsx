import { SiteFooter } from "@/components/layouts/SiteFooter";
import { SiteHeader } from "@/components/layouts/SiteHeader";
import { HomeCards } from "@/features/home/components/HomeCards";
import { HomeHero } from "@/features/home/components/HomeHero";
import { HomeQuickLinks } from "@/features/home/components/HomeQuickLinks";

export function HomePage() {
	return (
		<div className="min-h-screen flex flex-col bg-background ">
			<SiteHeader />
			<main className="flex-1 max-w-4xl mx-auto">
				<HomeHero />
				<HomeCards />
				<HomeQuickLinks />
			</main>
			<SiteFooter />
		</div>
	);
}
