import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.DJP7BDGs.js","_app/immutable/chunks/scheduler.YAYnZILM.js","_app/immutable/chunks/index.t6gQgkPG.js","_app/immutable/chunks/each.C6eKWOmr.js","_app/immutable/chunks/index.9jx4ijl_.js","_app/immutable/chunks/config.Cw8AKM_O.js","_app/immutable/chunks/index.DM6GfVaL.js"];
export const stylesheets = ["_app/immutable/assets/0.CFk86wuE.css"];
export const fonts = [];
