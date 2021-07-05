import Link from 'next/link'
import { en, ru, ua } from '../translations/Sidebar'
import { useRouter } from 'next/router'

import React, { useState } from 'react'




function Services_Sidebar(props) {

	

	let router = useRouter()

	let curloc = router.locale === 'en' ? en : router.locale === 'ru' ? ru : router.locale === 'ua' ? ua : ''
	let curloc_str = router.locale
		
	return (
		<nav className={props.burger ? "Sidebar-show" : "Sidebar"}>
			<nav className={props.burger ? 'hamburger hamburger-active' : 'hamburger hamburger-none'} onClick={props.changeBurger}>
				<span className="hamburger_bar" />
				<span className="hamburger_bar" />
			</nav>
			<div className="SidebarList">
			{curloc['sidebar'].map((element) => (
				<Link key={element} href={curloc['sidebar_data_hash'][curloc['sidebar'].indexOf(element, 0)]}><a className='swiper-pagination-bullet'><div className='tire'>―</div>{element}</a></Link>
				))}
			</div>
			<div className="sidebar-buttons">
				<a href="tel:+380-66-736-37-44" className="ticket">
					{curloc.sign}
				</a>
				<a href="tel:+380-66-736-37-44" className="phoneNum">+380 66 736 37 44</a>
				<a href="tel:+380-66-736-37-44" className="emergency">
					{curloc.emergency}
				</a>
				<a href="tel:+380-66-736-37-44" className="phoneNum">+380 66 736 37 44</a>
				<div className="social">
					<a
		 				href="https://www.facebook.com/siriusdentclinic/"
		 				rel="noreferrer">
		 				<img
		 					src="/images/facebook.svg" 
		 					className="FacebookIcon"
		 					alt="Facebook icon" />
		 			</a>
		 		</div>
			</div>
		</nav>
	)
}

export default Services_Sidebar;