'use client';

import React from 'react';

export function BusinessCard() {
  return (
    <div className="card-container flex justify-center">
      <div className="indicator">
        <span className="indicator-item indicator-center badge badge-primary">Click to flip!</span>
        <label className="swap swap-flip text-9xl cursor-pointer">
          <input type="checkbox" />

          <div className="swap-off flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/card/business-card-front.svg"
              alt="Frontside of business card"
              className="w-auto h-full max-w-none"
            />
          </div>
          <div className="swap-on flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/card/business-card-back.svg"
              alt="Backside of business card"
              className="w-auto h-full max-w-none"
            />
          </div>
        </label>
      </div>
    </div>
  );
}

export default BusinessCard;
