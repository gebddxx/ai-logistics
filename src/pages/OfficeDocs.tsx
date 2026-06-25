import { useT } from '../contexts/LanguageContext';import styles from './Page.module.css'
export default function OfficeDocs(){const{lang}=useT();const L=(e:string,z:string,t:string)=>lang==='zh-CN'?z:lang==='zh-TW'?t:e
return(<div className={styles.page}><div className={styles.head}><h2 className={styles.title}>📄 {L('AI Document Processing','AI 文档处理','AI 文檔處理')}</h2><p className={styles.subtitle}>{L('Summarize, translate, compare, extract — AI handles your documents','总结、翻译、对比、提取 — AI 处理你的文档','總結、翻譯、對比、提取 — AI 處理你的文檔')}</p></div><div className={styles.cases}>
<C t={L('🛠 Tools','🛠 工具','🛠 工具')}><T h={['Tool','Best For']} r={[
['NotebookLM',L('Deep doc analysis. Upload PDFs, get summaries, FAQs, audio overviews','深度文档分析。上传PDF, 自动摘要、FAQ、播客式音频','深度文檔分析。上傳PDF, 自動摘要、FAQ、播客式音頻')],
['ChatGPT/Claude',L('Upload any doc and chat with it. Compare docs, extract data','上传任意文档对话。对比文档、提取数据','上傳任意文檔對話。對比文檔、提取數據')],
['ChatDOC / ChatPDF',L('Specialized PDF Q&A, table extraction, formula recognition','专业PDF问答, 表格提取, 公式识别','專業PDF問答, 表格提取, 公式識別')],
['WPS AI',L('Chinese office suite, built-in AI writing & analysis','国产办公套件, 内置AI写作分析','國產辦公套件, 內置AI寫作分析')],
['Sharly AI',L('Long doc summarization, cross-document comparison','长文档总结, 跨文档对比','長文檔總結, 跨文檔對比')],
]} /></C>
<C t={L('💡 Common Prompts','💡 常用 Prompt','💡 常用 Prompt')}><Code>{`# 文档总结
"用3句话总结这份报告的核心发现, 每条不超过30字"
"把这份50页的白皮书总结成一页Executive Summary"

# 文档对比
"对比这两份合同的差异, 重点标注责任条款和付款条件的区别"
"这份V2版本和V1相比, 改动了哪些关键数据?"

# 数据提取
"从这份财报中提取: 年营收、同比增长率、净利润、主要成本项"
"把这份PDF里的所有表格提取成CSV格式"

# 文档翻译/改写
"把这份英文技术文档翻译成中文, 保持专业术语准确"
"把这份内部纪要改写成对外发布稿的语气"`}</Code></C>
</div></div>)}
function C({t,children}:{t:string;children:React.ReactNode}){return <div style={{background:'var(--bg-card)',borderRadius:12,padding:22,boxShadow:'var(--shadow)',marginBottom:16}}><h3 style={{marginBottom:12,color:'var(--text)',fontSize:16}}>{t}</h3>{children}</div>}
function T({h,r}:{h:string[];r:string[][]}){return <table style={{width:'100%',borderCollapse:'collapse',fontSize:13}}><thead><tr>{h.map(x=><th key={x} style={{padding:'8px 12px',textAlign:'left',borderBottom:'2px solid var(--border)',color:'var(--text)',fontWeight:600}}>{x}</th>)}</tr></thead><tbody>{r.map((rr,i)=><tr key={i}>{rr.map((c,j)=><td key={j} style={{padding:'8px 12px',borderBottom:'1px solid var(--border)',color:'var(--text-secondary)'}}>{c}</td>)}</tr>)}</tbody></table>}
function Code({children}:{children:string}){return <pre style={{background:'#0f172a',color:'#e2e8f0',borderRadius:8,padding:16,fontSize:13,lineHeight:1.6,overflowX:'auto',whiteSpace:'pre-wrap',wordBreak:'break-word',margin:0}}><code>{children}</code></pre>}
