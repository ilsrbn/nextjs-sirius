import {en, ru, ua} from '../translations/Header'
import { useRouter } from 'next/router'

function Sidebar() {
	
	let router = useRouter();
	let curloc = router.locale === 'en' ? 'en' : router.locale === 'ru' ? 'ru' : router.locale === 'ua' ? 'ua' : ''

	return (
		<nav className="Sidebar">
			<ul className="language_selector">
				{router.locales.map((locale) => (
					<li key={locale} className={locale == curloc ? 'active_locale' : 'disabled_locale'}>
						<a href={router.basePath + locale}>
							{locale}
						</a>
					</li>
				))}
			</ul>
			<div className="SidebarList"></div>
		</nav>
	)
}

export default Sidebar;