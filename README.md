# 상품 목록 + 생성 페이지 과제

pnpm, Next.js App Router, shadcn (tailwindcss), zustand로 개발했습니다.

## 실행 방법

`pnpm install`으로 설치 후 `pnpm dev`로 개발 서버 실행합니다.

[http://localhost:3000](http://localhost:3000) 에서 확인 할 수 있습니다.

pnpm이 없을 경우 [https://pnpm.io/installation](https://pnpm.io/installation)에서 설치 방법을 확인하여 설치합니다.

- /products에 상품 목록 페이지, /products/new에 상품 생성 페이지를 구현했습니다.
- 인덱스 (/) 페이지에서 /products로 redirect 하게 구현해두었습니다.

## 고려 사항

- 기본 npm 보다 효율적인 pnpm을 사용했습니다.
- 디자인 요구사항이 없어서 shadcn 컴포넌트 라이브러리를 사용했습니다.
- 대부분의 코드는 src/ 레벨에서 폴더로 나누었고, 페이지 내용과 관련 컴포넌트만 app 폴더 안에 두었습니다. 해당 페이지에서만 사용하는 컴포넌트들은 colocation 하는 게 좋을 것 같아서 그렇게 했습니다.

### 상품 목록 페이지

- 상품 목록 View 방식(viewType)을 저장하기 위해 zustand로 ProductListStore을 생성했습니다.
  상품 목록 페이지 진입 시 ViewTypeSetter 컴포넌트에서 이번 세션에 viewType 지정을 안 했으면(!isViewTypeSetThisSession) initializeViewType 액션을 부릅니다. 랜덤하게 viewType을 지정하고 지정일시(viewTypeSetDate)와 함께 persist middleware를 통해 localStorage에 저장합니다.
  다음에 들어왔을 때 isViewTypeSetThisSession과 viewTypeSetDate를 확인하고 필요시 새로 설정합니다.

- 원래는 tanstack query를 사용해서 서버 prerendering (prefetchQuery) + client-side data fetching(useQuery)를 사용하려고 했습니다. 하지만 error.tsx로 에러 핸들링을 하려면 @tanstack/react-query-next-experimental 로 해야 하는 걸 알게 되었습니다. 요구사항에 비해 복잡해지는 것 같아서 page.tsx RSC에서 직접 data fetching을 하는 걸로 변경했습니다.

- UI는 반응형으로 구현했습니다. grid 방식일 때 요구사항인 **한 줄에 4개의 아이템** 은 너비 768px 이상부터 확인 할 수 있습니다. 360px 미만 = 1개, 360px ~ 639px = 2개, 640px ~ 767px = 3개입니다.

```ts
// src/app/products/(list)/_components/product-list.tsx:25
'grid-cols-1 min-[360px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4';
```

### 상품 생성 페이지

- form은 React Hook Form으로 만들고 POST 요청 처리는 서버 액션으로 구현했습니다.
- 문자열 값들은 trim() 된 기준으로 길이 체크했습니다.
- price와 discountPercentage는 nonnegative integer이라고 가정하고 구현했습니다. price는 Number.MAX_SAFE_INTEGER를 넘기면 undefined로 리셋됩니다. discountPercentage 필드는 3자리로 제한되어 있고 100을 넘으면 100으로 설정됩니다.
- 숫자 받는 input을 구현하는데 숫자 외의 것을 제외하고 유효한 숫자인지 검증하고 빈 문자열도 표시 가능하게
  하기 위해 setValueAs에서 숫자나 undefined로 반환하고, input에 표시 할 땐 undefined 때문에 uncontrolled input이 되는 걸 방지하기 위해 `field.value ?? ''`를 적용했습니다.
- resultPrice는 반올림(Math.round) 처리했습니다.
- RootLayout에 Toaster를 추가하여 생성시 성공과 오류 메시지를 표시했습니다.
