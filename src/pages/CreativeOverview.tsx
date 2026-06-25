import { useT } from '../contexts/LanguageContext'
import styles from './Page.module.css'

export default function CreativeOverview() {
  const { lang } = useT()
  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h2 className={styles.title}>🎨 {lang==='zh-CN'?'AI 创意工坊 · 全景总览':lang==='zh-TW'?'AI 創意工坊 · 全景總覽':'AI Creative Studio · Overview'}</h2>
        <p className={styles.subtitle}>{lang==='zh-CN'?'写作 · 绘画 · 视频 · 音频 — 用 AI 释放创造力':lang==='zh-TW'?'寫作 · 繪畫 · 影片 · 音頻 — 用 AI 釋放創造力':'Write · Draw · Film · Compose — Unleash creativity with AI'}</p>
      </div>
      <div className={styles.summary}>
        {lang==='zh-CN'
          ? '生成式 AI 正在彻底改变内容创作的方式。从写一篇文章、生成一张插画、剪辑一段视频，到创作一首音乐——AI 不再是替代创作者，而是创作者最强大的助手。本模块整理了 AI 创意领域的核心工具、技法和实践指南，帮助你把脑海中的创意高效落地。'
          : 'Generative AI is transforming content creation — writing articles, generating illustrations, editing videos, composing music. AI isn\'t replacing creators; it\'s their most powerful assistant. This module covers core tools, techniques, and practical guides to turn your creative ideas into reality.'}
      </div>
      <Grid items={[
        { icon:'✍️', tEn:'AI Writing', tZh:'AI 写作', dEn:'Articles, copywriting, stories, scripts, poetry — generate, polish, and translate any text.', dZh:'文章、文案、故事、剧本、诗歌——生成、润色、翻译任何文本。' },
        { icon:'🖼️', tEn:'AI Image Generation', tZh:'AI 绘画', dEn:'Text-to-image, style transfer, image editing, logo design — visualize your imagination.', dZh:'文生图、风格迁移、图片编辑、Logo 设计——把想象力变成画面。' },
        { icon:'🎬', tEn:'AI Video Creation', tZh:'AI 视频', dEn:'Text-to-video, auto-editing, digital avatars, subtitle generation — produce video content at scale.', dZh:'文生视频、自动剪辑、数字人播报、字幕生成——规模化生产视频内容。' },
        { icon:'🎵', tEn:'AI Audio & Music', tZh:'AI 音频音乐', dEn:'Music generation, text-to-speech, voice cloning, podcast production — create audio without a studio.', dZh:'音乐生成、文字转语音、声音克隆、播客制作——无需录音棚也能做音频。' },
      ]} lang={lang} />
    </div>
  )
}

function Grid({ items, lang }: { items: {icon:string;tEn:string;tZh:string;dEn:string;dZh:string}[], lang:string }) {
  return <div className={styles.domainGrid}>
    {items.map(item=>(
      <div key={item.icon} className={styles.domainCard} style={{borderTop:'4px solid #ec4899'}}>
        <div className={styles.domainHead}><span className={styles.domainIcon}>{item.icon}</span></div>
        <h3 className={styles.domainTitle}>{lang==='zh-CN'?item.tZh:item.tEn}</h3>
        <p className={styles.domainDesc}>{lang==='zh-CN'?item.dZh:item.dEn}</p>
      </div>
    ))}
  </div>
}
