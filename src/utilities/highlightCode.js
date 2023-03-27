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
})

export default function highlightCode() {
  const codeBlocks = document.querySelectorAll("pre > code")
  codeBlocks.forEach(codeBlock => {
    if (typeof codeBlock === "object") {
      hljs.highlightElement(codeBlock)
    }
  })
}
