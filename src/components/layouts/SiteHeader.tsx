export function SiteHeader() {
	return (
		<header className="sticky top-0 z-50 bg-background py-4">
			<div>
				{/* Center: Logo */}
				<div className="flex flex-col items-center">
					<img src="./logo.webp" alt="logo" className="w-12" />
				</div>
			</div>
		</header>
	);
}
