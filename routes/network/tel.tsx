import PageLayout from 'comps/PageLayout.tsx'
import LeftAside from 'islands/LeftAside.tsx'
import { Path } from 'path'

const tel = () => {
	return (
		<PageLayout pageTitle="部门" leftAside={<LeftAside matchPath={Path.Tel} />}>
			index
		</PageLayout>
	)
}

export default tel
