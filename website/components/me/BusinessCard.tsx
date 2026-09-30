'use client';

import React, {useState} from 'react';

export function BusinessCard() {
	const [isFlipped, setIsFlipped] = useState(false);

	return (
		<div className="relative mx-auto flex w-full max-w-2xl justify-center px-4">
			<div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 pointer-events-none">
				<span className="tech-badge flex animate-pulse items-center gap-2 border-primary/50 bg-surface-container-low px-3 py-1 text-[10px] text-primary shadow-layer-1 backdrop-blur-md">
					Click to flip!
				</span>
			</div>

			<div
				role="button"
				tabIndex={0}
				onClick={() => setIsFlipped(!isFlipped)}
				onKeyDown={(e) => {
					if (e.key === 'Enter' || e.key === ' ') {
						e.preventDefault();
						setIsFlipped(!isFlipped);
					}
				}}
				className="group relative w-full cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background [perspective:1200px]">
				<div
					className={`relative w-full transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform-3d ${
						isFlipped ? 'transform-[rotateY(180deg)]' : ''
					}`}>
					<div className="w-full backface-hidden">
						<img
							src="/card/business-card-front.svg"
							alt="Frontside of business card"
							className="w-full h-auto drop-shadow-xl filter transition-all duration-300 group-hover:drop-shadow-2xl"
						/>
					</div>

					<div className="absolute inset-0 w-full h-full backface-hidden transform-[rotateY(180deg)]">
						<img
							src="/card/business-card-back.svg"
							alt="Backside of business card"
							className="w-full h-full object-contain drop-shadow-xl filter transition-all duration-300 group-hover:drop-shadow-2xl"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BusinessCard;
