import { useT } from '../contexts/LanguageContext';import styles from './Page.module.css'
export default function AgentOverview(){const{lang}=useT()
return(<div className={styles.page}><div className={styles.head}>
  <h2 className={styles.title}>🤖 {lang==='zh-CN'?'AI 智能体 · 全景总览':lang==='zh-TW'?'AI 智能體 · 全景總覽':'AI Agents · Overview'}</h2>
  <p className={styles.subtitle}>{lang==='zh-CN'?'构建能自主规划、推理和行动的 AI 智能体':lang==='zh-TW'?'構建能自主規劃、推理和行動的 AI 智能體':'Build AI agents that plan, reason, and act autonomously'}</p></div>
  <div className={styles.summary}>{lang==='zh-CN'?'2025-2026 被称为"AI Agent 元年"。Agent 不再是简单的问答机器人，而是能自主规划任务、调用工具、执行多步骤工作流的智能体。从个人助理到企业自动化，AI Agent 正在重塑我们与 AI 协作的方式。':'2025-2026 is the "Year of AI Agents." Agents go beyond simple Q&A — they plan tasks, use tools, and execute multi-step workflows autonomously. From personal assistants to enterprise automation, AI agents are reshaping how we collaborate with AI.'}</div>
  <G items={[
    {icon:'🧰',tEn:'Agent Frameworks',tZh:'Agent 框架',dEn:'LangChain, CrewAI, AutoGen, Dify — compare and choose the right framework for your needs.',dZh:'LangChain、CrewAI、AutoGen、Dify——对比选择适合你的开发框架。'},
    {icon:'💬',tEn:'Personal AI Assistants',tZh:'个人 AI 助手',dEn:'Build your own AI assistant that manages calendar, email, research, and daily tasks.',dZh:'搭建管理日历、邮件、调研和日常任务的个人AI助手。'},
    {icon:'⚡',tEn:'Workflow Automation',tZh:'工作流自动化',dEn:'Connect AI with 5000+ apps via n8n, Make, Zapier. Automate repetitive workflows.',dZh:'通过n8n、Make、Zapier连接5000+应用, 自动化重复工作流。'},
    {icon:'🕸️',tEn:'Multi-Agent Systems',tZh:'多 Agent 协作',dEn:'Multiple agents collaborating — each with a role — to solve complex problems together.',dZh:'多个Agent分工协作——各自承担不同角色——共同解决复杂问题。'},
  ]} lang={lang} /></div>)}
function G({items,lang}:{items:{icon:string;tEn:string;tZh:string;dEn:string;dZh:string}[],lang:string}){return <div className={styles.domainGrid}>{items.map(i=>(<div key={i.icon} className={styles.domainCard} style={{borderTop:'4px solid #6366f1'}}><div className={styles.domainHead}><span className={styles.domainIcon}>{i.icon}</span></div><h3 className={styles.domainTitle}>{lang==='zh-CN'?i.tZh:i.tEn}</h3><p className={styles.domainDesc}>{lang==='zh-CN'?i.dZh:i.dEn}</p></div>))}</div>}
