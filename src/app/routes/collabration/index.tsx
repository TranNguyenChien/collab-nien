import { CollabDashboardBanner } from "@/features/collabration/dashboard/components/collab-banner";
import { CollabCountdown } from "@/features/collabration/dashboard/components/collab-countdown";
import { CollabDashboardGreeting } from "@/features/collabration/dashboard/components/collab-greeting";
import { CollabInsightCards } from "@/features/collabration/dashboard/components/collab-insight-cards";
import { CollabPendingOrders } from "@/features/collabration/dashboard/components/collab-pending-orders";
import { CollabWeeklyStats } from "@/features/collabration/dashboard/components/collab-weekly-stats";

export function CollabDashboardPage() {
	return (
		<div className="min-h-screen flex flex-col bg-background">
			<CollabDashboardBanner />
			<main className="flex-1">
				<div className="page-wrap">
					<CollabDashboardGreeting />
					<div className="grid grid-cols-3 gap-6 mb-6">
						<div className="col-span-2">
							<CollabPendingOrders />
						</div>
						<div className="col-span-1">
							<CollabCountdown />
						</div>
					</div>
					<div className="mb-6">
						<CollabWeeklyStats />
					</div>
					<div className="mb-10">
						<CollabInsightCards />
					</div>
				</div>
			</main>
		</div>
	);
}
