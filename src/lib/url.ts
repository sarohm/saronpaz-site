// Prefix site-relative paths with the deploy base (e.g. "/saronpaz-site" on a temporary GitHub address).
// On the real domain the base is "/" and paths stay as they are.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const u = (p: string) => (p && p.startsWith('/') && !p.startsWith('//') ? base + p : p);
