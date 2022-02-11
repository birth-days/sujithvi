const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/sujith/Documents/Personl/sujithvi/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/sujith/Documents/Personl/sujithvi/src/pages/404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/sujith/Documents/Personl/sujithvi/src/pages/blog.js"))),
  "component---src-pages-goodies-js": hot(preferDefault(require("/Users/sujith/Documents/Personl/sujithvi/src/pages/goodies.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/sujith/Documents/Personl/sujithvi/src/pages/index.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/sujith/Documents/Personl/sujithvi/src/templates/blog-post.js"))),
  "component---src-templates-case-study-js": hot(preferDefault(require("/Users/sujith/Documents/Personl/sujithvi/src/templates/case-study.js"))),
  "component---src-templates-tags-js": hot(preferDefault(require("/Users/sujith/Documents/Personl/sujithvi/src/templates/tags.js")))
}

