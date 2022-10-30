import PageLayout from 'comps/PageLayout.tsx'
import LeftAside from 'islands/LeftAside.tsx'
import { Path } from 'path'

const computer = () => {
	return (
		<PageLayout
			pageTitle="部门"
			leftAside={<LeftAside matchPath={Path.Computer} />}
		>
			index
		</PageLayout>
	)
}

export default computer
