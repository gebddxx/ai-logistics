import { useT } from '../contexts/LanguageContext'

export default function Footer() {
  const { lang } = useT()
  const year = new Date().getFullYear()

  const links = [
    { label: 'GitHub', url: 'https://github.com/gebddxx/ai-for-everything' },
    { label: lang === 'zh-CN' ? '反馈' : lang === 'zh-TW' ? '反饋' : lang === 'ja' ? 'フィードバック' : lang === 'ko' ? '피드백' : lang === 'es' ? 'Comentarios' : 'Feedback', url: 'https://github.com/gebddxx/ai-for-everything/issues' },
  ]

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      marginTop: 48,
      padding: '24px 0 16px',
      textAlign: 'center',
      color: 'var(--text-muted)',
      fontSize: 13,
    }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginBottom: 12 }}>
        {links.map(l => (
          <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--primary)', textDecoration: 'none' }}>
            {l.label}
          </a>
        ))}
      </div>
      <div>© {year} AI Navigator. {lang === 'zh-CN' ? '仅供学习参考' : lang === 'zh-TW' ? '僅供學習參考' : lang === 'ja' ? '学習用参考資料' : lang === 'ko' ? '학습용 참고 자료' : lang === 'es' ? 'Solo para referencia de aprendizaje' : 'For learning reference only'}</div>
    </footer>
  )
}
