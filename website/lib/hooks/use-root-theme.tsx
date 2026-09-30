'use client';

import {useState, useEffect, useCallback} from 'react';

const THEME_STORAGE_KEY = 'sk-theme';

export function useRootTheme() {
	const [isDark, setIsDark] = useState<boolean>(false);

	useEffect(() => {
		const saved = localStorage.getItem(THEME_STORAGE_KEY);
		if (saved) setIsDark(saved === 'dark');
	}, []);

	useEffect(() => {
		if (typeof window === 'undefined') return;

		const root = document.documentElement;

		const checkTheme = () => setIsDark(root.classList.contains('dark'));
		checkTheme();

		const observer = new MutationObserver((mutations) => {
			for (const mutation of mutations) {
				if (mutation.attributeName === 'class') {
					checkTheme();
				}
			}
		});

		observer.observe(root, {
			attributes: true,
			attributeFilter: ['class'],
		});

		return () => observer.disconnect();
	}, []);

	const toggleTheme = useCallback(() => {
		if (typeof window === 'undefined') return;
		document.documentElement.classList.toggle('dark');

		if (isDark) {
			localStorage.setItem(THEME_STORAGE_KEY, 'dark');
		} else {
			localStorage.setItem(THEME_STORAGE_KEY, 'light');
		}
	}, []);

	return {isDark, toggleTheme};
}
