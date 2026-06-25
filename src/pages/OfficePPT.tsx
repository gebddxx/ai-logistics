import { useT } from '../contexts/LanguageContext';import styles from './Page.module.css'
export default function OfficePPT(){const{lang}=useT();const L=(e:string,z:string,t:string)=>lang==='zh-CN'?z:lang==='zh-TW'?t:e
return(<div className={styles.page}><div className={styles.head}><h2 className={styles.title}>📊 {L('AI PPT & Slides','AI 演示文稿','AI 演示文稿')}</h2><p className={styles.subtitle}>{L('Generate presentations from a single prompt','一句话生成完整PPT','一句話生成完整PPT')}</p></div><div className={styles.cases}>
<C t={L('🛠 Tools','🛠 工具','🛠 工具')}><T h={['Tool','Key Feature','Pricing']} r={[
['Gamma',L('Best AI presentation tool. One-click design, live web, export PPTX','最好用的AI PPT,一键设计,在线展示,导出PPTX','最好用的AI PPT,一鍵設計,線上展示,導出PPTX'),L('Free + Pro $10/mo','免费+Pro $10/月','免費+Pro $10/月')],
['Beautiful.ai',L('Smart templates, auto-layout, brand consistency','智能模板、自动排版、品牌统一','智慧模板、自動排版、品牌統一'),L('$12-40/mo','$12-40/月','$12-40/月')],
['Tome',L('Storytelling-focused, interactive embeds','叙事型PPT,交互式嵌入','敘事型PPT,互動式嵌入'),L('Free + Pro','免费+Pro','免費+Pro')],
['SlidesAI',L('Google Slides plugin, text-to-slides directly','Google Slides插件, 直接在幻灯片中生成','Google Slides插件, 直接在幻燈片中生成'),L('Free + Pro','免费+Pro','免費+Pro')],
['ChatPPT',L('Chinese-native, WeChat mini-program','中文原生, 小程序可用','中文原生, 小程式可用'),L('Free tier','有免费额度','有免費額度')],
]} /></C>
<C t={L('💡 Prompt Formula','💡 Prompt 公式','💡 Prompt 公式')}><Code>{`# 高效PPT生成 Prompt:
"帮我做一个关于[主题]的PPT, 用于[场景:汇报/路演/培训/分享]。
目标听众是[人群], 时长[XX分钟]。
结构要求: 封面→目录→[5个核心章节]→总结→Q&A。
每页要点不超过5个bullet point, 风格[专业/活泼/极简]。"

# 进阶技巧:
"在第3页加一个数据对比图表, 展示[数据A] vs [数据B]"
"把第5-7页的内容浓缩成一页Executive Summary"
"给这个PPT配一套演讲备注, 每页3-5句话"`}</Code></C>
</div></div>)}
function C({t,children}:{t:string;children:React.ReactNode}){return <div style={{background:'var(--bg-card)',borderRadius:12,padding:22,boxShadow:'var(--shadow)',marginBottom:16}}><h3 style={{marginBottom:12,color:'var(--text)',fontSize:16}}>{t}</h3>{children}</div>}
function T({h,r}:{h:string[];r:string[][]}){return <table style={{width:'100%',borderCollapse:'collapse',fontSize:13}}><thead><tr>{h.map(x=><th key={x} style={{padding:'8px 12px',textAlign:'left',borderBottom:'2px solid var(--border)',color:'var(--text)',fontWeight:600}}>{x}</th>)}</tr></thead><tbody>{r.map((rr,i)=><tr key={i}>{rr.map((c,j)=><td key={j} style={{padding:'8px 12px',borderBottom:'1px solid var(--border)',color:'var(--text-secondary)'}}>{c}</td>)}</tr>)}</tbody></table>}
function Code({children}:{children:string}){return <pre style={{background:'#0f172a',color:'#e2e8f0',borderRadius:8,padding:16,fontSize:13,lineHeight:1.6,overflowX:'auto',whiteSpace:'pre-wrap',wordBreak:'break-word',margin:0}}><code>{children}</code></pre>}
