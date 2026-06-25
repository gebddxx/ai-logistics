import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'

const links: ToolLink[] = [
  { name:'ChatGPT',url:'https://chat.openai.com/',desc:'GPT-4.1, DALL·E, plugins, GPTs, Code Interpreter',cat:'llm',icon:'⚫'},
  { name:'Claude',url:'https://claude.ai/',desc:'Anthropic, 200K context, Artifacts, Projects',cat:'llm',icon:'🟠'},
  { name:'Gemini',url:'https://gemini.google.com/',desc:'Google AI, 1M context, Google apps integration',cat:'llm',icon:'🔵'},
  { name:'DeepSeek',url:'https://chat.deepseek.com/',desc:'Whale logo, 1M context, extremely affordable',cat:'llm',icon:'🐋'},
  { name:'Kimi',url:'https://kimi.moonshot.cn/',desc:'Moonshot AI, 2M Chinese chars, long-text king',cat:'llm',icon:'🌙'},
  { name:'通义千问',url:'https://tongyi.aliyun.com/',desc:'Alibaba AI, strong Chinese, multimodal',cat:'llm',icon:'☁️'},
  { name:'文心一言',url:'https://yiyan.baidu.com/',desc:'Baidu Ernie Bot, deep Chinese knowledge',cat:'llm',icon:'💎'},
  { name:'豆包',url:'https://www.doubao.com/',desc:'ByteDance AI, girl mascot, fast & free',cat:'llm',icon:'👧'},
  { name:'腾讯元宝',url:'https://yuanbao.tencent.com/',desc:'Tencent AI, WeChat integration',cat:'llm',icon:'💬'},
  { name:'讯飞星火',url:'https://xinghuo.xfyun.cn/',desc:'iFlytek, strong voice + text, education focus',cat:'llm',icon:'🔥'},
  { name:'360智脑',url:'https://ai.360.com/',desc:'360 AI, integrated browser & search',cat:'llm',icon:'🛡️'},
  { name:'Poe',url:'https://poe.com/',desc:'Quora, access GPT-4/Claude/Gemini in one app',cat:'llm',icon:'📬'},
  { name:'HuggingChat',url:'https://huggingface.co/chat/',desc:'Free open-source chat, community models',cat:'llm',icon:'🤗'},
  { name:'Perplexity',url:'https://www.perplexity.ai/',desc:'Search + chat combo, real-time citations',cat:'llm',icon:'🔍'},
  { name:'Grok',url:'https://x.com/i/grok',desc:'xAI, real-time X data, witty personality',cat:'llm',icon:'❌'},
  { name:'Mistral Le Chat',url:'https://chat.mistral.ai/',desc:'European LLM, fast, multilingual',cat:'llm',icon:'🌬️'},
  { name:'Character.AI',url:'https://character.ai/',desc:'Create & chat with AI personas',cat:'role',icon:'🎭'},
  { name:'Replika',url:'https://replika.ai/',desc:'AI companion for emotional support',cat:'role',icon:'💝'},
  { name:'Pi',url:'https://pi.ai/',desc:'Inflection AI, empathetic conversational AI',cat:'role',icon:'π'},
  { name:'Candy.ai',url:'https://candy.ai/',desc:'AI girlfriend/companion platform',cat:'role',icon:'🍬'},
  { name:'Talkie',url:'https://www.talkie-ai.com/',desc:'Multi-character AI chat, voice-enabled',cat:'role',icon:'🗣️'},
  { name:'Chub.ai',url:'https://www.chub.ai/',desc:'Character cards, community-created AI personas',cat:'role',icon:'📚'},
  { name:'OpenRouter',url:'https://openrouter.ai/',desc:'Unified API for 200+ models, price comparison',cat:'compare',icon:'🚦'},
  { name:'LMSYS Arena',url:'https://chat.lmsys.org/',desc:'Blind test LLMs, Elo leaderboard',cat:'compare',icon:'⚔️'},
  { name:'Artificial Analysis',url:'https://artificialanalysis.ai/',desc:'LLM quality, speed & price benchmarks',cat:'compare',icon:'📊'},
  { name:'HuggingFace Leaderboard',url:'https://huggingface.co/spaces/lmsys/chatbot-arena-leaderboard',desc:'Open LLM rankings, community-voted',cat:'compare',icon:'🏆'},
]

export default function ChatOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e
  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h2 className={styles.title}>💬 {L('AI Chat & Assistants','AI 对话助手','AI 對話助手')}</h2>
        <p className={styles.subtitle}>{L('26 LLM platforms, role-play bots & model comparison tools','26个大模型平台、角色扮演和模型对比工具','26個大模型平台、角色扮演和模型對比工具')}</p>
      </div>
      <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#22c55e" catNames={{
        llm: L('LLM Platforms','大模型平台','大模型平台'),
        role: L('Character & Role-Play','角色扮演','角色扮演'),
        compare: L('Model Comparison','模型对比','模型對比'),
      }} />
    </div>
  )
}
