import { Outlet } from "@tanstack/react-router";
import type { FC } from "react";
import { HeaderVendor } from "@/components/layouts/collabration/header";
import Footer from "@/components/layouts/Footer";

const CollabrationLayout: FC = () => {
	return (
		<div>
			<HeaderVendor />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default CollabrationLayout;
