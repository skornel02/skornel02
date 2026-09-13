import React from 'react';
import Link from 'next/link';
import { Icon } from '@/components/common/Icon';

interface CardNavigationProps {
  home?: boolean;
  details?: boolean;
  card?: boolean;
}

export function CardNavigation({
  home = false,
  details = false,
  card = false,
}: CardNavigationProps) {
  return (
    <div className="flex justify-center">
      <div className="join">
        {card && (
          <Link
            id="business-card-link"
            href="/business-card"
            className="btn btn-outline btn-secondary hover:bg-primary join-item"
            title="Business Card"
          >
            <Icon name="mdi:qrcode" height={32} width={32} />
          </Link>
        )}
        {details && (
          <Link
            id="details-link"
            href="/me"
            className="btn btn-outline btn-secondary hover:bg-primary join-item"
            title="Details"
          >
            <Icon name="mdi:account-details" height={32} width={32} />
          </Link>
        )}
        {home && (
          <Link
            id="home-link"
            href="/"
            className="btn btn-outline btn-primary hover:bg-primary join-item"
            title="Home"
          >
            <Icon name="mdi:home" height={32} width={32} />
          </Link>
        )}
      </div>
    </div>
  );
}

export default CardNavigation;
