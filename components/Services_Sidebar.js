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
			{curloc['sidebar'].map((element) => (
				<Link key={element} href={curloc['sidebar_data_hash'][curloc['sidebar'].indexOf(element, 0)]}><a className='swiper-pagination-bullet'><div className='tire'>―</div>{element}</a></Link>
				))}
			</div>
		</nav>
	)
}

export default Services_Sidebar;