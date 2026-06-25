import { useT } from '../contexts/LanguageContext';import styles from './Page.module.css'
export default function OfficeOverview(){const{lang}=useT()
return(<div className={styles.page}><div className={styles.head}>
  <h2 className={styles.title}>📋 {lang==='zh-CN'?'AI 办公提效 · 全景总览':lang==='zh-TW'?'AI 辦公提效 · 全景總覽':'AI Office & Productivity · Overview'}</h2>
  <p className={styles.subtitle}>{lang==='zh-CN'?'PPT · 文档 · 会议 · 邮件 — AI 让日常工作更聪明':lang==='zh-TW'?'PPT · 文檔 · 會議 · 郵件 — AI 讓日常工作更聰明':'PPT · Docs · Meetings · Email — Work smarter with AI'}</p></div>
  <div className={styles.summary}>{lang==='zh-CN'?'日常办公中有大量重复性工作：做PPT、写报告、整理会议纪要、回复邮件。AI 不是取代你的工作，而是把机械劳动自动化，让你专注于真正需要思考和判断的事情。本模块整理了 AI 办公提效的实用工具和工作流。':'A huge portion of office work is repetitive: making slides, writing reports, organizing meeting notes, replying to emails. AI automates the mechanical parts so you can focus on what requires real thinking. This module covers practical tools and workflows for AI-powered productivity.'}</div>
  <G items={[
    {icon:'📊',tEn:'AI PPT & Slides',tZh:'AI 演示文稿',dEn:'Generate presentations from a single prompt — outline, content, design, all automated.',dZh:'一句话生成完整PPT——大纲、内容、设计全部自动化。'},
    {icon:'📄',tEn:'AI Documents',tZh:'AI 文档处理',dEn:'Summarize, translate, compare, and extract data from any document in seconds.',dZh:'秒级总结、翻译、对比、提取文档中的数据。'},
    {icon:'🎙️',tEn:'AI Meeting Assistant',tZh:'AI 会议助手',dEn:'Auto-transcribe, summarize, and extract action items from meetings. Never take notes again.',dZh:'自动转写、总结、提取待办。再也不用做会议笔记。'},
    {icon:'📧',tEn:'AI Email & Comms',tZh:'AI 邮件沟通',dEn:'Draft replies, summarize threads, schedule follow-ups. Clear your inbox faster.',dZh:'自动起草回复、总结邮件线程、安排跟进。更快清空收件箱。'},
  ]} lang={lang} /></div>)}
function G({items,lang}:{items:{icon:string;tEn:string;tZh:string;dEn:string;dZh:string}[],lang:string}){return <div className={styles.domainGrid}>{items.map(i=>(<div key={i.icon} className={styles.domainCard} style={{borderTop:'4px solid #f97316'}}><div className={styles.domainHead}><span className={styles.domainIcon}>{i.icon}</span></div><h3 className={styles.domainTitle}>{lang==='zh-CN'?i.tZh:i.tEn}</h3><p className={styles.domainDesc}>{lang==='zh-CN'?i.dZh:i.dEn}</p></div>))}</div>}
