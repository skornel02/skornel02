import React from 'react';
import { Icon } from '@/components/common/Icon';

interface UrlLinkProps {
  url: {
    href: string;
    name: string;
    icon?: string;
    buttonClass?: string;
  };
}

export function UrlLink({ url }: UrlLinkProps) {
  return (
    <div className="tooltip" data-tip={url.name}>
      <a
        href={url.href}
        className={`${url.buttonClass ?? 'btn btn-sm btn-secondary text-white'} join-item`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {url.icon && <Icon name={url.icon} width={16} height={16} />}
      </a>
    </div>
  );
}

export default UrlLink;
