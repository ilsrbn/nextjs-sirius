import Link from 'next/link'

function SecondService() {
	return (
		<div className="something Service_2">
			<div className='container__text'>
				<div className='morecont'>
				<h1 data-swiper-parallax={ -80 } data-swiper-parallax-opacity={ 0.1 }>ТЕРАПЕВТИЧЕСКАЯ<h2> СТОМАТОЛОГИЯ</h2>.</h1>
				<p data-swiper-parallax={ -100 } data-swiper-parallax-opacity={ 0.1 }>
					Нашими врачами с использованием самых современных материалов и передовых технологий проводятся:</p>
				<ul>
					<li>— Диагностические консультации</li>
					<li>— Профессиональная гигиена</li>
					<li>— Лечение кариеса и корневых каналов зубов</li>
					<li>— Армирование (укрепление) зубов перед протезированием</li>
					<li>— Художественные реставрации истинно разрушенных зубов
					стоматологии и челюстно-лицевой хирургии.</li>
				</ul>
				</div>
				<Link href="/#services" className="linkBack"><a>&larr;</a></Link>
			</div>
			<div className="image__container" data-swiper-parallax={ -50 }>
				<div className="cyan" />
				<div className="dots" />
				<div className="picha" />
			</div>
		</div>)
}

export default SecondService;