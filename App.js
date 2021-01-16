import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import './index.css';
import data from './data';

function App() {
	const [index, setIndex] = useState(0);
	const [people /*setPeople*/] = useState(data);
	const lastIndex = people.length - 1;

	useEffect(() => {
		let slider = setInterval(() => {
			if (index === lastIndex) {
				setIndex(0);
			} else {
				setIndex(index + 1);
			}
		}, 5000);
		return () => clearInterval(slider);
	}, [index, lastIndex]);

	return (
		<section className='section'>
			<div className='title'>
				<h2>
					<span>/</span>Reviews
				</h2>
			</div>
			<div className='section-center'>
				{people.map((person, personIndex) => {
					const { id, image, name, title, quote } = person;

					let position = 'nextSlide';
					if (personIndex === index) {
						position = 'activeSlide';
					}
					if (
						personIndex === index - 1 ||
						(index === 0 && personIndex === people.length - 1)
					) {
						position = 'lastSlide';
					}

					return (
						<article className={position} key={id}>
							<img
								src={image}
								alt={name}
								className='person-img'
							/>
							<h4>{name}</h4>
							<p className='title'>{title}</p>
							<p className='text'>{quote}</p>
							<FaQuoteRight className='icon' />
						</article>
					);
				})}
				<button
					className='prev'
					onClick={() => {
						index === 0 ? setIndex(lastIndex) : setIndex(index - 1);
					}}
				>
					<FiChevronLeft />
				</button>
				<button
					className='next'
					onClick={() => {
						index === lastIndex ? setIndex(0) : setIndex(index + 1);
					}}
				>
					<FiChevronRight />
				</button>
			</div>
		</section>
	);
}

export default App;

// import React, { useState, useEffect } from 'react';
// import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
// import { FaQuoteRight } from 'react-icons/fa';
// import './index.css';
// import people from './data';

// function App() {
// 	const [active, setActive] = useState(0);

// 	useEffect(() => {
// 		const interval = setInterval(() => {
// 			if (active === lastIndex) {
// 				setActive(0);
// 			} else {
// 				setActive(active + 1);
// 			}
// 		}, 5000);
// 		return () => clearInterval(interval);
// 	});

// 	const lastIndex = people.length - 1;

// 	return (
// 		<section className='section'>
// 			<div className='title'>
// 				<h2>
// 					<span>/</span>Review
// 				</h2>
// 			</div>
// 			<div className='section-center'>
// 				<article>
// 					<img
// 						src={people[active].image}
// 						alt={people[active].name}
// 						className='person-img'
// 					/>
// 					<h4>{people[active].name}</h4>
// 					<p className='title'>{people[active].title}</p>
// 					<p className='text'>{people[active].quote}</p>
// 					<FaQuoteRight className='icon' />
// 				</article>
// 				<button
// 					className='prev'
// 					onClick={() => {
// 						active === 0
// 							? setActive(lastIndex)
// 							: setActive(active - 1);
// 					}}
// 				>
// 					<FiChevronLeft />
// 				</button>
// 				<button
// 					className='next'
// 					onClick={() => {
// 						active === lastIndex
// 							? setActive(0)
// 							: setActive(active + 1);
// 					}}
// 				>
// 					<FiChevronRight />
// 				</button>
// 			</div>
// 		</section>
// 	);
// }

// export default App;
