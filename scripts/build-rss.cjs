/**
 * Generates rss.xml from aiNews.ts data.
 * Run: node scripts/build-rss.cjs
 */
const fs = require('fs')
const path = require('path')

const { newsIssues } = require('../src/data/aiNews.ts')

const BASE = 'https://gebddxx.github.io/ai-for-everything'
const items = newsIssues.slice(0, 20).map(n => `
  <item>
    <title>AI 速报 #${n.id}</title>
    <link>${BASE}/#/ai-news</link>
    <description><![CDATA[${n.summary}]]></description>
    <pubDate>${new Date(n.date + 'T' + n.time + '+08:00').toUTCString()}</pubDate>
    <guid>${BASE}/#/ai-news#${n.id}</guid>
  </item>`).join('')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>AI 速报</title>
    <link>${BASE}/#/ai-news</link>
    <description>AI 行业快讯，每日更新</description>
    ${items}
  </channel>
</rss>`

fs.writeFileSync(path.join(__dirname, '..', 'public', 'rss.xml'), xml, 'utf-8')
console.log('Generated public/rss.xml')
