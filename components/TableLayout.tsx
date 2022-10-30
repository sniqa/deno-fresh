import PageLayout from 'comps/PageLayout.tsx'
import { FunctionComponent } from 'preact'

const TableLayout: FunctionComponent = ({ children }) => {
	return <PageLayout>{children}</PageLayout>
}

export default TableLayout
