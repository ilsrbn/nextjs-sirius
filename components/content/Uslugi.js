import Link from 'next/link'

function Uslugi() {
	return (
		<div className="Uslugi slide">
			<div className="container__text" data-swiper-parallax={ -80 } data-swiper-parallax-opacity={ 0.1 }>
				<h1>У<h2>СЛУГИ</h2>.</h1>
			</div>
			<div className="sheet">
			<div className="Cards__main-container">
				<div className="couple-of-cards firstCouple">
					<Link href="/services/1">
						<a>
						<div className="card firstCard">
							<img
								src="/images/icon_1.svg" className="card__icon" />
							<div className="card__text">ЛЕЧЕНИЕ ЗУБОВ ВО СНЕ</div>
						</div>
						</a>
					</Link>
					<Link href="/services/2">
					<a>
						<div className="card secondCard">
							<img
								src="images/icon_2.svg"
								className="card__icon" />
							<div className="card__text">ТЕРАПЕВТИЧЕСКАЯ СТОМАТОЛОГИЯ</div>
						</div>
					</a>
					</Link>
				</div>
				<div className="couple-of-cards secondCouple">
					<Link href="/services/3">
					<a>
						<div className="card firstCard">
							<img
								src="/images/icon_3.svg"
								className="card__icon" />
							<div className="card__text">ДЕТСКАЯ СТОМАТОЛОГИЯ</div>
						</div>
					</a>
					</Link>
					<Link href="/services/4">
					<a>
						<div className="card secondCard">
							<img
								src="/images/icon_4.svg"
								className="card__icon" />
							<div className="card__text">ОРТОПЕДИЧЕСКАЯ СТОМАТОЛОГИЯ</div>
						</div>
					</a>
					</Link>
				</div>
				<div className="couple-of-cards thirdCouple">
					<Link href="/services/5">
					<a>
						<div className="card firstCard">
							<img
								src="/images/icon_5.svg"
								className="card__icon" />
							<div className="card__text">ХИРУРГИЧЕСКАЯ СТОМАТОЛОГИЯ</div>
						</div>
					</a>
					</Link>
					<Link href="/services/6">
					<a>
						<div className="card secondCard">
							<img
								src="/images/icon_6.svg"
								className="card__icon" />
							<div className="card__text">ЧЕЛЮСТНО-ЛИЦЕВАЯ ХИРУРГИЯ</div>
						</div>
					</a>
					</Link>
				</div>
		</div>
		<div className="kakoy-to_block" data-swiper-parallax-y={ -40 }>
			<img
				src="images/dots/6x9.png"
				className="dots" />
			<img
				src="images/chel.png"
				className="pickcha" />
		</div>
		</div>
	</div>
)

}

export default Uslugi;