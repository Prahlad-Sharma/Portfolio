import * as server from '../entries/pages/blog/category/_category_/page/_page_/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/category/_category_/page/_page_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/category/[category]/page/[page]/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.DOPSh8GY.js","_app/immutable/chunks/scheduler.YAYnZILM.js","_app/immutable/chunks/index.t6gQgkPG.js","_app/immutable/chunks/Pagination.DEZy0XLT.js","_app/immutable/chunks/each.C6eKWOmr.js","_app/immutable/chunks/lazyLoad.BYyKPvIm.js","_app/immutable/chunks/config.Cw8AKM_O.js"];
export const stylesheets = ["_app/immutable/assets/Pagination.So7t6x5Z.css"];
export const fonts = [];
