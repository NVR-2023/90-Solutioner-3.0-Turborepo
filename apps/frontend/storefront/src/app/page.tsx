import Card from "@repo/ui/src/components/card";
import Section from "@repo/ui/src/sections/section";
import { getValue } from "@repo/utils/src/encryption/get-value";
import ThemeSelector from "@repo/ui/src/components/animated/theme-selector/theme-selector";
import LightThemeIcon from "@repo/ui/src/components/icons/light-theme-icon";

export default function Home() {
  const a1 = getValue();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Card />
      <Section />
      <ThemeSelector />
      <p className="flex space-x-2">
        <LightThemeIcon />
        <LightThemeIcon color="blue" scale={2} />
        <LightThemeIcon color="red" />
      </p>

      <span>{a1}</span>
    </div>
  );
}
