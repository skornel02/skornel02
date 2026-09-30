'use client';

import {Button as ButtonPrimitive} from '@base-ui/react/button';
import {VariantProps} from 'class-variance-authority';
import {Button, buttonVariants} from '../ui/button';

export function TopButton(
	props: ButtonPrimitive.Props &
		VariantProps<typeof buttonVariants> & {
			children?: React.ReactNode;
		}
) {
	return (
		<Button
			onClick={() => {
				if (typeof window !== 'undefined') {
					window.scrollTo({top: 0, behavior: 'smooth'});
				}
			}}
			{...props}
		/>
	);
}
