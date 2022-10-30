import PageLayout from 'comps/PageLayout.tsx'
import LeftAside from 'islands/LeftAside.tsx'
import { Path } from 'path'

const server = () => {
	return (
		<PageLayout
			pageTitle="部门"
			leftAside={<LeftAside matchPath={Path.Server} />}
		>
			index
		</PageLayout>
	)
}

export default server
