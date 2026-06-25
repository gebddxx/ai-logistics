import { useT } from '../contexts/LanguageContext'
import { domains } from '../data/domains'
import type { Lang } from '../i18n/translations'
import styles from './Page.module.css'

interface Props {
  domainKey: string
  subPage: string
}

export default function DomainPlaceholder({ domainKey, subPage }: Props) {
  const { t, lang } = useT()
  const domain = domains.find(d => d.key === domainKey)!
  const sub = domain.subModules.find(s => s.key === subPage)!

  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h2 className={styles.title}>{domain.icon} {domain.title[lang as Lang]}</h2>
        <p className={styles.subtitle}>
          {sub.icon} {sub.title[lang as Lang]}
        </p>
      </div>

      <div className={styles.summary}>
        {domain.desc[lang as Lang]}
      </div>

      <div className={styles.chart}>
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
          <div style={{ fontSize: 64, marginBottom: 16 }}>🚧</div>
          <h3 style={{ color: 'var(--text-secondary)', marginBottom: 8 }}>
            {lang === 'zh-CN' ? '内容正在建设中' : lang === 'zh-TW' ? '內容正在建設中' : 'Content Under Construction'}
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>
            {lang === 'zh-CN'
              ? `"${sub.title['zh-CN']}" 模块即将上线，敬请期待。`
              : lang === 'zh-TW'
                ? `「${sub.title['zh-TW']}」模組即將上線，敬請期待。`
                : `"${sub.title.en}" module coming soon. Stay tuned!`}
          </p>
        </div>
      </div>
    </div>
  )
}
