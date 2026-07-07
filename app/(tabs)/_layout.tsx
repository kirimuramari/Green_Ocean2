import { DesktopStak } from "@/components/Navigation/DesktopStack";
import { MobileTabs } from "@/components/Navigation/MobileTabs";
import { useIsDesktop } from "@/components/Navigation/useIsDesktop";

export default function Layout() {
  const isDesktop = useIsDesktop();
  return isDesktop ? (
    <DesktopStak />
  ) : (
    <MobileTabs />
  );
}
