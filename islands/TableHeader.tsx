import { JSX } from 'preact/jsx-runtime'

interface TableHeader {
	header: (val: string) => JSX.Element
	filed: string
}

interface TableHeadersProps {
	columns: TableHeader[]
}

const TableHeader = ({ columns = [] }: TableHeadersProps) => {
	return (
		<thead class="">
			<tr>
				<th class="sticky inset-y-0 left-0  px-4 py-2 text-left">
					<label class="sr-only" for="SelectAll">
						Select All
					</label>

					<input
						class="h-5 w-5 rounded border-gray-200"
						type="checkbox"
						id="SelectAll"
					/>
				</th>
				{columns.map((column) => {
					return (
						<th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
							{column.header('val')}
						</th>
					)
				})}
			</tr>
		</thead>
	)
}

export default TableHeader

const TableHead = () => (
	<div class="flex items-center gap-2">
		ID
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-4 w-4 text-gray-700"
			viewBox="0 0 20 20"
			fill="currentColor"
		>
			<path
				fill-rule="evenodd"
				d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
				clip-rule="evenodd"
			/>
		</svg>
	</div>
)
