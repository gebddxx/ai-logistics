import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'

export default function AgentToolsOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e
  return (<div className={styles.page}>
    <div className={styles.head}><h2 className={styles.title}>🤖 {L('AI Agents Directory','智能体目录','智能體目錄')}</h2><p className={styles.subtitle}>{L('42 AI agents — chat platforms, autonomous exec, coding, enterprise, frameworks','42个AI智能体——对话平台/自主执行/编程/企业/多Agent框架','42個AI智能體——對話平台/自主執行/程式設計/企業/多Agent框架')}</p></div>
    <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#6366f1" />
  </div>)
}

const links: ToolLink[] = [
  // 对话平台
  {name:'ChatGPT',url:'https://chat.openai.com/',desc:{en:'OpenAI, GPT-4.1, scheduled tasks + web browsing',zh:'OpenAI GPT-4.1,定时任务+联网搜索'},cat:'对话平台',icon:'⚫'},
  {name:'Claude',url:'https://claude.ai/',desc:{en:'Anthropic, 200K context, Computer Use agent',zh:'Anthropic,200K上下文,Computer Use智能体'},cat:'对话平台',icon:'🟠'},
  {name:'Gemini',url:'https://gemini.google.com/',desc:{en:'Google, 1M context, Deep Research agent',zh:'谷歌,100万上下文,深度研究智能体'},cat:'对话平台',icon:'🔵'},
  {name:'DeepSeek',url:'https://chat.deepseek.com/',desc:{en:'1M context, DeepThink R1, cost-effective agent',zh:'百万上下文,DeepThink深度推理智能体'},cat:'对话平台',icon:'🐋'},
  {name:'Kimi',url:'https://kimi.moonshot.cn/',desc:{en:'Moonshot AI, 2M Chinese chars, long-form agent',zh:'月之暗面,200万字中文,长文本智能体'},cat:'对话平台',icon:'🌙'},
  {name:'豆包',url:'https://www.doubao.com/',desc:{en:'ByteDance, fast + free, multi-modal agent',zh:'字节跳动,速度快免费,多模态智能体'},cat:'对话平台',icon:'👧'},
  {name:'Grok',url:'https://x.com/i/grok',desc:{en:'xAI, real-time X data, witty personality agent',zh:'马斯克xAI,实时X平台数据智能体'},cat:'对话平台',icon:'❌'},
  // 自主执行Agent
  {name:'Manus',url:'https://manus.im/',desc:{en:'Autonomous agent, multi-step task execution',zh:'自主智能体,多步骤任务自动执行'},cat:'自主执行',icon:'🤖'},
  {name:'OpenClaw 龙虾',url:'https://github.com/openclaw/openclaw',desc:{en:'Open-source AI agent, browser+file system ops',zh:'开源AI智能体,浏览器+文件系统操控'},cat:'自主执行',icon:'🦞'},
  {name:'AutoGPT',url:'https://github.com/Significant-Gravitas/AutoGPT',desc:{en:'Pioneer autonomous agent, internet+file access',zh:'自主智能体先驱,联网搜索+文件操作'},cat:'自主执行',icon:'🤖'},
  {name:'AgentGPT',url:'https://agentgpt.reworkd.ai/',desc:{en:'Browser-based AutoGPT, no-code agent deploy',zh:'浏览器端自主Agent,无需代码部署'},cat:'自主执行',icon:'🧠'},
  {name:'SuperAGI',url:'https://superagi.com/',desc:{en:'Open-source autonomous agent, tool marketplace',zh:'开源自主智能体平台,工具市场'},cat:'自主执行',icon:'🦸'},
  {name:'BabyAGI',url:'https://github.com/yoheinakajima/babyagi',desc:{en:'Minimal autonomous task-driven AI agent',zh:'极简自主任务驱动AI智能体,仅百行代码'},cat:'自主执行',icon:'👶'},
  {name:'Cognition AI',url:'https://www.cognition.ai/',desc:{en:'Devin, first AI software engineer agent',zh:'Devin,首个AI软件工程师智能体'},cat:'自主执行',icon:'🧑‍💻'},
  // AI编程Agent
  {name:'Cursor Agent',url:'https://cursor.com/',desc:{en:'AI-first IDE with agent mode, multi-file edits',zh:'AI编程IDE,Agent模式,多文件自动编辑'},cat:'AI编程',icon:'🖱️'},
  {name:'GitHub Copilot',url:'https://github.com/features/copilot',desc:{en:'GitHub AI pair programmer, agent chat mode',zh:'GitHub AI结对编程,Agent对话模式'},cat:'AI编程',icon:'🐙'},
  {name:'Claude Code',url:'https://docs.anthropic.com/en/docs/claude-code',desc:{en:'Terminal AI agent, reads+edits codebase',zh:'终端AI智能体,读写编辑整个代码库'},cat:'AI编程',icon:'💻'},
  {name:'Windsurf Cascade',url:'https://codeium.com/windsurf',desc:{en:'AI IDE, Cascade agent, multi-file flow editing',zh:'AI IDE,Cascade智能体流式多文件编辑'},cat:'AI编程',icon:'🌊'},
  {name:'Replit Agent',url:'https://replit.com/',desc:{en:'Browser IDE + AI agent, prototype→deploy',zh:'浏览器IDE+AI Agent,原型→一键部署'},cat:'AI编程',icon:'🔄'},
  {name:'Bolt.new',url:'https://bolt.new/',desc:{en:'StackBlitz, prompt→fullstack app, browser agent',zh:'StackBlitz智能体,提示词→全栈应用'},cat:'AI编程',icon:'⚡'},
  {name:'Lovable',url:'https://lovable.dev/',desc:{en:'GPT Engineer agent, description→SaaS app',zh:'GPT工程师智能体,描述→完整SaaS应用'},cat:'AI编程',icon:'❤️'},
  {name:'v0.dev',url:'https://v0.dev/',desc:{en:'Vercel AI agent, text→React UI components',zh:'Vercel AI智能体,文字→React UI组件'},cat:'AI编程',icon:'🟢'},
  // 企业Agent平台
  {name:'Coze 扣子',url:'https://www.coze.cn/',desc:{en:'ByteDance, zero-code AI bot builder, enterprise',zh:'字节零代码AI Bot搭建,企业级智能体'},cat:'企业平台',icon:'🤖'},
  {name:'Dify',url:'https://dify.ai/',desc:{en:'Open-source LLM app, RAG+Agent+workflow',zh:'开源LLM应用,RAG+Agent+工作流'},cat:'企业平台',icon:'🔮'},
  {name:'钉钉AI Agent',url:'https://www.dingtalk.com/',desc:{en:'DingTalk AI workspace, enterprise agent builder',zh:'钉钉AI工作平台,企业智能体搭建'},cat:'企业平台',icon:'💙'},
  {name:'飞书智能伙伴',url:'https://www.feishu.cn/',desc:{en:'Feishu AI agent, docs+meeting+automation',zh:'飞书AI智能体,文档/会议/审批自动化'},cat:'企业平台',icon:'🐦'},
  {name:'Salesforce Agentforce',url:'https://www.salesforce.com/',desc:{en:'Enterprise CRM AI agents, 7×24h automation',zh:'企业CRM AI智能体,7×24h自动化服务'},cat:'企业平台',icon:'☁️'},
  {name:'Microsoft Copilot',url:'https://copilot.microsoft.com/',desc:{en:'Office 365 AI agent, Word/Excel/PPT/Teams',zh:'Office 365 AI智能体,全办公套件集成'},cat:'企业平台',icon:'🪟'},
  {name:'Amazon Q',url:'https://aws.amazon.com/q/',desc:{en:'AWS AI agent, code+infra+business intelligence',zh:'AWS AI智能体,代码+基础设施+商业智能'},cat:'企业平台',icon:'☁️'},
  // 多Agent框架
  {name:'CrewAI',url:'https://www.crewai.com/',desc:{en:'Multi-agent orchestration, role-based AI team',zh:'多Agent编排,角色化AI团队协作'},cat:'多Agent框架',icon:'👥'},
  {name:'LangGraph',url:'https://www.langchain.com/langgraph',desc:{en:'LangChain, stateful multi-agent workflow graph',zh:'LangChain出品,有状态多Agent工作流图'},cat:'多Agent框架',icon:'🦜'},
  {name:'AutoGen',url:'https://microsoft.github.io/autogen/',desc:{en:'Microsoft, multi-agent conversation framework',zh:'微软出品,多Agent对话协作框架'},cat:'多Agent框架',icon:'🪟'},
  {name:'MetaGPT',url:'https://github.com/geekan/MetaGPT',desc:{en:'Multi-agent software company simulation',zh:'多Agent模拟软件公司,角色扮演协作'},cat:'多Agent框架',icon:'🏢'},
  {name:'OpenAI Swarm',url:'https://github.com/openai/swarm',desc:{en:'Lightweight multi-agent orchestration, OpenAI',zh:'轻量多Agent编排,OpenAI实验性框架'},cat:'多Agent框架',icon:'🕸️'},
  {name:'n8n',url:'https://n8n.io/',desc:{en:'Open-source workflow, AI agent nodes, self-host',zh:'开源工作流自动化,AI Agent节点,自托管'},cat:'多Agent框架',icon:'⚡'},
  // 垂直专业Agent
  {name:'Perplexity',url:'https://www.perplexity.ai/',desc:{en:'AI search agent, real-time research + citations',zh:'AI搜索智能体,实时研究+来源引用'},cat:'垂直专业',icon:'🔍'},
  {name:'Harvey AI',url:'https://www.harvey.ai/',desc:{en:'Legal AI agent, contract review + research',zh:'法律AI智能体,合同审查+法律研究'},cat:'垂直专业',icon:'⚖️'},
  {name:'Adept ACT-1',url:'https://www.adept.ai/',desc:{en:'AI agent trained to operate any software UI',zh:'AI智能体,训练用于操控任意软件界面'},cat:'垂直专业',icon:'🖥️'},
  {name:'NVIDIA Agent',url:'https://www.nvidia.com/en-us/ai-data-science/agent/',desc:{en:'NVIDIA AI agent framework, enterprise-grade',zh:'NVIDIA AI智能体框架,企业级部署'},cat:'垂直专业',icon:'🟢'},
]
