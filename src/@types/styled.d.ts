import { theme } from "@/styles/themes";
import "styled-components";

export type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
