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
      padding: '8px 0 4px',
      textAlign: 'center',
      color: 'var(--text-muted)',
      fontSize: 12,
    }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 4 }}>
        {links.map(l => (
          <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--primary)', textDecoration: 'none' }}>
            {l.label}
          </a>
        ))}
        <span>© {year} AI Navigator</span>
      </div>
      <div style={{ fontSize: 10, opacity: 0.6, lineHeight: 1.4 }}>
        {lang === 'zh-CN' ? '行业数据为估算值，来源于公开行业报告，仅供参考' : lang === 'zh-TW' ? '行業數據為估算值，來源於公開行業報告，僅供參考' : lang === 'ja' ? '業界データは推定値であり、公開レポートに基づきます。参考用です' : lang === 'ko' ? '업계 데이터는 추정치이며 공개 보고서를 기반으로 합니다. 참고용입니다' : lang === 'es' ? 'Los datos de la industria son estimaciones basadas en informes públicos. Solo como referencia' : 'Industry data are estimates based on public reports. For reference only'}
      </div>
    </footer>
  )
}
