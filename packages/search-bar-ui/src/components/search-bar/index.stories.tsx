import type { Meta, StoryObj } from "@storybook/react";
import SearchBar from "./index";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof SearchBar> = {
  title: "Components/SearchBar",
  component: SearchBar,
  argTypes: {
    onSubmit: { action: "submitted" },
  },
};
export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: StoryObj<typeof SearchBar> = {
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
