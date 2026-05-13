import { Marquee } from "@/components/ui/marquee";
import { SUPPLIER_PARTNERS } from "@/features/collabration/inventory/constant";

export function InventorySuppliers() {
	return (
		<section className="mt-8 mb-10">
			<h2 className="text-title-md font-semibold text-on-surface mb-4">
				Đối tác Cung ứng Chiến lược
			</h2>

			<div className="relative overflow-hidden">
				<div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-linear-to-r from-background to-transparent pointer-events-none" />
				<div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-linear-to-l from-background to-transparent pointer-events-none" />

				<Marquee pauseOnHover repeat={3} className="py-2">
					{SUPPLIER_PARTNERS.map((partner) => (
						<div
							key={partner.name}
							className="flex items-center gap-3 mx-6 bg-surface-container-lowest rounded-lg px-5 py-3 shadow"
						>
							<div
								className={`w-9 h-9 rounded-full ${partner.color} flex items-center justify-center shrink-0`}
							>
								<span className="text-xs font-bold text-white">
									{partner.initials}
								</span>
							</div>
							<span className="text-body-lg font-medium text-on-surface whitespace-nowrap">
								{partner.name}
							</span>
						</div>
					))}
				</Marquee>
			</div>
		</section>
	);
}
