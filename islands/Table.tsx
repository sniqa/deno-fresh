import TableBody from 'islands/TableBody.tsx'
import TableHeader from 'islands/TableHeader.tsx'
import TableToolbar from 'islands/TableToolbar.tsx'

interface TableProps {
	columns: any[]
	rows: []
}

const Table = (props: TableProps) => {
	const { columns, rows } = props

	return (
		<div class="overflow-hidden overflow-x-auto rounded-lg border border-gray-200">
			<TableToolbar />
			<table class="min-w-full divide-y divide-gray-200 text-sm">
				<TableHeader columns={columns} />

				<TableBody />
			</table>
		</div>
	)
}

export default Table
