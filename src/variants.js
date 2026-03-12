// ─── Motion Standards ────────────────────────────────────────────────────────
// duration  : 0.6s  (content)  |  0.4s (UI micro-interactions)
// ease      : [0.22, 1, 0.36, 1]  (ease-out-expo – feels snappy without being abrupt)
// distance  : 40px  (reduced from 80px for subtlety)
// viewport  : once: false, amount: 0.2 (trigger early so content is never clipped)
// ─────────────────────────────────────────────────────────────────────────────

const EASE = [0.22, 1, 0.36, 1];
const DURATION = 0.6;
const DISTANCE = 40;

/** Slide + fade from any direction */
export const fadeIn = (direction, delay = 0) => {
	return {
		hidden: {
			y: direction === "up" ? DISTANCE : direction === "down" ? -DISTANCE : 0,
			opacity: 0,
			x: direction === "left" ? DISTANCE : direction === "right" ? -DISTANCE : 0
		},
		show: {
			y: 0,
			x: 0,
			opacity: 1,
			transition: {
				type: "tween",
				duration: DURATION,
				delay,
				ease: EASE
			}
		}
	};
};

/** Scale up from slightly smaller */
export const scaleIn = (delay = 0) => ({
	hidden: { opacity: 0, scale: 0.92 },
	show: {
		opacity: 1,
		scale: 1,
		transition: { type: "tween", duration: DURATION, delay, ease: EASE }
	}
});

/** Stagger container – wrap a list of children that each use fadeIn/scaleIn */
export const staggerContainer = (staggerChildren = 0.12, delayChildren = 0.1) => ({
	hidden: {},
	show: {
		transition: {
			staggerChildren,
			delayChildren
		}
	}
});

/** Single stagger child – simple fade-up */
export const staggerItem = {
	hidden: { opacity: 0, y: 30 },
	show: {
		opacity: 1,
		y: 0,
		transition: { type: "tween", duration: DURATION, ease: EASE }
	}
};

/** Header slide-down on mount */
export const headerSlideDown = {
	hidden: { y: -80, opacity: 0 },
	show: {
		y: 0,
		opacity: 1,
		transition: { type: "tween", duration: 0.5, ease: EASE }
	}
};

/** Mobile drawer slide-in from left */
export const drawerSlideIn = {
	hidden: { x: "-100%" },
	show: { x: 0, transition: { type: "tween", duration: 0.35, ease: EASE } },
	exit: { x: "-100%", transition: { type: "tween", duration: 0.25, ease: EASE } }
};

/** Default viewport config – reuse everywhere */
export const viewport = { once: false, amount: 0.2 };

