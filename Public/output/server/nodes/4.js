import * as server from '../entries/pages/blog/category/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/category/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/category/+page.server.js";
export const imports = ["_app/immutable/nodes/4.FtdGr6n0.js","_app/immutable/chunks/scheduler.YAYnZILM.js","_app/immutable/chunks/index.t6gQgkPG.js","_app/immutable/chunks/each.C6eKWOmr.js"];
export const stylesheets = [];
export const fonts = [];
