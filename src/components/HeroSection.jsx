import React from 'react';
import Button from './Button';

const HeroSection = () => {
	return (
		<div className='flex flex-col justify-center items-center text-center pb-28 pt-40 lg:pt-60 bg-hero bg-center bg-no-repeat bg-cover text-white px-3 md:px-16 lg:px-20 xl:px-32'>
			<div className='text-3xl lg:text-6xl font-black mb-5'>
				<p className='mb-3'>Self Storage Business</p>
				<p className=''>Buy. Sell. Learn.</p>
			</div>
			<p className='lg:w-2/6 text-xl'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sagittis,
				aliquam non tortor blandit lobortis. blandit
			</p>
			<div className='mt-16 flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-3'>
				<Button className='' variant='secondary'>
					Sell Your Self Storage
				</Button>
				<Button variant='basic'>Active Self Storage Listings</Button>
			</div>
		</div>
	);
};

export default HeroSection;
