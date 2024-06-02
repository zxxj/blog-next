
interface NavType {
	label: string
	value: string
}

const navs: NavType[] = [
	{
		label: "首页",
		value: "/"
	},
	{
		label: "咨询",
		value: "/info"
	},
	{
		label: '标签',
		value: "/Tag"
	}
]

export { navs }