import React from 'react';
import {Badge} from '@/components/ui/8bit/badge';
import {cn} from 'cn';
import {Button, ButtonVariant, buttonVariants} from '../ui/button';
import {ButtonGroup} from '../ui/button-group';

interface DossierSectionProps {
	id: string;
	category: string;
	titleNoun: string;
	titleAccent: string;
	subtitle?: string;
	statusText?: string;
	variant?: 'default' | 'terminal';
	containerClassName?: string;
	children: React.ReactNode;
}

export function DossierSection({
	id,
	category,
	titleNoun,
	titleAccent,
	subtitle,
	statusText = 'VERIFIED // OK',
	variant = 'default',
	containerClassName,
	children,
}: DossierSectionProps) {
	const isTerminal = variant === 'terminal';

	return (
		<section
			id={id}
			className={cn(
				'"mx-auto w-full max-w-content px-gutter-mobile md:px-gutter-desktop"',
				containerClassName
			)}>
			<div
				className={`overflow-hidden rounded-xl border-2 transition-colors duration-135 ${
					isTerminal
						? 'terminal-shell border-[#30363d] bg-code-surface/95'
						: 'border-outline-variant/80 bg-surface-container-lowest/90 shadow-layer-1 dark:border-border dark:bg-surface-container-lowest/90'
				} backdrop-blur-md`}>
				<div className="flex flex-wrap items-center justify-between gap-2 border-b border-border bg-surface-container-low/90 px-unit-md py-2.5 dark:bg-surface-container">
					<div className="flex items-center gap-unit-xs">
						<span className="code-inline text-primary">┌──</span>
						<Badge
							variant="outline"
							className="border-primary/40 bg-primary-container/30 px-2 py-0 text-[10px] font-mono text-primary">
							{category}
						</Badge>
					</div>

					<div className="flex items-center gap-unit-xs">
						<span className="timeline-date hidden sm:inline text-on-surface-variant">
							{statusText}
						</span>
						<span className="code-inline text-primary">──┐</span>
					</div>
				</div>

				<div className="p-unit-lg md:p-unit-xl">
					<header className="mb-unit-xl border-b border-border/60 pb-unit-md">
						<h2 className="headline-lg mt-1 text-on-surface">
							{titleNoun} <span className="text-primary">{titleAccent}</span>
						</h2>
						{subtitle && (
							<p className="body-md mt-1.5 max-w-2xl text-on-surface-variant">{subtitle}</p>
						)}
					</header>

					{children}
				</div>

				<div className="flex items-center justify-between border-t border-border/50 bg-surface-container-low/50 px-unit-md py-1.5 text-[11px] font-mono text-on-surface-variant">
					<span>└──</span>
					<span>{category} ──┘</span>
				</div>
			</div>
		</section>
	);
}
interface ActionBridgeProps {
	nodes: {
		label: string;
		href?: string;
		buttonVariant?: ButtonVariant;
	}[];
}

export function ActionBridge({nodes}: ActionBridgeProps) {
	return (
		<div
			aria-hidden="true"
			className="mx-auto my-unit-xl flex max-w-3xl items-center justify-between px-gutter-mobile">
			{nodes.map(({label, href, buttonVariant = 'secondary'}) => (
				<React.Fragment key={label}>
					{href ? (
						<a className={cn(buttonVariants({variant: buttonVariant, size: 'sm'}))} href={href}>
							{label}
						</a>
					) : (
						<div className="flex items-center gap-1.5 rounded border border-primary/40 bg-code-surface/90 px-3 py-1 shadow-layer-1 backdrop-blur-sm">
							<span className="size-1.5 rounded-full bg-award-gold" />
							<span className="timeline-date text-[#e0e2e8]">{label}</span>
						</div>
					)}
				</React.Fragment>
			))}
		</div>
	);
}

interface DossierCardProps {
	title: string;
	subtitle?: string;
	dateOrMeta?: string;
	accolade?: string;
	tags?: string[];
	imageUrl?: string;
	children: React.ReactNode;
}

export function DossierCard({
	title,
	subtitle,
	dateOrMeta,
	accolade,
	tags,
	imageUrl,
	children,
}: DossierCardProps) {
	return (
		<article className="dossier-card flex flex-col justify-between">
			<div>
				{(dateOrMeta || accolade) && (
					<div className="mb-unit-xs flex flex-wrap items-center justify-between gap-unit-xs">
						{accolade ? (
							<span className="accolade-badge">★ {accolade}</span>
						) : (
							<span className="code-inline text-xs text-primary">[MODULE]</span>
						)}
						{dateOrMeta && (
							<time className="timeline-date text-on-surface-variant">{dateOrMeta}</time>
						)}
					</div>
				)}

				<h3 className="headline-sm text-on-surface">{title}</h3>
				{subtitle && <p className="code-inline mt-0.5 text-xs text-primary">{subtitle}</p>}

				{imageUrl && (
					<div className="group relative my-unit-sm overflow-hidden rounded border border-border bg-code-surface">
						<img
							src={imageUrl}
							alt={title}
							className="h-36 w-full object-cover contrast-125 grayscale transition-all duration-150 group-hover:grayscale-0"
						/>
						<div className="pointer-events-none absolute inset-0 bg-primary/15 mix-blend-overlay group-hover:opacity-0" />
					</div>
				)}

				<div className="body-md mt-unit-sm space-y-1.5 text-on-surface-variant">{children}</div>
			</div>

			{tags && tags.length > 0 && (
				<div className="mt-unit-md flex flex-wrap gap-unit-xs border-t border-border/60 pt-unit-sm">
					{tags.map((tag) => (
						<span key={tag} className="tech-badge">
							{tag}
						</span>
					))}
				</div>
			)}
		</article>
	);
}

export function DossierTextBlock({children}: {children: React.ReactNode}) {
	return (
		<div className="rounded-lg border border-primary/40 bg-surface-container-low p-unit-md font-mono text-sm leading-relaxed text-on-surface shadow-layer-1">
			{children}
		</div>
	);
}

export interface DossierActionItem {
	id: string;
	code: string;
	label: string;
	command: string;
	href: string;
	hoverSelector: string;
	icon: React.ReactNode;
}

export interface DossierActionDockGhostButton {
	label: string;
	href: string;
}

export function DossierActionDock({
	actions,
	ghostButton,
}: {
	actions: DossierActionItem[];
	ghostButton: DossierActionDockGhostButton;
}) {
	return (
		<div className="group/dock flex flex-col gap-unit-sm border-t border-border/60 pt-unit-md sm:flex-row sm:items-center sm:justify-between">
			<Button
				variant="ghost"
				className="justify-start gap-unit-xs px-2.5 font-mono text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface"
				nativeButton={false}
				render={
					<a href={ghostButton.href}>
						<span className="code-inline text-primary">&gt;</span>
						<span className="code-inline">
							<span className="group-has-[[data-dock-id]:is(:hover,:focus-visible)]/dock:hidden">
								{ghostButton.label}
							</span>
							{actions.map((item) => (
								<span key={item.id} className={`hidden ${item.hoverSelector}`}>
									{item.command}
								</span>
							))}
						</span>
						<span className="inline-block h-3.5 w-1.5 animate-pulse bg-badge-cyan/80" />
					</a>
				}
			/>

			<ButtonGroup
				aria-label="Quick Links and View Controls"
				className="w-full shadow-layer-1 sm:w-auto">
				{actions.map((item) => {
					const isExternal = item.href.startsWith('http');
					return (
						<Button
							key={item.id}
							variant="outline"
							className="group/btn relative h-12 flex-1 border-primary/40 text-[#2E74B5] transition-all duration-135 hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:z-10 sm:w-16 sm:flex-none dark:text-primary"
							nativeButton={false}
							render={
								<a
									data-dock-id={item.id}
									href={item.href}
									target={isExternal ? '_blank' : undefined}
									rel={isExternal ? 'noopener noreferrer' : undefined}
									aria-label={item.label}>
									<span className="absolute right-1.5 top-1 font-mono text-[9px] opacity-40 transition-opacity group-hover/btn:opacity-90">
										{item.code}
									</span>
									<span className="transition-transform duration-135 group-hover/btn:-translate-y-0.5">
										{item.icon}
									</span>
								</a>
							}
						/>
					);
				})}
			</ButtonGroup>
		</div>
	);
}
