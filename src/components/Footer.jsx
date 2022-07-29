import React from 'react';
import Button from './Button';
import Logo from '../assets/img/logo-footer.svg';
import InstagramIcon from './icons/Instagram';
import FacebookIcon from './icons/Facebook';
import LinkedInIcon from './icons/LinkedIn';
import TwitterIcon from './icons/Twitter';

const Footer = () => {
	return (
		<footer className='footer grid px-3 md:px-16 lg:px-20 xl:px-32 pt-40 pb-16 lg:grid-cols-4 gap-16'>
			{/* logo and text */}
			<div>
				<img className='mb-4' src={Logo} alt='' />
				<p className='mb-8'>
					Nam posuere accumsan porta. Integer id orci sed ante tincidunt
					tincidunt sit amet sed libero.
				</p>
				<p className=''>© StorageConnect 2022, All Rights Reserved</p>
			</div>
			{/* Quick Licks */}
			<div>
				<p className='uppercase font-extrabold mb-4 text-lg'>quick links</p>
				<ul className='space-y-3'>
					<li>Active Listings</li>
					<li>Sell your Self Storage</li>
					<li>Free Evaluation</li>
					<li>Learn</li>
				</ul>
			</div>
			{/* Newsletter */}
			<div>
				<p className='uppercase font-extrabold mb-4 text-lg'>newsletter</p>
				<p className=''>Get the latest news right in your inbox</p>
				<input
					className='mb-3 py-4 px-4 border border-blue-200 rounded-md w-full'
					type='text'
					placeholder='Enter your email'
				/>
				<Button variant='primary'>Subscribe Now</Button>
			</div>
			{/* Social */}
			<div>
				<p className='uppercase font-extrabold mb-4 text-lg'>
					let's get social
				</p>
				<div className='flex space-x-3 cursor-pointer mb-10'>
					<FacebookIcon></FacebookIcon>
					<LinkedInIcon></LinkedInIcon>
					<TwitterIcon></TwitterIcon>
					<InstagramIcon />
				</div>
				<select
					className='mb-3 py-4 px-4 border border-blue-200 rounded-md w-full'
					name='lang'
					id='lang'
				>
					<option value='english'>English - en</option>
					<option value='french'>French - fr</option>
					<option value='spanish'>Spanish - es</option>
					<option value='german'>German - ge</option>
				</select>
			</div>
		</footer>
	);
};

export default Footer;
