import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'

const links: ToolLink[] = [
  { name:'Gamma',url:'https://gamma.app/',desc:'Best AI presentation, one-click design, export PPTX',cat:'ppt',icon:'📊'},
  { name:'Beautiful.ai',url:'https://www.beautiful.ai/',desc:'Smart templates, auto-layout, brand consistency',cat:'ppt',icon:'💎'},
  { name:'Tome',url:'https://tome.app/',desc:'Storytelling slides, interactive embeds',cat:'ppt',icon:'📖'},
  { name:'SlidesAI',url:'https://www.slidesai.io/',desc:'Google Slides plugin, text→slides',cat:'ppt',icon:'📄'},
  { name:'ChatPPT',url:'https://www.chatppt.com/',desc:'Chinese-native AI PPT, WeChat mini-program',cat:'ppt',icon:'💬'},
  { name:'Decktopus',url:'https://www.decktopus.com/',desc:'AI presentation builder, forms & payments',cat:'ppt',icon:'🐙'},
  { name:'NotebookLM',url:'https://notebooklm.google.com/',desc:'Deep doc analysis, audio overviews, FAQs',cat:'docs',icon:'📓'},
  { name:'ChatPDF',url:'https://www.chatpdf.com/',desc:'Upload PDF→chat, extract tables & data',cat:'docs',icon:'📑'},
  { name:'ChatDOC',url:'https://chatdoc.com/',desc:'PDF Q&A, table extraction, formula recognition',cat:'docs',icon:'📋'},
  { name:'Sharly AI',url:'https://www.sharly.ai/',desc:'Long doc summarization, cross-doc comparison',cat:'docs',icon:'📝'},
  { name:'WPS AI',url:'https://www.wps.com/ai/',desc:'Chinese office suite, built-in AI writing',cat:'docs',icon:'📎'},
  { name:'Otter.ai',url:'https://otter.ai/',desc:'Real-time transcription, speaker ID, Slack sync',cat:'meeting',icon:'🦦'},
  { name:'Fireflies.ai',url:'https://fireflies.ai/',desc:'Auto-join meetings, searchable transcripts',cat:'meeting',icon:'🪲'},
  { name:'飞书妙记',url:'https://www.feishu.cn/',desc:'Best Chinese meeting AI, auto-chapter, To-Do',cat:'meeting',icon:'🐦'},
  { name:'通义听悟',url:'https://tongyi.aliyun.com/',desc:'Alibaba meeting AI, real-time translation',cat:'meeting',icon:'☁️'},
  { name:'tl;dv',url:'https://tldv.io/',desc:'Timestamp key moments, GPT summaries',cat:'meeting',icon:'⏱️'},
  { name:'Fathom',url:'https://fathom.video/',desc:'Free AI notetaker, highlight moments',cat:'meeting',icon:'🎥'},
  { name:'Superhuman',url:'https://superhuman.com/',desc:'AI triage, instant reply, follow-up reminders',cat:'email',icon:'⚡'},
  { name:'Shortwave',url:'https://www.shortwave.com/',desc:'AI thread summaries, smart scheduling',cat:'email',icon:'📡'},
  { name:'Spark Mail',url:'https://sparkmailapp.com/',desc:'AI priority inbox, templates, team email',cat:'email',icon:'💌'},
  { name:'Missive',url:'https://missiveapp.com/',desc:'Team email + chat, AI draft & summarize',cat:'email',icon:'✉️'},
]

export default function OfficeOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e
  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h2 className={styles.title}>📋 {L('AI Office & Productivity','AI 办公提效','AI 辦公提效')}</h2>
        <p className={styles.subtitle}>{L('21 tools — PPT, Docs, Meetings, Email','21款工具——PPT、文档、会议、邮件','21款工具——PPT、文檔、會議、郵件')}</p>
      </div>
      <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#f97316" catNames={{
        ppt: L('AI PPT & Slides','AI 演示文稿','AI 演示文稿'),
        docs: L('AI Documents','AI 文档处理','AI 文檔處理'),
        meeting: L('AI Meeting Assistant','AI 会议助手','AI 會議助手'),
        email: L('AI Email & Comms','AI 邮件沟通','AI 郵件溝通'),
      }} />
    </div>
  )
}
