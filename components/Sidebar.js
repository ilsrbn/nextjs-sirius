import {en, ru, ua} from '../translations/Header'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function Sidebar(props) {


	
	let router = useRouter();
	let locs = [en, ua, ru]
	let curloc = router.locale === 'en' ? 'en' : router.locale === 'ru' ? 'ru' : router.locale === 'ua' ? 'ua' : ''


	return (
		<nav className={props.burger ? "Sidebar-show" : "Sidebar"}>
			<nav className={props.burger ? 'hamburger hamburger-active' : 'hamburger hamburger-none'} onClick={props.changeBurger}>
				<span className="hamburger_bar" />
				<span className="hamburger_bar" />
			</nav>
			<div className="SidebarList" ref={props.burgerFather} onClick={props.changeBurger}></div>
			<div className="sidebar-buttons">
				<span className="ticket">
					ЗАПИСАТЬСЯ НА ПРИЕМ
				</span>
				<span className="phoneNum">+380 66 736 37 44</span>
				<span className="emergency">
					СКОРАЯ ПОМОЩЬ
				</span>
				<span className="phoneNum">+380 66 736 37 44</span>
				<div className="social">
					<a
		 				href="https://www.facebook.com/siriusdentclinic/"
		 				rel="noreferrer">
		 				<img
		 					src="/images/facebook.svg" 
		 					className="FacebookIcon"
		 					alt="Facebook icon" />
		 			</a>
		 			<a
		 				href="https://t.me/HOPPER124"
		 				rel="noreferrer">
		 				<img 
		 					src="/images/instagram.svg"
		 					alt="Instagram icon"
		 					className="InstagramIcon" />
		 			</a>
		 			<a
		 				href="https://t.me/HOPPER124"
		 				rel="noreferrer">
		 				<img
		 					src="/images/youtube.svg"
		 					alt="Youtube Icon"
		 					className="YouTubeIcon" />
		 			</a>
		 		</div>
			</div>
		</nav>
	)
}

export default Sidebar;