import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'

const links: ToolLink[] = [
  { name:'Perplexity AI',url:'https://www.perplexity.ai/',desc:'AI answer engine with real-time citations',cat:'search',icon:'🔍'},
  { name:'Google Gemini DS',url:'https://gemini.google.com/',desc:'Google AI with Deep Research mode',cat:'search',icon:'🔵'},
  { name:'Microsoft Copilot',url:'https://copilot.microsoft.com/',desc:'Bing AI, GPT-4 Turbo, free',cat:'search',icon:'🟦'},
  { name:'Phind',url:'https://www.phind.com/',desc:'Developer-focused AI search engine',cat:'search',icon:'🟠'},
  { name:'You.com',url:'https://you.com/',desc:'Privacy-first AI search with apps',cat:'search',icon:'💜'},
  { name:'Kagi',url:'https://kagi.com/',desc:'Ad-free paid search, AI summaries',cat:'search',icon:'🟡'},
  { name:'Brave Search',url:'https://search.brave.com/',desc:'Privacy search + AI summarizer',cat:'search',icon:'🦁'},
  { name:'Andi',url:'https://andisearch.com/',desc:'Visual AI search, no ads',cat:'search',icon:'🤖'},
  { name:'Exa',url:'https://exa.ai/',desc:'AI search API, semantic search',cat:'search',icon:'📡'},
  { name:'秘塔AI',url:'https://metaso.cn/',desc:'Chinese AI search, multi-step reasoning',cat:'search',icon:'🗼'},
  { name:'天工AI',url:'https://www.tiangong.cn/',desc:'AI search, multimodal',cat:'search',icon:'☁️'},
  { name:'Consensus',url:'https://consensus.app/',desc:'AI search over 200M+ research papers',cat:'research',icon:'📜'},
  { name:'Elicit',url:'https://elicit.com/',desc:'AI research assistant, find & extract data',cat:'research',icon:'📊'},
  { name:'Semantic Scholar',url:'https://www.semanticscholar.org/',desc:'Free AI scientific literature search',cat:'research',icon:'🎓'},
  { name:'Scite.ai',url:'https://scite.ai/',desc:'Smart citations: see if papers support/contradict',cat:'research',icon:'✅'},
  { name:'Research Rabbit',url:'https://www.researchrabbit.ai/',desc:'Citation-based literature mapping',cat:'research',icon:'🐰'},
  { name:'Connected Papers',url:'https://www.connectedpapers.com/',desc:'Visual graph of related academic papers',cat:'research',icon:'🕸️'},
  { name:'Explainpaper',url:'https://www.explainpaper.com/',desc:'Upload PDF → AI explains confusing parts',cat:'research',icon:'📝'},
  { name:'Scholarcy',url:'https://www.scholarcy.com/',desc:'Auto-summarize papers into flashcards',cat:'research',icon:'📋'},
  { name:'Paper Digest',url:'https://www.paperdigest.org/',desc:'AI summaries of academic papers',cat:'research',icon:'📰'},
  { name:'Feedly AI',url:'https://feedly.com/ai/',desc:'AI-curated news, track topics & trends',cat:'discovery',icon:'📰'},
  { name:'Glasp',url:'https://glasp.co/',desc:'Social highlighting + AI summary',cat:'discovery',icon:'💡'},
  { name:'Raindrop.io',url:'https://raindrop.io/',desc:'Smart bookmark manager with AI tagging',cat:'discovery',icon:'💧'},
  { name:'Mem.ai',url:'https://mem.ai/',desc:'AI-organized notes, auto-collection',cat:'discovery',icon:'🧠'},
  { name:'Pocket',url:'https://getpocket.com/',desc:'Save articles, AI-recommended reads',cat:'discovery',icon:'📌'},
  { name:'Inoreader',url:'https://www.inoreader.com/',desc:'AI RSS reader, monitor keywords',cat:'discovery',icon:'📡'},
  { name:'Omnivore',url:'https://omnivore.app/',desc:'Open-source read-later with AI highlighting',cat:'discovery',icon:'🍽️'},
  { name:'Matter',url:'https://hq.getmatter.com/',desc:'Read-later app, AI-powered newsletter',cat:'discovery',icon:'📖'},
]

export default function SearchOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e
  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h2 className={styles.title}>🔍 {L('AI Search & Discovery','AI 搜索发现','AI 搜索發現')}</h2>
        <p className={styles.subtitle}>{L('28 AI-powered search, research & discovery tools','28款AI搜索引擎、研究工具和内容发现平台','28款AI搜尋引擎、研究工具和內容發現平台')}</p>
      </div>
      <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#0ea5e9" catNames={{
        search: L('AI Search Engines','AI 搜索引擎','AI 搜尋引擎'),
        research: L('AI Research Tools','AI 研究工具','AI 研究工具'),
        discovery: L('Content Discovery','内容发现','內容發現'),
      }} />
    </div>
  )
}
