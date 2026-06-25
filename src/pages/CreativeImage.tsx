import { useT } from '../contexts/LanguageContext'
import styles from './Page.module.css'
export default function CreativeImage() {
  const { lang } = useT()
  const L=(en:string,zh:string,tw:string)=>lang==='zh-CN'?zh:lang==='zh-TW'?tw:en
  return (<div className={styles.page}>
    <div className={styles.head}><h2 className={styles.title}>🖼️ {L('AI Image Generation','AI 绘画生成','AI 繪畫生成')}</h2><p className={styles.subtitle}>{L('Text-to-image, style transfer, creative visual design','文生图、风格迁移、创意视觉设计','文生圖、風格遷移、創意視覺設計')}</p></div>
    <div className={styles.cases}>
      <C t={L('🛠 Tool Comparison','🛠 工具对比','🛠 工具對比')}>
        <T h={['Tool','Type','Strengths','Pricing']} r={[
          ['Midjourney','Discord Bot',L('Artistic quality, aesthetic feel','艺术感最强、审美极佳','藝術感最強、審美極佳'),L('$10-60/mo','$10-60/月','$10-60/月')],
          ['Stable Diffusion','Open Source',L('Full control, local run, plugins','完全可控、本地运行、插件生态','完全可控、本地運行、插件生態'),L('Free','免费','免費')],
          ['DALL·E 3','ChatGPT Built-in',L('Natural language understanding','自然语言理解最强','自然語言理解最強'),L('In ChatGPT Plus','ChatGPT Plus 内含','ChatGPT Plus 內含')],
          ['Adobe Firefly','Web App',L('Commercial-safe, PS integration','版权安全、PS集成','版權安全、PS集成'),L('Free tier + paid','免费+付费','免費+付費')],
          ['Leonardo.ai','Web App',L('Game assets, consistent style','游戏素材、风格一致','遊戲素材、風格一致'),L('Free tier + paid','免费+付费','免費+付費')],
          ['ComfyUI','Desktop',L('Node-based workflow, ultimate control','节点式工作流、终极定制','節點式工作流、終極定制'),L('Free','免费','免費')],
        ]} />
      </C>
      <C t={L('💡 Prompt Writing Tips','💡 提示词技巧','💡 提示詞技巧')}>
        <Code>{`# 高质量 Prompt 公式:
[主体] + [环境/背景] + [风格] + [光线/色彩] + [构图/角度] + [画质参数]

# 示例:
"A futuristic Chinese tea house floating above clouds at sunset,
Ghibli-style art, warm golden light, wide-angle shot,
8K, highly detailed, cinematic lighting --ar 16:9"

# 风格关键词库:
写实: photorealistic, hyperrealistic, 8K, cinematic
艺术: oil painting, watercolor, ink wash, concept art
动漫: anime style, Ghibli, manga, cel-shaded
设计: minimalist, flat design, UI/UX mockup, isometric

# 负面提示词 (Negative Prompt):
"blurry, low quality, distorted face, extra fingers, watermark"`}</Code>
      </C>
      <C t={L('🎯 Use Cases','🎯 应用场景','🎯 應用場景')}>
        <Code>{`# 产品/电商图
Prompt: "[产品] on a clean white marble surface,
soft studio lighting, product photography, commercial,
8K, sharp focus, professional color grading"

# 头像/Avatar
Prompt: "Professional headshot, [gender], [age range],
[clothing style], friendly expression,
clean white background, portrait photography"

# 概念设计
Prompt: "Concept art of [描述], futuristic design,
intricate details, moody atmosphere, digital painting,
ArtStation trending, by [参考艺术家]"`}</Code>
      </C>
    </div>
  </div>)
}
function C({t,children}:{t:string;children:React.ReactNode}){return <div style={{background:'var(--bg-card)',borderRadius:12,padding:22,boxShadow:'var(--shadow)',marginBottom:16}}><h3 style={{marginBottom:12,color:'var(--text)',fontSize:16}}>{t}</h3>{children}</div>}
function T({h,r}:{h:string[];r:string[][]}){return <table style={{width:'100%',borderCollapse:'collapse',fontSize:13}}><thead><tr>{h.map(x=><th key={x} style={{padding:'8px 12px',textAlign:'left',borderBottom:'2px solid var(--border)',color:'var(--text)',fontWeight:600}}>{x}</th>)}</tr></thead><tbody>{r.map((rr,i)=><tr key={i}>{rr.map((c,j)=><td key={j} style={{padding:'8px 12px',borderBottom:'1px solid var(--border)',color:'var(--text-secondary)'}}>{c}</td>)}</tr>)}</tbody></table>}
function Code({children}:{children:string}){return <pre style={{background:'#0f172a',color:'#e2e8f0',borderRadius:8,padding:16,fontSize:13,lineHeight:1.6,overflowX:'auto',whiteSpace:'pre-wrap',wordBreak:'break-word',margin:0}}><code>{children}</code></pre>}
