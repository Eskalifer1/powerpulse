import { SideMenuItemType } from "@/types/SideMenuItem";
import { Body, Dumbell } from "./style";

export const nvaItems: SideMenuItemType[] = [
  { name: "Workouts", href: "/workouts", icon: <Dumbell /> },
  { name: "Exercises", href: "/exercises", icon: <Body /> },
];
