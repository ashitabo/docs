import Link from '@docusaurus/Link'
import clsx from 'clsx'
import type { ComponentProps, ReactNode } from 'react'
import styles from './styles.module.css'

type Props = ComponentProps<typeof Link> & {
	children: ReactNode
	className?: string
}

const InlineLink = ({ children, className, ...props }: Props) => {
	return (
		<Link {...props} className={clsx(styles.inlineLink, className)}>
			<span className={styles.label}>{children}</span>
			<svg
				className={styles.icon}
				viewBox="0 0 24 24"
				aria-hidden="true"
				focusable="false"
			>
				<path
					d="M5 12h13m0 0-4-4m4 4-4 4"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.6"
				/>
			</svg>
		</Link>
	)
}

export default InlineLink
