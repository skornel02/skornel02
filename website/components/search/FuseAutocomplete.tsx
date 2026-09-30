'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Fuse, { type FuseResult } from 'fuse.js';
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from '@/components/ui/command';

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
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<FuseResult<T>[]>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim().length > 0) {
      setResults(fuse.search(query).slice(0, 5));
    } else {
      setResults([]);
    }
  };

  const handleSelect = (href?: string) => {
    setSearchQuery('');
    setResults([]);
    if (href) {
      router.push(href);
    }
  };

  return (
    <div className="relative w-full z-50">
      {/* shouldFilter={false} ensures cmdk doesn't override your fuse.js results */}
      <Command 
        shouldFilter={false} 
        className="overflow-visible rounded-md border border-input bg-transparent"
      >
        <CommandInput 
          placeholder="Search..." 
          value={searchQuery}
          onValueChange={handleSearch}
          className="h-10"
        />

        {searchQuery.trim().length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-1 overflow-hidden rounded-md border border-border bg-popover text-popover-foreground shadow-md">
            <CommandList>
              {results.length === 0 ? (
                <CommandEmpty>No results found.</CommandEmpty>
              ) : (
                <CommandGroup>
                  {results.map((result, idx) => {
                    const name = dialogNamePicker ? dialogNamePicker(result) : '';
                    const href = dialogLinkPicker ? dialogLinkPicker(result) : undefined;

                    return (
                      <CommandItem
                        key={idx}
                        onSelect={() => handleSelect(href)}
                        className="cursor-pointer"
                      >
                        {name}
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              )}
            </CommandList>
          </div>
        )}
      </Command>
    </div>
  );
}

export default FuseAutocomplete;