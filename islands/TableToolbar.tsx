const TableToolbar = () => {
	return (
		<div className="h-8 pt-2 pl-4">
			<a class="pr-2 relative font-medium text-indigo-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100">
				<i class="fa-solid fa-trash"></i>
			</a>

			<a class="pr-2 relative font-medium text-indigo-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100">
				<i class="fa-solid fa-upload"></i>
			</a>

			<a class="pr-2 relative font-medium text-indigo-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100">
				<i class="fa-solid fa-download"></i>
			</a>

			<a class="pr-2 relative font-medium text-indigo-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100">
				<i class="fa-solid fa-plus"></i>
			</a>
		</div>
	)
}

export default TableToolbar
