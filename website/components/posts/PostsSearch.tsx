'use client';

import React, { useMemo } from 'react';
import Fuse from 'fuse.js';
import { FuseAutocomplete } from '@/components/search/FuseAutocomplete';
import { createPostHref } from '@/lib/hrefs';
import type { Post } from '#content';

interface PostsSearchProps {
  posts: Post[];
}

export function PostsSearch({ posts }: PostsSearchProps) {
  const fuse = useMemo(() => {
    return new Fuse(posts, {
      keys: ['slug', 'title', 'description', 'tags', 'content'],
      includeScore: true,
      threshold: 0.4,
    });
  }, [posts]);

  return (
    <FuseAutocomplete
      fuse={fuse}
      dialogNamePicker={(res) => res.item.title}
      dialogLinkPicker={(res) => createPostHref(res.item)}
    />
  );
}

export default PostsSearch;
