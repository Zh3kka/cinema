import { FC } from 'react'

import Heading from '@/components/UI/Heading/Heading'

import Meta from '@/utils/Meta/Meta'

const Error404: FC = () => {
	return (
		<Meta title="Page not found">
			<Heading title="404 - Page Not Found" />
		</Meta>
	)
}

export default Error404
