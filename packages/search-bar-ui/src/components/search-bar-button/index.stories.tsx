import type { Meta, StoryObj } from "@storybook/react";
import SearchBar from "../search-bar";
import SearchBarButton from "./index";

const meta: Meta<typeof SearchBarButton> = {
  component: SearchBarButton,
  title: "Components/SearchBarButton",
  decorators: [
    (Story) => (
      <SearchBar>
        <SearchBar.Input placeholder="검색어를 입력하세요" />
        <Story />
        <SearchBar.Suggestions>
          <SearchBar.SuggestionItem value="Item 1">
            <p>Item 1</p>
          </SearchBar.SuggestionItem>
        </SearchBar.Suggestions>
      </SearchBar>
    ),
  ],
  argTypes: {
    children: {
      control: "text",
      description: "버튼에 표시될 텍스트",
    },
    className: {
      control: "text",
      description: "추가적인 스타일링을 위한 클래스명",
    },
    disableWhenEmpty: {
      control: "boolean",
      description: "입력 필드가 비어있을 때 버튼을 비활성화할지 여부",
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchBarButton>;

export const Default: Story = {
  args: {
    children: "검색",
    disableWhenEmpty: false,
  },
};

export const DisabledWhenEmpty: Story = {
  args: {
    children: "검색",
    disableWhenEmpty: true,
  },
};

export const CustomText: Story = {
  args: {
    children: "🚀",
    disableWhenEmpty: false,
  },
};

export const CustomStyled: Story = {
  args: {
    children: "검색",
    disableWhenEmpty: false,
    className:
      "bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200",
  },
};

export const DisabledCustomStyled: Story = {
  args: {
    children: "검색",
    disableWhenEmpty: true,
    className: "bg-gray-300 text-white px-6 py-2 rounded-lg cursor-not-allowed",
  },
};
