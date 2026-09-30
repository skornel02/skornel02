import * as React from 'react';
import {cn} from '@/lib/utils';

const BrowserWindow = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({className, ...props}, ref) => (
		<div
			ref={ref}
			className={cn(
				'w-full overflow-hidden rounded-lg border border-border bg-surface-container-lowest/80 shadow-layer-1 backdrop-blur-md dark:bg-surface-container-low/50',
				className
			)}
			{...props}
		/>
	)
);
BrowserWindow.displayName = 'BrowserWindow';

interface BrowserWindowHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
	url?: string;
}

const BrowserWindowHeader = React.forwardRef<HTMLDivElement, BrowserWindowHeaderProps>(
	({className, url, children, ...props}, ref) => (
		<div
			ref={ref}
			className={cn(
				'flex items-center gap-unit-sm border-b border-border bg-surface-container-low px-unit-sm py-2 dark:bg-surface-container',
				className
			)}
			{...props}>
			<div className="flex shrink-0 gap-1.5">
				<span className="size-2.5 rounded-full bg-[#EF4444]" />
				<span className="size-2.5 rounded-full bg-[#F59E0B]" />
				<span className="size-2.5 rounded-full bg-[#10B981]" />
			</div>

			<div className="flex min-w-0 flex-1 items-center rounded border border-border/60 bg-surface-container-lowest px-2 py-1 font-mono text-[11px] text-on-surface-variant dark:bg-code-surface">
				{url ? (
					<a
						href={url}
						target="_blank"
						rel="noopener noreferrer"
						className="truncate transition-colors hover:text-primary">
						{url}
					</a>
				) : (
					children
				)}
			</div>
		</div>
	)
);
BrowserWindowHeader.displayName = 'BrowserWindowHeader';

const BrowserWindowContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({className, ...props}, ref) => (
		<div ref={ref} className={cn('p-unit-lg', className)} {...props} />
	)
);
BrowserWindowContent.displayName = 'BrowserWindowContent';

export {BrowserWindow, BrowserWindowHeader, BrowserWindowContent};
