import Overview from './Overview'
import HealthcareOverview from './HealthcareOverview'
import FinanceOverview from './FinanceOverview'
import EducationOverview from './EducationOverview'
import ManufacturingOverview from './ManufacturingOverview'
import AgricultureOverview from './AgricultureOverview'
import EnterpriseOverview from './EnterpriseOverview'

const sections = [
  { key: 'logistics', Component: Overview },
  { key: 'healthcare', Component: HealthcareOverview },
  { key: 'finance', Component: FinanceOverview },
  { key: 'education', Component: EducationOverview },
  { key: 'manufacturing', Component: ManufacturingOverview },
  { key: 'agriculture', Component: AgricultureOverview },
  { key: 'enterprise', Component: EnterpriseOverview },
]

export default function IndustriesOverview() {
  return (
    <div>
      {sections.map(({ key, Component }, i) => (
        <div key={key} id={`section-${key}`} style={{ scrollMarginTop: 80 }}>
          {i > 0 && <div style={{ height: 2, background: 'linear-gradient(90deg, var(--primary), transparent)', margin: '32px 0 40px', borderRadius: 1 }} />}
          <Component />
        </div>
      ))}
    </div>
  )
}
