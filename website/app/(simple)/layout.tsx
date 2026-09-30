import React from 'react';
import MainBackground from '@/components/common/MainBackground';

export default function SimpleLayout({children}: {children: React.ReactNode}) {
	return (
		<>
			<div className="relative min-h-screen flex flex-col justify-center items-center overflow-x-hidden">
				<MainBackground />
        <div className="relative z-10 w-full">{children}</div>
			</div>
		</>
	);
}
