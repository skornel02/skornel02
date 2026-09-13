'use client';

import React, { useState } from 'react';
import { CardTitle } from './CardTitle';
import { CardContacts } from './CardContacts';
import { CardNavigation } from './CardNavigation';

export function MeCard() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="card w-80 sm:w-96 bg-base-100 m-auto z-10 shadow-xl border border-secondary transition-all duration-300">
      <div
        className={`card-body transition-all duration-700 overflow-hidden ${
          loaded ? 'max-h-[850px]' : 'max-h-28'
        }`}
      >
        <div id="nameSlot" className="sm:card-title justify-center h-12 flex items-center">
          <CardTitle onDone={() => setLoaded(true)} />
        </div>

        <div
          className={`transition-opacity duration-700 ease-in-out ${
            loaded ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="divider my-1"></div>

          <div
            id="faceSlot"
            className="mx-auto avatar ring ring-primary rounded-lg overflow-hidden w-40 h-40 my-2"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/people/sk.jpeg"
              alt="Kornél portrait"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="divider my-1"></div>

          <div className="flex justify-center items-center my-2">
            <CardContacts />
          </div>

          <div className="divider my-1"></div>

          <div id="navigationSlot" className="mt-2">
            <CardNavigation home={true} card={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeCard;
