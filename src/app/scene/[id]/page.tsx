import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { sceneCategories, getSceneCategory } from "@/data/sceneCategories";
import { getScenePhrasesByCategory } from "@/data/scenePhrases";
import { ScenePhraseList } from "@/components/scene/ScenePhraseList";
import { PageHeader } from "@/components/layout/PageHeader";
import { SceneTabs } from "@/components/layout/SceneTabs";
import type { SceneId } from "@/types/scene";

export function generateStaticParams() {
  return sceneCategories.map((c) => ({ id: c.id }));
}

function isSceneId(value: string): value is SceneId {
  return sceneCategories.some((c) => c.id === value);
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  if (!isSceneId(params.id)) return {};
  const scene = getSceneCategory(params.id);
  return { title: `${scene.label} | Talk Flow` };
}

export default function ScenePhrasesPage({ params }: { params: { id: string } }) {
  if (!isSceneId(params.id)) notFound();

  const scene = getSceneCategory(params.id);
  const phrases = getScenePhrasesByCategory(params.id);

  return (
    <main className="min-h-dvh px-5 pb-[calc(env(safe-area-inset-bottom)+24px)] pt-[calc(env(safe-area-inset-top)+16px)]">
      <PageHeader title={scene.label} subtitle={scene.labelJa} backHref="/scene" />
      <SceneTabs active={scene.id} />

      <ScenePhraseList phrases={phrases} />
    </main>
  );
}
