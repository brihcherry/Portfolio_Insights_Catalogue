import { useEffect, useRef, useState } from "react";

/**
 * Tracks whether an element has scrolled into the viewport.
 * Once true, stays true (used for one-shot scroll-reveal animations).
 */
export const useInView = <T extends HTMLElement>(threshold = 0.15) => {
	const ref = useRef<T>(null);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setInView(true);
					observer.disconnect();
				}
			},
			{ threshold },
		);
		observer.observe(el);
		return () => observer.disconnect();
	}, [threshold]);

	return { ref, inView };
};
