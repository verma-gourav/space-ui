import type { Meta, StoryObj } from "@storybook/react-vite";
import { FiEye, FiSearch } from "react-icons/fi";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    helperText: { control: "text" },
    error: { control: "boolean" },
    disabled: { control: "boolean" },
    startIcon: { control: "boolean" },
    endIcon: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    placeholder: "Search...",
    startIcon: false,
    endIcon: true,
    helperText: "Invalid email format",
  },

  render: ({ startIcon, endIcon, ...props }) => (
    <Input
      {...props}
      startIcon={startIcon ? <FiSearch size={18} /> : null}
      endIcon={endIcon ? <FiEye size={18} /> : null}
    />
  ),
};
