import { Head } from '$fresh/runtime.ts'
import { FunctionComponent, JSX } from 'preact'

interface PageLayoutProps {
	pageTitle?: string
	leftAside?: JSX.Element
	centerMain?: JSX.Element
	rightAside?: JSX.Element
}

const PageLayout: FunctionComponent<PageLayoutProps> = (props) => {
	const { pageTitle = '', leftAside, children, rightAside } = props

	return (
		<>
			<Head>
				<title>{pageTitle}</title>
				<link rel="stylesheet" type="text/css" href="/style.css" />
				<link rel="stylesheet" type="text/css" href="/fontawesome.min.css" />
				<link rel="stylesheet" type="text/css" href="/solid.min.css" />
				<link rel="stylesheet" type="text/css" href="/brands.min.css" />
			</Head>

			<div className="flex">
				<aside class={`w-72 inline-block`}>{leftAside}</aside>

				<main class="inline-block w-full">{children}</main>

				{rightAside && <aside class={`inline-block`}></aside>}
			</div>
		</>
	)
}

export default PageLayout
