import Link from "next/link";
import { Star, Clock, Search, BarChart2 } from "lucide-react";
import { ConversationFlowMap } from "@/components/flow/ConversationFlowMap";

const quickLinks = [
  { href: "/search", label: "Search", icon: Search },
  { href: "/favorites", label: "Favorites", icon: Star },
  { href: "/history", label: "History", icon: Clock },
  { href: "/chart", label: "Chart", icon: BarChart2 },
];

export default function HomePage() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-8 px-6 pb-[env(safe-area-inset-bottom)]">
      <div className="flex flex-col items-center gap-1 text-center">
        <h1 className="text-lg font-semibold text-ink">Talk Flow</h1>
        <p className="text-sm text-ink-muted">今、何を話す？タップで選ぶ。</p>
      </div>
      <ConversationFlowMap />
      <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
        {quickLinks.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            aria-label={label}
            className="flex items-center gap-1.5 text-sm text-ink-muted"
          >
            <Icon size={16} />
            {label}
          </Link>
        ))}
      </div>
    </main>
  );
}
