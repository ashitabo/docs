import styles from './styles.module.css'

type Props = {
	src: string
	alt?: string
	caption?: string
}

const Figure = ({ src, alt, caption }: Props) => {
	return (
		<figure className={styles.figure}>
			<img src={src} alt={alt} />
			{caption && (
				<figcaption className={styles.figcaption}>{caption}</figcaption>
			)}
		</figure>
	)
}

export default Figure
