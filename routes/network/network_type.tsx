import PageLayout from 'comps/PageLayout.tsx'
import LeftAside from 'islands/LeftAside.tsx'
import { Path } from 'path'

const network_type = () => {
	return (
		<PageLayout
			pageTitle="部门"
			leftAside={<LeftAside matchPath={Path.Network_type} />}
		>
			index
		</PageLayout>
	)
}

export default network_type
