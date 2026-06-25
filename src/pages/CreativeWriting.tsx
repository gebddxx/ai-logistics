import { useT } from '../contexts/LanguageContext'
import styles from './Page.module.css'

export default function CreativeWriting() {
  const { lang } = useT()
  const L = (en:string,zh:string,tw:string)=>lang==='zh-CN'?zh:lang==='zh-TW'?tw:en
  return (
    <div className={styles.page}>
      <div className={styles.head}><h2 className={styles.title}>✍️ {L('AI Writing','AI 写作','AI 寫作')}</h2><p className={styles.subtitle}>{L('Generate, polish, translate — AI as your writing partner','生成、润色、翻译 — AI 是你的写作搭档','生成、潤色、翻譯 — AI 是你的寫作搭檔')}</p></div>
      <div className={styles.cases}>
        <Card title={L('🛠 Tool Landscape','🛠 工具一览','🛠 工具一覽')}>
          <Tbl headers={['Tool','Best For','Key Feature']} rows={[
            ['Claude / ChatGPT',L('Deep writing & editing','深度写作编辑','深度寫作編輯'),L('Long-form thinking, iterative refinement','长文思考、反复打磨','長文思考、反復打磨')],
            ['Jasper AI',L('Marketing copy','营销文案','營銷文案'),L('Brand voice templates, SEO optimization','品牌语调模板、SEO优化','品牌語調模板、SEO優化')],
            ['Notion AI',L('Docs & notes','文档笔记','文檔筆記'),L('Integrated into workspace, one-click generate','工作区内一键生成','工作區內一鍵生成')],
            ['Grammarly',L('English polishing','英文润色','英文潤色'),L('Grammar, tone, clarity suggestions','语法、语调、清晰度建议','語法、語調、清晰度建議')],
            ['DeepL Write',L('Multilingual polish','多语种润色','多語種潤色'),L('Style and phrasing improvement in 6 languages','6种语言的风格措辞优化','6種語言的風格措辭優化')],
            ['Copy.ai',L('Social media & ads','社媒广告文案','社媒廣告文案'),L('90+ templates for content types','90+模板覆盖各类内容','90+模板覆蓋各類內容')],
          ]} />
        </Card>
        <Card title={L('💡 Prompt Patterns','💡 Prompt 模式','💡 Prompt 模式')}>
          <Code>{`# 1. Role + Context + Format
"你是一个资深科技编辑。我正在写一篇面向普通读者的AI科普文章。
请用通俗易懂的语言写一个300字的开头，包含一个让人好奇的问题。"

# 2. Example-Driven
"参考以下文案风格：[粘贴示例]，用同样的语气和节奏写一段产品介绍。"

# 3. Chain of Thought Writing
"先列出这篇文章的5个核心论点 → 对每个论点展开一段论证→ 写一个有力的结尾总结。"

# 4. Iterative Refinement
"把这段文字改得更简洁，删掉所有多余的修饰词，保持原意不变。"
"现在把语气调得更正式/更轻松/更有力量感。"
"给这段文案加3个不同风格的标题备选。"

# 5. Multi-Format Conversion
"把这篇长文章转成：1)一条Twitter thread; 2)一段3分钟的口播稿; 3)一个信息图大纲。"`}</Code>
        </Card>
        <Card title={L('🎯 Use Cases','🎯 应用场景','🎯 應用場景')}>
          <Code>{`# 公众号/博客文章
Prompt: "我是一名[身份]。我想写一篇关于[主题]的文章。
目标读者是[人群]。请帮我：1)列出大纲 2)写开头 3)每段核心内容"

# 短视频脚本
Prompt: "写一个60秒短视频脚本。主题：[XXX]。
结构：3秒钩子→30秒核心内容→15秒案例→12秒总结+关注引导。
语气：[轻松幽默/专业严肃/温暖治愈]"

# 产品文案
Prompt: "为[产品名]写3版不同风格的描述：
A版) 专业商务风  B版) 年轻潮流风  C版) 温情故事风"

# 邮件/通知
Prompt: "帮我写一封邮件给[收件人]，主题是[XXX]。
语气：[正式/半正式/轻松]。需要包含：1... 2... 3..."`}</Code>
        </Card>
      </div>
    </div>
  )
}

function Card({title,children}:{title:string;children:React.ReactNode}){return <div style={{background:'var(--bg-card)',borderRadius:12,padding:22,boxShadow:'var(--shadow)',marginBottom:16}}><h3 style={{marginBottom:12,color:'var(--text)',fontSize:16}}>{title}</h3>{children}</div>}
function Tbl({headers,rows}:{headers:string[];rows:string[][]}){return <table style={{width:'100%',borderCollapse:'collapse',fontSize:13}}><thead><tr>{headers.map(h=><th key={h} style={{padding:'8px 12px',textAlign:'left',borderBottom:'2px solid var(--border)',color:'var(--text)',fontWeight:600}}>{h}</th>)}</tr></thead><tbody>{rows.map((r,i)=><tr key={i}>{r.map((c,j)=><td key={j} style={{padding:'8px 12px',borderBottom:'1px solid var(--border)',color:'var(--text-secondary)'}}>{c}</td>)}</tr>)}</tbody></table>}
function Code({children}:{children:string}){return <pre style={{background:'#0f172a',color:'#e2e8f0',borderRadius:8,padding:16,fontSize:13,lineHeight:1.6,overflowX:'auto',whiteSpace:'pre-wrap',wordBreak:'break-word',margin:0}}><code>{children}</code></pre>}
