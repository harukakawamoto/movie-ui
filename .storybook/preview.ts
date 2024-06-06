import type { Preview } from "@storybook/react";
import "@/app/globals.css";
import { initialize, mswLoader } from "msw-storybook-addon";
import { DiVim } from "react-icons/di";

initialize();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  loaders: [mswLoader],
};

export default preview;
