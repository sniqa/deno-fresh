import PageLayout from 'comps/PageLayout.tsx'
import LeftAside from 'islands/LeftAside.tsx'
import { Path } from 'path'

const office_equipment = () => {
	return (
		<PageLayout
			pageTitle="部门"
			leftAside={<LeftAside matchPath={Path.Office_equipment} />}
		>
			index
		</PageLayout>
	)
}

export default office_equipment
