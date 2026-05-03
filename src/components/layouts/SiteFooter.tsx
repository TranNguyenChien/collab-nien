const FOOTER_LINKS = ["QUY TRÌNH", "BẢO MẬT", "ĐIỀU KHOẢN"] as const;

export function SiteFooter() {
	return (
		<footer className="bg-surface-container-low border-t border-outline-variant">
			<div className="page-wrap px-6 py-6 flex items-center justify-between">
				{/* Left: Logo + Copyright */}
				<div>
					<p className="text-label-sm font-bold uppercase tracking-widest text-on-surface mb-1">
						SEN NGHỆ THUẬT
					</p>
					<p className="text-label-sm text-on-surface-variant uppercase tracking-wide">
						© 2024 SEN NGHỆ THUẬT. TINH HOA NGHỆ THUẬT TRUYỀN THỐNG.
					</p>
				</div>

				{/* Right: Links */}
				<nav className="flex items-center gap-6">
					{FOOTER_LINKS.map((link) => (
						<a
							key={link}
							href="/"
							className="text-label-sm text-on-surface-variant uppercase tracking-wider hover:text-on-surface transition-colors"
						>
							{link}
						</a>
					))}
				</nav>
			</div>
		</footer>
	);
}
