import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'

export default function AgentToolsOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e
  return (<div className={styles.page}>
    <div className={styles.head}><h2 className={styles.title}>🤖 {L('AI Models','主流大模型','主流大模型')}</h2><p className={styles.subtitle}>{L('Major LLMs & AI models worldwide','国内外主流大语言模型一览','國內外主流大語言模型一覽')}</p></div>
    <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#6366f1" />
  </div>)
}

const links: ToolLink[] = [
  {name:'GPT-4.1 / ChatGPT',url:'https://chat.openai.com/',desc:{en:'OpenAI · multimodal · top general capability',zh:'OpenAI · 多模态 · 综合能力最强'},cat:'海外',icon:'⚫'},
  {name:'Claude 4',url:'https://claude.ai/',desc:{en:'Anthropic · 200K context · deep reasoning',zh:'Anthropic · 200K上下文 · 深度推理'},cat:'海外',icon:'🟠'},
  {name:'Gemini 2.5',url:'https://gemini.google.com/',desc:{en:'Google · 1M context · multi-modal native',zh:'谷歌 · 100万上下文 · 原生多模态'},cat:'海外',icon:'🔵'},
  {name:'Grok 3',url:'https://x.com/i/grok',desc:{en:'xAI (Musk) · real-time X data · witty',zh:'马斯克xAI · 实时X数据 · 幽默风格'},cat:'海外',icon:'❌'},
  {name:'Llama 4',url:'https://www.llama.com/',desc:{en:'Meta · open-source · community ecosystem',zh:'Meta · 开源 · 社区生态最丰富'},cat:'海外',icon:'🦙'},
  {name:'Mistral',url:'https://mistral.ai/',desc:{en:'France · efficient · multilingual · open',zh:'法国 · 轻量高效 · 多语言 · 开源'},cat:'海外',icon:'🌬️'},
  {name:'DeepSeek V3/R1',url:'https://chat.deepseek.com/',desc:{en:'深度求索 · 1M ctx · DeepThink · 性价比之王',zh:'深度求索 · 1M上下文 · 推理强 · 极致性价比'},cat:'国产',icon:'🐋'},
  {name:'Qwen 通义千问',url:'https://tongyi.aliyun.com/',desc:{en:'Alibaba · strong Chinese · multi-modal',zh:'阿里 · 中文强 · 多模态 · 开源家族'},cat:'国产',icon:'☁️'},
  {name:'豆包 / 字节',url:'https://www.doubao.com/',desc:{en:'ByteDance · fast · free · massive user base',zh:'字节跳动 · 速度快 · 免费 · 亿级用户'},cat:'国产',icon:'👧'},
  {name:'Kimi',url:'https://kimi.moonshot.cn/',desc:{en:'Moonshot · 2M Chinese chars · long-doc king',zh:'月之暗面 · 200万字 · 长文档之王'},cat:'国产',icon:'🌙'},
  {name:'文心一言 / ERNIE',url:'https://yiyan.baidu.com/',desc:{en:'Baidu · deep Chinese knowledge · search eco',zh:'百度 · 中文知识深厚 · 搜索生态'},cat:'国产',icon:'💎'},
  {name:'GLM / 智谱清言',url:'https://chatglm.cn/',desc:{en:'Zhipu AI (Tsinghua) · GLM series · code strong',zh:'清华智谱 · GLM系列 · 编程能力强'},cat:'国产',icon:'🧠'},
  {name:'混元 / 腾讯元宝',url:'https://yuanbao.tencent.com/',desc:{en:'Tencent · WeChat ecosystem · multi-modal',zh:'腾讯 · 微信生态集成 · 多模态'},cat:'国产',icon:'💬'},
  {name:'星火 / 讯飞',url:'https://xinghuo.xfyun.cn/',desc:{en:'iFlytek · voice+text · education specialist',zh:'科大讯飞 · 语音+文本 · 教育专长'},cat:'国产',icon:'🔥'},
  {name:'百川',url:'https://www.baichuan-ai.com/',desc:{en:'Baichuan · medical/legal vertical models',zh:'百川智能 · 医疗/法律垂直模型'},cat:'国产',icon:'💧'},
  {name:'MiniMax / 海螺',url:'https://hailuoai.com/',desc:{en:'MiniMax · voice+music generation strong',zh:'MiniMax · 语音合成+音乐生成突出'},cat:'国产',icon:'🐚'},
  {name:'Step / 阶跃星辰',url:'https://www.stepfun.com/',desc:{en:'StepFun · multi-modal · trillion params',zh:'阶跃星辰 · 多模态 · 万亿参数'},cat:'国产',icon:'⭐'},
]
