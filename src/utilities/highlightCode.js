import hljs from "highlight.js"
// import "highlight.js/styles/atom-one-dark.css"
// import "highlight.js/styles/agate.css"
// import "highlight.js/styles/night-owl.css"
// import "highlight.js/styles/an-old-hope.css"
// import "highlight.js/styles/felipec.css"
// import "highlight.js/styles/ir-black.css"
// import "highlight.js/styles/vs2015.css"
import "highlight.js/styles/base16/hardcore.css"

hljs.configure({
  languages: ["javascript", "css", "scss", "json", "html"],
  throwUnescapedHTML: "",
})

export default function highlightCode() {
  document.querySelectorAll("pre > code").forEach(el => {
    el.innerHTML = el.textContent
  })
  hljs.highlightAll()
}
