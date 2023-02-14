import { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { ChildrenProp } from '@/shared/types/children.type'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const MainProvider: FC<ChildrenProp> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}

export default MainProvider
