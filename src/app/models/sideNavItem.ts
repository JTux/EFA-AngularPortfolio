export interface NavRouteItem {
	text: string;
	route: string;
	icon: string;
}

export interface SideNavItem extends NavRouteItem {
	id: number;
	active: boolean;
}