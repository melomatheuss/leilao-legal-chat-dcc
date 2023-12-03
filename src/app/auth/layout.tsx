import Auth from "@/templates/Auth";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Auth>{children}</Auth>;
}
