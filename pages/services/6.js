import Link from 'next/link'

function SixthService() {
	return (
		<div className="something Service_6">
			<div className='container__text'>
			<Link href="/#services"><a>&larr;</a></Link>
				<div className='morecont'>
					<h1 data-swiper-parallax={ -80 } data-swiper-parallax-opacity={ 0.1 }>ЧЕЛЮСТНО-ЛИЦЕВАЯ<h2> ХИРУРГИЯ</h2>.</h1>
					<p data-swiper-parallax={ -100 } data-swiper-parallax-opacity={ 0.1 }>
					Высококвалифицированым персоналом нашей клиники проводятся
хирургические операции при различных патологиях челюстно-лицевой области и шеи:
					</p>
					<ul>
					<li>- Хирургическое лечение переломов челюстей и костей лицевого черепа</li>
					<li>- Ранения мягких тканей лица и шеи</li>
					<li>- Хирургическое лечение воспалительных заболеваний челюстно-лицевой области</li>
					<li>- Устранение последствий раннее полученных травм (пластическая хирургия)</li>
					<li>- Лечение новообразований, как доброкачественных, так и злокачественных, полости рта и ч.л.о.</li>
					</ul>
				</div>
				
			</div>
			<div className="image__container" data-swiper-parallax={ -50 }>
				<div className="cyan" />
				<img
					src="/images/dots/3x8.png"
					className="dots" />
				<img
					src="/images/uslugi/6-min.jpg"
					className="picha"
					alt="Doctor" />
			</div>
		</div>
		)
}

export default SixthService;