import PageLayout from 'comps/PageLayout.tsx'
import LeftAside from 'islands/LeftAside.tsx'
import Table from 'islands/Table.tsx'
import { Path } from 'path'

const columns = [
	{
		header: () => <span>IDs</span>,
		field: '',
	},
	{
		header: () => <span>Name</span>,
		field: '',
	},
	{
		header: () => <span>Email</span>,
		field: '',
	},
	{
		header: () => <span>Price</span>,
		field: '',
	},
	{
		header: (val: string) => {
			console.log(val)

			return <span onClick={() => console.log(val)}>State</span>
		},
		field: '',
	},
]

const department = () => {
	return (
		<PageLayout
			pageTitle="部门"
			leftAside={<LeftAside matchPath={Path.Department} />}
		>
			<div className="h-screen overflow-auto w-full p-4">
				<div className="h-12 text-2xl">部门</div>
				<Table columns={columns} rows={[]} />
			</div>
		</PageLayout>
	)
}

export default department
