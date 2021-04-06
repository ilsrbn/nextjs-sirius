import Link from 'next/link'

function Services_Sidebar() {
		
	return (
		<nav className="Sidebar">
			<div className="SidebarList">
			<Link href="/#main"><a className="swiper-pagination-bullet"><div className="tire">&horbar;</div>ГЛАВНАЯ</a></Link>
			<Link href="/#about"><a className="swiper-pagination-bullet"><div className="tire">&horbar;</div>О НАС</a></Link>
			<Link href="/#partners"><a className="swiper-pagination-bullet"><div className="tire">&horbar;</div>ПАРТНЕРЫ</a></Link>
			<Link href="/#services"><a className="swiper-pagination-bullet"><div className="tire">&horbar;</div>УСЛУГИ</a></Link>
			<Link href="/#team"><a className="swiper-pagination-bullet"><div className="tire">&horbar;</div>КОМАНДА</a></Link>
			<Link href="/#contacts"><a className="swiper-pagination-bullet"><div className="tire">&horbar;</div>КОНТАКТЫ</a></Link>
			</div>
		</nav>
	)
}

export default Services_Sidebar;