import PageLayout from 'comps/PageLayout.tsx'
import LeftAside from 'islands/LeftAside.tsx'
import { Path } from 'path'

const home = () => {
	return (
		<PageLayout
			pageTitle="Home"
			leftAside={<LeftAside matchPath={Path.Home} />}
		></PageLayout>
	)
}

export default home
