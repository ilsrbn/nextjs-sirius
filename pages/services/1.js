import Link from 'next/link'
import Header from '../../components/Header'
import Services_Sidebar from '../../components/Services_Sidebar'

function FirstService() {
	return (
		<>
		<Header />
		<Services_Sidebar />
		<div className="something Service_1">
			<div className='container__text'>
				<Link href="/#services" className="linkBack"><a>&larr;</a></Link>
				<div className='morecont'>
				<h1 data-swiper-parallax={ -80 } data-swiper-parallax-opacity={ 0.1 }>ЛЕЧЕНИЕ<h2> ЗУБОВ ВО СНЕ</h2>.</h1>
				<p data-swiper-parallax={ -100 } data-swiper-parallax-opacity={ 0.1 }>
					На протяжении последних лет мы часто используем в своей практике такой вид анестезии как седация или контролируемый медикаментозный сон. Это состояние при котором пациент (взрослый или ребенок) спит во время лечения. Таким образом полностью устраняется стрессовый фактор и появляется возможность эффективно лечить пациентов с фобиями, повышенным рвотным рефлексом и т.д.
				</p>
				</div>
				
			</div>
			<div className="image__container" data-swiper-parallax={ -50 }>
				<div className="cyan" />
				<img
					src="/images/dots/3x8.png"
					className="dots" />
				<img
					src="/images/uslugi/1-min.jpg"
					className="picha"
					alt="Doctor" />
			</div>
		</div>
		< />)
}

export default FirstService;