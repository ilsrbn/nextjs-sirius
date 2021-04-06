import Link from 'next/link'
import Header from '../../components/Header'
import Services_Sidebar from '../../components/Services_Sidebar'

function ForthService() {
	return (
		<>
		<Header />
		<Services_Sidebar />
		<div className="something Service_4">
			<div className='container__text'>
			<Link href="/#services" className="linkBack"><a>&larr;</a></Link>
				<div className='morecont'>
				<h1 data-swiper-parallax={ -80 } data-swiper-parallax-opacity={ 0.1 }>ОРТОПЕДИЧЕСКАЯ<h2> СТОМАТОЛОГИЯ</h2>.</h1>
				<p data-swiper-parallax={ -100 } data-swiper-parallax-opacity={ 0.1 }>
					При протезировании наших пациентов мы всегда используем индивидуальный подход и самые передовые технологии протезирования:
CAD-CAM, безметалловая керамика, металлокерамика ведущих мировых производителей позволяет учесть индивидуальные особенности каждого пациента и удовлетворить требования самых взыскательных эстетов. При протезировании на имплантатах нашей клиникой используется уникальный абатмент из полиэфиркетона (PEEC), изготовленный по технологии купленой у немецкой фирмы Bredent. Этот абатмент обладает рядом преимуществ перед абатментами изготовлеными из титана или оксида циркония, что существенно улучшает качество
протезирования.
				</p>
				</div>
				
			</div>
			<div className="image__container" data-swiper-parallax={ -50 }>
				<div className="cyan" />
				<img
					src="/images/dots/3x8.png"
					className="dots" />
				<img
					src="/images/uslugi/4-min.jpg"
					className="picha"
					alt="Doctor" />
			</div>
		</div>
		< />)
}

export default ForthService;