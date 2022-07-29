import React from 'react';

const NavItem = ({ label }) => {
	return (
		<li className='cursor-pointer py-2 px-3 rounded-xl xl:text-xl hover:bg-secondary hover:text-gray-900'>
			{label}
		</li>
	);
};

export default NavItem;
