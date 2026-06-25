import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'

const links: ToolLink[] = [
  { name:'LangChain',url:'https://www.langchain.com/',desc:'Most popular, 700+ integrations, Python/JS',cat:'frameworks',icon:'🦜'},
  { name:'CrewAI',url:'https://crewai.com/',desc:'Role-based multi-agent, simple API',cat:'frameworks',icon:'👥'},
  { name:'AutoGen',url:'https://microsoft.github.io/autogen/',desc:'Microsoft, multi-agent, human-in-loop',cat:'frameworks',icon:'🔄'},
  { name:'Dify',url:'https://dify.ai/',desc:'Visual LLM workflow, RAG, agents, one-click API',cat:'frameworks',icon:'🧩'},
  { name:'Coze',url:'https://www.coze.com/',desc:'ByteDance, publish bots to WeChat/DingTalk/Feishu',cat:'frameworks',icon:'🤖'},
  { name:'n8n',url:'https://n8n.io/',desc:'Self-hosted, 400+ nodes, AI workflow automation',cat:'frameworks',icon:'🔗'},
  { name:'Flowise',url:'https://flowiseai.com/',desc:'Drag-and-drop LLM chain builder, open source',cat:'frameworks',icon:'🌊'},
  { name:'Langflow',url:'https://www.langflow.org/',desc:'Visual LangChain builder, low-code',cat:'frameworks',icon:'🧪'},
  { name:'ChatGPT GPTs',url:'https://chat.openai.com/',desc:'No-code custom GPTs, upload knowledge, share',cat:'assistants',icon:'⚫'},
  { name:'Claude Projects',url:'https://claude.ai/',desc:'Custom instructions + knowledge base, team sharing',cat:'assistants',icon:'🟠'},
  { name:'Gemini Gems',url:'https://gemini.google.com/',desc:'Google ecosystem, personalized AI assistants',cat:'assistants',icon:'💎'},
  { name:'Replit Agent',url:'https://replit.com/',desc:'Natural language→full-stack app, auto-deploy',cat:'assistants',icon:'⚡'},
  { name:'Devin',url:'https://www.cognition.ai/',desc:'AI software engineer, autonomous coding',cat:'assistants',icon:'🧑‍💻'},
  { name:'Bolt.new',url:'https://bolt.new/',desc:'StackBlitz, prompt→full-stack app in browser',cat:'assistants',icon:'⚡'},
  { name:'Make',url:'https://www.make.com/',desc:'2000+ app integrations, visual scenario builder',cat:'workflow',icon:'🧶'},
  { name:'Zapier',url:'https://zapier.com/',desc:'7000+ apps, easiest automation platform',cat:'workflow',icon:'⚡'},
  { name:'Retool AI',url:'https://retool.com/',desc:'Build internal AI tools fast, pre-built blocks',cat:'workflow',icon:'🛠️'},
  { name:'Relevance AI',url:'https://relevanceai.com/',desc:'AI workforce builder, deploy agents at scale',cat:'workflow',icon:'🏭'},
  { name:'AgentGPT',url:'https://agentgpt.reworkd.ai/',desc:'Autonomous AI agents in browser, goal-based',cat:'multi',icon:'🎯'},
  { name:'BabyAGI',url:'https://github.com/yoheinakajima/babyagi',desc:'Classic autonomous task-driven agent',cat:'multi',icon:'👶'},
  { name:'ChatDev',url:'https://github.com/OpenBMB/ChatDev',desc:'Multi-agent software company simulation',cat:'multi',icon:'💼'},
  { name:'MetaGPT',url:'https://github.com/geekan/MetaGPT',desc:'Multi-agent meta-programming framework',cat:'multi',icon:'🧠'},
]

export default function AgentOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e
  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h2 className={styles.title}>🤖 {L('AI Agents & Automation','AI 智能体','AI 智能體')}</h2>
        <p className={styles.subtitle}>{L('22 tools — Frameworks, Assistants, Workflows, Multi-Agent','22款工具——框架、助手、自动化、多Agent','22款工具——框架、助手、自動化、多Agent')}</p>
      </div>
      <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#6366f1" catNames={{
        frameworks: L('Agent Frameworks','Agent 框架','Agent 框架'),
        assistants: L('AI Assistants','AI 助手','AI 助手'),
        workflow: L('Workflow Automation','工作流自动化','工作流自動化'),
        multi: L('Multi-Agent Systems','多Agent 系统','多Agent 系統'),
      }} />
    </div>
  )
}
