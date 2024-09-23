import { e as error } from "../../../../chunks/index.js";
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
const load = async ({ params }) => {
  try {
    const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../lib/posts/heading-links-example.md": () => import("../../../../chunks/heading-links-example.js"), "../../../lib/posts/mdsvex-component-example.md": () => import("../../../../chunks/mdsvex-component-example.js"), "../../../lib/posts/new.md": () => import("../../../../chunks/new.js"), "../../../lib/posts/sdasda-dsd.md": () => import("../../../../chunks/sdasda-dsd.js"), "../../../lib/posts/syntax-highlighting-example.md": () => import("../../../../chunks/syntax-highlighting-example.js"), "../../../lib/posts/yolo-new.md": () => import("../../../../chunks/yolo-new.js") }), `../../../lib/posts/${params.post}.md`);
    const content = post.default;
    const length = content.length;
    return {
      PostContent: post.default,
      meta: { ...post.metadata, slug: params.post },
      length1: length
    };
  } catch (err) {
    error(404, err);
  }
};
export {
  load
};
