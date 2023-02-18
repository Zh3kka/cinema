import { FC } from 'react'

import Heading from '@/components/UI/Heading/Heading'

import Meta from '@/utils/Meta/Meta'

const Error500: FC = () => {
	return (
		<Meta title="Page not found">
			<Heading title="500 - Server side Error" />
		</Meta>
	)
}

export default Error500
