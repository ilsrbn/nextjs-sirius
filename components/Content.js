import Head from 'next/head'


import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Keyboard, Mousewheel, Pagination, Parallax, HashNavigation } from 'swiper';

import Glavnaya from './content/Glavnaya'
import ONas from './content/O_Nas'
import Partnery from './content/Partnery'
import Uslugi from './content/Uslugi'
import Komanda from './content/Komanda'
import Kontakty from './content/Kontakty'

import useTranslation from 'next-translate/useTranslation'


export default function Home() {
  let { t, lang } = useTranslation('common')
  var menu =[ t('sidebar_1'), " О НАС", " ПАРТНЕРЫ", " УСЛУГИ", " КОМАНДА", " КОНТАКТЫ"];
  SwiperCore.use([Navigation, Keyboard, Mousewheel, Pagination, Parallax, HashNavigation]);

  return (
    <div className="container">
      <Head>
        <title>Стоматологическая клиника Sirius-dent</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet='utf-8' />
      </Head>
        <div className="content">
        <div className="wrapper">
        <Swiper
          className="page"
          direction='vertical'
          slidesPerView='auto'
          parallax={ true }
          keyboard={{
            enabled: true,
            onlyInViewport: true,
          }}

          hashNavigation={{
            replaceState: true,
            watchState: true
          }}

          pagination={{
            el: '.SidebarList',
            clickable: true,
            renderBullet: (index, className) => {
              return '<span class="' + className + '"><div class="tire">&horbar;</div>' + (menu[index]) + '</span>';
            }

          }}

          mousewheel={{ sensitivity: 1 }}
          watchOverflow={ true }
          speed={ 800 } 
          observer={ true }
          observeParents={ true }
        >
        <SwiperSlide data-hash="main">
          <Glavnaya />
        </SwiperSlide>
        <SwiperSlide data-hash="about">
          <ONas />
        </SwiperSlide>
        <SwiperSlide data-hash="partners">
          <Partnery />
        </SwiperSlide>
        <SwiperSlide data-hash="services">
          <Uslugi />
        </SwiperSlide>
        <SwiperSlide data-hash="team">
          <Komanda />
        </SwiperSlide>
        <SwiperSlide data-hash="contacts">
          <Kontakty />
        </SwiperSlide>
      </Swiper>
      </div>
      </div>
    </div>
  )
}
