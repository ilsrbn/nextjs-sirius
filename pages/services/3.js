import Link from 'next/link'

function ThirdService() {
	return (
		<div className="something Service_3">
			<div className='container__text'>
				<div className='morecont'>
				<h1 data-swiper-parallax={ -80 } data-swiper-parallax-opacity={ 0.1 }>ДЕТСКАЯ<h2> СТОМАТОЛОГИЯ</h2>.</h1>
				<p data-swiper-parallax={ -100 } data-swiper-parallax-opacity={ 0.1 }>
					В нашей клинике принят системный подход в лечении детей. То есть
ребенку проводится полная санация полости рта. Ребёнка и его родителей обучают правильной гигиене с последующим контролем. Регулярные плановые осмотры позволяют сократить риск развития кариеса или пролечить его на ранних стадиях, не дожидаясь осложнений, а также минимизировать риск развития нарушений прикуса. Мы лечим детей с самого раннего возраста, с момента прорезывания зубов. А благодаря применению детской седативной анестезии, мы можем лечить детей в самом тяжелом состоянии, а также детей с особенностями развития.
				</p>
				</div>
				<Link href="/#services" className="linkBack"><a>&larr;</a></Link>
			</div>
			<div className="image__container" data-swiper-parallax={ -50 }>
				<div className="cyan" />
				<img
					src="/images/dots/3x8.png"
					className="dots" />
				<img
					src="/images/uslugi/3-min.jpg"
					className="picha"
					alt="Doctor" />
			</div>
		</div>)
}

export default ThirdService;