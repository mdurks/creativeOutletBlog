export const truncateHtml = (html, maxLength = 200) => {
  if (typeof window === "undefined") {
    return html
  }

  let div = document.createElement("div")
  div.innerHTML = html

  let truncatedText = ""
  let charCount = 0

  function processText(text) {
    const remainingChars = maxLength - charCount
    if (text.length <= remainingChars) {
      charCount += text.length
      return text
    } else {
      charCount += remainingChars
      return text.slice(0, remainingChars)
    }
  }

  function truncateNode(node) {
    if (charCount >= maxLength) return

    if (node.nodeType === Node.TEXT_NODE) {
      truncatedText += processText(node.textContent)
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const tagName = node.tagName.toLowerCase()

      if (/^h[1-6]$/.test(tagName)) {
        // For heading tags, process their text and add a period.
        truncatedText += processText(node.textContent.trim()) + ". "
      } else if (tagName === "p" || tagName === "strong" || tagName === "em") {
        node.childNodes.forEach(truncateNode)
        if (tagName === "p") truncatedText += " "
      }
    }
  }

  div.childNodes.forEach(truncateNode)

  // Trim any extra whitespace and return the text wrapped in a single <> tag.
  return `${truncatedText.trim()}...`
}
