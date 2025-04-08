# @simple-ui-kit/search-bar-ui

### Install

```sh
  npm i @simple-ui-kit/search-bar-ui
```

### Quickstart

```tsx
<SearchBar onSubmit={(value) => console.log(value)}>
  <SearchBar.Input placeholder="search something" />
  <SearchBar.Button disableWhenEmpty>Search</SearchBar.Button>

  <SearchBar.Suggestions>
    <SearchBar.SuggestionItem value="Item 1">
      <p>Item 1</p>
    </SearchBar.SuggestionItem>
    <SearchBar.SuggestionItem value="Item 2">
      <p>Item 2</p>
    </SearchBar.SuggestionItem>
    <SearchBar.SuggestionItem value="Item 3">
      <p>Item 3</p>
    </SearchBar.SuggestionItem>
  </SearchBar.Suggestions>
</SearchBar>
```
