 # Day 1: next.js 기본 페이지 생성 /about 확인 링크 및 깃허브 연동
. Pages Router (기존 방식, Next.js 12 이하 / 13에서 지원)

/pages/about.tsx → /about URL로 접근 가능

/pages/blog/[id].tsx → /blog/1, /blog/2 같은 동적 라우팅 가능

즉, 파일 이름이 곧 라우트(URL)

예시:

/pages/about.tsx   →  /about
/pages/blog/[id].tsx  →  /blog/:id

2. App Router (Next.js 13+, 추천 방식)

/app/about/page.tsx → /about URL로 접근 가능

/app/blog/[id]/page.tsx → /blog/1, /blog/2

여기서는 page.tsx 파일이 반드시 있어야 페이지로 인식됨.

예시:

/app/about/page.tsx   →  /about
/app/blog/[id]/page.tsx  →  /blog/:id

정리

Pages Router → /pages/about.tsx (page.tsx 필요 없음)

App Router → /app/about/page.tsx (반드시 page.tsx 필요)

 # Day 2: Blog 동적 라우팅 + ProfileCard 컴포넌트 재사용
 App Router 기준 정리

pages/ 시절 → useRouter (next/router)
app/ 시절 (최신 App Router) → useParams, useSearchParams, usePathname (next/navigation)
App Router에서는 useRouter를 거의 안 쓰고 경로 관련 훅들을 따로 제공


'use client'개념

Next.js App Router에서 컴포넌트는 기본적으로 서버 컴포넌트로 동작
서버 컴포넌트(Server Component)
서버에서 렌더링됨 → 브라우저에 HTML만 전달

useState, useEffect, useParams() 같은 클라이언트 훅 사용 불가
클라이언트 컴포넌트(Client Component)
브라우저에서 렌더링됨 → React 훅 사용 가능
사용자 인터랙션, 상태 관리 필요할 때 사용

사용법
파일 맨 위에 "use client"; 작성하면 해당 컴포넌트를 클라이언트 컴포넌트로 바꿔줌
사용자 인터랙션이 필요한 컴포넌트
버튼 클릭, 폼 입력, 상태 변화 등
React 훅을 사용하는 컴포넌트
useState, useEffect, useParams(), useSearchParams() 등
서버 컴포넌트에서는 이런 훅들을 쓸 수 없음 → "use client" 필요

주의점
클라이언트 컴포넌트가 많으면 서버에서 최적화해주던 장점을 일부 잃음
가능한 상태가 필요 없는 부분은 서버 컴포넌트로 두는 게 성능에 유리
