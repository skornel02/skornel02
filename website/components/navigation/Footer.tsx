import React from 'react';
import {Button} from '../ui/button';
import {FlavourText} from '@/lib/flavour-text';
import CurrentYear from '../common/CurrentYear';
import CurrentPath from '../common/CurrentPath';
import {
	SimpleWindow,
	SimpleWindowContent,
	SimpleWindowFooter,
	SimpleWindowHeader,
} from '../ui/simple-window';
import {TopButton} from '../common/TopButton';

export function Footer() {
	return (
		<footer className="relative z-10 mx-auto mt-unit-3xl w-full max-w-content px-gutter-mobile pb-unit-lg md:px-gutter-desktop">
			<SimpleWindow>
				<SimpleWindowHeader leftCorner="├──" rightCorner="──┤" />
				<SimpleWindowContent className="p-0">
					<div className="grid grid-cols-1 gap-unit-lg p-unit-lg md:grid-cols-2 md:items-center md:p-unit-md">
						<div className="space-y-1.5">
							<div className="flex items-center gap-2">
								<span className="size-2 rounded-full bg-live-status" />
								<span className="font-display text-base font-bold tracking-tight text-on-surface">
									STEFÁN KORNÉL
								</span>
							</div>
							<p className="code-inline text-xs text-on-surface-variant">
								├─ {FlavourText.bottomText}
							</p>
							<p className="code-inline text-xs text-primary">
								└─ bg_task: {FlavourText.currentProject} [IN_PROGRESS]
							</p>
						</div>

						<div className="space-y-1 border-y border-border/60 py-unit-sm font-mono text-xs text-on-surface-variant md:border-x md:border-y-0 md:px-unit-lg md:py-0">
							<div className="flex justify-between">
								<span className="text-outline-base">ENGINE:</span>
								<span className="text-on-surface">NEXT.JS</span>
							</div>
							<div className="flex justify-between">
								<span className="text-outline-base">THEME:</span>
								<span className="text-primary">STEEL_AZURE</span>
							</div>
							<div className="flex justify-between">
								<span className="timeline-date text-on-surface-variant">QUICK_JUMP</span>
								<TopButton
									variant="default"
									size="sm"
									className="flex-1 bg-primary font-mono text-xs font-bold text-primary-foreground hover:opacity-95 sm:flex-none"
									aria-label="Scroll back to top">
									↑ TOP
								</TopButton>
							</div>
						</div>
					</div>
				</SimpleWindowContent>

				<SimpleWindowFooter>
					<div className="grow flex flex-wrap items-center justify-between px-unit-sm py-1.5 font-mono text-[11px] text-[#E0E2E8]">
						<div className="flex items-center gap-2">
							<span className="text-badge-cyan">
								[<CurrentPath />]
							</span>
						</div>

						<div className="flex items-center gap-3">
							<span className="rounded-xs px-2 py-0.5 text-primary">
								© <CurrentYear /> STEFÁN KORNÉL
							</span>
						</div>
					</div>
				</SimpleWindowFooter>
			</SimpleWindow>
		</footer>
	);
}

export default Footer;
