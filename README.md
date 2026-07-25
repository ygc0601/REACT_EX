# REACT_EX

React를 처음 사용하는 개발자가 컴포넌트, Props, State, 사용자 입력과 조건부 화면 전환을 확인할 수 있는 간단한 예제 프로젝트입니다.

## 데모 로그인

예제 화면은 다음 데모 계정으로 로그인할 수 있습니다.

```text
ID: admin
PW: 1234
```

로그인은 React State를 설명하기 위한 프런트엔드 예제입니다. 계정 정보가 소스 코드에 포함되어 있으므로 실제 서비스 인증 방식으로 사용하면 안 됩니다.

## 개발 환경

Node.js LTS, React, TypeScript, Vite와 Oxlint를 사용합니다.

## 실행 방법

```powershell
npm install
npm run dev
```

PowerShell에 표시되는 `http://localhost:5173` 주소를 브라우저에서 엽니다.

## 검사 및 빌드

```powershell
npm run lint
npm run build
npm run preview
```

## 구현된 예제

로그인 화면은 제출 이벤트, 입력 상태, 오류 안내와 조건부 렌더링을 보여줍니다. 메인 화면은 `useState`를 이용한 카운터와 사용자 입력을 제공하며, 입력값을 Props로 자식 컴포넌트에 전달합니다. 개념 화면은 State와 조건부 렌더링으로 전환합니다. CSS는 반응형 화면, 키보드 포커스와 애니메이션 감소 설정을 포함합니다.
