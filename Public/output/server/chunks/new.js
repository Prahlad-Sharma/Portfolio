import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { C as Callout } from "./Callout.js";
const metadata = {
  "title": "component",
  "date": "2021-12-01",
  "updated": "2021-12-01",
  "categories": ["sveltekit", "markdown", "svelte"],
  "coverImage": "/images/jerry-zhang-ePpaQC2c1xA-unsplash.jpg",
  "coverWidth": 16,
  "coverHeight": 9,
  "excerpt": "This post demonstrates how to include a Svelte component in a Markdown post."
};
const New = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p data-svelte-h="svelte-u86nnu">This starter includes an <code>Callout.svelte</code> component. It’s not particularly useful on its own, but here’s how you might use it inside of a Markdown post, thanks to mdsvex.</p> ${validate_component(Callout, "Callout").$$render($$result, {}, {}, {
    default: () => {
      return `This is an example of the Callout.svelte component! Find it in <code data-svelte-h="svelte-yfsmsx">src/lib/components/Callout.svelte</code>.`;
    }
  })} <p data-svelte-h="svelte-ulhokh">You can inject any Svelte components you want into Markdown! Just import them in a <code>&lt;script&gt;</code> tag and then use them wherever you like.</p> <p data-svelte-h="svelte-r35kco">For that matter, you can inject any HTML anywhere! (Note that you cannot use Markdown <em>inside</em> Svelte components or HTML, however. Any opened tag must be closed before returning to Markdown.)</p> <h2 id="hello" data-svelte-h="svelte-6zq0ha"><a aria-hidden="true" tabindex="-1" href="#hello"><span class="icon icon-link"></span></a>Hello</h2> <p data-svelte-h="svelte-7wnxok">this is my blog post</p>`;
});
export {
  New as default,
  metadata
};
