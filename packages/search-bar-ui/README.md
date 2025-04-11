# @simple-ui-kit/search-bar-ui

[NPM](https://www.npmjs.com/package/@simple-ui-kit/search-bar-ui?activeTab=readme)

검색 기능을 위한 컴포넌트 라이브러리입니다.
검색 입력, 버튼, 제안 목록을 포함한 완전한 검색 경험을 제공합니다.

## 설치

```
npm i @simple-ui-kit/search-bar-ui
```

## 빠른 시작

```jsx
import { SearchBar } from "@simple-ui-kit/search-bar-ui";

function App() {
  return (
    <SearchBar onSubmit={(value) => console.log(value)}>
      <SearchBar.Input placeholder="검색어를 입력하세요" />
      <SearchBar.Button disableWhenEmpty>검색</SearchBar.Button>
      <SearchBar.Suggestions>
        <SearchBar.SuggestionItem value="item-1">
          <p>Item 1</p>
        </SearchBar.SuggestionItem>
        <SearchBar.SuggestionItem value="item-2">
          <p>Item 2</p>
        </SearchBar.SuggestionItem>
      </SearchBar.Suggestions>
    </SearchBar>
  );
}
```

## 기능

- 검색어 입력 및 제출
- 검색어 하단 목록 출력
- 키보드 네비게이션 지원 (↑, ↓, Enter, Esc)
- 커스텀 스타일링 지원
- 접근성 지원

## 컴포넌트

### SearchBar

검색 기능의 컨테이너 컴포넌트입니다.

```jsx
<SearchBar onSubmit={(value) => console.log(value)}>
  {/* 자식 컴포넌트들 */}
</SearchBar>
```

#### Props

- `onSubmit`: (value: string) => void
  - 검색어가 제출될 때 호출되는 콜백 함수

---

### SearchBar.Input

검색어를 입력하는 필드입니다.

```jsx
<SearchBar.Input placeholder="검색어를 입력하세요" className="custom-class" />
```

#### Props

- `placeholder`: string
  - 입력 필드의 placeholder 텍스트
- `className`: string
  - 추가적인 스타일링을 위한 클래스명
- `value`: string
  - 입력 필드의 초기값
- `onChange`: (value: string) => void
  - 입력값이 변경될 때 호출되는 콜백 함수

---

### SearchBar.Button

검색을 실행하는 버튼입니다.

```jsx
<SearchBar.Button disableWhenEmpty className="custom-class">
  검색
</SearchBar.Button>
```

#### Props

- `disableWhenEmpty`: boolean
  - 입력 필드가 비어있을 때 버튼을 비활성화할지 여부
- `className`: string
  - 추가적인 스타일링을 위한 클래스명

---

### SearchBar.Suggestions

제안 목록을 표시하는 컨테이너입니다.

```jsx
<SearchBar.Suggestions className="custom-class">
  {/* SuggestionItem 컴포넌트들 */}
</SearchBar.Suggestions>
```

#### Props

- `className`: string
  - 추가적인 스타일링을 위한 클래스명

---

### SearchBar.SuggestionItem

개별 제안 항목을 표시하는 컴포넌트입니다.

```jsx
<SearchBar.SuggestionItem value="item-1" className="custom-class">
  Item 1
</SearchBar.SuggestionItem>

// or

<SearchBar.SuggestionItem value="item-2" className="custom-class">
  <div>Item 2</div>
</SearchBar.SuggestionItem>

```

#### Props

- `value`: string
  - 제안 항목의 값
- `className`: string
  - 추가적인 스타일링을 위한 클래스명

## 예제

### 기본 사용법

```jsx
<SearchBar onSubmit={(value) => console.log(value)}>
  <SearchBar.Input placeholder="검색어를 입력하세요" />
  <SearchBar.Button disableWhenEmpty>검색</SearchBar.Button>
  <SearchBar.Suggestions>
    <SearchBar.SuggestionItem value="item-1">
      <p>Item 1</p>
    </SearchBar.SuggestionItem>
  </SearchBar.Suggestions>
</SearchBar>
```

### 커스텀 스타일링

```jsx
<SearchBar onSubmit={(value) => console.log(value)}>
  <SearchBar.Input
    placeholder="검색어를 입력하세요"
    className="rounded-lg border-2 border-blue-500"
  />
  <SearchBar.Button
    disableWhenEmpty
    className="rounded-lg bg-blue-500 px-4 py-2 text-white"
  >
    검색
  </SearchBar.Button>
  <SearchBar.Suggestions className="mt-2 rounded-md bg-white shadow-lg">
    <SearchBar.SuggestionItem value="item-1" className="p-2 hover:bg-gray-100">
      <p>Item 1</p>
    </SearchBar.SuggestionItem>
  </SearchBar.Suggestions>
</SearchBar>
```

### `SuggestionItem` 의 다양한 형식 지원

```jsx
<SearchBar.SuggestionItem value="result-value">
  <div className="flex items-center gap-2">
    <span className="text-blue-500">🔍</span>
    <span>검색 결과</span>
    <span className="text-sm text-gray-500">(추가 정보)</span>
  </div>
</SearchBar.SuggestionItem>
```

## 라이센스

MIT
