import PageLayout from 'comps/PageLayout.tsx'
import LeftAside from 'islands/LeftAside.tsx'
import { Path } from 'path'

const message = () => {
	return (
		<PageLayout
			pageTitle="Home"
			leftAside={<LeftAside matchPath={Path.Message} />}
		></PageLayout>
	)
}

export default message
