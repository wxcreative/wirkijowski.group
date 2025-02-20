import {ReactNode} from "react";

import Link from "next/link";
import {cx} from "@utils/cx";
import {IconExternal} from "@comp/Icon/IconExternal";
import {SCommon} from "@comp/@Common/types";

interface IProps {
	href: string,
	size?: SCommon.TSize
	theme?: SCommon.TTheme
	external?: boolean
	arrow?: boolean
	children?: ReactNode
}

export function Button (
	{
		href,
		size = SCommon.ESize.md,
		theme = SCommon.ETheme.default,
		external = false,
		arrow = false,
		children,
	}: IProps
): ReactNode {
	if (arrow && external) arrow = false;
	
	const sizes = {
		sm: {button: "gap-1 px-1.5", label: "text-xs/6"},
		md: {button: "gap-2 px-3", label: "text-sm/8"},
		lg: {button: "gap-2 px-4", label: "text-lg/10"},
	}
	
	const themes = {
		default: ['bg-white border-transparent text-black'],
		light: [],
		dark: [],
	}
	
	return (
		<Link href={href}
		      className={cx(
				'transition flex flex-row w-fit items-center border rounded-sm font-medium',
				sizes[size].button,
				themes[theme]
		)}>
			<span className={cx(
				sizes[size].label
			)}>{children}</span>
			{external && <IconExternal />}
			{arrow && ( "arr" )}
		</Link>
	)
}