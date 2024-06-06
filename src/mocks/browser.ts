import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

export const worker = setupWorker(...handlers);
worker.start({
  onUnhandledRequest: "bypass", // or 'warn', 'error'
  quiet: false, // Enables verbose logging
});
if (process.env.NODE_ENV === "development") {
  worker.start();
}
