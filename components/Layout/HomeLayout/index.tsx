import type { NextPage } from "next";
import styles from "./index.module.scss"

// import { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux'
// import RhNav from '../../components/RhNav';
// import RhProgress from '../../components/RhProgress';
// import { getNav } from '../../utils/getNav';

function HomeLayout (props) :NextPage {
	console.log(props)
	// const {pathname} = useLocation();
	// const [progressWidth, setProgressWidth] = useState(0);
	// const { data: classify } = useSelector(state => state.classify)
	// const { navs = [] } = getNav(classify)

	// let onScroll = (e)=>{
	// 	const { scrollHeight, scrollTop, offsetHeight } = e.target;
	// 	let overflowHeight = scrollHeight - offsetHeight;
	// 	setProgressWidth(scrollTop / overflowHeight * 100 + '%') ;
	// }

	return <div className={styles.main}>
		{/* <RhProgress width={progressWidth} /> */}

		{/* 左侧自我介绍 */}
		<div className={styles.profile}>
			{/* <div className="avatar">
				<img src="/avatar.png" alt='头像' />
			</div> */}
			<div className={styles.monster} title="CSS大眼仔">
				<div className={styles.eye}></div>
			</div>
			<h1 className={styles.name}>山海行</h1>
			<div className={styles.intro}>
				<h3 className={styles.tit}>名字由来</h3>
				<code>
					很喜欢《让大象飞》中，行动教育集团董事长李践的推荐语：
					<p className={styles.highlight}>高高山顶立，深深海底行。</p>
					<p className={styles.highlight}>无论做人、做事、做企业还是写书，高度和深度的结合都非常重要。</p>
				</code>
			</div>
		</div>
		<div className={styles.main}>
			{/* <header>
				<RhNav className="nav" navlist={navs} pathname={pathname} />
				<Link to='/e'>写文章</Link>
			</header>
			<section className="body" onScroll={onScroll}> */}
				{ props.children }
			{/* </section> */}
		</div>
	</div>
}

export default HomeLayout;