import React from 'react';
import Button from './Button';
import Man from '../assets/img/man-crate.png';
import Woman from '../assets/img/woman-hand.png';
import { faker } from '@faker-js/faker';
import ArticleItem from './ArticleItem';

const ARTICLES = [];

for (let n = 0; n < 4; n++) {
	ARTICLES.push({
		title: 'Everything you need to know about how to buy a Self Storage',
		date: `${faker.random.numeric()} days ago`,
		tag: `${faker.helpers.arrayElement(['operate', 'buy', 'sell'])}`,
		imgSrc: faker.image.image(500, 500, true),
		user: {
			image: faker.image.people(300, 300, true),
			name: `${faker.name.firstName()}`,
		},
	});
}

const StorageSection = () => {
	return (
		<>
			{/* Section with man */}
			<div className='flex items-center pb-60 pt-60 bg-white px-3 md:px-16 lg:px-20 xl:px-32 bg-active bg-cover bg-no-repeat bg-storage bg-right-bottom relative rounded-br-[300px] overflow-hidden'>
				<div className=''>
					<p className='mb-4 text-4xl font-semibold text-primary-dark'>
						Do you have a Self Storage for Sale?
					</p>
					<p className='md:w-3/6 text-xl mb-16'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
						sapien sagittis maecenas tincidunt. Quis pretium ornare id diam amet
						proin scelerisque nunc.
					</p>
					<Button variant='primary'>Sell Your Self Storage</Button>
				</div>

				<img
					className='absolute bottom-0 right-28 hidden md:block h-80 lg:h-auto'
					src={Man}
					alt=''
				/>
			</div>
			{/* Section with woman */}
			<div className='flex items-center justify-end pb-60 pt-60 bg-white px-3 md:px-16 lg:px-20 xl:px-32 relative overflow-hidden'>
				<img
					className='absolute bottom-0 left-0 hidden md:block h-96 lg:h-auto'
					src={Woman}
					alt=''
				/>

				<div className='md:w-3/6 text-right md:text-left'>
					<p className='mb-4 text-4xl font-semibold text-primary-dark'>
						Do you have a Self Storage for Sale?
					</p>
					<p className='text-xl mb-16'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
						sapien sagittis maecenas tincidunt. Quis pretium ornare id diam amet
						proin scelerisque nunc.
					</p>
					<Button className='float-right md:float-none' variant='primary'>
						Sell Your Self Storage
					</Button>
				</div>
			</div>
			{/* Section with listings */}
			<div className='-mt-36 flex flex-col justify-center items-center text-center items-center pb-60 pt-60 bg-white px-3 md:px-16 lg:px-20 xl:px-32 bg-active bg-no-repeat bg-cover relative rounded-tl-[300px] overflow-hidden text-white'>
				<p className='md:w-4/6 mb-4 text-2xl md:text-4xl font-semibold leading-normal'>
					Learn Everything About Buying, Selling, and Operating a Self Storage
				</p>
				<p className='md:w-3/6 text-xl'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sagittis,
					aliquam non tortor blandit lobortis. blandit
				</p>
				{/* Article List */}
				<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-20'>
					{ARTICLES.map((element) => (
						<ArticleItem {...element}></ArticleItem>
					))}
				</div>
				<div className='text-center mt-20'>
					<Button variant='secondary' size='lg'>
						Explore the Learning Section
					</Button>
				</div>
			</div>
		</>
	);
};

export default StorageSection;
