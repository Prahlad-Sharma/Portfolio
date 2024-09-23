export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12')
];

export const server_loads = [0];

export const dictionary = {
		"/": [2],
		"/blog": [~3],
		"/blog/category": [~4],
		"/blog/category/page/[page]": [~5],
		"/blog/category/[category]": [~6],
		"/blog/category/[category]/page": [~7],
		"/blog/category/[category]/page/[page]": [~8],
		"/blog/page": [~9],
		"/blog/page/[page]": [~10],
		"/blog/[post]": [11],
		"/contact": [12]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';