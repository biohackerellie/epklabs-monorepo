export const textVariant = (delay?: number) => {
	return {
		hidden: {
			y: -50,
			opacity: 0,
		},
		show: {
			y: 0,
			opacity: 1,
			transition: {
				type: 'spring',
				duration: 1.25,
				delay: delay,
			},
		},
	};
};

type fadeProps = {
	direction?: string;
	type?: string;
	delay?: number;
	duration?: number;
};

export const fadeIn = ({ direction, type, delay, duration }: fadeProps) => {
	return {
		hidden: {
			x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
			y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
			opacity: 0,
		},
		show: {
			x: 0,
			y: 0,
			opacity: 1,
			transition: {
				type: type,
				delay: delay,
				duration: duration,
				ease: 'easeOut',
			},
		},
	};
};

type zoomProps = {
	delay: number;
	duration: number;
};

export const zoomIn = ({ delay, duration }: zoomProps) => {
	return {
		hidden: {
			scale: 0,
			opacity: 0,
		},
		show: {
			scale: 1,
			opacity: 1,
			transition: {
				type: 'tween',
				delay: delay,
				duration: duration,
				ease: 'easeOut',
			},
		},
	};
};

export const slideIn = ({ direction, type, delay, duration }: fadeProps) => {
	return {
		hidden: {
			x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
			y: direction === 'up' ? '-100%' : direction === 'down' ? '100%' : 0,
		},
		show: {
			x: 0,
			y: 0,
			transition: {
				type: type,
				delay: delay,
				duration: duration,
				ease: 'easeOut',
			},
		},
	};
};

export const staggerContainer = (
	staggerChildren?: any,
	delayChildren?: any
) => {
	return {
		hidden: {},
		show: {
			transition: {
				staggerChildren: staggerChildren || 0,
				delayChildren: delayChildren || 0,
			},
		},
	};
};
