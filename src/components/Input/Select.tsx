import {ReactNode} from "react";
import {SCommon} from "@comp/@Common/types";
import {cx} from "@utils/cx";

interface IProps {
	size?: SCommon.TSize
	theme?: SCommon.TTheme
	children?: ReactNode
}

// @todo: Make into custom select component, instead of native select

export function Select (
	{
		size = SCommon.ESize.md,
		theme = SCommon.ETheme.default,
		children
	}: IProps
): ReactNode {
	const sizes = {
		sm: "gap-1 px-1.5 text-xs",
		md: "gap-2 px-3 text-sm",
		lg: "gap-2 px-4 text-lg",
	}
	
	const themes = {
		default: ['bg-accent-gray-3/20 border-accent-gray-3 text-white'],
		light: [],
		dark: [],
	}
	
	return (
		<select className={cx(
			'appearance-none transition flex flex-row w-fit items-center border rounded-sm font-medium ',
			sizes[size],
			themes[theme]
		)}>
			{children}
		</select>
	)
}