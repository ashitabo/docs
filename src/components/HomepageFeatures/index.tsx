import Heading from '@theme/Heading'
import clsx from 'clsx'
import type { ReactNode } from 'react'
import styles from './styles.module.css'

type FeatureItem = {
	title: string
	img: string
	description: ReactNode
}

const FeatureList: FeatureItem[] = [
	{
		title: '実務レベルのWeb開発',
		img: '/img/quaver.png',
		description: (
			<>
				そこそこ本格的なWeb開発を通じて、モダンな開発手法や技術を学びましょう。
				生成AI一強時代に負けないスキルを身につけることができるかもしれません。
			</>
		),
	},
	{
		title: 'クソデカガクチカ',
		img: '/img/two_quavers.png',
		description: (
			<>
				「全部自分で作りました」って言ってOK！
				ソフトウェアエンジニア就活はまあ29卒くらいまでならギリガクチカとして使えるんじゃないでしょうか。
			</>
		),
	},
	{
		title: '他人のために意外となる',
		img: '/img/crotchet.png',
		description: (
			<>
				自分の所属しているサークルメンバーのための開発が出来ます。
				そこそこ楽しい。
			</>
		),
	},
]

const Feature = ({ title, img, description }: FeatureItem) => {
	return (
		<div className={clsx('col col--4')}>
			<div className="text--center">
				<img className={styles.featureImage} src={img} alt={title} />
			</div>
			<div className="padding-horiz--md text--center">
				<Heading as="h3" className={styles.featureTitle}>
					{title}
				</Heading>
				<p>{description}</p>
			</div>
		</div>
	)
}

const HomepageFeatures = () => {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props) => (
						<Feature key={props.title} {...props} />
					))}
				</div>
			</div>
		</section>
	)
}

export default HomepageFeatures
