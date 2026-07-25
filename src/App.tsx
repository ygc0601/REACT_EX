import { useState, type FormEvent } from 'react'
import './App.css'

const DEMO_ID = 'admin'
const DEMO_PASSWORD = '1234'

type LoginPageProps = { onLogin: () => void }

function LoginPage({ onLogin }: LoginPageProps) {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!id || !password) {
      setErrorMessage('아이디와 비밀번호를 모두 입력해 주세요.')
      return
    }

    if (id !== DEMO_ID || password !== DEMO_PASSWORD) {
      setErrorMessage('아이디 또는 비밀번호가 올바르지 않습니다.')
      return
    }

    setErrorMessage('')
    onLogin()
  }

  return (
    <main className="login-main">
      <section className="login-panel" aria-labelledby="login-title">
        <span className="badge">React State 로그인 예제</span>
        <h1 id="login-title">로그인</h1>
        <p>예제 화면을 확인하려면 데모 계정으로 로그인해 주세요.</p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label htmlFor="login-id">아이디</label>
            <input
              id="login-id"
              name="id"
              autoComplete="username"
              value={id}
              onChange={(event) => setId(event.target.value)}
              aria-describedby={errorMessage ? 'login-error' : undefined}
            />
          </div>

          <div className="form-field">
            <label htmlFor="login-password">비밀번호</label>
            <input
              id="login-password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              aria-describedby={errorMessage ? 'login-error' : undefined}
            />
          </div>

          {errorMessage && (
            <p className="error-message" id="login-error" role="alert">
              {errorMessage}
            </p>
          )}

          <button className="login-button" type="submit">로그인</button>
        </form>

        <aside className="demo-account" aria-label="데모 계정 안내">
          <strong>데모 계정</strong>
          <span>아이디: admin</span>
          <span>비밀번호: 1234</span>
        </aside>
      </section>
    </main>
  )
}

type WelcomeCardProps = { name: string }

function WelcomeCard({ name }: WelcomeCardProps) {
  return (
    <article className="welcome-card" aria-live="polite">
      <span className="eyebrow">Props 예제</span>
      <h2>{name ? `${name}님, 반갑습니다.` : '이름을 입력해 주세요.'}</h2>
      <p>부모 컴포넌트가 입력한 이름을 자식 컴포넌트에 전달했습니다.</p>
    </article>
  )
}

type HomePageProps = { onOpenAbout: () => void }

function HomePage({ onOpenAbout }: HomePageProps) {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <span className="badge">React + TypeScript + Vite</span>
        <h1 id="hero-title">작게 시작하는 React 실습</h1>
        <p>컴포넌트, Props, State, 사용자 입력과 페이지 이동을 한 화면에서 확인합니다.</p>
        <button className="primary-link" onClick={onOpenAbout}>React 개념 확인하기</button>
      </section>

      <section className="example-grid" aria-label="React 기본 예제">
        <article className="example-card">
          <span className="number">01</span>
          <h2>State로 숫자 관리</h2>
          <p>버튼을 누르면 상태가 변경되고 화면이 다시 표시됩니다.</p>
          <output className="counter-output" aria-live="polite">{count}</output>
          <div className="button-row">
            <button onClick={() => setCount((value) => value + 1)}>1 증가</button>
            <button className="secondary-button" onClick={() => setCount(0)}>초기화</button>
          </div>
        </article>

        <article className="example-card">
          <span className="number">02</span>
          <h2>사용자 입력 관리</h2>
          <p>입력값을 State에 저장하고 Props로 자식 컴포넌트에 전달합니다.</p>
          <label htmlFor="user-name">이름</label>
          <input
            id="user-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="이름을 입력하세요"
          />
          <WelcomeCard name={name} />
        </article>
      </section>
    </main>
  )
}

type AboutPageProps = { onOpenHome: () => void }

function AboutPage({ onOpenHome }: AboutPageProps) {
  return (
    <main>
      <section className="about-panel">
        <span className="badge">Router 예제</span>
        <h1>React의 핵심 흐름</h1>
        <p>컴포넌트는 화면을 나누고, Props는 데이터를 전달하며, State는 변경되는 값을 기억합니다.</p>
        <dl className="concept-list">
          <div><dt>Component</dt><dd>재사용할 수 있는 화면 단위입니다.</dd></div>
          <div><dt>Props</dt><dd>부모 컴포넌트가 자식 컴포넌트에 전달하는 값입니다.</dd></div>
          <div><dt>State</dt><dd>사용자 조작에 따라 변경되고 화면에 반영되는 값입니다.</dd></div>
        </dl>
        <button className="primary-link" onClick={onOpenHome}>실습 화면으로 돌아가기</button>
      </section>
    </main>
  )
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [page, setPage] = useState<'home' | 'about'>('home')

  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />
  }

  return (
    <>
      <header className="site-header">
        <button className="brand" onClick={() => setPage('home')}>REACT_EX</button>
        <nav aria-label="주요 메뉴">
          <button onClick={() => setPage('home')}>실습</button>
          <button onClick={() => setPage('about')}>개념</button>
          <button
            className="logout-button"
            onClick={() => {
              setPage('home')
              setIsLoggedIn(false)
            }}
          >
            로그아웃
          </button>
        </nav>
      </header>
      {page === 'home' ? (
        <HomePage onOpenAbout={() => setPage('about')} />
      ) : (
        <AboutPage onOpenHome={() => setPage('home')} />
      )}
      <footer><p>React 기본 개념을 확인하기 위한 간단한 예제 프로젝트입니다.</p></footer>
    </>
  )
}

export default App
