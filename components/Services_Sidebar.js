import Link from 'next/link'
import { en, ru, ua } from '../translations/Sidebar'
import { useRouter } from 'next/router'


function Services_Sidebar() {

	let router = useRouter()

	let curloc = router.locale === 'en' ? en : router.locale === 'ru' ? ru : router.locale === 'ua' ? ua : ''
	let curloc_str = router.locale
		
	return (
		<nav className="Sidebar">
			<div className="SidebarList">
			<ul className="language_selector">
				{router.locales.map((locale) => (
					<li key={locale} className={locale === curloc_str ? 'active_locale' : 'disabled_locale'}>
						<Link href={router.asPath} locale={locale}>
							<a>
								{locale}
							</a>
						</Link>
					</li>
				))}
			</ul>
			{curloc['sidebar'].map((element) => (
				<Link key={element} href={curloc['sidebar_data_hash'][curloc['sidebar'].indexOf(element, 0)]}><a className='swiper-pagination-bullet'><div className='tire'>―</div>{element}</a></Link>
				))}
			{/*<Link href="/#main"><a className="swiper-pagination-bullet"><div className="tire">&horbar;</div>{curloc['sidebar'][0]}</a></Link>
			<Link href="/#about"><a className="swiper-pagination-bullet"><div className="tire">&horbar;</div>О НАС</a></Link>
			<Link href="/#partners"><a className="swiper-pagination-bullet"><div className="tire">&horbar;</div>ПАРТНЕРЫ</a></Link>
			<Link href="/#services"><a className="swiper-pagination-bullet"><div className="tire">&horbar;</div>УСЛУГИ</a></Link>
			<Link href="/#team"><a className="swiper-pagination-bullet"><div className="tire">&horbar;</div>КОМАНДА</a></Link>
			<Link href="/#contacts"><a className="swiper-pagination-bullet"><div className="tire">&horbar;</div>КОНТАКТЫ</a></Link>*/}
			</div>
		</nav>
	)
}

export default Services_Sidebar;