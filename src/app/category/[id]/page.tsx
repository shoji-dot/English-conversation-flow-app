import { notFound } from "next/navigation";
import { categories, getCategory } from "@/data/categories";
import { getPhrasesByCategory } from "@/data/phrases";
import { PhraseList } from "@/components/phrase/PhraseList";
import { PageHeader } from "@/components/layout/PageHeader";
import type { CategoryId } from "@/types/phrase";

export function generateStaticParams() {
  return categories.map((c) => ({ id: c.id }));
}

function isCategoryId(value: string): value is CategoryId {
  return categories.some((c) => c.id === value);
}

export default function CategoryPage({ params }: { params: { id: string } }) {
  if (!isCategoryId(params.id)) notFound();

  const category = getCategory(params.id);
  const phrases = getPhrasesByCategory(params.id);

  return (
    <main className="min-h-dvh px-5 pb-[calc(env(safe-area-inset-bottom)+24px)] pt-[calc(env(safe-area-inset-top)+16px)]">
      <PageHeader title={category.label} subtitle={category.labelJa} />

      <PhraseList phrases={phrases} />
    </main>
  );
}
