import type { Meta, StoryObj } from "@storybook/react-vite";
import { IoMdLogOut } from "react-icons/io";
import { MdDoubleArrow } from "react-icons/md";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "inline-radio" },
      options: ["solid", "outline", "subtle", "ghost"],
    },
    size: {
      control: { type: "inline-radio" },
      options: ["sm", "md", "lg"],
    },
    startIcon: { control: "boolean" },
    endIcon: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    variant: "solid",
    size: "md",
  },

  render: ({ startIcon, endIcon, ...props }) => (
    <Button
      {...props}
      startIcon={startIcon ? <MdDoubleArrow /> : null}
      endIcon={endIcon ? <IoMdLogOut /> : null}
    />
  ),
};
