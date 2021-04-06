import '../styles/globals.css'

import '../styles/Header.css'
import '../styles/Popup.css'
import '../styles/Sidebar.css'
import '../styles/Content.css'

import '../styles/Glavnaya.css'
import '../styles/Glavnaya__slides__container.css'

import '../styles/ONas.css'
import '../styles/Partnery.css'
import '../styles/Uslugi.css'
import '../styles/Komanda.css'
import '../styles/Kontakty.css'
import '../styles/uslugi__def.css'

import { motion } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
  	<motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
 		 	pageInitial: {
   		opacity: 0,
   		transition: {
   			duration: 0.2,
   			delay: 0
   		},
 		},
 		 	pageAnimate: {
    	opacity: 1,
    	transition: {
    		duration: 0.2,
    		delay: 0
    	},
  	},
		}}>
  <Component {...pageProps} />
</motion.div>
)
}

export default MyApp
