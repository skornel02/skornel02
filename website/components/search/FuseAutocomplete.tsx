'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Fuse, { type FuseResult } from 'fuse.js';

interface FuseAutocompleteProps<T> {
  fuse: Fuse<T>;
  dialogNamePicker?: (result: FuseResult<T>) => string;
  dialogLinkPicker?: (result: FuseResult<T>) => string | undefined;
}

export function FuseAutocomplete<T>({
  fuse,
  dialogNamePicker,
  dialogLinkPicker,
}: FuseAutocompleteProps<T>) {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<FuseResult<T>[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim().length > 0) {
      setResults(fuse.search(query));
    } else {
      setResults([]);
    }
  };

  return (
    <div className={`dropdown w-full ${results.length > 0 ? 'dropdown-open' : ''}`}>
      <div className="form-control w-full">
        <label className="label" htmlFor="postsSearchBox">
          <span className="label-text">Find what you are looking for!</span>
        </label>
        <input
          id="postsSearchBox"
          type="text"
          placeholder="Search..."
          className="input input-bordered w-full"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {searchQuery.trim().length > 0 && (
        <ul className="dropdown-content menu bg-primary text-white rounded-box z-50 w-full p-2 shadow-xl mt-1">
          {results.length === 0 ? (
            <li className="p-2 text-white/80">No results found</li>
          ) : (
            results.map((result, idx) => {
              const name = dialogNamePicker ? dialogNamePicker(result) : '';
              const href = dialogLinkPicker ? dialogLinkPicker(result) : undefined;
              const matchScore = ((1 - (result.score ?? 0)) * 100).toFixed(0);

              return (
                <li key={idx}>
                  {href ? (
                    <Link
                      href={href}
                      className="hover:bg-primary-focus text-white flex justify-between"
                      onClick={() => {
                        setSearchQuery('');
                        setResults([]);
                      }}
                    >
                      <span>{name}</span>
                      <span className="text-xs opacity-75">{matchScore}%</span>
                    </Link>
                  ) : (
                    <span>{name}</span>
                  )}
                </li>
              );
            })
          )}
        </ul>
      )}
    </div>
  );
}

export default FuseAutocomplete;
