import React from 'react';
import Link from 'next/link';
import {Icon} from '@/components/common/Icon';
import {ButtonGroup} from '../ui/button-group';
import {Button} from '../ui/button';

interface CardNavigationProps {
	home?: boolean;
	details?: boolean;
	card?: boolean;
}

export function CardNavigation({home = false, details = false, card = false}: CardNavigationProps) {
	return (
		<div className="flex justify-center">
			<ButtonGroup>
				{card && (
					<Button
						variant="ghost"
						nativeButton={false}
						size="icon-lg"
						render={
							<Link id="business-card-link" href="/business-card" title="Business Card">
								<Icon name="mdi:qrcode" className="size-6" />
							</Link>
						}
					/>
				)}
				{details && (
					<Button
						variant="ghost"
						nativeButton={false}
						size="icon-lg"
						render={
							<Link id="details-link" href="/me" title="Details">
								<Icon name="mdi:account-details" className="size-6" />
							</Link>
						}
					/>
				)}
				{home && (
					<Button
						variant="ghost"
						nativeButton={false}
						size="icon-lg"
						render={
							<Link id="home-link" href="/" title="Home">
								<Icon name="mdi:home" className="size-6" />
							</Link>
						}
					/>
				)}
			</ButtonGroup>
		</div>
	);
}

export default CardNavigation;
