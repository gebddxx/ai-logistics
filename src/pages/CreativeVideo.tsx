import { useT } from '../contexts/LanguageContext';import styles from './Page.module.css'
export default function CreativeVideo(){const{lang}=useT();const L=(e:string,z:string,t:string)=>lang==='zh-CN'?z:lang==='zh-TW'?t:e
return(<div className={styles.page}><div className={styles.head}><h2 className={styles.title}>🎬 {L('AI Video Creation','AI 视频创作','AI 影片創作')}</h2><p className={styles.subtitle}>{L('Text-to-video, auto editing, digital avatars','文生视频、自动剪辑、数字人播报','文生影片、自動剪輯、數位人播報')}</p></div><div className={styles.cases}>
<C t={L('🛠 Tools','🛠 工具','🛠 工具')}><T h={['Tool','Specialty']} r={[
['Runway Gen-3',L('Text-to-video, best motion quality','文生视频，运动质量最佳','文生影片，運動品質最佳')],
['Pika Labs',L('Quick social media clips, fun effects','快速社媒短片，趣味特效','快速社媒短片，趣味特效')],
['HeyGen / Synthesia',L('AI avatar video, multi-language dubbing','数字人播报，多语种配音','數位人播報，多語種配音')],
['CapCut (剪映)',L('AI-powered mobile editing, auto captions','AI手机剪辑，自动字幕','AI手機剪輯，自動字幕')],
['Descript',L('Edit video by editing text transcript','像编辑文档一样编辑视频','像編輯文檔一樣編輯影片')],
['Opus Clip',L('Auto-clip long videos into viral shorts','长视频自动切短视频','長影片自動切短影片')],
]} /></C>
<C t={L('💡 Workflows','💡 工作流','💡 工作流')}>
<Code>{`# 工作流 1: 文字 → 视频
1. ChatGPT/Claude 生成脚本
2. HeyGen 选择数字人 + 输入脚本 → 生成播报视频
3. CapCut 加字幕 + BGM + 转场 → 导出

# 工作流 2: 长视频 → 短视频矩阵
1. 上传长视频到 Opus Clip
2. AI 自动识别高光片段 → 生成10+条短视频
3. 自动加字幕 + 标题 → 一键发布多平台

# 工作流 3: 产品宣传片
1. Runway 输入产品描述 → 生成概念画面
2. ElevenLabs 生成旁白配音
3. CapCut 合成画面+配音+BGM → 导出1080p`}</Code></C>
</div></div>)}
function C({t,children}:{t:string;children:React.ReactNode}){return <div style={{background:'var(--bg-card)',borderRadius:12,padding:22,boxShadow:'var(--shadow)',marginBottom:16}}><h3 style={{marginBottom:12,color:'var(--text)',fontSize:16}}>{t}</h3>{children}</div>}
function T({h,r}:{h:string[];r:string[][]}){return <table style={{width:'100%',borderCollapse:'collapse',fontSize:13}}><thead><tr>{h.map(x=><th key={x} style={{padding:'8px 12px',textAlign:'left',borderBottom:'2px solid var(--border)',color:'var(--text)',fontWeight:600}}>{x}</th>)}</tr></thead><tbody>{r.map((rr,i)=><tr key={i}>{rr.map((c,j)=><td key={j} style={{padding:'8px 12px',borderBottom:'1px solid var(--border)',color:'var(--text-secondary)'}}>{c}</td>)}</tr>)}</tbody></table>}
function Code({children}:{children:string}){return <pre style={{background:'#0f172a',color:'#e2e8f0',borderRadius:8,padding:16,fontSize:13,lineHeight:1.6,overflowX:'auto',whiteSpace:'pre-wrap',wordBreak:'break-word',margin:0}}><code>{children}</code></pre>}
