import * as server from '../entries/pages/blog/page/_page.server.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/page/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/page/+page.server.js";
export const imports = ["_app/immutable/nodes/9.DKpvlSa1.js","_app/immutable/chunks/scheduler.YAYnZILM.js","_app/immutable/chunks/index.t6gQgkPG.js"];
export const stylesheets = [];
export const fonts = [];
