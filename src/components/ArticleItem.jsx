import React from 'react';
import Button from './Button';
import CaptureIcon from './icons/CaptureIcon';
import TagIcon from './icons/Tag';
import TimeIcon from './icons/Time';

const ArticleItem = ({ title, date, tag, user, className, imgSrc }) => {
	const details = (
		<div className='flex items-center justify-between text-sm'>
			<p className='inline-flex items-center space-x-1'>
				<TimeIcon></TimeIcon>
				<span>{date}</span>
			</p>
			<p className='inline-flex items-center space-x-1 capitalize'>
				<TagIcon></TagIcon>
				<span>{tag}</span>
			</p>
			<p className='inline-flex items-center space-x-1'>
				<div className='h-[24px] w-[24px] rounded-full border border-2 overflow-hidden border-gray-400'>
					<img className='w-full h-full object-cover' src={user.image} alt='' />
				</div>{' '}
				<span>{user.name}</span>
			</p>
		</div>
	);

	return (
		<div
			className={
				`bg-primary-lighter p-1 rounded-lg text-left text-paragraph ` +
				className
			}
		>
			<div className={`h-[200px] w-full bg-primary rounded-lg`}>
				<img
					className='h-full w-full object-cover rounded-lg'
					src={imgSrc}
					alt=''
				/>
			</div>
			<div className='px-2'>
				<p className='text-xl font-semibold my-4'>{title}</p>
				{details}
				<div className='text-center my-5'>
					<Button variant='primary'>Read More</Button>
				</div>
			</div>
		</div>
	);
};

export default ArticleItem;
