/**
 * Simple markdown to HTML converter
 * Handles: headers, bold, italic, lists, code blocks, paragraphs
 */

export function parseMarkdown(markdown: string): string {
  const lines = markdown.split('\n').map(line => line.replace(/\r$/, '')) // Remove \r for Windows
  let html = ''
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    // Skip empty lines
    if (!line.trim()) {
      i++
      continue
    }

    // Headers
    if (line.startsWith('### ')) {
      const content = line.replace(/^### /, '')
      html += `<h3 style="font-family: Georgia, serif; font-size: 1.25rem; color: #1a2e1a; font-weight: normal; margin-top: 1.5rem; margin-bottom: 0.75rem; line-height: 1.3;">${parseInlineMarkdown(content)}</h3>`
      i++
      continue
    }

    if (line.startsWith('## ')) {
      const content = line.replace(/^## /, '')
      html += `<h2 style="font-family: Georgia, serif; font-size: 1.5rem; color: #1a2e1a; font-weight: normal; margin-top: 2rem; margin-bottom: 1rem; line-height: 1.2;">${parseInlineMarkdown(content)}</h2>`
      i++
      continue
    }

    if (line.startsWith('# ')) {
      const content = line.replace(/^# /, '')
      html += `<h1 style="font-family: Georgia, serif; font-size: 2rem; color: #1a2e1a; font-weight: normal; margin-top: 2rem; margin-bottom: 1rem; line-height: 1.2;">${parseInlineMarkdown(content)}</h1>`
      i++
      continue
    }

    // Code blocks
    if (line.startsWith('```')) {
      const codeLines: string[] = []
      i++
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i])
        i++
      }
      i++ // skip closing ```
      html += `<pre style="background: #1a3325; color: #c8bfa8; padding: 1rem; border-radius: 4px; overflow: auto; font-size: 12px; font-family: 'JetBrains Mono', monospace; margin-bottom: 1.5rem; line-height: 1.5;"><code>${codeLines.join('\n')}</code></pre>`
      continue
    }

    // Unordered lists
    if (line.startsWith('- ')) {
      html += `<ul style="margin-bottom: 1.5rem; margin-left: 1.5rem; color: #5a6e58;">`
      while (i < lines.length && lines[i].startsWith('- ')) {
        const item = lines[i].replace(/^- /, '')
        html += `<li style="margin-bottom: 0.5rem; line-height: 1.7;">${parseInlineMarkdown(item)}</li>`
        i++
      }
      html += `</ul>`
      continue
    }

    // Blockquotes
    if (line.startsWith('> ')) {
      const quoteLines: string[] = []
      while (i < lines.length && lines[i].startsWith('> ')) {
        quoteLines.push(lines[i].replace(/^> /, ''))
        i++
      }
      html += `<blockquote style="border-left: 3px solid #c4a96b; padding-left: 1rem; margin-left: 0; margin-bottom: 1.5rem; color: #5a6e58; font-style: italic;"><p style="margin: 0; line-height: 1.7;">${quoteLines.join(' ')}</p></blockquote>`
      continue
    }

    // Paragraphs (collect multi-line paragraphs)
    if (line.trim()) {
      const para: string[] = [line]
      i++
      while (i < lines.length && lines[i].trim() && !lines[i].startsWith('#') && !lines[i].startsWith('-') && !lines[i].startsWith('>') && !lines[i].startsWith('```')) {
        para.push(lines[i])
        i++
      }
      html += `<p style="font-size: 14px; color: #5a6e58; line-height: 1.85; margin-bottom: 1.5rem;">${parseInlineMarkdown(para.join(' '))}</p>`
      continue
    }

    i++
  }

  return html
}

function parseInlineMarkdown(text: string): string {
  // Handle bold
  let html = text
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  // Handle italic
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>')
  // Handle inline code
  html = html.replace(/`(.+?)`/g, '<code style="background: #eee8d8; padding: 2px 4px; border-radius: 2px; font-family: \'JetBrains Mono\', monospace; font-size: 0.9em; color: #1a2e1a;">$1</code>')
  return html
}