import { Link } from "@tanstack/react-router";
import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DASHBOARD_NAV_ITEMS } from "@/constant/header";
import { cn } from "@/lib/utils";

export function HeaderVendor() {
	return (
		<header className="sticky top-2 z-50">
			<div className="page-wrap px-6 py-4 flex items-center justify-between gap-8 bg-surface-container-lowest shadow my-2 rounded-lg">
				<nav className="flex items-center gap-8 flex-1 justify-start">
					{DASHBOARD_NAV_ITEMS.map((item) => (
						<Link
							key={item.label}
							to={"to" in item ? item.to : "/"}
							className={cn(
								"text-label-sm tracking-wider text-primary hover:text-primary transition-colors pb-1",
								item.active && "text-primary font-bold",
							)}
						>
							{item.label}
						</Link>
					))}
				</nav>

				<div className="flex items-center gap-3">
					<Button
						type="button"
						aria-label="Thông báo"
						size="icon"
						variant="ghost"
						className="relative"
					>
						<Bell className="size-4" />
						<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full" />
					</Button>
					<div className="w-9 h-9 rounded-full bg-inverse-surface flex items-center justify-center">
						<User className="w-5 h-5 text-inverse-on-surface" />
					</div>
				</div>
			</div>
		</header>
	);
}
