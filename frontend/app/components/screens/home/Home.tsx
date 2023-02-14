import { FC } from 'react'

import Layout from '@/components/layout/Layout'

import styles from './Home.module.scss'
import { IHome } from './home.interface'

const Home: FC<IHome> = () => {
	return (
		<Layout>
			<h1 className={styles.title}>тест тест тест</h1>
		</Layout>
	)
}

export default Home
