import React from 'react';
import {Icon} from '@/components/common/Icon';
import {Tooltip, TooltipContent, TooltipTrigger} from '../ui/tooltip';
import {Button} from '../ui/button';

interface UrlLinkProps {
	url: {
		href: string;
		name: string;
		icon?: string;
		buttonClass?: string;
	};
}

export function UrlLink({url}: UrlLinkProps) {
	return (
		<Tooltip>
			<TooltipTrigger
				render={
					<Button
						nativeButton={false}
						render={
							<a
								href={url.href}
								className={`${url.buttonClass}`}
								target="_blank"
								rel="noopener noreferrer">
								{url.icon && <Icon name={url.icon} />}
							</a>
						}
					/>
				}
			/>
			<TooltipContent side="top" className="font-mono text-xs">
				{url.name}
			</TooltipContent>
		</Tooltip>
	);
}

export default UrlLink;
