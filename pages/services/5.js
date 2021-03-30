import Link from 'next/link'

function FifthService() {
	return (
		<div className="something Service_5">
			<div className='container__text'>
			<Link href="/#services" className="linkBack"><a>&larr;</a></Link>
				<div className='morecont'>
				<h1 data-swiper-parallax={ -80 } data-swiper-parallax-opacity={ 0.1 }>ХИРУРГИЧЕСКАЯ<h2> СТОМАТОЛОГИЯ</h2>.</h1>
				<p data-swiper-parallax={ -100 } data-swiper-parallax-opacity={ 0.1 }>
					Мы проводим весь спектр хирургических вмешательств в полости рта. Опытный хирург с многолетним стажем проводит хирургическое лечение заболеваний
пародонта, постановки дентальных имплантатов различных систем, зубосохраняющие операции, удаление зубов мудрости и т.д.
				</p>
				</div>
				
			</div>
			<div className="image__container" data-swiper-parallax={ -50 }>
				<div className="cyan" />
				<img
					src="/images/dots/3x8.png"
					className="dots" />
				<img
					src="/images/uslugi/5-min.jpg"
					className="picha"
					alt="Doctor" />
			</div>
		</div>)
}

export default FifthService;