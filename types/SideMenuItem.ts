import { MessageKeys } from "@/i18n/routing";
import { ReactNode } from "react";

export interface SideMenuItemType {
  href: string;
  name: MessageKeys;
  icon: ReactNode;
}
