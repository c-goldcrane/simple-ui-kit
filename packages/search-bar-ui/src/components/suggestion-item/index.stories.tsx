import type { Meta, StoryObj } from "@storybook/react";
import SearchBar from "../search-bar";
import SuggestionItem from "./index";

const meta: Meta<typeof SuggestionItem> = {
  component: SuggestionItem,
  title: "Components/SuggestionItem",
  decorators: [
    (Story) => (
      <SearchBar>
        <SearchBar.Input placeholder="검색어를 입력하세요" />
        <SearchBar.Button disableWhenEmpty>검색</SearchBar.Button>
        <SearchBar.Suggestions>
          <Story />
        </SearchBar.Suggestions>
      </SearchBar>
    ),
  ],
  argTypes: {
    value: {
      control: "text",
      description: "제안 항목의 값",
    },
    className: {
      control: "text",
      description: "추가적인 스타일링을 위한 클래스명",
    },
    children: {
      control: "text",
      description: "제안 항목에 표시될 내용",
    },
  },
};

export default meta;
type Story = StoryObj<typeof SuggestionItem>;

export const Default: Story = {
  args: {
    value: "검색 결과 1",
    children: "검색 결과 1",
  },
};

export const WithCustomContent: Story = {
  args: {
    value: "검색 결과 2",
    children: (
      <div className="flex items-center gap-2">
        <span className="text-blue-500" role="img" aria-label="검색 아이콘">
          🔍
        </span>
        <span>검색 결과 2</span>
        <span className="text-sm text-gray-500">(추가 정보)</span>
      </div>
    ),
  },
};

export const CustomStyled: Story = {
  args: {
    value: "검색 결과 3",
    children: "검색 결과 3",
    className:
      "hover:bg-blue-100 active:bg-blue-200 transition-colors duration-200",
  },
};

export const Selected: Story = {
  args: {
    value: "검색 결과 4",
    children: "검색 결과 4",
    className: "bg-blue-100",
  },
};
