import React from 'react'

import './topnav.css'

import { Link } from 'react-router-dom'

import Dropdown from '../dropdown/Dropdown'

import ThemeMenu from '../thememenu/ThemeMenu'
import notifications from '../../assets/JsonData/notification.json'
import user_image from '../../assets/images/mana.jpg'
import user_menu from '../../assets/JsonData/user_menus.json'

const curr_user = {
	display_name: 'Manadev',
	image: user_image,
}

const renderNotificationItem = (item, idx) => (
	<div className='notification-item' key={idx}>
		<i className={item.icon}></i>
		<span>{item.content}</span>
	</div>
)

const renderUserToggle = (user) => (
	<div className='topnav__right-user'>
		<div className='topnav__right-user__image'>
			<img src={user.image} alt='' />
		</div>
		<div className='topnav__right-user__name'>{user.display_name}</div>
	</div>
)

const renderUserMenu = (item, idx) => (
	<Link to='/' key={idx}>
		<div className='notification-item'>
			<i className={item.icon}></i>
			<span>{item.content}</span>
		</div>
	</Link>
)

const Topnav = () => {
	return (
		<div className='topnav'>
			<div className='topnav__search'>
				<input type='text' placeholder='Search here...' />
				<i className='bx bx-search'></i>
			</div>
			<div className='topnav__right'>
				<div className='topnav__right-item'>
					<Dropdown
						customToggle={() => renderUserToggle(curr_user)}
						contentData={user_menu}
						renderItems={(item, idx) => renderUserMenu(item, idx)}
					/>
				</div>
				<div className='topnav__right-item'>
					<Dropdown
						icon='bx bx-bell'
						badge='12'
						contentData={notifications}
						renderItems={(item, idx) => renderNotificationItem(item, idx)}
						renderFooter={() => <Link to='/'>View All</Link>}
					/>
				</div>
				<div className='topnav__right-item'>
					<ThemeMenu />
				</div>
			</div>
		</div>
	)
}

export default Topnav
