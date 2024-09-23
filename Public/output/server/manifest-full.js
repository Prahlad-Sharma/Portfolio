export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["AvertaStd-Light.ttf","AvertaStd-Regular.ttf","exp/ch.png","exp/dps.png","exp/fg.jpg","exp/formi .png","exp/formi.png","exp/lej.png","exp/vit.jpg","exp/zeal.jpeg","favicon.png","images/jefferson-santos-fCEJGBzAkrU-unsplash.jpg","images/jerry-zhang-ePpaQC2c1xA-unsplash.jpg","images/linus-nylund-Q5QspluNZmM-unsplash.jpg","IMG_4296.jpg","logo/download.jpeg","logo.png","MabryPro-Regular.ttf","MabryPro-Regular.woff2","pics/arch.webp","pics/IMG_4296.jpg","pics/instadroid-min.webp","pics/instang-min.png","pics/instaReact-min.png","pics/port.webp","pics/websock-min.webp","pro/fin1.png","pro/fin1.webp","pro/fin2.png","pro/fin2.webp","pro/lej.png","pro/lej.webp","pro/lej1.png","pro/lej1.webp","pro/tune.png","pro/tune.webp","pro/zeal.jpg","pro/zeal.webp","profile.jpg","yolo.png"]),
	mimeTypes: {".ttf":"font/ttf",".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg",".woff2":"font/woff2",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.CWfc5R7s.js","app":"_app/immutable/entry/app.BCf6i0Vg.js","imports":["_app/immutable/entry/start.CWfc5R7s.js","_app/immutable/chunks/entry.DZvg7DXm.js","_app/immutable/chunks/scheduler.YAYnZILM.js","_app/immutable/chunks/index.9jx4ijl_.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.BCf6i0Vg.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.YAYnZILM.js","_app/immutable/chunks/index.t6gQgkPG.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/posta",
				pattern: /^\/api\/posta\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/posta/_server.ts.js'))
			},
			{
				id: "/api/posts.json",
				pattern: /^\/api\/posts\.json\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/posts.json/_server.ts.js'))
			},
			{
				id: "/api/posts/count",
				pattern: /^\/api\/posts\/count\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/posts/count/_server.ts.js'))
			},
			{
				id: "/api/posts/page/[page]",
				pattern: /^\/api\/posts\/page\/([^/]+?)\/?$/,
				params: [{"name":"page","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/posts/page/_page_/_server.ts.js'))
			},
			{
				id: "/api/rss.xml",
				pattern: /^\/api\/rss\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/rss.xml/_server.ts.js'))
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/blog/category",
				pattern: /^\/blog\/category\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/blog/category/page/[page]",
				pattern: /^\/blog\/category\/page\/([^/]+?)\/?$/,
				params: [{"name":"page","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/blog/category/[category]",
				pattern: /^\/blog\/category\/([^/]+?)\/?$/,
				params: [{"name":"category","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/blog/category/[category]/page",
				pattern: /^\/blog\/category\/([^/]+?)\/page\/?$/,
				params: [{"name":"category","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/blog/category/[category]/page/[page]",
				pattern: /^\/blog\/category\/([^/]+?)\/page\/([^/]+?)\/?$/,
				params: [{"name":"category","optional":false,"rest":false,"chained":false},{"name":"page","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/blog/page",
				pattern: /^\/blog\/page\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/blog/page/[page]",
				pattern: /^\/blog\/page\/([^/]+?)\/?$/,
				params: [{"name":"page","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/blog/[post]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"post","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
