import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "მენტორების სია",
  description: "აირჩიე საუკეთესო ტუტორი შენთვის",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}