import {en, ru, ua} from '../translations/Header'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

function Sidebar() {

	const [hamburger, setHamburger] = useState(true)
	const changeState = () => {
		setHamburger(!hamburger)
	}
	
	let router = useRouter();
	let locs = [en, ua, ru] 
	let curloc = router.locale === 'en' ? 'en' : router.locale === 'ru' ? 'ru' : router.locale === 'ua' ? 'ua' : ''

	return (
		<nav className={hamburger ? "Sidebar" : "Sidebar-show"}>
			<nav className={hamburger ? 'hamburger hamburger-active' : 'hamburger hamburger-none'} onClick={changeState}>
				<span className="hamburger_bar bar1" />
				<span className="hamburger_bar bar3" />
			</nav>
			<div className="SidebarList"></div>
		</nav>
	)
}

export default Sidebar;