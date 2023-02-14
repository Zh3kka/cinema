import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logoImage from '@/assets/images/logos.svg'

const Logo: FC = () => {
	return (
		<Link href="/" legacyBehavior>
			<a className="mx-layout mb-10">
				<Image src={logoImage} alt="Лого" width={100} height={34} />
			</a>
		</Link>
	)
}

export default Logo
