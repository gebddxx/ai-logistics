import { useT } from '../contexts/LanguageContext'
import LinkNav, { type ToolLink } from '../components/LinkNav'
import styles from './Page.module.css'

const links: ToolLink[] = [
  { name:'ChatGPT',url:'https://chat.openai.com/',desc:'Best general writer, GPT-4.1, long-form thinking',cat:'writing',icon:'⚫'},
  { name:'Claude',url:'https://claude.ai/',desc:'Best for deep writing, 200K context, nuanced editing',cat:'writing',icon:'🟠'},
  { name:'Jasper AI',url:'https://www.jasper.ai/',desc:'Marketing copy, brand voice, SEO optimization',cat:'writing',icon:'✨'},
  { name:'Notion AI',url:'https://www.notion.so/',desc:'Workspace-integrated AI, one-click write',cat:'writing',icon:'📝'},
  { name:'Copy.ai',url:'https://www.copy.ai/',desc:'90+ templates, social media & ads',cat:'writing',icon:'📋'},
  { name:'Writesonic',url:'https://writesonic.com/',desc:'SEO articles, product descriptions, landing pages',cat:'writing',icon:'✍️'},
  { name:'Grammarly',url:'https://www.grammarly.com/',desc:'Grammar, tone, clarity, plagiarism check',cat:'writing',icon:'✅'},
  { name:'DeepL Write',url:'https://www.deepl.com/write',desc:'Multilingual style & phrasing polish',cat:'writing',icon:'🌍'},
  { name:'Midjourney',url:'https://www.midjourney.com/',desc:'Best artistic quality, aesthetic images',cat:'image',icon:'🖼️'},
  { name:'Stable Diffusion',url:'https://stability.ai/',desc:'Open source, full control, local run, plugins',cat:'image',icon:'🎨'},
  { name:'DALL·E 3',url:'https://openai.com/dall-e-3',desc:'Natural language→image, ChatGPT built-in',cat:'image',icon:'🎯'},
  { name:'Adobe Firefly',url:'https://www.adobe.com/products/firefly.html',desc:'Commercial-safe, Photoshop integration',cat:'image',icon:'🔥'},
  { name:'Leonardo.ai',url:'https://leonardo.ai/',desc:'Game assets, consistent style, fine-tuning',cat:'image',icon:'🦁'},
  { name:'ComfyUI',url:'https://github.com/comfyanonymous/ComfyUI',desc:'Node-based workflow, ultimate control',cat:'image',icon:'🔗'},
  { name:'Runway Gen-3',url:'https://runwayml.com/',desc:'Best text-to-video, cinematic motion quality',cat:'video',icon:'🎬'},
  { name:'Pika Labs',url:'https://pika.art/',desc:'Quick social clips, fun creative effects',cat:'video',icon:'⚡'},
  { name:'HeyGen',url:'https://www.heygen.com/',desc:'AI avatar video, multi-language dubbing',cat:'video',icon:'🎙️'},
  { name:'CapCut',url:'https://www.capcut.com/',desc:'AI mobile editing, auto captions, effects',cat:'video',icon:'✂️'},
  { name:'Opus Clip',url:'https://www.opus.pro/',desc:'Long video→viral shorts, AI clipping',cat:'video',icon:'🎞️'},
  { name:'Descript',url:'https://www.descript.com/',desc:'Edit video by editing text transcript',cat:'video',icon:'📝'},
  { name:'Suno',url:'https://suno.com/',desc:'Full songs from text, multiple genres',cat:'audio',icon:'☀️'},
  { name:'Udio',url:'https://www.udio.com/',desc:'High-quality AI music generation',cat:'audio',icon:'🎵'},
  { name:'ElevenLabs',url:'https://elevenlabs.io/',desc:'Best TTS, voice cloning, 29 languages',cat:'audio',icon:'🔊'},
  { name:'AIVA',url:'https://www.aiva.ai/',desc:'Classical/ambient composition, sheet music export',cat:'audio',icon:'🎼'},
  { name:'Adobe Podcast',url:'https://podcast.adobe.com/',desc:'AI noise reduction, mic enhance, transcription',cat:'audio',icon:'🎧'},
  { name:'Murf.ai',url:'https://murf.ai/',desc:'Professional AI voiceovers for videos/presentations',cat:'audio',icon:'🎤'},
]

export default function CreativeOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e
  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h2 className={styles.title}>🎨 {L('AI Creative Studio','AI 创意工坊','AI 創意工坊')}</h2>
        <p className={styles.subtitle}>{L('26 tools — Writing, Image, Video, Audio','26款工具——写作、绘画、视频、音频','26款工具——寫作、繪畫、影片、音頻')}</p>
      </div>
      <LinkNav links={links} lang={lang as 'en'|'zh-CN'|'zh-TW'} color="#ec4899" catNames={{
        writing: L('AI Writing','AI 写作','AI 寫作'),image: L('AI Image','AI 绘画','AI 繪畫'),
        video: L('AI Video','AI 视频','AI 影片'),audio: L('AI Audio & Music','AI 音频音乐','AI 音頻音樂'),
      }} />
    </div>
  )
}
