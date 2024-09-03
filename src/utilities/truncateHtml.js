export const truncateHtml = (html, maxLength = 200) => {
  if (!html) return ""

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

  function truncateFromHtml(html) {
    const regex = /(<[^>]+>)|([^<]+)/g
    let match

    while ((match = regex.exec(html)) !== null && charCount < maxLength) {
      const [, tag, text] = match

      if (text) {
        truncatedText += processText(text.trim())
      } else if (tag) {
        const tagName = tag.match(/<\/?(\w+)/)?.[1]?.toLowerCase()

        if (/^h[1-6]$/.test(tagName)) {
          truncatedText += ". "
        } else if (
          tagName === "p" ||
          tagName === "strong" ||
          tagName === "em"
        ) {
          // Continue to the next iteration to process text within these tags
        }
      }
    }
  }

  truncateFromHtml(html)

  // Ensure any final punctuation is followed by a space.
  truncatedText = truncatedText.replace(/\.([^\s]|$)/g, ". $1").trim()

  return `${truncatedText}...`
}
