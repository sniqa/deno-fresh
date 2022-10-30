import { FunctionComponent, JSX } from 'preact'

export interface RouteMenuProps {
	title: string
	to?: string
	icon?: JSX.Element
	subRouteMenus?: RouteMenuProps[]
	matchPath?: string
}

const RouteMenu: FunctionComponent<RouteMenuProps> = ({
	title,
	icon,
	to = '',
	subRouteMenus,
	matchPath = '',
}) => {
	return subRouteMenus ? (
		<details class="group" open={true}>
			<summary class="flex cursor-pointer items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
				{icon}
				<span class="ml-3 text-sm font-medium">{title}</span>

				<span class="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
					<svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						<path
							fill-rule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				</span>
			</summary>

			<nav class="mt-1.5 ml-8 flex flex-col">
				{subRouteMenus.map((subRouteMenu) => (
					<a
						href={subRouteMenu.to}
						class={`flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ${
							matchPath === subRouteMenu.to ? 'bg-gray-100' : ''
						}`}
					>
						{subRouteMenu.icon}

						<span class="ml-3 text-sm font-medium">{subRouteMenu.title}</span>
					</a>
				))}
			</nav>
		</details>
	) : (
		<a
			href={to}
			class={`flex items-center rounded-lg px-4 py-2 text-gray-700  hover:bg-gray-100 hover:text-gray-700 ${
				matchPath === to ? 'bg-gray-100' : ''
			}`}
		>
			{icon}

			<span class="ml-3 text-sm font-medium">{title}</span>
		</a>
	)
}

export default RouteMenu
