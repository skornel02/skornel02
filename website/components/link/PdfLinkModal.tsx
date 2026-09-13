'use client';

import React, { useRef } from 'react';
import { Icon } from '@/components/common/Icon';

interface PdfLinkModalProps {
  pdf: {
    src: string;
    name: string;
    icon?: string;
    buttonClass?: string;
  };
}

export function PdfLinkModal({ pdf }: PdfLinkModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <div className="tooltip" data-tip={pdf.name}>
        <button
          type="button"
          className={`${pdf.buttonClass ?? 'btn btn-sm btn-primary text-white'} join-item`}
          onClick={() => dialogRef.current?.showModal()}
        >
          {pdf.icon && <Icon name={pdf.icon} width={16} height={16} />}
        </button>
      </div>

      <dialog ref={dialogRef} className="modal">
        <div className="modal-box max-w-3xl">
          <h3 className="font-bold text-lg">{pdf.name}</h3>
          <object
            title={pdf.name}
            data={pdf.src}
            type="application/pdf"
            className="w-full h-96 my-4"
          >
            <p>
              It appears you don&apos;t have a PDF plugin for this browser.{' '}
              <a href={pdf.src} target="_blank" rel="noopener noreferrer" className="link">
                Click here to download the PDF.
              </a>
            </p>
          </object>
          <div className="modal-action">
            <a
              className="btn btn-primary"
              href={pdf.src}
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

export default PdfLinkModal;
