import { useT } from '../contexts/LanguageContext'
import GeminiTutorial from './GeminiTutorial'
import CodexTutorial from './CodexTutorial'
import CCSwitchTutorial from './CCSwitchTutorial'
import AgentFrameworks from './AgentFrameworks'
import AgentAssistants from './AgentAssistants'
import AgentWorkflow from './AgentWorkflow'
import AgentMultiAgent from './AgentMultiAgent'
import AudioGenTutorial from './AudioGenTutorial'
import VideoGenTutorial from './VideoGenTutorial'
import NovelWritingTutorial from './NovelWritingTutorial'
import PptGenTutorial from './PptGenTutorial'
import WebGenTutorial from './WebGenTutorial'
import AppGenTutorial from './AppGenTutorial'
import SoftwareGenTutorial from './SoftwareGenTutorial'

const sections = [
  { key: 'gemini', icon: '🔷', title: { en: 'Gemini CLI', 'zh-CN': 'Gemini CLI 教程', 'zh-TW': 'Gemini CLI 教學' }, Component: GeminiTutorial },
  { key: 'codex', icon: '🟢', title: { en: 'Codex CLI', 'zh-CN': 'Codex CLI 教程', 'zh-TW': 'Codex CLI 教學' }, Component: CodexTutorial },
  { key: 'ccswitch', icon: '🔀', title: { en: 'CCSwitch', 'zh-CN': 'CCSwitch 多模型协作', 'zh-TW': 'CCSwitch 多模型協作' }, Component: CCSwitchTutorial },
  { key: 'frameworks', icon: '🧰', title: { en: 'Agent Frameworks', 'zh-CN': 'Agent 框架', 'zh-TW': 'Agent 框架' }, Component: AgentFrameworks },
  { key: 'assistants', icon: '💬', title: { en: 'Personal Assistants', 'zh-CN': '个人 AI 助手', 'zh-TW': '個人 AI 助手' }, Component: AgentAssistants },
  { key: 'workflow', icon: '⚡', title: { en: 'Workflow Automation', 'zh-CN': '工作流自动化', 'zh-TW': '工作流自動化' }, Component: AgentWorkflow },
  { key: 'multi-agent', icon: '🕸️', title: { en: 'Multi-Agent', 'zh-CN': '多 Agent 协作', 'zh-TW': '多 Agent 協作' }, Component: AgentMultiAgent },
  { key: 'audio-gen', icon: '🎵', title: { en: 'Audio Generation', 'zh-CN': '音频音乐生成', 'zh-TW': '音頻音樂生成' }, Component: AudioGenTutorial },
  { key: 'video-gen', icon: '🎬', title: { en: 'Video Generation', 'zh-CN': '视频生成', 'zh-TW': '影片生成' }, Component: VideoGenTutorial },
  { key: 'novel', icon: '📝', title: { en: 'Novel Writing', 'zh-CN': '小说写作', 'zh-TW': '小說寫作' }, Component: NovelWritingTutorial },
  { key: 'ppt-gen', icon: '📊', title: { en: 'PPT Generation', 'zh-CN': 'PPT 生成', 'zh-TW': 'PPT 生成' }, Component: PptGenTutorial },
  { key: 'web-gen', icon: '🌐', title: { en: 'Web Page Gen', 'zh-CN': '网页生成', 'zh-TW': '網頁生成' }, Component: WebGenTutorial },
  { key: 'app-gen', icon: '📱', title: { en: 'App Generation', 'zh-CN': 'App 生成', 'zh-TW': 'App 生成' }, Component: AppGenTutorial },
  { key: 'software-gen', icon: '💻', title: { en: 'Software/EXE', 'zh-CN': '软件/EXE生成', 'zh-TW': '軟體/EXE生成' }, Component: SoftwareGenTutorial },
]

export default function AigcOverview() {
  const { lang } = useT()
  const L = (e: string, z: string, t: string) => lang === 'zh-CN' ? z : lang === 'zh-TW' ? t : e

  return (
    <div>
      {/* Overview Intro */}
      <div id="section-overview" style={{
        background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #c084fc 100%)',
        borderRadius: 14,
        padding: '28px 32px',
        marginBottom: 32,
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -20, right: -10, fontSize: 100, opacity: 0.08 }}>🤖</div>
        <h2 style={{ fontSize: 24, fontWeight: 800, margin: '0 0 8px' }}>
          {L('AIGC Tutorials', 'AIGC教程', 'AIGC教學')}
        </h2>
        <p style={{ fontSize: 14, opacity: 0.85, margin: '0 0 20px', maxWidth: 600, lineHeight: 1.6 }}>
          {L(
            '14 step-by-step hands-on tutorials — from AI coding and agent building to generating audio, video, novels, PPTs, web pages, apps, and software. Every tutorial includes code examples and direct tool links.',
            '14个手把手实操教程——从AI编程、智能体搭建到音频、视频、小说、PPT、网页、App和软件生成。每个教程都有代码示例和工具直达链接。',
            '14個手把手實操教學——從AI編程、智能體搭建到音頻、影片、小說、PPT、網頁、App和軟體生成。每個教學都有程式碼範例和工具直達鏈接。'
          )}
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {sections.map(s => (
            <span key={s.key} onClick={() => { const el = document.getElementById(`section-${s.key}`); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }) }} style={{ cursor: 'pointer',
              background: 'rgba(255,255,255,0.15)', color: '#fff', padding: '4px 12px', borderRadius: 16, fontSize: 13, textDecoration: 'none', fontWeight: 500,
            }}>
              {s.icon} {s.title[lang as 'en' | 'zh-CN' | 'zh-TW']}
            </span>
          ))}
        </div>
      </div>

      {sections.map(({ key, Component }, i) => (
        <div key={key} id={`section-${key}`} style={{ scrollMarginTop: 80 }}>
          {i > 0 && <div style={{ height: 2, background: 'linear-gradient(90deg, var(--primary), transparent)', margin: '32px 0 40px', borderRadius: 1 }} />}
          <Component />
        </div>
      ))}
    </div>
  )
}
