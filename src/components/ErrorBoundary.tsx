import { Component, type ReactNode, type ErrorInfo } from 'react'

interface Props { children: ReactNode }
interface State { hasError: boolean; error?: Error }

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[ErrorBoundary]', error, info.componentStack)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: 60, textAlign: 'center', color: 'var(--text-muted)',
          maxWidth: 500, margin: '0 auto',
        }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>💥</div>
          <h2 style={{ color: 'var(--text)', marginBottom: 12 }}>Something went wrong</h2>
          <p style={{ marginBottom: 20, lineHeight: 1.6, fontSize: 14 }}>
            {this.state.error?.message || 'An unexpected error occurred'}
          </p>
          <button onClick={() => window.location.reload()}
            style={{
              padding: '10px 24px', borderRadius: 8, border: 'none',
              background: 'var(--primary)', color: '#fff', cursor: 'pointer', fontSize: 14,
            }}>
            Reload page
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
