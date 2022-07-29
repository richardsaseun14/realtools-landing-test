import React from 'react';
import Button from './Button';
import ListingItem from './ListingItem';
import { faker } from '@faker-js/faker';

const FEATURED_LISTS = [];

for (let n = 0; n < 6; n++) {
	FEATURED_LISTS.push({
		heading: 'Self Storage Unit',
		location: `${faker.address.cityName()}, ${faker.address.stateAbbr()}`,
		size: `${faker.random.numeric(5)} Sq ft`,
		occupancy: `${faker.random.numeric(2)}%`,
		total: faker.random.numeric(2),
		imgSrc: faker.image.nature(1234, 2345, true),
	});
}

const ActiveSection = () => {
	return (
		<div className='flex flex-col justify-center items-center text-center  pb-28 pt-24 bg-white px-3 md:px-16 lg:px-20 xl:px-32 relative text-white bg-active bg-center bg-no-repeat bg-cover'>
			<p className='mb-4 text-4xl font-semibold'>
				Active Listing Self Storages
			</p>
			<p className='md:w-3/6 text-xl'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sagittis,
				aliquam non tortor blandit lobortis. blandit
			</p>

			<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-20'>
				{FEATURED_LISTS.map((element) => (
					<ListingItem {...element}></ListingItem>
				))}
			</div>

			<div className='text-center mt-20'>
				<Button variant='secondary' size='lg'>
					View More Listings
				</Button>
			</div>
		</div>
	);
};

export default ActiveSection;
