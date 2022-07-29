import React from 'react';
import Button from './Button';
import ListingItem from './ListingItem';
import { faker } from '@faker-js/faker';

const FEATURED_LISTS = [
	{
		heading: 'Self Storage Unit',
		location: `${faker.address.cityName()}, ${faker.address.stateAbbr()}`,
		size: `${faker.random.numeric(5)} Sq ft`,
		occupancy: `${faker.random.numeric(2)}%`,
		imgSrc: faker.image.nature(1234, 2345, true),
		total: faker.random.numeric(2),
	},
];

for (let n = 0; n < 2; n++) {
	FEATURED_LISTS.push({
		location: `${faker.address.cityName()}, ${faker.address.stateAbbr()}`,
		size: `${faker.random.numeric(5)} Sq ft`,
		occupancy: `${faker.random.numeric(2)}%`,
		imgSrc: faker.image.nature(1234, 2345, true),
		total: faker.random.numeric(2),
	});
}

const FeaturedSection = () => {
	return (
		<div className='flex flex-col justify-center items-center text-center pb-28 pt-24 bg-white px-3 md:px-16 lg:px-20 xl:px-32 relative'>
			<p className='mb-4 text-4xl font-semibold text-primary-dark'>
				Features Self Storage
			</p>
			<p className='md:w-3/6 text-xl'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sagittis,
				aliquam non tortor blandit lobortis. blandit
			</p>

			<div className='grid gap-8 lg:grid-cols-3 mt-20'>
				{FEATURED_LISTS.map((element) => (
					<ListingItem {...element}></ListingItem>
				))}
			</div>
		</div>
	);
};

export default FeaturedSection;
