import clsx from 'clsx'
import type { ReactNode } from 'react'
import styles from './styles.module.css'

type Props = {
	children: ReactNode
	className?: string
}

const StepList = ({ children, className }: Props) => {
	return <div className={clsx(styles.stepList, className)}>{children}</div>
}

export default StepList
