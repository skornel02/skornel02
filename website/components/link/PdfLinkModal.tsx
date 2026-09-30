'use client';

import React from 'react';
import {Icon} from '@/components/common/Icon';
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '../ui/dialog';
import {Tooltip, TooltipContent, TooltipTrigger} from '../ui/tooltip';
import {Button} from '../ui/button';

interface PdfLinkModalProps {
	pdf: {
		src: string;
		name: string;
		icon?: string;
		buttonClass?: string;
	};
}

export function PdfLinkModal({pdf}: PdfLinkModalProps) {
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
										pdf.buttonClass ||
										'h-8 w-8 border-primary/50 text-primary transition-colors hover:bg-primary hover:text-primary-foreground'
									}>
									{pdf.icon && <Icon name={pdf.icon!} width={16} height={16} />}
									<span className="sr-only">{pdf.name}</span>
								</Button>
							}
						/>
					}
				/>

				<TooltipContent side="top" className="font-mono text-xs">
					{pdf.name}
				</TooltipContent>
			</Tooltip>

			<DialogContent className="w-[95vw] sm:max-w-5xl border-border bg-surface-container-lowest/95 backdrop-blur-md dark:bg-surface-container-low/95">
				<DialogHeader>
					<DialogTitle className="font-display text-xl text-on-surface">{pdf.name}</DialogTitle>
				</DialogHeader>

				<div className="py-2">
					<object
						title={pdf.name}
						data={pdf.src}
						type="application/pdf"
						className="w-full h-[60vh] my-4">
						<p>
							It appears you don&apos;t have a PDF plugin for this browser.{' '}
							<a href={pdf.src} target="_blank" rel="noopener noreferrer" className="link">
								Click here to download the PDF.
							</a>
						</p>
					</object>
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
							<a href={pdf.src} target="_blank" rel="noopener noreferrer">
								Open Original
							</a>
						}
					/>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

export default PdfLinkModal;
