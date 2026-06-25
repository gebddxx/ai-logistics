import { useT } from '../contexts/LanguageContext';import styles from './Page.module.css'
export default function CreativeAudio(){const{lang}=useT();const L=(e:string,z:string,t:string)=>lang==='zh-CN'?z:lang==='zh-TW'?t:e
return(<div className={styles.page}><div className={styles.head}><h2 className={styles.title}>🎵 {L('AI Audio & Music','AI 音频音乐','AI 音頻音樂')}</h2><p className={styles.subtitle}>{L('Music generation, TTS, voice cloning, podcast production','音乐生成、语音合成、声音克隆、播客制作','音樂生成、語音合成、聲音克隆、播客製作')}</p></div><div className={styles.cases}>
<C t={L('🛠 Tools','🛠 工具','🛠 工具')}><T h={['Tool','Category','Highlight']} r={[
['Suno / Udio','Music Gen',L('Full songs from text prompt','一句话生成完整歌曲','一句話生成完整歌曲')],
['ElevenLabs','TTS / Voice Clone',L('Most natural voice, 29 languages','最自然的AI语音，29种语言','最自然的AI語音，29種語言')],
['AIVA','Composition',L('Classical/ambient composition, sheet music','古典/氛围音乐，可导出乐谱','古典/氛圍音樂，可導出樂譜')],
['Murf.ai','Voiceover',L('Professional voiceovers for videos/presentations','专业配音，适合视频/演示','專業配音，適合影片/演示')],
['Adobe Podcast','Podcast',L('AI noise reduction, mic enhancement, transcription','AI降噪、麦克风增强、转写','AI降噪、麥克風增強、轉寫')],
['Riffusion','Real-time Music',L('Generate music in real-time from text','实时文字生成音乐','即時文字生成音樂')],
]} /></C>
<C t={L('💡 Use Cases','💡 应用场景','💡 應用場景')}><Code>{`# 播客制作
1. ChatGPT写脚本 → 2. ElevenLabs生成AI主播语音
→ 3. Adobe Podcast降噪处理 → 4. 导出MP3发布

# 视频配音
ElevenLabs: 选择语音→粘贴文案→调整语速/情感→生成配音→导入视频

# 背景音乐
Suno: 输入"轻快钢琴,适合Vlog背景,BPM120,3分钟"
→ 生成3首 → 选最满意的 → 下载WAV

# 有声书
1. 上传电子书文本 → 2. ElevenLabs/Murf 逐章生成
→ 3. 调整语速和停顿 → 4. 导出为章节MP3`}</Code></C>
</div></div>)}
function C({t,children}:{t:string;children:React.ReactNode}){return <div style={{background:'var(--bg-card)',borderRadius:12,padding:22,boxShadow:'var(--shadow)',marginBottom:16}}><h3 style={{marginBottom:12,color:'var(--text)',fontSize:16}}>{t}</h3>{children}</div>}
function T({h,r}:{h:string[];r:string[][]}){return <table style={{width:'100%',borderCollapse:'collapse',fontSize:13}}><thead><tr>{h.map(x=><th key={x} style={{padding:'8px 12px',textAlign:'left',borderBottom:'2px solid var(--border)',color:'var(--text)',fontWeight:600}}>{x}</th>)}</tr></thead><tbody>{r.map((rr,i)=><tr key={i}>{rr.map((c,j)=><td key={j} style={{padding:'8px 12px',borderBottom:'1px solid var(--border)',color:'var(--text-secondary)'}}>{c}</td>)}</tr>)}</tbody></table>}
function Code({children}:{children:string}){return <pre style={{background:'#0f172a',color:'#e2e8f0',borderRadius:8,padding:16,fontSize:13,lineHeight:1.6,overflowX:'auto',whiteSpace:'pre-wrap',wordBreak:'break-word',margin:0}}><code>{children}</code></pre>}
