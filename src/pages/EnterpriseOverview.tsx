import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'

const links: ToolLink[] = [
  { name:'HubSpot AI',url:'https://www.hubspot.com/',desc:'AI CRM: content, lead scoring, chatbots',cat:'marketing',icon:'🧡'},
  { name:'Salesforce Einstein',url:'https://www.salesforce.com/ai/',desc:'AI across Sales/Service/Marketing cloud',cat:'marketing',icon:'☁️'},
  { name:'Jasper AI',url:'https://www.jasper.ai/',desc:'Enterprise content, brand voice, team collab',cat:'marketing',icon:'✨'},
  { name:'Clay',url:'https://www.clay.com/',desc:'AI sales prospecting + data enrichment',cat:'marketing',icon:'🧱'},
  { name:'Copy.ai',url:'https://www.copy.ai/',desc:'GTM automation, AI workflows for sales',cat:'marketing',icon:'📋'},
  { name:'Writesonic',url:'https://writesonic.com/',desc:'AI content for marketing, SEO, social media',cat:'marketing',icon:'✍️'},
  { name:'Typeface',url:'https://www.typeface.ai/',desc:'Enterprise-grade AI content, brand-safe',cat:'marketing',icon:'🔤'},
  { name:'AdCreative.ai',url:'https://www.adcreative.ai/',desc:'AI ad creative generation, A/B optimized',cat:'marketing',icon:'📢'},
  { name:'Eightfold AI',url:'https://eightfold.ai/',desc:'Talent intelligence, skill matching, retention',cat:'hr',icon:'♾️'},
  { name:'Paradox AI',url:'https://www.paradox.ai/',desc:'AI recruiter Olivia: screen, schedule, onboard',cat:'hr',icon:'👩‍💼'},
  { name:'Metaview',url:'https://www.metaview.ai/',desc:'AI interview notes, auto-summarize moments',cat:'hr',icon:'📝'},
  { name:'HireVue',url:'https://www.hirevue.com/',desc:'AI video interview analysis, soft skills scoring',cat:'hr',icon:'🎥'},
  { name:'Textio',url:'https://textio.com/',desc:'AI-augmented writing for job descriptions & reviews',cat:'hr',icon:'📄'},
  { name:'SeekOut',url:'https://seekout.com/',desc:'AI talent sourcing, diversity filters',cat:'hr',icon:'🔍'},
  { name:'Harvey AI',url:'https://www.harvey.ai/',desc:'AI for law firms: contract, due diligence, research',cat:'legal',icon:'⚖️'},
  { name:'Ironclad',url:'https://ironcladapp.com/',desc:'AI contract lifecycle: draft→review→negotiate',cat:'legal',icon:'🛡️'},
  { name:'EvenUp',url:'https://www.evenuplaw.com/',desc:'AI demand letters + settlement estimation',cat:'legal',icon:'📨'},
  { name:'Casetext',url:'https://casetext.com/',desc:'AI legal research, CoCounsel assistant',cat:'legal',icon:'📚'},
  { name:'Spellbook',url:'https://www.spellbook.legal/',desc:'AI contract drafting in Word, GPT-4 powered',cat:'legal',icon:'📖'},
  { name:'DoNotPay',url:'https://donotpay.com/',desc:'AI consumer rights, dispute resolution',cat:'legal',icon:'🚫'},
]

export default function EnterpriseOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e
  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h2 className={styles.title}>🏢 {L('AI for Enterprise','AI 企业应用','AI 企業應用')}</h2>
        <p className={styles.subtitle}>{L('20 enterprise tools — Marketing, HR, Legal','20款企业工具——营销、HR、法律','20款企業工具——行銷、HR、法律')}</p>
      </div>
      <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#64748b" catNames={{
        marketing: L('Marketing & Sales','营销销售','行銷銷售'),
        hr: L('HR & Recruitment','人力资源','人力資源'),
        legal: L('Legal & Compliance','法律合规','法律合規'),
      }} />
    </div>
  )
}
