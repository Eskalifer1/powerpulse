import { SideMenuItemType } from "@/types/SideMenuItem";
import { Body, Dumbell } from "./style";

export const nvaItems: SideMenuItemType[] = [
  { name: "NavBar.Workouts", href: "/workouts", icon: <Dumbell /> },
  { name: "NavBar.Exercises", href: "/exercises", icon: <Body /> },
];
