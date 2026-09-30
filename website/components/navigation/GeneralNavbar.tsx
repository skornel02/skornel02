'use client';

import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {usePathname, useRouter} from 'next/navigation';
import { useRootTheme } from '@/lib/hooks/use-root-theme';

export interface NavItem {
	index: string;
	label: string;
	href: string;
}

const DEFAULT_PORTFOLIO_NAV_ITEMS: NavItem[] = [
	{index: '01', label: 'OVERVIEW', href: '/#overview'},
	{index: '02', label: 'EXPERIENCE', href: '/#experience'},
	{index: '03', label: 'ACHIEVEMENTS', href: '/#achievements'},
];

const DEFAULT_OTHER_NAV_ITEMS: NavItem[] = [
	{index: '01', label: 'Portfolio', href: '/'},
	{index: '02', label: 'Projects', href: '/projects'},
	{index: '03', label: 'Posts', href: '/posts'},
];

interface GeneralNavbarProps {
	items?: NavItem[];
}

export function GeneralNavbar({items: defaultItems}: GeneralNavbarProps) {
	const pathname = usePathname();
	const router = useRouter();

	const [activeHash, setActiveHash] = useState('#overview');
	const [isMobileOpen, setIsMobileOpen] = useState(false);

	const {isDark, toggleTheme} = useRootTheme();

	const isHomePage = pathname === '/';
	const currentSegment = !isHomePage ? pathname.split('/').filter(Boolean).join('/') : null;

	const items = (defaultItems ?? isHomePage) ? DEFAULT_PORTFOLIO_NAV_ITEMS : DEFAULT_OTHER_NAV_ITEMS;

	useEffect(() => {
		setIsMobileOpen(false);
	}, [pathname]);

	useEffect(() => {
		if (!isHomePage) return;

		const hashIds = items
			.filter((item) => item.href.includes('#'))
			.map((item) => `#${item.href.split('#')[1]}`);

		const sections = hashIds.map((id) => document.querySelector(id)).filter(Boolean) as Element[];

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveHash(`#${entry.target.id}`);
					}
				});
			},
			{rootMargin: '-25% 0px -65% 0px'}
		);

		sections.forEach((sec) => observer.observe(sec));
		return () => observer.disconnect();
	}, [isHomePage, items]);

	useEffect(() => {
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setIsMobileOpen(false);
				return;
			}
			if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

			const item = items[Number(e.key) - 1];
			if (!item) return;

			setIsMobileOpen(false);
			if (item.href.startsWith('/#') && isHomePage) {
				const hash = `#${item.href.split('#')[1]}`;
				setActiveHash(hash);
				document.querySelector(hash)?.scrollIntoView({behavior: 'smooth'});
			} else {
				router.push(item.href);
			}
		};
		window.addEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
	}, [items, isHomePage, router]);

	const isItemActive = (href: string) => {
		if (href.startsWith('/#')) {
			const hash = `#${href.split('#')[1]}`;
			return isHomePage && activeHash === hash;
		}
		return pathname === href || pathname.startsWith(`${href}/`);
	};

	const handleLinkClick = (href: string) => {
		setIsMobileOpen(false);
		if (href.startsWith('/#')) {
			setActiveHash(`#${href.split('#')[1]}`);
		}
	};

	return (
		<header className="sticky top-3 z-50 mx-auto w-full max-w-content px-gutter-mobile md:px-gutter-desktop">
			<nav
				aria-label="Global Dossier Navigation"
				className="overflow-hidden rounded-lg border border-border bg-surface-container-lowest/90 shadow-layer-1 backdrop-blur-md transition-all duration-135 dark:bg-surface-container-low/95">
				<div className="flex h-[4.5rem] items-center justify-between px-unit-md">
					{/* Left: Brand Identity + Dynamic Route Breadcrumb */}
					<div className="flex items-center gap-unit-xs">
						<Link
							href="/"
							onClick={() => setActiveHash('#overview')}
							className="group flex items-center gap-1.5 rounded border border-border bg-background px-3 py-1.5 text-on-surface transition-colors duration-135 hover:border-primary">
							<span className="font-display text-sm font-bold tracking-tight">Stefán Kornél</span>

							{/* Shows current subpage path (e.g., /simplified) when not on "/" */}
							{currentSegment && (
								<span className="code-inline hidden sm:inline text-xs text-badge-cyan">
									/{currentSegment}
								</span>
							)}

							<span className="inline-block h-3.5 w-1.5 animate-pulse bg-badge-cyan" />
						</Link>
					</div>

					{/* Center: Desktop Links (>= 768px) */}
					<ul className="hidden md:flex items-center gap-unit-2xs">
						{items.map((item) => {
							const isActive = isItemActive(item.href);
							return (
								<li key={item.index}>
									<Link
										href={item.href}
										onClick={() => handleLinkClick(item.href)}
										className={`group flex items-center gap-1.5 rounded px-3 py-2 transition-all duration-135 ${
											isActive
												? 'bg-primary text-primary-foreground shadow-layer-2'
												: 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
										}`}>
										<span
											className={`code-inline text-xs ${
												isActive
													? 'text-primary-foreground/90'
													: 'text-primary group-hover:text-primary'
											}`}>
											[{item.index}]
										</span>
										<span className="subheading">{item.label}</span>
									</Link>
								</li>
							);
						})}
					</ul>

					{/* Right: Theme Toggle + Mobile Hamburger */}
					<div className="flex items-center gap-unit-xs">
						<button
							type="button"
							onClick={toggleTheme}
							aria-label="Toggle color theme"
							className="tech-badge flex h-11 md:h-9 items-center justify-center px-3 transition-colors duration-135 hover:border-primary hover:text-primary">
							{isDark ? '[DARK]' : '[LIGHT]'}
						</button>

						<button
							type="button"
							onClick={() => setIsMobileOpen(!isMobileOpen)}
							aria-expanded={isMobileOpen}
							aria-controls="mobile-global-menu"
							aria-label="Toggle navigation menu"
							className={`tech-badge flex h-11 items-center justify-center px-3 md:hidden transition-colors duration-135 ${
								isMobileOpen
									? 'border-primary bg-primary text-primary-foreground'
									: 'hover:border-primary hover:text-primary'
							}`}>
							{isMobileOpen ? '[×]' : '[≡]'}
						</button>
					</div>
				</div>

				{/* Mobile ASCII Tree Drawer (< 768px) */}
				{isMobileOpen && (
					<div
						id="mobile-global-menu"
						className="border-t border-border bg-surface-container-low/95 px-unit-md py-unit-xs md:hidden">
						{/* Current Path Readout on Mobile */}
						<div className="flex items-center justify-between border-b border-border/50 py-2 font-mono text-[11px] text-on-surface-variant">
							{!isHomePage && (
								<Link href="/" className="text-primary underline">
									[← return home]
								</Link>
							)}
						</div>

						<ul className="flex flex-col divide-y divide-border/50">
							{items.map((item, idx) => {
								const isActive = isItemActive(item.href);
								const isLast = idx === items.length - 1;
								return (
									<li key={item.index}>
										<Link
											href={item.href}
											onClick={() => handleLinkClick(item.href)}
											className={`flex h-11 items-center justify-between rounded px-2 transition-colors duration-135 ${
												isActive
													? 'font-semibold text-primary'
													: 'text-on-surface-variant hover:text-on-surface'
											}`}>
											<div className="flex items-center gap-2">
												<span className="code-inline text-outline-base">
													{isLast ? '└─' : '├─'}
												</span>
												<span className="code-inline text-xs text-primary">[{item.index}]</span>
												<span className="subheading">{item.label}</span>
											</div>

											{isActive && (
												<span className="code-inline text-xs text-badge-cyan">&lt;ACTIVE&gt;</span>
											)}
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
				)}
			</nav>
		</header>
	);
}
