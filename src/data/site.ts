export const site = {
  name: 'Hexcave',
  line: 'Hexcave is an independent product and game studio.',
  introduction: 'We have two games on Google Play and twenty-six browser games, and we’re building an ADHD app.',
  email: 'hello@hexcave.com',
  youtube: 'https://www.youtube.com/@hexcave',
  publisher: 'The Only Engineer',
};

export function local(path = '') {
  return import.meta.env.BASE_URL.replace(/\/?$/, '/') + path.replace(/^\//, '');
}

export function storeUrl(link: string, medium: 'home' | 'product_page' | 'press') {
  const url = new URL(link);
  url.searchParams.set('referrer', 'utm_source=hexcave_site&utm_medium=' + medium);
  return url.href;
}
