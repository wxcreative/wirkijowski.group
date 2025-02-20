import {ReactNode} from "react";

import Link from "next/link";
import {cx} from "@utils/cx";

import {IconExternal} from "@comp/NavAnchor/IconExternal";

interface INavButtonProps {
	href: string
	external?: boolean
	children?: ReactNode
}

export function NavAnchor ({href, external = false, children}: INavButtonProps): ReactNode {
	return (
		<li className={cx('py-2 list-none flex flex-row')}>
			<Link passHref href={href}>
				<button className={cx(
					"transition h-fit font-medium text-sm/8 flex flex-row gap-1 px-2 items-center cursor-pointer",
					"hover:bg-accent-gray-2 rounded-sm"
				)}>
					{children}
					{external && <IconExternal />}
				</button>
			</Link>
		</li>
	)
}