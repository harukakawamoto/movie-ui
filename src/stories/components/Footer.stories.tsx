import { Meta, StoryObj } from "@storybook/react";
import { Page } from "@/components/Footer/Page";

const meta: Meta<typeof Page> = {
  title: "Footer",
  component: Page,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Page>;

export const HomeFooter: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/home",
      },
    },
  },
};

export const TicketFooter: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/ticket",
      },
    },
  },
};

export const ProfileFooter: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/profile",
      },
    },
  },
};
