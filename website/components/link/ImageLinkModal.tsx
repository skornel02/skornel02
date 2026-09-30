'use client';

import React from 'react';
import {Icon} from '@/components/common/Icon';
import {Button} from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogFooter,
	DialogClose,
} from '@/components/ui/dialog';
import {Tooltip, TooltipContent, TooltipTrigger} from '@/components/ui/tooltip';

interface ImageLinkModalProps {
	image: {
		src: string;
		alt: string;
		name: string;
		icon?: string;
		buttonClass?: string;
	};
}

export function ImageLinkModal({image}: ImageLinkModalProps) {
	return (
		<Dialog>
			<Tooltip>
				<TooltipTrigger
					render={
						<DialogTrigger
							render={
								<Button
									type="button"
									variant="default"
									size="icon"
									className={
										image.buttonClass ||
										'h-8 w-8 border-primary/50 text-primary transition-colors hover:bg-primary hover:text-primary-foreground'
									}>
									{image.icon && <Icon name={image.icon} width={16} height={16} />}
									<span className="sr-only">{image.name}</span>
								</Button>
							}
						/>
					}
				/>

				<TooltipContent side="top" className="font-mono text-xs">
					{image.name}
				</TooltipContent>
			</Tooltip>

			<DialogContent className="w-[95vw] sm:max-w-5xl border-border bg-surface-container-lowest/95 backdrop-blur-md dark:bg-surface-container-low/95">
				<DialogHeader>
					<DialogTitle className="font-display text-xl text-on-surface">{image.name}</DialogTitle>
				</DialogHeader>

				<div className="py-2">
					<img
						src={image.src}
						alt={image.alt}
						className="h-auto max-h-[60vh] w-full rounded-md border border-border/50 object-contain shadow-layer-1"
					/>
				</div>

				<DialogFooter className="flex flex-row justify-end gap-2 sm:gap-0">
					<DialogClose
						render={
							<Button
								variant="outline"
								className="border-border text-on-surface-variant hover:text-on-surface">
								Close
							</Button>
						}
					/>
					<Button
						className="bg-primary text-primary-foreground hover:opacity-90"
						nativeButton={false}
						render={
							<a href={image.src} target="_blank" rel="noopener noreferrer">
								Open Original
							</a>
						}
					/>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

export default ImageLinkModal;
