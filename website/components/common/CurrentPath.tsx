'use client';

import {usePathname} from 'next/navigation';

export default function CurrentPath() {
	const path = usePathname();

	return <>{path}</>;
}
