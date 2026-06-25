import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'

const links: ToolLink[] = [
  { name:'Figma AI',url:'https://www.figma.com/ai/',desc:'AI features in Figma: auto-layout, content, rename',cat:'ui',icon:'🎨'},
  { name:'Uizard',url:'https://uizard.io/',desc:'Screenshots→editable UI, wireframe→mockup',cat:'ui',icon:'🧙'},
  { name:'Galileo AI',url:'https://www.usegalileo.ai/',desc:'Text description → complete UI design',cat:'ui',icon:'🔭'},
  { name:'v0.dev',url:'https://v0.dev/',desc:'Vercel, text→React UI code, copy-paste',cat:'ui',icon:'🟢'},
  { name:'Cursor',url:'https://cursor.sh/',desc:'AI-first code editor, design→code naturally',cat:'ui',icon:'🖱️'},
  { name:'Miro AI',url:'https://miro.com/ai/',desc:'Whiteboard AI: generate diagrams, cluster ideas',cat:'ui',icon:'📋'},
  { name:'Motiff',url:'https://www.motiff.com/',desc:'AI-native UI design tool, auto-layout',cat:'ui',icon:'🖌️'},
  { name:'Framer AI',url:'https://www.framer.com/ai/',desc:'AI website builder, design→live site',cat:'ui',icon:'🟣'},
  { name:'Builder.io',url:'https://www.builder.io/',desc:'AI-powered headless CMS, Figma→code',cat:'ui',icon:'🏗️'},
  { name:'Canva',url:'https://www.canva.com/',desc:'Magic Design, BG remover, AI photo editor',cat:'branding',icon:'🖼️'},
  { name:'Looka',url:'https://looka.com/',desc:'AI logo + brand kit: logo, colors, fonts, cards',cat:'branding',icon:'👁️'},
  { name:'Brandmark',url:'https://brandmark.io/',desc:'AI logo & brand identity, full brand guide',cat:'branding',icon:'🏷️'},
  { name:'Namify',url:'https://namify.tech/',desc:'AI brand name generator + domain check',cat:'branding',icon:'💡'},
  { name:'Adobe Express',url:'https://www.adobe.com/express/',desc:'AI templates, social media, quick designs',cat:'branding',icon:'🔥'},
  { name:'Designs.ai',url:'https://designs.ai/',desc:'All-in-one: logo, video, mockup, copywriting',cat:'branding',icon:'🎯'},
  { name:'Visily',url:'https://www.visily.ai/',desc:'Screenshot→wireframe, team prototyping',cat:'mockup',icon:'📱'},
  { name:'Mockplus',url:'https://www.mockplus.com/',desc:'Wireframe→interactive prototype→dev handoff',cat:'mockup',icon:'🔧'},
  { name:'ProtoPie',url:'https://www.protopie.ai/',desc:'High-fidelity interactive prototyping',cat:'mockup',icon:'🥧'},
]

export default function DesignOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e
  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h2 className={styles.title}>🎯 {L('AI Design & UI','AI 设计','AI 設計')}</h2>
        <p className={styles.subtitle}>{L('18 design tools — UI/UX, branding, prototyping','18款设计工具——UI/UX、品牌、原型','18款設計工具——UI/UX、品牌、原型')}</p>
      </div>
      <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#e11d48" catNames={{
        ui: L('UI/UX Design','UI/UX 设计','UI/UX 設計'),
        branding: L('Branding & Logo','品牌与Logo','品牌與Logo'),
        mockup: L('Prototyping','原型设计','原型設計'),
      }} />
    </div>
  )
}
