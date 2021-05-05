import Link from 'next/link'
import { en, ru, ua } from '../translations/Sidebar'
import { useRouter } from 'next/router'

import React, { useState } from 'react'




function Services_Sidebar() {

	const [hamburger, setHamburger] = useState(true)
	const changeState = () => {
		setHamburger(!hamburger)
	}

	let router = useRouter()

	let curloc = router.locale === 'en' ? en : router.locale === 'ru' ? ru : router.locale === 'ua' ? ua : ''
	let curloc_str = router.locale
		
	return (
		<nav className={hamburger ? "Sidebar" : "Sidebar-show"}>
			<nav className={hamburger ? 'hamburger hamburger-active' : 'hamburger hamburger-none'} onClick={changeState}>
				<span className="hamburger_bar bar1" />
				<span className="hamburger_bar bar3" />
			</nav>
			<div className="SidebarList">
			{curloc['sidebar'].map((element) => (
				<Link key={element} href={curloc['sidebar_data_hash'][curloc['sidebar'].indexOf(element, 0)]}><a className='swiper-pagination-bullet'><div className='tire'>―</div>{element}</a></Link>
				))}
			</div>
		</nav>
	)
}

export default Services_Sidebar;