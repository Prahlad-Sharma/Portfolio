

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.mdSSToxV.js","_app/immutable/chunks/scheduler.YAYnZILM.js","_app/immutable/chunks/index.t6gQgkPG.js","_app/immutable/chunks/index.DM6GfVaL.js","_app/immutable/chunks/each.C6eKWOmr.js","_app/immutable/chunks/lazyLoad.BYyKPvIm.js"];
export const stylesheets = ["_app/immutable/assets/2.CtCCagNR.css"];
export const fonts = [];
