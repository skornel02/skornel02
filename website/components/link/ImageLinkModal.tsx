'use client';

import React, { useRef } from 'react';
import { Icon } from '@/components/common/Icon';

interface ImageLinkModalProps {
  image: {
    src: string;
    alt: string;
    name: string;
    icon?: string;
    buttonClass?: string;
  };
}

export function ImageLinkModal({ image }: ImageLinkModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <div className="tooltip" data-tip={image.name}>
        <button
          type="button"
          className={`${image.buttonClass ?? 'btn btn-sm btn-primary text-white'} join-item`}
          onClick={() => dialogRef.current?.showModal()}
        >
          {image.icon && <Icon name={image.icon} width={16} height={16} />}
        </button>
      </div>

      <dialog ref={dialogRef} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{image.name}</h3>
          <div className="py-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image.src} alt={image.alt} className="w-full h-auto rounded" />
          </div>
          <div className="modal-action">
            <a
              className="btn btn-primary"
              href={image.src}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open
            </a>
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default ImageLinkModal;
