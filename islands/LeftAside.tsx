import RouteMenu, { RouteMenuProps } from 'islands/RouteMenu.tsx'
import { Path, PathMap } from 'path'

const routeMenus: RouteMenuProps[] = [
	// 主页
	{
		title: PathMap.Home,
		to: Path.Home,
		icon: <i class="fa-sharp fa-solid fa-house"></i>,
	},

	// 用户
	{
		title: PathMap.User,
		icon: <i class="fa-solid fa-user-gear"></i>,
		subRouteMenus: [
			{
				title: PathMap.Department,
				to: Path.Department,
				icon: <i class="fa-solid fa-building"></i>,
			},
			{
				title: PathMap.Account,
				to: Path.Account,
				icon: <i class="fa-solid fa-user"></i>,
			},
		],
	},

	// 资料
	{
		title: PathMap.Profile,
		to: Path.Profile,
		icon: <i class="fa-solid fa-book-open"></i>,
		subRouteMenus: [
			{
				title: PathMap.Document,
				to: Path.Document,
				icon: <i class="fa-solid fa-file-lines"></i>,
			},
			{
				title: '拓扑图',
				to: Path.Topology,
				icon: <i class="fa-solid fa-images"></i>,
			},
		],
	},

	// 网络
	{
		title: PathMap.Network,
		icon: <i class="fa-solid fa-network-wired"></i>,
		subRouteMenus: [
			{
				title: PathMap.Network_summary,
				to: Path.Network_summary,
				icon: <i class="fa-solid fa-chart-pie"></i>,
			},
			{
				title: PathMap.Network_type,
				to: Path.Network_type,
				icon: <i class="fa-solid fa-globe"></i>,
			},
			{
				title: PathMap.Ip_address,
				to: Path.Ip_address,
				icon: <i class="fa-solid fa-diagram-project"></i>,
			},
			{
				title: PathMap.Tel,
				to: Path.Tel,
				icon: <i class="fa-solid fa-phone"></i>,
			},
		],
	},

	// 设备
	{
		title: PathMap.Device,
		icon: <i class="fa-solid fa-desktop"></i>,
		subRouteMenus: [
			{
				title: PathMap.Device_summary,
				to: Path.Device_summary,
				icon: <i class="fa-solid fa-chart-pie"></i>,
			},
			{
				title: PathMap.Computer,
				to: Path.Computer,
				icon: <i class="fa-solid fa-computer"></i>,
			},
			{
				title: PathMap.Office_equipment,
				to: Path.Office_equipment,
				icon: <i class="fa-solid fa-print"></i>,
			},
			{
				title: PathMap.Network_device,
				to: Path.Network_device,
				icon: <i class="fa-brands fa-battle-net"></i>,
			},
			{
				title: PathMap.Server,
				to: Path.Server,
				icon: <i class="fa-solid fa-server"></i>,
			},
			{
				title: PathMap.Usb_key,
				to: Path.Usb_key,
				icon: <i class="fa-brands fa-usb"></i>,
			},
		],
	},

	// 消息
	{
		title: PathMap.Message,
		to: Path.Message,
		icon: <i class="fa-solid fa-message"></i>,
	},
]

interface LeftAsideProps {
	matchPath?: string
}

const LeftAside = ({ matchPath = '' }: LeftAsideProps) => {
	return (
		<div class="flex h-screen flex-col justify-between border-r bg-white">
			<div class="px-4 py-6">
				<nav class="flex flex-col">
					{routeMenus.map((routeMenu) => (
						<RouteMenu
							title={routeMenu.title}
							icon={routeMenu.icon}
							to={routeMenu.to}
							subRouteMenus={routeMenu.subRouteMenus}
							matchPath={matchPath}
						/>
					))}
				</nav>
			</div>
		</div>
	)
}

export default LeftAside
