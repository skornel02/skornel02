import React from 'react';
import { Icon } from '@/components/common/Icon';

export function CardContacts() {
  return (
    <div className="join join-vertical mx-auto">
      <a
        id="gh"
        href="https://github.com/skornel02"
        target="_blank"
        rel="noreferrer noopener"
        className="btn join-item flex items-center gap-2"
      >
        <Icon height={32} width={32} name="mdi:github" color="#333333" />
        <span> Github</span>
      </a>
      <a
        id="fb"
        href="https://www.facebook.com/stefankornel02"
        target="_blank"
        rel="noreferrer noopener"
        className="btn join-item flex items-center gap-2"
      >
        <Icon height={32} width={32} name="mdi:facebook-box" color="#4267B2" />
        <span> Facebook</span>
      </a>
      <a
        id="linkedin"
        href="https://linkedin.com/in/skornel02"
        target="_blank"
        rel="noreferrer noopener"
        className="btn join-item flex items-center gap-2"
      >
        <Icon height={32} width={32} name="mdi:linkedin" color="#0077B5" />
        <span> LinkedIn</span>
      </a>
      <a
        id="mail"
        href="https://aemail.com/Elgl"
        className="btn join-item flex items-center gap-2"
      >
        <Icon height={32} width={32} name="mdi:email-fast" color="#c71610" />
        <span> Email</span>
      </a>
    </div>
  );
}

export default CardContacts;
