import type { Meta, StoryObj } from "@storybook/react";
import SearchBar from "./index";

const meta: Meta<typeof SearchBar> = {
  title: "Components/SearchBar",
  component: SearchBar,
  argTypes: {
    onSubmit: { action: "submitted" },
  },
};
export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  render: (args) => (
    <SearchBar {...args}>
      <SearchBar.Input placeholder="검색어를 입력하세요" />
      <SearchBar.Button disableWhenEmpty>검색</SearchBar.Button>
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
  ),
};

export const NoSuggestions: Story = {
  render: (args) => {
    const DummySuggestions: string[] = [];

    return (
      <SearchBar {...args}>
        <SearchBar.Input placeholder="검색어 입력" />
        <SearchBar.Button disableWhenEmpty>검색</SearchBar.Button>
        <SearchBar.Suggestions>
          {DummySuggestions.map((suggestion) => (
            <SearchBar.SuggestionItem key={suggestion} value={suggestion}>
              <p>{suggestion}</p>
            </SearchBar.SuggestionItem>
          ))}
        </SearchBar.Suggestions>
      </SearchBar>
    );
  },
};

export const WithInput: Story = {
  render: (args) => (
    <SearchBar {...args}>
      <SearchBar.Input placeholder="검색어를 입력하세요" value="검색어" />
      <SearchBar.Button disableWhenEmpty>검색</SearchBar.Button>
      <SearchBar.Suggestions>
        <SearchBar.SuggestionItem value="검색어 관련 결과 1">
          <p>검색어 관련 결과 1</p>
        </SearchBar.SuggestionItem>
        <SearchBar.SuggestionItem value="검색어 관련 결과 2">
          <p>검색어 관련 결과 2</p>
        </SearchBar.SuggestionItem>
      </SearchBar.Suggestions>
    </SearchBar>
  ),
};

export const DisabledButton: Story = {
  render: (args) => (
    <SearchBar {...args}>
      <SearchBar.Input placeholder="검색어를 입력하세요" />
      <SearchBar.Button disableWhenEmpty>검색</SearchBar.Button>
      <SearchBar.Suggestions>
        <SearchBar.SuggestionItem value="Item 1">
          <p>Item 1</p>
        </SearchBar.SuggestionItem>
      </SearchBar.Suggestions>
    </SearchBar>
  ),
};

export const CustomStyled: Story = {
  render: (args) => (
    <div className="rounded-lg bg-gray-100 p-4">
      <SearchBar {...args}>
        <SearchBar.Input
          placeholder="검색어를 입력하세요"
          className="rounded-md border-2 border-blue-500 p-2"
        />
        <SearchBar.Button
          disableWhenEmpty
          className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          검색
        </SearchBar.Button>
        <SearchBar.Suggestions className="mt-2 rounded-md bg-white shadow-lg">
          <SearchBar.SuggestionItem
            value="Item 1"
            className="p-2 hover:bg-gray-100"
          >
            <p>Item 1</p>
          </SearchBar.SuggestionItem>
          <SearchBar.SuggestionItem
            value="Item 2"
            className="p-2 hover:bg-gray-100"
          >
            <p>Item 2</p>
          </SearchBar.SuggestionItem>
        </SearchBar.Suggestions>
      </SearchBar>
    </div>
  ),
};

export const LongSuggestions: Story = {
  render: (args) => {
    const suggestions = Array.from(
      { length: 10 },
      (_, i) => `검색 결과 ${i + 1}`,
    );

    return (
      <SearchBar {...args}>
        <SearchBar.Input placeholder="검색어를 입력하세요" />
        <SearchBar.Button disableWhenEmpty>검색</SearchBar.Button>
        <SearchBar.Suggestions>
          {suggestions.map((suggestion) => (
            <SearchBar.SuggestionItem key={suggestion} value={suggestion}>
              <p>{suggestion}</p>
            </SearchBar.SuggestionItem>
          ))}
        </SearchBar.Suggestions>
      </SearchBar>
    );
  },
};
