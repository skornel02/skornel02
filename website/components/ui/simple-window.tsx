import * as React from 'react';
import {cn} from '@/lib/utils';

function SimpleWindow({className, children, ...props}: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="simple-window"
			className={cn(
				'w-full overflow-hidden rounded-xl border border-border bg-surface-container-lowest/90 text-on-surface shadow-layer-1 backdrop-blur-md transition-colors duration-135 dark:bg-surface-container-low/95',
				className
			)}
			{...props}>
			{children}
		</div>
	);
}

interface SimpleWindowHeaderProps extends React.ComponentProps<'div'> {
	leftCorner?: React.ReactNode;
	rightCorner?: React.ReactNode;
}

function SimpleWindowHeader({
	className,
	leftCorner = '┌──',
	rightCorner = '──┐',
	children,
	...props
}: SimpleWindowHeaderProps) {
	return (
		<div
			data-slot="simple-window-header"
			className={cn(
				'flex items-center justify-between gap-unit-xs border-b border-border bg-surface-container-low px-unit-md py-2.5 dark:bg-surface-container',
				className
			)}
			{...props}>
			<span className="code-inline text-xs text-primary">{leftCorner}</span>
			{children}
			<span className="code-inline text-xs text-primary">{rightCorner}</span>
		</div>
	);
}

function SimpleWindowContent({className, children, ...props}: React.ComponentProps<'div'>) {
	return (
		<div data-slot="simple-window-content" className={cn('p-unit-md', className)} {...props}>
			{children}
		</div>
	);
}

function SimpleWindowCallout({className, children, ...props}: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="simple-window-callout"
			className={cn(
				'w-full rounded border border-border bg-surface-container-low px-unit-md py-unit-sm font-mono text-xs text-on-surface-variant dark:bg-surface-container-lowest',
				className
			)}
			{...props}>
			{children}
		</div>
	);
}

interface SimpleWindowFooterProps extends React.ComponentProps<'div'> {
	leftCorner?: React.ReactNode;
	rightCorner?: React.ReactNode;
}

function SimpleWindowFooter({
	className,
	leftCorner = '└──',
	rightCorner = '──┘',
	children,
	...props
}: SimpleWindowFooterProps) {
	return (
		<div
			data-slot="simple-window-footer"
			className={cn(
				'flex items-center justify-between gap-unit-xs border-t border-border bg-surface-container-low/60 px-unit-md py-1.5 font-mono text-[11px] text-on-surface-variant dark:bg-surface-container/60',
				className
			)}
			{...props}>
			<span className="text-primary">{leftCorner}</span>
			{children}
			<span className="text-primary">{rightCorner}</span>
		</div>
	);
}

export {
	SimpleWindow,
	SimpleWindowHeader,
	SimpleWindowContent,
	SimpleWindowCallout,
	SimpleWindowFooter,
};
