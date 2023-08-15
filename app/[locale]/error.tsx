"use client";

import ErrorPageScreen from "@/Screens/ErrorPage";
import { Metadata } from "next";

export function generateMetadata() {
  return {
    title: "PowerPulse | Error Page",
  } as Metadata;
}

const ErrorPage = ({ error }: { error: Error }) => {
  return <ErrorPageScreen error={error} />;
};

export default ErrorPage;
