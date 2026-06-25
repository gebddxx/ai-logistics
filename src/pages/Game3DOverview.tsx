import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'

const links: ToolLink[] = [
  { name:'Meshy',url:'https://www.meshy.ai/',desc:'Text/image→3D model, export Blender/Unity',cat:'3d',icon:'🧊'},
  { name:'Luma AI',url:'https://lumalabs.ai/',desc:'Phone scan→3D, Genie text-to-3D',cat:'3d',icon:'📸'},
  { name:'Spline AI',url:'https://spline.design/ai',desc:'Browser 3D design, AI style transfer',cat:'3d',icon:'🔮'},
  { name:'Tripo AI',url:'https://www.tripo3d.ai/',desc:'Fast text/image→3D, API, game-ready',cat:'3d',icon:'📐'},
  { name:'CSM AI',url:'https://csm.ai/',desc:'3D world generation from images/text',cat:'3d',icon:'🌍'},
  { name:'Rodin',url:'https://hyper3d.ai/',desc:'AI 3D model generation, PBR materials',cat:'3d',icon:'🗿'},
  { name:'Masterpiece X',url:'https://masterpiecex.com/',desc:'Generate 3D with mesh + textures in browser',cat:'3d',icon:'✨'},
  { name:'Skybox AI',url:'https://skybox.blockadelabs.com/',desc:'360° skybox & HDR environment generation',cat:'3d',icon:'🌌'},
  { name:'Leonardo.ai',url:'https://leonardo.ai/',desc:'Game asset gen, consistent characters, textures',cat:'game',icon:'🦁'},
  { name:'Scenario',url:'https://www.scenario.com/',desc:'Fine-tune AI on your style, bulk assets',cat:'game',icon:'🎨'},
  { name:'Layer.ai',url:'https://www.layer.ai/',desc:'Game-ready 3D assets, style-consistent',cat:'game',icon:'📦'},
  { name:'Unity Muse',url:'https://muse.unity.com/',desc:'Unity AI: sprites, textures, animation',cat:'game',icon:'🎮'},
  { name:'Rosebud AI',url:'https://www.rosebud.ai/',desc:'Text/photo→game character creator',cat:'game',icon:'🌹'},
  { name:'Anything World',url:'https://anything.world/',desc:'Animate 3D models with AI auto-rigging',cat:'game',icon:'🦴'},
  { name:'InWorld AI',url:'https://inworld.ai/',desc:'AI NPC engine: personality, memory, dialogue',cat:'npc',icon:'🧠'},
  { name:'Convai',url:'https://convai.com/',desc:'NPCs with environment awareness, real-time voice',cat:'npc',icon:'🗣️'},
  { name:'Charisma.ai',url:'https://charisma.ai/',desc:'AI-driven interactive storytelling engine',cat:'npc',icon:'📖'},
  { name:'Didimo',url:'https://www.didimo.co/',desc:'Auto-generate 3D character models at scale',cat:'npc',icon:'👤'},
  { name:'Ready Player Me',url:'https://readyplayer.me/',desc:'Cross-game avatar platform, AI-generated',cat:'npc',icon:'🧑'},
]

export default function Game3DOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e
  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h2 className={styles.title}>🎮 {L('AI 3D & Gaming','AI 3D 与游戏','AI 3D 與遊戲')}</h2>
        <p className={styles.subtitle}>{L('19 tools — 3D modeling, game assets, NPC AI','19款工具——3D建模、游戏资产、NPC AI','19款工具——3D建模、遊戲資產、NPC AI')}</p>
      </div>
      <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#7c3aed" catNames={{
        '3d': L('3D Generation','3D 生成','3D 生成'),
        game: L('Game Asset Creation','游戏资产生成','遊戲資產生態'),
        npc: L('NPC AI & Behavior','NPC AI 与行为','NPC AI 與行為'),
      }} />
    </div>
  )
}
