import { FC } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { getAdminHomeUrl } from '@/config/url.config'

import MenuItems from '../MenuItems'

import LogoutButton from './LogoutButton'

const AuthItems: FC = () => {
	const { user } = useAuth()
	return (
		<>
			{user ? (
				<>
					<MenuItems
						item={{
							icon: 'MdSettings',
							link: '/profile',
							title: 'Profile',
						}}
					/>
					<LogoutButton />
				</>
			) : (
				<MenuItems
					item={{
						icon: 'MdLogin',
						link: '/auth',
						title: 'Login',
					}}
				/>
			)}

			{user?.isAdmin && (
				<MenuItems
					item={{
						icon: 'MdOutlineLock',
						link: getAdminHomeUrl(),
						title: 'Admin panel',
					}}
				/>
			)}
		</>
	)
}

export default AuthItems
