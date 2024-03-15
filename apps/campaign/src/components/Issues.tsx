'use client';

import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '@/lib/styles';
import { issues } from '@/lib/constants';
import SectionWrapper from '@/lib/sectionWrapper';
import { textVariant } from '@/lib/motion';
import Image from 'next/image';

const Issues = () => {
	console.log(issues);
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Where I stand on the</p>
				<h2 className={styles.sectionHeadText}>Issues</h2>
			</motion.div>
			<div className='mt-20 flex flex-col'>
				<VerticalTimeline>
					{issues.map((issues, index) => (
						<IssueCard
							key={index}
							issues={issues}
						/>
					))}
				</VerticalTimeline>
			</div>
		</>
	);
};

const IssueCard = ({ issues }: any) => (
	<VerticalTimelineElement
		visible={true}
		contentStyle={{ background: '#a5b4fc', color: '#fff' }}
		contentArrowStyle={{ borderRight: '7px solid #232631' }}
		date={issues.title}
		iconStyle={{ background: issues.iconBG }}
		icon={
			<div className='flex justify-center items-center w-full h-full'>
				<Image
					src={issues.icon}
					alt={issues.title}
					className=' object-contain'
				/>
			</div>
		}
	>
		<div>
			<h3 className='text-black text-[24px] font-bold'>{issues.title}</h3>
			<p className='mt-5 ml-5 space-y-2 text-white text-[14px] pl-1 tracking-wider'>
				{issues.description}
			</p>
		</div>
	</VerticalTimelineElement>
);

export default SectionWrapper({ Component: Issues, idName: 'issues' });
