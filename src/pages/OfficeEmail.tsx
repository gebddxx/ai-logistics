import { useT } from '../contexts/LanguageContext';import styles from './Page.module.css'
export default function OfficeEmail(){const{lang}=useT();const L=(e:string,z:string,t:string)=>lang==='zh-CN'?z:lang==='zh-TW'?t:e
return(<div className={styles.page}><div className={styles.head}><h2 className={styles.title}>📧 {L('AI Email & Communication','AI 邮件沟通','AI 郵件溝通')}</h2><p className={styles.subtitle}>{L('Draft, summarize, follow up — clear your inbox faster','起草、总结、跟进 — 更快清空收件箱','起草、總結、跟進 — 更快清空收件箱')}</p></div><div className={styles.cases}>
<C t={L('🛠 Tools','🛠 工具','🛠 工具')}><T h={['Tool','Integration','Feature']} r={[
['Superhuman AI','Gmail/Outlook',L('AI triage, instant reply, follow-up reminders','AI自动分类、即时回复、跟进提醒','AI自動分類、即時回覆、跟進提醒')],
['Shortwave','Gmail',L('AI summary of long threads, smart scheduling, bundles','长邮件线程AI总结、智能排程','長郵件執行緒AI總結、智慧排程')],
['Microsoft Copilot','Outlook/Teams',L('Draft email from prompt, summarize meetings, coach tone','Prompt起草邮件、会议总结、语气建议','Prompt起草郵件、會議總結、語氣建議')],
['GrammarlyGO','Anywhere',L('Context-aware writing, tone adjustment, quick replies','上下文感知写作、语气调整、快速回复','上下文感知寫作、語氣調整、快速回覆')],
['Spark Mail','iOS/Mac/Android',L('AI priority inbox, templates, team collaboration','AI优先级收件箱、模板、团队协作','AI優先級收件箱、模板、團隊協作')],
]} /></C>
<C t={L('💡 Email Prompt Templates','💡 邮件 Prompt 模板','💡 郵件 Prompt 模板')}><Code>{`# 商务沟通
"写一封邮件给[客户名], 跟进[项目名]的进度。
语气: 专业友好。内容: 1)感谢上次会议 2)进展更新 3)下一步安排 4)询问反馈"

# 会议邀请
"起草一封会议邀请, 主题[XXX], 时间[XXX], 参会人[XXX]。
附上议程和需要提前准备的材料清单。"

# 拒绝/推迟
"礼貌地拒绝[请求], 原因是[XXX]。
表达感谢和善意, 并提议替代方案[如果有的话]"

# 邮件线程总结
"总结这封邮件线程的: 1)核心议题 2)各方立场 3)已达成的共识 4)待解决的分歧。3个bullet point以内。"`}</Code></C>
</div></div>)}
function C({t,children}:{t:string;children:React.ReactNode}){return <div style={{background:'var(--bg-card)',borderRadius:12,padding:22,boxShadow:'var(--shadow)',marginBottom:16}}><h3 style={{marginBottom:12,color:'var(--text)',fontSize:16}}>{t}</h3>{children}</div>}
function T({h,r}:{h:string[];r:string[][]}){return <table style={{width:'100%',borderCollapse:'collapse',fontSize:13}}><thead><tr>{h.map(x=><th key={x} style={{padding:'8px 12px',textAlign:'left',borderBottom:'2px solid var(--border)',color:'var(--text)',fontWeight:600}}>{x}</th>)}</tr></thead><tbody>{r.map((rr,i)=><tr key={i}>{rr.map((c,j)=><td key={j} style={{padding:'8px 12px',borderBottom:'1px solid var(--border)',color:'var(--text-secondary)'}}>{c}</td>)}</tr>)}</tbody></table>}
function Code({children}:{children:string}){return <pre style={{background:'#0f172a',color:'#e2e8f0',borderRadius:8,padding:16,fontSize:13,lineHeight:1.6,overflowX:'auto',whiteSpace:'pre-wrap',wordBreak:'break-word',margin:0}}><code>{children}</code></pre>}
