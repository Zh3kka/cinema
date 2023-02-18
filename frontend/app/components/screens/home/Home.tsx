import { FC } from 'react'
import { toastr } from 'react-redux-toastr'

import Heading from '@/components/UI/Heading/Heading'

import Meta from '@/utils/Meta/Meta'

import styles from './Home.module.scss'
import { IHome } from './home.interface'

const Home: FC<IHome> = () => {
	return (
		<Meta
			title="Seleznev Cinema"
			description="Watch movies and multfilms online or stream right to your browser"
		>
			<Heading title="Watch movies online" className="mb-8 text-xl" />
		</Meta>
	)
}

export default Home
