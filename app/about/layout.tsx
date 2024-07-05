import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ჩვენს შესახებ",
  description: "ინფორმაცია სასწავლო პლატფორმის შესახებ",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}