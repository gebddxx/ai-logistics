import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'

export default function AgentToolsOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e
  return (<div className={styles.page}>
    <div className={styles.head}><h2 className={styles.title}>🤖 {L('AI Agents Directory','AI 智能体目录','AI 智能體目錄')}</h2><p className={styles.subtitle}>{L('Platforms · Autonomous · Coding · Enterprise · Multi-Agent · Vertical','对话平台 · 自主执行 · 编程 · 企业 · 多Agent · 垂直领域','對話平台 · 自主執行 · 程式設計 · 企業 · 多Agent · 垂直領域')}</p></div>
    <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#6366f1" />
  </div>)
}

const links: ToolLink[] = [
  // 对话平台
  {name:'ChatGPT',url:'https://chat.openai.com/',desc:{en:'OpenAI · GPT-4.1 · tasks · web browsing',zh:'OpenAI · GPT-4.1 · 定时任务'},cat:'对话平台',icon:'⚫'},
  {name:'Claude',url:'https://claude.ai/',desc:{en:'Anthropic · 200K context · Computer Use',zh:'Anthropic · 200K上下文'},cat:'对话平台',icon:'🟠'},
  {name:'Gemini',url:'https://gemini.google.com/',desc:{en:'Google · 1M context · Deep Research',zh:'谷歌 · 100万上下文'},cat:'对话平台',icon:'🔵'},
  {name:'DeepSeek',url:'https://chat.deepseek.com/',desc:{en:'DeepThink R1 · 1M ctx · cost-effective',zh:'DeepThink推理 · 高性价比'},cat:'对话平台',icon:'🐋'},
  {name:'Kimi',url:'https://kimi.moonshot.cn/',desc:{en:'Moonshot · 2M Chinese chars',zh:'月之暗面 · 200万字中文'},cat:'对话平台',icon:'🌙'},
  {name:'豆包',url:'https://www.doubao.com/',desc:{en:'ByteDance · fast · free · multi-modal',zh:'字节跳动 · 多模态 · 免费'},cat:'对话平台',icon:'👧'},
  {name:'Grok',url:'https://x.com/i/grok',desc:{en:'xAI · real-time X/Twitter data',zh:'马斯克xAI · 实时X数据'},cat:'对话平台',icon:'❌'},
  // 自主执行
  {name:'Manus',url:'https://manus.im/',desc:{en:'Prompt → auto execution · multi-step',zh:'提示词→自动执行 · 多步骤'},cat:'自主执行',icon:'🤖'},
  {name:'OpenClaw',url:'https://github.com/openclaw/openclaw',desc:{en:'Open-source · browser ops · file access',zh:'开源 · 浏览器操控 · 文件操作'},cat:'自主执行',icon:'🦞'},
  {name:'AutoGPT',url:'https://github.com/Significant-Gravitas/AutoGPT',desc:{en:'Autonomous agent pioneer · web+files',zh:'自主Agent先驱 · 联网+文件'},cat:'自主执行',icon:'🤖'},
  {name:'AgentGPT',url:'https://agentgpt.reworkd.ai/',desc:{en:'Browser AutoGPT · no-code deploy',zh:'浏览器AutoGPT · 零代码'},cat:'自主执行',icon:'🧠'},
  {name:'SuperAGI',url:'https://superagi.com/',desc:{en:'Open-source · tools marketplace',zh:'开源 · 工具市场'},cat:'自主执行',icon:'🦸'},
  {name:'Devin',url:'https://www.cognition.ai/',desc:{en:'1st AI software engineer agent',zh:'首个AI软件工程师'},cat:'自主执行',icon:'🧑‍💻'},
  // AI编程
  {name:'Cursor Agent',url:'https://cursor.com/',desc:{en:'AI IDE · agent mode · multi-file',zh:'AI IDE · Agent模式'},cat:'AI编程',icon:'🖱️'},
  {name:'Copilot',url:'https://github.com/features/copilot',desc:{en:'GitHub AI · agent chat · code gen',zh:'GitHub AI结对编程'},cat:'AI编程',icon:'🐙'},
  {name:'Claude Code',url:'https://docs.anthropic.com/en/docs/claude-code',desc:{en:'Terminal agent · reads+edits codebase',zh:'终端Agent · 读写代码库'},cat:'AI编程',icon:'💻'},
  {name:'Windsurf',url:'https://codeium.com/windsurf',desc:{en:'AI IDE · Cascade · multi-file flow',zh:'AI IDE · Cascade流式编辑'},cat:'AI编程',icon:'🌊'},
  {name:'Replit Agent',url:'https://replit.com/',desc:{en:'Browser IDE · prototype→deploy',zh:'浏览器IDE · 部署'},cat:'AI编程',icon:'🔄'},
  {name:'Bolt.new',url:'https://bolt.new/',desc:{en:'StackBlitz · prompt→fullstack',zh:'StackBlitz · 全栈应用'},cat:'AI编程',icon:'⚡'},
  {name:'Lovable',url:'https://lovable.dev/',desc:{en:'GPT Engineer · desc→SaaS app',zh:'GPT工程师 · SaaS应用'},cat:'AI编程',icon:'❤️'},
  {name:'v0.dev',url:'https://v0.dev/',desc:{en:'Vercel · text→React UI',zh:'Vercel · React组件'},cat:'AI编程',icon:'🟢'},
  // 企业平台
  {name:'Coze 扣子',url:'https://www.coze.cn/',desc:{en:'ByteDance bot builder · enterprise',zh:'字节零代码Bot搭建'},cat:'企业平台',icon:'🤖'},
  {name:'Dify',url:'https://dify.ai/',desc:{en:'LLM app · RAG+Agent+workflow',zh:'LLM应用 · RAG+Agent'},cat:'企业平台',icon:'🔮'},
  {name:'钉钉 Agent',url:'https://www.dingtalk.com/',desc:{en:'DingTalk AI workspace · agent builder',zh:'钉钉AI工作平台'},cat:'企业平台',icon:'💙'},
  {name:'飞书伙伴',url:'https://www.feishu.cn/',desc:{en:'Feishu · docs+meeting automation',zh:'飞书 · 文档会议自动化'},cat:'企业平台',icon:'🐦'},
  {name:'Salesforce',url:'https://www.salesforce.com/',desc:{en:'Agentforce · CRM AI · 24/7',zh:'CRM AI智能体 · 7×24'},cat:'企业平台',icon:'☁️'},
  {name:'MS Copilot',url:'https://copilot.microsoft.com/',desc:{en:'Office 365 AI · Word/Excel/PPT',zh:'Office 365 · 全办公套件'},cat:'企业平台',icon:'🪟'},
  {name:'Amazon Q',url:'https://aws.amazon.com/q/',desc:{en:'AWS agent · code+infra+BI',zh:'AWS · 代码+基础设施'},cat:'企业平台',icon:'☁️'},
  // 多Agent框架
  {name:'CrewAI',url:'https://www.crewai.com/',desc:{en:'Role-based multi-agent orchestration',zh:'角色化多Agent编排'},cat:'多Agent',icon:'👥'},
  {name:'LangGraph',url:'https://www.langchain.com/langgraph',desc:{en:'LangChain · stateful workflow graph',zh:'LangChain · 状态工作流图'},cat:'多Agent',icon:'🦜'},
  {name:'AutoGen',url:'https://microsoft.github.io/autogen/',desc:{en:'Microsoft · multi-agent conversation',zh:'微软 · 多Agent对话框架'},cat:'多Agent',icon:'🪟'},
  {name:'MetaGPT',url:'https://github.com/geekan/MetaGPT',desc:{en:'Software company simulation agents',zh:'模拟软件公司 · 角色协作'},cat:'多Agent',icon:'🏢'},
  {name:'Swarm',url:'https://github.com/openai/swarm',desc:{en:'OpenAI · lightweight orchestration',zh:'OpenAI · 轻量多Agent编排'},cat:'多Agent',icon:'🕸️'},
  {name:'n8n',url:'https://n8n.io/',desc:{en:'Workflow automation · AI nodes',zh:'工作流自动化 · AI节点'},cat:'多Agent',icon:'⚡'},
  // 垂直领域
  {name:'Perplexity',url:'https://www.perplexity.ai/',desc:{en:'AI search agent · real-time citations',zh:'AI搜索 · 实时引用'},cat:'垂直领域',icon:'🔍'},
  {name:'Harvey AI',url:'https://www.harvey.ai/',desc:{en:'Legal agent · contract review',zh:'法律 · 合同审查'},cat:'垂直领域',icon:'⚖️'},
  {name:'Adept',url:'https://www.adept.ai/',desc:{en:'Operate any software interface',zh:'操控任意软件界面'},cat:'垂直领域',icon:'🖥️'},
  {name:'NVIDIA Agent',url:'https://www.nvidia.com/',desc:{en:'Enterprise-grade · agent framework',zh:'企业级 · Agent框架'},cat:'垂直领域',icon:'🟢'},
]
