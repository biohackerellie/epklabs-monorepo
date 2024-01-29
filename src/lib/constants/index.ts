import { dollarsign, home, alert } from '@/assets';

export const navLinks = [
	{
		title: 'About',
		id: '#about',
	},
	{
		title: 'Issues',
		id: '#issues',
	},
	{
		title: 'Contact',
		id: '#contact',
	},
] as const;

export const issues = [
	{
		title: 'Income Inequality',
		icon: dollarsign,
		description:
			'Im sure you have heard the phrase "no one wants to work anymore". As a 31 year old millennial, I can tell you that is not true. My generation, as well as Gen Z are working harder than ever and seeing less and less of the fruits of our labor. Montana currently has a minimum wage of $10.30. In this economy, especially with the cost of living in places like Billings, Bozeman, and Missoula, that is simply not survivable. Retailers and small businesses have been keeping the wages of their employees stagnant for years, while the cost of living has continued to rise. We need to raise the minimum wage to $15 an hour, and tie it to inflation so that it will continue to rise with the cost of living. We also need to make sure that the minimum wage applies to all workers, including tipped workers. No one should have to work 2 or 3 jobs just to make ends meet.',
		iconBG: '#ffffff',
	},
	{
		title: 'The Housing Crisis',
		icon: home,
		description:
			'As far as the biggest issues facing millennial and gen-z adults today, nothing goes hand in hand with income inequality like the housing crisis. The average cost of a home in Montana is $442,052. The average cost of rent in Montana is $1,650. The average income in Montana is $37,837. The math simply does not add up. We need to build more affordable housing for everyone, and put pressure on , not just big money moving to Montana. We also need to put pressure on property management companies to stop raising rent every year. We need to make sure that the people who live in Montana can afford to stay in Montana.',
		iconBG: '#ffffff',
	},
	{
		title: 'Human Rights',
		icon: alert,
		description:
			'I dont like to sound alarmist, but Republicans are actively trying to take away human rights. Primarily from Women and the LGBTQ+ community. So far, the Montana Supreme Court has upheld protections for Womens reproductive rights but Republicans will not stop making efforts to take them away and we must stand against them. We also need people in office who will stand up to Republican bullying of trans and other queer kids in our state. As of 2022, 80% of Americans support laws protecting LGBTQ+ people, Republicans are on the wrong side of history and we need to make sure they know it.',
		iconBG: '#ffffff',
	},
];
