interface SignUpHeroProps {
	className?: string;
}

export function SignUpHero({ className }: SignUpHeroProps) {
	return (
		<section className={className}>
			<div className="page-wrap px-6 py-12 flex justify-between items-end">
				<div className="max-w-xl">
					<p className="label-sm text-primary font-bold tracking-[0.2em] mb-4 uppercase">
						TRỞ THÀNH ĐỐI TÁC
					</p>
					<h1 className="font-heading text-7xl font-black text-on-surface leading-18 tracking-tight">
						Đăng ký Đối tác Sản xuất
					</h1>
					<p className="mt-6 text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
						Kết nối cùng SEN NGHỆ THUẬT để kiến tạo những giá trị thẩm mỹ bền
						vững. Chúng tôi tìm kiếm những xưởng sản xuất tinh hoa, cam kết chất
						lượng và sự tỉ mỉ trong từng đường kim mũi chỉ.
					</p>
				</div>
				<div className="block w-32 h-32 rounded-full overflow-hidden border-4 border-surface-container">
					<img
						className="w-full h-full object-cover"
						data-alt="close-up of exquisite silk fabric texture with subtle organic patterns and soft warm lighting"
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmZetsqN6JCTnsxZfixYf911dJCqqRP709lVk-gTtwj87EyxBD9ne9Acd7RVRaiLzq5g1wcx5qo5r57trctbjt-OTtarA3obQ33utRTx0AJIPJX6vcrgDGo0ie9LRoh17z9IAchpgau44p5ya3Zq0oMo7fNjweRt4vbUl1yucuP8BxNyUuWJyyJdwF8rwQz0jKAbTbOXQZuVNasdAKo8W_mHyMQ5o6mf1rZNNV51yWGYPDgfK1zh47DuvfsqEAZc7CgRbb7HHXRxU"
						alt="s"
					/>
				</div>
			</div>
		</section>
	);
}
