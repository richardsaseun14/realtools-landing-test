import React from 'react';
import Button from './Button';
import EnterIcon from './icons/Enter';

const QueriesSection = () => {
	return (
		<div className='flex flex-col justify-center items-center text-center py-40 bg-queries bg-center bg-no-repeat bg-cover'>
			<div className='shadow-query flex flex-col lg:flex-row w-5/6 lg:w-3/5 bg-white items-center justify-between px-6 md:px-20 py-28 rounded-xl text-center lg:text-left'>
				<div className=''>
					<p className='text-4xl font-extrabold text-primary-dark mb-2 lg:mb-7'>
						Any Queries? Reach Out to Us
					</p>
					<p className='text-lg mb-7 lg:mb-0'>
						Feel free to write to us, we are happy to help you
					</p>
				</div>
				<Button variant='primary'>
					<span>Write to Us</span> <EnterIcon></EnterIcon>
				</Button>
			</div>
		</div>
	);
};

export default QueriesSection;
