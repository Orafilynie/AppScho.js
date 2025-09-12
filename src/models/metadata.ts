import type { Platform } from "./platform";

export interface Metadata {
  context: string;
  platform: Platform;
  published: string;
  since: number;
  version_code: string;
  version_name: string;
}
