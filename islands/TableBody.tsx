const TableBody = () => {
	return (
		<tbody class="divide-y divide-gray-200">
			<tr>
				<td class="sticky inset-y-0 left-0 bg-white px-4 py-2">
					<label class="sr-only" for="Row1">
						Row 1
					</label>

					<input
						class="h-5 w-5 rounded border-gray-200"
						type="checkbox"
						id="Row1"
					/>
				</td>
				<td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
					#00001
				</td>
				<td class="whitespace-nowrap px-4 py-2 text-gray-700">
					John Frusciante
				</td>
				<td class="whitespace-nowrap px-4 py-2 text-gray-700">john@rhcp.com</td>
				<td class="whitespace-nowrap px-4 py-2 text-gray-700">$783.23</td>
				<td class="whitespace-nowrap px-4 py-2">
					<strong class="rounded bg-red-100 px-3 py-1.5 text-xs font-medium text-red-700">
						Cancelled
					</strong>
				</td>
			</tr>

			<tr>
				<td class="sticky inset-y-0 left-0 bg-white px-4 py-2">
					<label class="sr-only" for="Row2">
						Row 2
					</label>

					<input
						class="h-5 w-5 rounded border-gray-200"
						type="checkbox"
						id="Row2"
					/>
				</td>
				<td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
					#00002
				</td>
				<td class="whitespace-nowrap px-4 py-2 text-gray-700">
					George Harrison
				</td>
				<td class="whitespace-nowrap px-4 py-2 text-gray-700">
					george@beatles.com
				</td>
				<td class="whitespace-nowrap px-4 py-2 text-gray-700">$128.99</td>
				<td class="whitespace-nowrap px-4 py-2">
					<strong class="rounded bg-green-100 px-3 py-1.5 text-xs font-medium text-green-700">
						Paid
					</strong>
				</td>
			</tr>

			<tr>
				<td class="sticky inset-y-0 left-0 bg-white px-4 py-2">
					<label class="sr-only" for="Row3">
						Row 3
					</label>

					<input
						class="h-5 w-5 rounded border-gray-200"
						type="checkbox"
						id="Row3"
					/>
				</td>
				<td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
					#00003
				</td>
				<td class="whitespace-nowrap px-4 py-2 text-gray-700">Dave Gilmour</td>
				<td class="whitespace-nowrap px-4 py-2 text-gray-700">
					dave@pinkfloyd.com
				</td>
				<td class="whitespace-nowrap px-4 py-2 text-gray-700">$459.43</td>
				<td class="whitespace-nowrap px-4 py-2">
					<strong class="rounded bg-amber-100 px-3 py-1.5 text-xs font-medium text-amber-700">
						Partially Refunded
					</strong>
				</td>
			</tr>
		</tbody>
	)
}

export default TableBody
