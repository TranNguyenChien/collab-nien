import type { FC } from "react";
import {
	ADDRESS_COMPANY,
	EMAIL_SUPPORT,
	HOTLINE_SUPPORT,
} from "@/constant/address";
import {
	FOOTER_POLICY_LINKS,
	FOOTER_PRODUCT_LINKS,
	FOOTER_SUPPORT_LINKS,
} from "@/constant/footer";

const Footer: FC = () => {
	return (
		<footer className=" border-outline-variant mt-auto">
			<div className="page-wrap py-8 px-4 bg-surface-container-low rounded-lg shadow">
				<div className="grid grid-cols-6 gap-4">
					<div className="col-span-2">
						<div className="w-10 h-10 bg-inverse-surface rounded flex items-center justify-center mb-4">
							<span className="text-inverse-on-surface font-bold text-lg font-heads">
								N
							</span>
						</div>
						<p className="text-sm text-on-surface-variant leading-relaxed">
							Nghệ thuật và giá trị giao thoa thuộc về Bạn
						</p>
						<p className="text-sm font-bold text-on-surface mt-4 uppercase leading-snug">
							Công ty TNHH Đầu tư và Phát triển DH.NSON
						</p>
						<p className="text-sm text-on-surface-variant mt-1 leading-relaxed">
							Địa chỉ: {ADDRESS_COMPANY}
						</p>
					</div>

					<div>
						<p className="text-sm font-bold text-on-surface uppercase tracking-widest mb-3">
							Sản phẩm
						</p>
						<ul className="flex flex-col gap-2">
							{FOOTER_PRODUCT_LINKS.map((link) => (
								<li key={link}>
									<a
										href="/"
										className="text-sm text-on-surface-variant hover:text-on-surface transition-colors"
									>
										{link}
									</a>
								</li>
							))}
						</ul>
						<p className="text-sm font-bold text-on-surface uppercase tracking-widest mt-6 mb-3">
							Kiến thức mặc đẹp
						</p>
					</div>

					<div>
						<p className="text-sm font-bold text-on-surface uppercase tracking-widest mb-3">
							Chính sách
						</p>
						<ul className="flex flex-col gap-2">
							{FOOTER_POLICY_LINKS.map((link) => (
								<li key={link}>
									<a
										href="/"
										className="text-sm text-on-surface-variant hover:text-on-surface transition-colors"
									>
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div>
						<p className="text-sm font-bold text-on-surface uppercase tracking-widest mb-3">
							Về NIÉN
						</p>
						<ul className="flex flex-col gap-2 mb-6">
							<li>
								<a
									href="/"
									className="text-sm text-on-surface-variant hover:text-on-surface transition-colors"
								>
									Câu chuyện về NIÉN
								</a>
							</li>
						</ul>
						<p className="text-sm font-bold text-on-surface uppercase tracking-widest mb-3">
							Hỗ trợ &amp; Khiếu nại
						</p>
						<ul className="flex flex-col gap-2">
							{FOOTER_SUPPORT_LINKS.map((link) => (
								<li key={link}>
									<a
										href="/"
										className="text-sm text-on-surface-variant hover:text-on-surface transition-colors"
									>
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div className="flex flex-col gap-6">
						<div>
							<p className="text-sm font-bold text-on-surface uppercase tracking-widest mb-1">
								Liên hệ hỗ trợ
							</p>
							<p className="text-sm text-on-surface-variant">{EMAIL_SUPPORT}</p>
						</div>
						<div>
							<p className="text-sm font-bold text-on-surface uppercase tracking-widest mb-1">
								Hotline ưu tiên
							</p>
							<p className="text-sm text-on-surface-variant">
								{HOTLINE_SUPPORT}
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="page-wrap px-6 py-4">
				<p className="text-sm text-on-surface-variant text-center">
					© 2026 Production Partner Ecosystem. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
