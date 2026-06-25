import { useT } from '../contexts/LanguageContext';import styles from './Page.module.css'
export default function OfficeMeeting(){const{lang}=useT();const L=(e:string,z:string,t:string)=>lang==='zh-CN'?z:lang==='zh-TW'?t:e
return(<div className={styles.page}><div className={styles.head}><h2 className={styles.title}>🎙️ {L('AI Meeting Assistant','AI 会议助手','AI 會議助手')}</h2><p className={styles.subtitle}>{L('Auto-transcribe, summarize, extract action items','自动转写、智能总结、提取待办','自動轉寫、智慧總結、提取待辦')}</p></div><div className={styles.cases}>
<C t={L('🛠 Tools','🛠 工具','🛠 工具')}><T h={['Tool','Languages','Highlight']} r={[
['Otter.ai','English',L('Real-time transcription, speaker ID, AI summary, Slack integration','实时转写、说话人识别、AI总结、Slack集成','即時轉寫、說話人識別、AI總結、Slack整合')],
['Fireflies.ai','60+',L('Joins meetings automatically, searchable transcripts, CRM sync','自动加入会议、可搜索转录、CRM同步','自動加入會議、可搜索轉錄、CRM同步')],
['飞书妙记','中文',L('Best for Chinese meetings, auto-chapter, highlights, To-Do extraction','中文会议最佳,自动分段、高光、待办提取','中文會議最佳,自動分段、高光、待辦提取')],
['通义听悟','中文',L('Alibaba AI, real-time translation, multi-speaker separation','阿里AI,实时翻译,多人分离','阿里AI,即時翻譯,多人分離')],
['tl;dv','30+',L('Timestamp key moments, create shareable clips, GPT summaries','时间戳标记、可分享片段、GPT总结','時間戳標記、可分享片段、GPT總結')],
]} /></C>
<C t={L('💡 Workflow','💡 工作流','💡 工作流')}><Code>{`# 标准会议流程:
会前: AI发送议程提醒 → 自动收集参会者会前问题
会中: AI自动转写 + 实时翻译(跨国会议)
会后: AI生成结构化纪要:
  - 会议主题
  - 参会人员
  - 核心讨论点 (按话题分组)
  - 决议事项
  - 待办事项 (谁/做什么/截止时间)
  - 下次会议建议时间

# AI Prompt 整理纪要:
"以下是会议文字稿, 请帮我整理:
1. 3个核心决议
2. 每个参会者的Action Items
3. 有争议未解决的问题(供下次讨论)"`}</Code></C>
</div></div>)}
function C({t,children}:{t:string;children:React.ReactNode}){return <div style={{background:'var(--bg-card)',borderRadius:12,padding:22,boxShadow:'var(--shadow)',marginBottom:16}}><h3 style={{marginBottom:12,color:'var(--text)',fontSize:16}}>{t}</h3>{children}</div>}
function T({h,r}:{h:string[];r:string[][]}){return <table style={{width:'100%',borderCollapse:'collapse',fontSize:13}}><thead><tr>{h.map(x=><th key={x} style={{padding:'8px 12px',textAlign:'left',borderBottom:'2px solid var(--border)',color:'var(--text)',fontWeight:600}}>{x}</th>)}</tr></thead><tbody>{r.map((rr,i)=><tr key={i}>{rr.map((c,j)=><td key={j} style={{padding:'8px 12px',borderBottom:'1px solid var(--border)',color:'var(--text-secondary)'}}>{c}</td>)}</tr>)}</tbody></table>}
function Code({children}:{children:string}){return <pre style={{background:'#0f172a',color:'#e2e8f0',borderRadius:8,padding:16,fontSize:13,lineHeight:1.6,overflowX:'auto',whiteSpace:'pre-wrap',wordBreak:'break-word',margin:0}}><code>{children}</code></pre>}
