import React from 'react';
import Link from 'next/link';
import { Icon } from '@/components/common/Icon';

export function Footer() {
  return (
    <footer className="footer footer-center p-4 bg-base-200 dark:bg-gray-800 dark:text-white text-base-content mt-auto flex justify-center items-center gap-4">
      <p>Have a nice day!</p>
      <p>{new Date().getFullYear()}©</p>
      <Link href="/rss.xml" title="RSS Feed" className="text-orange-500 hover:text-orange-600">
        <Icon name="mdi:rss-box" height={18} width={18} />
      </Link>
    </footer>
  );
}

export default Footer;
