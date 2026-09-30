export function createPostHref(
  post: { slug: string },
  pageReference?: number
): string {
  let href = `/posts/${post.slug}/`;

  if (pageReference !== undefined) {
    href += `?page=${pageReference}`;
  }

  return href;
}

export function createPostNavigationHref(page?: number): string {
  let href = '/posts/';

  if (page !== undefined && page !== 1) {
    href += `?page=${page}`;
  }

  return href;
}
