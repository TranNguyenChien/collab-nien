import Footer from "@/components/layouts/Footer";
import { SiteHeader } from "@/components/layouts/SiteHeader";
import { HomeCards } from "@/features/home/components/home-cards";
import { HomeHero } from "@/features/home/components/home-hero";
import { HomeQuickLinks } from "@/features/home/components/home-quick-links";

export function HomePage() {
	return (
		<div className="min-h-screen flex flex-col bg-background ">
			<SiteHeader />
			<main className="flex-1 max-w-4xl mx-auto">
				<HomeHero />
				<HomeCards />
				<HomeQuickLinks />
			</main>
			<Footer />
		</div>
	);
}
