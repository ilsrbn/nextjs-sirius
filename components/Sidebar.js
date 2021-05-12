import {en, ru, ua} from '../translations/Header'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function Sidebar(props) {


	
	let router = useRouter();
	let locs = [en, ua, ru]
	let curloc = router.locale === 'en' ? 'en' : router.locale === 'ru' ? 'ru' : router.locale === 'ua' ? 'ua' : ''


	return (
		<nav className={props.burger ? "Sidebar" : "Sidebar-show"}>
			<nav className={props.burger ? 'hamburger hamburger-active' : 'hamburger hamburger-none'} onClick={props.changeBurger}>
				<span className="hamburger_bar bar1" />
				<span className="hamburger_bar bar3" />
			</nav>
			<div className="SidebarList" ref={props.burgerFather} onClick={props.changeBurger}></div>
		</nav>
	)
}

export default Sidebar;