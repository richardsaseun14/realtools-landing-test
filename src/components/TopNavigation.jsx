import Logo from '../assets/img/logo.svg';
import React from 'react';
import NavItem from './NavItem';

const TopNavigation = () => {
	const NavItems = [
		{ label: 'Active Listings' },
		{ label: 'Sell your Self Storage' },
		{ label: 'Free Evaluation' },
		{ label: 'Learn' },
		{ label: 'Contact' },
	];
	return (
		<div className='flex justify-between items-center px-3 md:px-16 lg:px-20 xl:px-32 py-6 absolute left-0 top-0 bg-transparent w-full'>
			<div className='logo'>
				<img height='20' src={Logo} alt='' />
			</div>
			<button
				type='button'
				class='lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
				aria-controls='mobile-menu'
				aria-expanded='false'
			>
				<span class='sr-only'>Open main menu</span>
				<svg
					class='block h-6 w-6'
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					stroke-width='2'
					stroke='currentColor'
					aria-hidden='true'
				>
					<path
						stroke-linecap='round'
						stroke-linejoin='round'
						d='M4 6h16M4 12h16M4 18h16'
					/>
				</svg>
				<svg
					class='hidden h-6 w-6'
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					stroke-width='2'
					stroke='currentColor'
					aria-hidden='true'
				>
					<path
						stroke-linecap='round'
						stroke-linejoin='round'
						d='M6 18L18 6M6 6l12 12'
					/>
				</svg>
			</button>
			<ul className='hidden space-x-1 xl:space-x-4 lg:flex text-white'>
				{NavItems.map((element) => (
					<NavItem key={element.label} label={element.label}></NavItem>
				))}
			</ul>
		</div>
	);
};

export default TopNavigation;
