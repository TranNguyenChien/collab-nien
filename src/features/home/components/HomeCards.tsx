import { Button } from "@/components/ui/button";
import { CARDS } from "@/features/home/constant";
import { useHomeCardHelper } from "@/features/home/helper";
import { cn } from "@/lib/utils";

export function HomeCards() {
	const { onClickCard } = useHomeCardHelper();
	return (
		<section className="bg-background pb-10">
			<div className="page-wrap px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
				{CARDS.map(({ Icon, title, description, cta, variant, className, pathname }) => (
					<div
						key={title}
						className={cn(
							"rounded-lg p-8 flex flex-col gap-5 items-center",
							className,
						)}
					>
						<div className="size-16 rounded-full bg-primary-container flex items-center justify-center">
							<Icon className="w-6 h-6 text-on-primary-container" />
						</div>
						<h2 className="text-headline-md font-bold text-primary uppercase">
							{title}
						</h2>
						<p className="text-body-lg text-on-surface-variant flex-1 text-center">
							{description}
						</p>
						<Button
							size="lg"
							variant={variant}
							className="w-full font-bold"
							onClick={() => onClickCard(pathname)}
						>
							{cta}
						</Button>
					</div>
				))}
			</div>
		</section>
	);
}
