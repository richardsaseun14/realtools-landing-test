import React from 'react';
import Button from './Button';
import BuildingIcon from './icons/BuildingIcon';
import CaptureIcon from './icons/CaptureIcon';
import LocationIcon from './icons/LocationIcon';
import PeopleIcon from './icons/PeopleIcon';

const ListingItem = ({
	heading = '',
	location = 'Jersey City, NJ',
	size = '40,232 Sq ft',
	total = 89,
	occupancy = '48%',
	className,
	imgSrc = 'https://thumbs.dreamstime.com/b/luxury-big-modern-house-electric-car-luxury-modern-house-electric-car-141295838.jpg',
}) => {
	const details = heading ? (
		<div className='flex justify-between'>
			<div className='flex flex-col space-y-2'>
				<p className='inline-flex items-center space-x-2'>
					<LocationIcon></LocationIcon> <span>{location}</span>
				</p>
				<p className='inline-flex items-center space-x-2'>
					<CaptureIcon></CaptureIcon>
					<span className='font-semibold'>Size: </span> <span>{size}</span>
				</p>
			</div>
			<div className='flex flex-col space-y-2'>
				<p className='inline-flex items-center space-x-2'>
					<BuildingIcon></BuildingIcon>
					<span className='font-semibold'>Total Units: </span>
					<span>{total}</span>
				</p>
				<p className='inline-flex items-center space-x-2'>
					<PeopleIcon></PeopleIcon>
					<span className='font-semibold'>Occupancy: </span>
					<span>{occupancy}</span>
				</p>
			</div>
		</div>
	) : (
		<div className='flex flex-col space-y-2'>
			<p className='inline-flex items-center space-x-2 text-2xl font-semibold'>
				<LocationIcon></LocationIcon>
				<span>{location}</span>
			</p>
			<p className='inline-flex items-center space-x-2'>
				<BuildingIcon></BuildingIcon>
				<span className='font-semibold'>Total Units: </span>
				<span>{total}</span>
			</p>
			<p className='inline-flex items-center space-x-2'>
				<PeopleIcon></PeopleIcon>
				<span className='font-semibold'>Occupancy: </span>
				<span>{occupancy}</span>
			</p>
			<p className='inline-flex items-center space-x-2'>
				<CaptureIcon></CaptureIcon>
				<span className='font-semibold'>Size: </span> <span>{size}</span>
			</p>
		</div>
	);

	return (
		<div
			className={
				`bg-primary-lighter p-6 rounded-lg text-left text-paragraph ` +
				className
			}
		>
			{/* <img className='h-[200px] w-full rounded-xl' src={imgSrc} alt='' /> */}
			<div className={`h-[275px] w-full bg-primary rounded-xl`}>
				<img
					className='h-full w-full object-cover rounded-xl'
					src={imgSrc}
					alt=''
				/>
			</div>
			<p className='text-2xl font-semibold my-4'>{heading}</p>
			{details}
			<div className='text-center mt-5'>
				<Button variant='primary'>View More Detail</Button>
			</div>
		</div>
	);
};

export default ListingItem;
