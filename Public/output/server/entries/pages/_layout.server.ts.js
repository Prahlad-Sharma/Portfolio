const prerender = true;
const load = async ({ url }) => {
  try {
    return {
      path: url.pathname
    };
  } catch (err) {
    console.log(err);
  }
};
export {
  load,
  prerender
};
