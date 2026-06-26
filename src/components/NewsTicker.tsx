import { useState, useEffect } from 'react'
import { useT } from '../contexts/LanguageContext'

function getGreeting(lang: string) {
  const h = new Date().getHours()
  if (lang === 'zh-CN') {
    if (h < 6) return '🌙 夜深了，注意休息'
    if (h < 9) return '🌅 早上好，新的一天开始了'
    if (h < 12) return '☀️ 上午好，效率最高的时光'
    if (h < 14) return '🍜 中午好，别忘了吃饭'
    if (h < 18) return '🌤️ 下午好，继续加油'
    if (h < 22) return '🌆 晚上好，放松一下'
    return '🌙 夜深了，明天见'
  }
  if (lang === 'zh-TW') {
    if (h < 6) return '🌙 夜深了，注意休息'
    if (h < 9) return '🌅 早安，新的一天開始了'
    if (h < 12) return '☀️ 上午好，效率最高的時光'
    if (h < 14) return '🍜 中午好，別忘了吃飯'
    if (h < 18) return '🌤️ 下午好，繼續加油'
    if (h < 22) return '🌆 晚上好，放鬆一下'
    return '🌙 夜深了，明天見'
  }
  if (h < 6) return '🌙 Late night — time to rest'
  if (h < 9) return '🌅 Good morning! Fresh start'
  if (h < 12) return '☀️ Good morning! Peak productivity'
  if (h < 14) return '🍜 Good afternoon — lunch break?'
  if (h < 18) return '🌤️ Good afternoon! Keep going'
  if (h < 22) return '🌆 Good evening! Time to unwind'
  return '🌙 Late night — see you tomorrow'
}

function getMessages(lang: string): string[] {
  if (lang === 'zh-CN') return [
    getGreeting('zh-CN'),
    '🆕 新增 300+ 精选工具，覆盖 14 个领域',
    '📊 AI行业应用板块已上线，探索 8 大行业落地案例',
    '🎬 AIGC 教程：从零生成音频、视频、PPT、网页、App',
    '💡 提示：使用 Ctrl+Shift+R 硬刷新获取最新内容',
    '🔍 导航工具集支持连续滚动浏览所有分类',
    '📱 手机浏览器也能流畅使用，随时随地查工具',
    '🌟 每天都有新工具收录，欢迎常来看看',
  ]
  if (lang === 'zh-TW') return [
    getGreeting('zh-TW'),
    '🆕 新增 300+ 精選工具，覆蓋 14 個領域',
    '📊 AI行業應用板塊已上線，探索 8 大行業落地案例',
    '🎬 AIGC 教學：從零生成音頻、影片、PPT、網頁、App',
    '💡 提示：使用 Ctrl+Shift+R 硬刷新獲取最新內容',
    '🔍 導航工具集支援連續滾動瀏覽所有分類',
    '📱 手機瀏覽器也能流暢使用，隨時隨地查工具',
    '🌟 每天都有新工具收錄，歡迎常來看看',
  ]
  return [
    getGreeting('en'),
    '🆕 300+ curated tools across 14 categories',
    '📊 AI Industry hub live — 8 sectors with real cases',
    '🎬 AIGC Tutorials: audio, video, PPT, web, app generation',
    '💡 Tip: Ctrl+Shift+R to hard-refresh for latest updates',
    '🔍 All tool categories in one continuous scroll',
    '📱 Mobile-friendly — browse tools on any device',
    '🌟 New tools added regularly — keep checking back',
  ]
}

export default function NewsTicker({ onNews }: { onNews?: () => void }) {
  const { lang } = useT()
  const [idx, setIdx] = useState(0)
  const [leaving, setLeaving] = useState(false)
  const messages = getMessages(lang)

  useEffect(() => {
    const timer = setInterval(() => {
      setLeaving(true)
      setTimeout(() => {
        setIdx(i => (i + 1) % messages.length)
        setLeaving(false)
      }, 300)
    }, 4000)
    return () => clearInterval(timer)
  }, [messages.length])

  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: 12,
      padding: '12px 20px',
      marginBottom: 24,
      overflow: 'hidden',
      position: 'relative',
      minHeight: 44,
      display: 'flex',
      alignItems: 'center',
    }}>
      <span style={{
        fontSize: 13,
        fontWeight: 600,
        color: '#fff',
        marginRight: 12,
        whiteSpace: 'nowrap',
        opacity: 0.9,
        flexShrink: 0,
      }}>
        📢
      </span>
      <span style={{
        fontSize: 14,
        color: '#fff',
        transition: 'all 0.3s ease',
        opacity: leaving ? 0 : 1,
        transform: leaving ? 'translateY(-12px)' : 'translateY(0)',
        flex: 1,
      }}>
        {messages[idx]}
      </span>
      <span style={{
        fontSize: 11,
        color: 'rgba(255,255,255,0.5)',
        marginLeft: 8,
        flexShrink: 0,
      }}>
        {idx + 1}/{messages.length}
      </span>
      {onNews && (
        <span onClick={onNews} style={{
          fontSize: 12,
          color: '#fff',
          background: 'rgba(255,255,255,0.2)',
          padding: '3px 10px',
          borderRadius: 12,
          marginLeft: 10,
          cursor: 'pointer',
          fontWeight: 600,
          whiteSpace: 'nowrap',
          transition: 'background .15s',
          flexShrink: 0,
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.35)' }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.2)' }}
        >📰 速报 →</span>
      )}
    </div>
  )
}
