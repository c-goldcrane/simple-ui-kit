import type { Meta, StoryObj } from "@storybook/react";
import SearchBar from "../search-bar";
import SearchBarInput from "./index";

const meta: Meta<typeof SearchBarInput> = {
  component: SearchBarInput,
  title: "Components/SearchBarInput",
  decorators: [
    (Story) => (
      <SearchBar>
        <Story />
        <SearchBar.Button disableWhenEmpty>검색</SearchBar.Button>
        <SearchBar.Suggestions>
          <SearchBar.SuggestionItem value="Item 1">
            <p>Item 1</p>
          </SearchBar.SuggestionItem>
        </SearchBar.Suggestions>
      </SearchBar>
    ),
  ],
  argTypes: {
    placeholder: {
      control: "text",
      description: "입력 필드의 placeholder 텍스트",
    },
    className: {
      control: "text",
      description: "추가적인 스타일링을 위한 클래스명",
    },
    value: {
      control: "text",
      description: "입력 필드의 초기값",
    },
    onChange: {
      action: "onChange",
      description: "입력 필드의 값이 변경될 때 호출되는 콜백 함수",
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchBarInput>;

export const Default: Story = {
  args: {
    placeholder: "검색어를 입력하세요",
  },
};

export const WithInitialValue: Story = {
  args: {
    placeholder: "검색어를 입력하세요",
    value: "초기 검색어",
  },
};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: "여기에 검색어를 입력하세요...",
  },
};

export const CustomStyled: Story = {
  args: {
    placeholder: "검색어를 입력하세요",
    className:
      "border-2 border-blue-500 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-200",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "검색어를 입력하세요",
    value: "수정할 수 없는 텍스트",
    className: "bg-gray-100 cursor-not-allowed text-gray-400",
  },
};
