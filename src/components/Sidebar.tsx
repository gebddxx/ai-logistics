import { useT } from '../contexts/LanguageContext'
import { domains } from '../data/domains'
import type { Lang } from '../i18n/translations'
import styles from './Sidebar.module.css'

interface Props {
  domain: string | null
  activePage: string
  onSelectPage: (key: string) => void
  onSelectDomain: (key: string) => void
}

export default function Sidebar({ domain, activePage, onSelectPage, onSelectDomain }: Props) {
  const { lang } = useT()

  // Home page: show all domains
  if (domain === null) {
    return (
      <nav className={styles.sidebar}>
        <div className={styles.sectionTitle}>
          {lang === 'zh-CN' ? 'AI 领域' : lang === 'zh-TW' ? 'AI 領域' : 'AI Domains'}
        </div>
        {domains.map((d) => {
          const title = d.title[lang as Lang]
          const isReady = d.status === 'done'
          return (
            <button
              key={d.key}
              className={`${styles.item} ${!isReady ? styles.disabled : ''}`}
              onClick={() => isReady && onSelectDomain(d.key)}
              title={isReady ? title : `${title} — ${lang === 'zh-CN' ? '即将上线' : lang === 'zh-TW' ? '即將上線' : 'Coming soon'}`}
            >
              <span className={styles.icon}>{d.icon}</span>
              <span className={styles.label}>{title}</span>
              {!isReady && (
                <span className={styles.tag}>
                  {lang === 'zh-CN' ? '即将' : lang === 'zh-TW' ? '即將' : 'Soon'}
                </span>
              )}
            </button>
          )
        })}
      </nav>
    )
  }

  // Inside a domain: show its sub-modules
  const currentDomain = domains.find(d => d.key === domain)

  return (
    <nav className={styles.sidebar}>
      <div className={styles.sectionTitle}>
        {currentDomain?.title[lang as Lang] ?? domain}
      </div>
      {currentDomain?.subModules.map((sub) => {
        const isActive = sub.key === activePage
        return (
          <button
            key={sub.key}
            className={`${styles.item} ${isActive ? styles.active : ''}`}
            onClick={() => onSelectPage(sub.key)}
          >
            <span className={styles.icon}>{sub.icon}</span>
            <span className={styles.label}>{sub.title[lang as Lang]}</span>
          </button>
        )
      })}
    </nav>
  )
}
