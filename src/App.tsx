import { useState, useCallback, useEffect, useRef } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Breadcrumb from './components/Breadcrumb'
import { useT } from './contexts/LanguageContext'
import Home from './pages/Home'
import AiNews from './pages/AiNews'
import NotFound from './pages/NotFound'
import BackToTop from './components/BackToTop'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'

import NavToolsOverview from './pages/NavToolsOverview'
import IndustriesOverview from './pages/IndustriesOverview'
import AigcOverview from './pages/AigcOverview'
import AiDevOverview from './pages/AiDevOverview'

import { domains } from './data/domains'
import { domainTitle } from './i18n/translate'
import styles from './App.module.css'

const MIN_SIDEBAR = 120
const MAX_SIDEBAR = 420
const DEFAULT_SIDEBAR = 180

// --- hash helpers ---
function parseHash(): [string | null, string] {
  const raw = window.location.hash.replace(/^#\/?/, '')
  if (!raw) return [null, 'overview']
  const parts = raw.split('/')
  const domain = parts[0] || null
  const page = parts[1] || 'overview'
  return [domain, page]
}
function toHash(domain: string | null, page: string) {
  if (!domain) return '#/'
  return `#/${domain}/${page}`
}

function AppContent() {
  const { lang } = useT()
  const [initialDomain, initialPage] = parseHash()
  const [domain, setDomain] = useState<string | null>(initialDomain)
  const [activePage, setActivePage] = useState(initialPage)
  const [sidebarWidth, setSidebarWidth] = useState(() => {
    const saved = localStorage.getItem('ai-logistics-sidebar-width')
    return saved ? Number(saved) : DEFAULT_SIDEBAR
  })
  const dragging = useRef(false)
  const sidebarWidthRef = useRef(sidebarWidth)

  // Keep ref in sync
  useEffect(() => { sidebarWidthRef.current = sidebarWidth }, [sidebarWidth])

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    dragging.current = true
    document.body.style.cursor = 'col-resize'
  }, [])

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!dragging.current) return
      const next = Math.min(MAX_SIDEBAR, Math.max(MIN_SIDEBAR, e.clientX))
      setSidebarWidth(next)
    }
    const onUp = () => {
      if (dragging.current) {
        dragging.current = false
        document.body.style.cursor = ''
        localStorage.setItem('ai-logistics-sidebar-width', String(sidebarWidthRef.current))
      }
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
  }, [sidebarWidth])

  useEffect(() => {
    document.documentElement.style.setProperty('--sidebar-width', `${sidebarWidth}px`)
  }, [sidebarWidth])

  // Scroll observer: highlight sidebar based on visible section
  useEffect(() => {
    if (domain === null) return
    const visibleSections = new Map<string, number>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const key = entry.target.id.replace('section-', '')
          if (entry.isIntersecting) {
            visibleSections.set(key, entry.intersectionRatio)
          } else {
            visibleSections.delete(key)
          }
        })
        // Find section with highest visibility ratio
        let best = ''
        let bestRatio = 0
        visibleSections.forEach((ratio, key) => {
          if (ratio > bestRatio) { bestRatio = ratio; best = key }
        })
        if (best && bestRatio > 0.1) {
          setActivePage(best)
        }
      },
      { rootMargin: '-80px 0px 0px 0px', threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    )

    // Observe after a brief delay to let DOM render
    const timer = setTimeout(() => {
      document.querySelectorAll('[id^="section-"]').forEach(el => observer.observe(el))
    }, 300)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [domain])

  // sync state → URL hash
  const updatingHash = useRef(0)
  useEffect(() => {
    updatingHash.current++
    const id = updatingHash.current
    window.location.hash = toHash(domain, activePage)
    // reset flag after queued microtasks settle — use a counter to avoid race
    queueMicrotask(() => {
      if (updatingHash.current === id) updatingHash.current = 0
    })
  }, [domain, activePage])

  // listen for browser back/forward
  useEffect(() => {
    const onHashChange = () => {
      if (updatingHash.current !== 0) return // we triggered this, skip
      const [d, p] = parseHash()
      setDomain(d)
      setActivePage(p)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  // scroll to section on hash load (after DOM renders)
  useEffect(() => {
    if (domain && activePage !== 'overview') {
      const timer = setTimeout(() => {
        const el = document.getElementById(`section-${activePage}`)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 500)
      return () => clearTimeout(timer)
    }
  }, []) // only on mount

  const handleEnterDomain = (key: string) => {
    setDomain(key)
    setActivePage('overview')
  }

  const handleSelectPage = (key: string) => {
    setActivePage(key)
    const el = document.getElementById(`section-${key}`)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleBack = () => setDomain(null)

  // Dynamic page title
  useEffect(() => {
    if (domain === null) { document.title = 'AI Navigator'; return }
    const d = domains.find(dd => dd.key === domain)
    const title = d ? domainTitle(d.title, lang) : domain
    document.title = title + ' · AI Navigator'
  }, [domain, lang])

  const renderPage = () => {
    if (domain === null) return <Home onEnter={handleEnterDomain} />
    return <>
      {domain === 'nav-tools' && <NavToolsOverview />}
      {domain === 'ai-industries' && <IndustriesOverview />}
      {domain === 'aigc' && <AigcOverview />}
      {domain === 'ai-dev' && <AiDevOverview />}
      {domain === 'ai-news' && <AiNews />}
      {!['nav-tools','ai-industries','aigc','ai-dev','ai-news'].includes(domain || '') && <NotFound />}
    </>
  }

  return (
    <div className={styles.app}>
      <Header onBack={domain ? handleBack : undefined} onNavigate={(d, s) => { if (!d) { handleBack(); return } handleEnterDomain(d); if (s) { setActivePage(s); setTimeout(() => { const el = document.getElementById(`section-${s}`); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }) }, 400) } }} />
      <div className={styles.body}>
        <Sidebar domain={domain} activePage={activePage} onSelectPage={handleSelectPage} onSelectDomain={handleEnterDomain} onHome={handleBack} />
        <div className={styles.handle} onMouseDown={onMouseDown} />
        <ErrorBoundary>
          <main className={styles.content} data-scroll-container>
            <BreadcrumbBlock domain={domain} activePage={activePage} onBack={handleBack} onSelectPage={handleSelectPage} />
            {renderPage()}
          </main>
        </ErrorBoundary>
      </div>
      <Footer />
      <BackToTop />
    </div>
  )
}

function BreadcrumbBlock({ domain, activePage, onBack, onSelectPage }: {
  domain: string | null; activePage: string; onBack: () => void; onSelectPage: (key: string) => void
}) {
  const { lang } = useT()
  if (!domain) return <Breadcrumb path={[]} />
  const d = domains.find(dd => dd.key === domain)
  const domainLabel = d ? domainTitle(d.title, lang) : domain
  const sub = d?.subModules.find(s => s.key === activePage)
  const pageLabel = sub ? domainTitle(sub.title, lang) : activePage
  return <Breadcrumb path={[{ label: domainLabel, onClick: onBack }, { label: pageLabel, onClick: () => onSelectPage(activePage) }]} />
}

export default function App() {
  return <ThemeProvider><LanguageProvider><AppContent /></LanguageProvider></ThemeProvider>
}
