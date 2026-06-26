import { useT } from '../contexts/LanguageContext'
import StatCard from '../components/StatCard'
import PieChart from '../components/PieChart'
import MindMap from '../components/MindMap'
import styles from './Page.module.css'

const pieData = [
  { name: 'Smart Warehousing', value: 20, color: '#3b82f6' },
  { name: 'Transport Dispatch', value: 22, color: '#10b981' },
  { name: 'Last-Mile Delivery', value: 18, color: '#8b5cf6' },
  { name: 'Prediction & Decision', value: 25, color: '#f59e0b' },
  { name: 'Operations & Service', value: 15, color: '#ef4444' },
]

export default function Overview() {
  const { t } = useT()

  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h2 className={styles.title}>📦 {t.overview.title}</h2>
        <p className={styles.subtitle}>{t.overview.subtitle}</p>
      </div>

      <div className={styles.summary}>{t.overview.summary}</div>

      <section className={styles.chart} style={{marginBottom:24}}>
        <h3 style={{fontSize:16,fontWeight:700,color:'var(--text)',marginBottom:12}}>AI在物流的核心突破</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:12}}>
          {[
            {icon:'🏭',t:'智能仓储',d:'计算机视觉+AMR机器人实现货到人拣选，运营成本降低20%。中科富创的物流大模型将煤炭物流园实现全程无人化，运能从200万跃升至近500万吨。'},
            {icon:'🚛',t:'运输调度',d:'AI实时结合路况规划最优路线，卡车装载率从90%提升至97%，燃油成本降低15%。多点帮助香港连锁超市每天减少10+趟车次。'},
            {icon:'📊',t:'预测决策',d:'生成式AI分析销售历史+市场趋势+天气数据，预测准确率提升40%，缺货率降低35%-45%。极兔速递的AI模型能提前3-5天识别风险运单。'},
            {icon:'🤖',t:'运营客服',d:'NLP+RPA实现智能录单和客服。牛卡福AI日处理3000单、准确率99.99%（人工仅200单/天、92%）。韵达"小达"客服机器人7×24小时在线。'},
          ].map(item => (
            <div key={item.t} style={{padding:14,background:'var(--bg-card)',borderRadius:10,border:'1px solid var(--border)'}}>
              <h4 style={{fontSize:15,fontWeight:600,color:'var(--text)',margin:'0 0 4px'}}>{item.icon} {item.t}</h4>
              <p style={{fontSize:13,color:'var(--text-secondary)',lineHeight:1.7,margin:0}}>{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.stats}>
        {t.overviewStats.map((s: { label: string; value: string; sub: string }) => (
          <StatCard key={s.label} label={s.label} value={s.value} sub={s.sub} />
        ))}
      </div>

      <div className={styles.pieSection} style={{ marginBottom: 28 }}>
        <h3 className={styles.chartTitle}>🧠 {t.overview.mindmapTitle}</h3>
        <MindMap />
      </div>

      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', marginBottom: 28 }}>
        <div className={styles.pieSection} style={{ flex: '1 1 400px' }}>
          <h3 className={styles.chartTitle}>🍩 {t.overview.pieTitle}</h3>
          <PieChart data={pieData} innerRadius={55} />
        </div>
      </div>

      <h3 className={styles.chartTitle}>🏆 {t.overview.highlightsTitle}</h3>
      <div className={styles.highlights}>
        {t.overviewHighlights.map((h: { module: string; company: string; result: string }) => (
          <div key={h.company} className={styles.highlightCard}>
            <span className={styles.highlightBadge}>{h.module}</span>
            <div className={styles.highlightBody}>
              <div className={styles.highlightCase}>{h.company}</div>
              <div className={styles.highlightResult}>{h.result}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
