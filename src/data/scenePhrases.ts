import type { ScenePhrase } from "@/types/scene";
import type { IndustryTag } from "@/types/phrase";

/**
 * シーン別フレーズデータ。各フレーズは常にQuick/Standard/Politeの3段階＋伝え方(ジェスチャー)を持つ。
 * 目的は英語力向上ではなく、最小限の英語で最大限の意思疎通を実現すること。
 * 将来的に件数を増やす場合もこの配列に追記するだけでよい(呼び出し側は関数経由のため変更不要)。
 */
export const scenePhrases: ScenePhrase[] = [
  // ---- airport: 空港・移動 ----
  {
    id: "air1",
    scene: "airport",
    situation: "入国審査で渡航目的を聞かれた",
    tiers: {
      quick: "Business.",
      standard: "I'm here for business.",
      polite: "I'm visiting for a business meeting with a hospital.",
    },
    gesture: "落ち着いた表情で審査官の目を見て、一言でしっかり答える",
    frequency: 5,
    difficulty: 1,
    tags: ["business"],
  },
  {
    id: "air2",
    scene: "airport",
    situation: "タクシーで行き先を伝える",
    tiers: {
      quick: "Hilton, please.",
      standard: "To the Hilton Hotel, please.",
      polite: "Could you take us to the Hilton Hotel, please?",
    },
    gesture: "住所や地図をスマホ画面で見せながら言う",
    frequency: 5,
    difficulty: 1,
    tags: ["business", "casual"],
  },
  {
    id: "air3",
    scene: "airport",
    situation: "渋滞や乗り継ぎで遅れそうなことを伝える",
    tiers: {
      quick: "Running late.",
      standard: "We're running about 15 minutes late.",
      polite: "I'm afraid we'll be about 15 minutes late — sorry for the trouble.",
    },
    gesture: "両手を軽く合わせ、申し訳なさそうな表情を添える",
    frequency: 3,
    difficulty: 2,
    tags: ["business"],
  },
  {
    id: "air4",
    scene: "airport",
    situation: "手荷物の超過料金を確認する",
    tiers: {
      quick: "How much extra?",
      standard: "How much is the extra baggage fee?",
      polite: "Could you tell me how much the extra baggage fee would be?",
    },
    gesture: "荷物を軽く持ち上げて示しながら聞く",
    frequency: 2,
    difficulty: 2,
    tags: ["business"],
  },

  // ---- hotel: ホテル ----
  {
    id: "htl1",
    scene: "hotel",
    situation: "フロントでチェックインする",
    tiers: {
      quick: "Check-in, please.",
      standard: "I'd like to check in, please.",
      polite: "Hi, I have a reservation under Shoji — I'd like to check in.",
    },
    gesture: "パスポートや予約確認画面を差し出しながら言う",
    frequency: 5,
    difficulty: 1,
    tags: ["business"],
  },
  {
    id: "htl2",
    scene: "hotel",
    situation: "部屋のWi-Fiが繋がらない",
    tiers: {
      quick: "Wi-Fi's down.",
      standard: "The Wi-Fi isn't working in my room.",
      polite: "I'm sorry to bother you, but the Wi-Fi in my room doesn't seem to be working.",
    },
    gesture: "部屋番号をメモかスマホ画面で見せながら伝える",
    frequency: 3,
    difficulty: 2,
    tags: ["business"],
  },
  {
    id: "htl3",
    scene: "hotel",
    situation: "モーニングコールを依頼する",
    tiers: {
      quick: "Wake-up call, 6 AM.",
      standard: "Could I get a wake-up call at 6 AM?",
      polite: "Would it be possible to arrange a wake-up call for 6 AM tomorrow?",
    },
    gesture: "時計や時刻表示を指差しながら伝える",
    frequency: 3,
    difficulty: 1,
    tags: ["business"],
  },

  // ---- meal: 食事 ----
  {
    id: "mel1",
    scene: "meal",
    situation: "アレルギーや食べられないものを伝える",
    tiers: {
      quick: "No nuts.",
      standard: "I can't eat nuts.",
      polite: "Could you let the kitchen know I have a nut allergy?",
    },
    gesture: "メニューの該当箇所を指差しながら伝える",
    frequency: 3,
    difficulty: 1,
    tags: ["business", "medical"],
  },
  {
    id: "mel2",
    scene: "meal",
    situation: "支払いを申し出る",
    tiers: {
      quick: "My treat.",
      standard: "This one's on me.",
      polite: "Please, let me take care of this today.",
    },
    gesture: "伝票に軽く手を置きながら笑顔で言う",
    frequency: 4,
    difficulty: 1,
    tags: ["business", "casual"],
  },
  {
    id: "mel3",
    scene: "meal",
    situation: "おすすめのメニューを聞く",
    tiers: {
      quick: "Any recommendations?",
      standard: "What would you recommend here?",
      polite: "Could you recommend something you'd suggest here?",
    },
    gesture: "メニューを一緒に覗き込みながら聞く",
    frequency: 4,
    difficulty: 1,
    tags: ["casual", "exhibition"],
  },
  {
    id: "mel4",
    scene: "meal",
    situation: "乾杯の音頭を取る",
    tiers: {
      quick: "Cheers!",
      standard: "Cheers, to our partnership!",
      polite: "I'd like to raise a toast to our continued partnership.",
    },
    gesture: "グラスを軽く掲げ、相手の目を見る",
    frequency: 4,
    difficulty: 1,
    tags: ["business", "casual"],
  },

  // ---- hospital: 病院訪問・医師紹介・オペ見学 ----
  {
    id: "hos1",
    scene: "hospital",
    situation: "医師を紹介する",
    tiers: {
      quick: "This is Dr. Tanaka.",
      standard: "This is Dr. Tanaka, our lead surgeon.",
      polite: "Allow me to introduce Dr. Tanaka, who leads the surgical team here.",
    },
    gesture: "紹介する相手の方向に手のひらを向ける(指差ししない)",
    frequency: 4,
    difficulty: 2,
    tags: ["medical", "business"],
  },
  {
    id: "hos2",
    scene: "hospital",
    situation: "製品の不具合報告を受けた",
    tiers: {
      quick: "Understood. I'll check.",
      standard: "I understand. I'll look into this right away.",
      polite: "Thank you for letting us know — I'll investigate this immediately and follow up with you.",
    },
    gesture: "深くうなずきながら聞き、メモを取る姿勢を見せる",
    frequency: 3,
    difficulty: 2,
    tags: ["medical", "business"],
  },
  {
    id: "hos3",
    scene: "hospital",
    situation: "オペ見学で入室・観察の許可を確認する",
    tiers: {
      quick: "May I observe?",
      standard: "May I observe the operation from here?",
      polite: "Would it be possible for me to observe the procedure, if it's not an inconvenience?",
    },
    gesture: "清潔エリアの案内表示を指差しながら確認する",
    frequency: 2,
    difficulty: 2,
    tags: ["medical"],
  },
  {
    id: "hos4",
    scene: "hospital",
    situation: "製品の使い方を説明する",
    tiers: {
      quick: "Let me show you.",
      standard: "Let me show you how this works.",
      polite: "Would you like me to walk you through how this device works?",
    },
    gesture: "製品を手に取り、実際に操作しながら見せる",
    frequency: 4,
    difficulty: 1,
    tags: ["medical", "business"],
  },
  {
    id: "hos5",
    scene: "hospital",
    situation: "訪問の御礼を伝え、次回のアポにつなげる",
    tiers: {
      quick: "Thank you. See you soon.",
      standard: "Thank you for your time today. I'll follow up soon.",
      polite: "Thank you very much for your time today — I'll be in touch soon to arrange our next visit.",
    },
    gesture: "握手＋軽いお辞儀、最後まで笑顔を保つ",
    frequency: 4,
    difficulty: 1,
    tags: ["medical", "business"],
  },

  // ---- sales: 営業同行 ----
  {
    id: "sal1",
    scene: "sales",
    situation: "初対面で名刺交換をする",
    tiers: {
      quick: "Nice to meet you.",
      standard: "Nice to meet you, I'm Shoji.",
      polite: "It's a pleasure to meet you — thank you for taking the time today.",
    },
    gesture: "両手で名刺を受け取り、一度目を通してからしまう",
    frequency: 5,
    difficulty: 1,
    tags: ["business"],
  },
  {
    id: "sal2",
    scene: "sales",
    situation: "商談をクロージングに進める",
    tiers: {
      quick: "Shall we proceed?",
      standard: "Shall we move forward with this?",
      polite: "Would it be possible to move forward with this proposal?",
    },
    gesture: "少し前傾姿勢で、笑顔と軽いうなずきを添える",
    frequency: 3,
    difficulty: 2,
    tags: ["business"],
  },
  {
    id: "sal3",
    scene: "sales",
    situation: "競合製品との比較質問に答える",
    tiers: {
      quick: "We're more reliable.",
      standard: "Compared to that, ours offers better reliability.",
      polite: "If I may, compared to that option, ours offers better long-term reliability and support.",
    },
    gesture: "資料やサンプルを手に取りながら説明する",
    frequency: 3,
    difficulty: 3,
    tags: ["business", "exhibition"],
  },
  {
    id: "sal4",
    scene: "sales",
    situation: "訪問前に代理店担当者へ最新状況を確認する",
    tiers: {
      quick: "Any updates?",
      standard: "Is there anything I should know before we go in?",
      polite: "Before we meet them, is there anything important I should be aware of?",
    },
    gesture: "メモ帳を開きながら真剣な表情で聞く",
    frequency: 3,
    difficulty: 1,
    tags: ["business"],
  },

  // ---- conference: 学会・展示会・製品デモ・勉強会・販売戦略・マーケティング ----
  {
    id: "con1",
    scene: "conference",
    situation: "展示ブースで通行客に声をかける",
    tiers: {
      quick: "Interested?",
      standard: "Would you like a quick demo?",
      polite: "Would you be interested in a short demonstration of our product?",
    },
    gesture: "製品を手に取り実演しながら声をかける",
    frequency: 4,
    difficulty: 1,
    tags: ["exhibition", "business"],
  },
  {
    id: "con2",
    scene: "conference",
    situation: "学会でのネットワーキング・名刺交換",
    tiers: {
      quick: "Great to connect.",
      standard: "It's great to connect with you here.",
      polite: "It's a pleasure to connect with you at this event — I hope we can stay in touch.",
    },
    gesture: "笑顔で名刺を差し出す",
    frequency: 4,
    difficulty: 1,
    tags: ["exhibition", "casual"],
  },
  {
    id: "con3",
    scene: "conference",
    situation: "プレゼン後の質疑応答で答える",
    tiers: {
      quick: "Good question.",
      standard: "That's a good question — let me explain.",
      polite: "Thank you for the question — allow me to explain in more detail.",
    },
    gesture: "一呼吸置いてから、質問者の方を向いて答える",
    frequency: 3,
    difficulty: 2,
    tags: ["business", "exhibition"],
  },
  {
    id: "con4",
    scene: "conference",
    situation: "代理店との販売戦略ミーティングで提案する",
    tiers: {
      quick: "Let's focus here.",
      standard: "I think we should focus on this market first.",
      polite: "I'd suggest we prioritize this market segment first, based on what we've seen.",
    },
    gesture: "資料の該当箇所を指差しながら話す",
    frequency: 2,
    difficulty: 3,
    tags: ["business"],
  },
  {
    id: "con5",
    scene: "conference",
    situation: "勉強会でわからない点を質問する",
    tiers: {
      quick: "Could you clarify?",
      standard: "Could you clarify that last point?",
      polite: "Would you mind clarifying that last point a bit further?",
    },
    gesture: "軽く手を挙げてから質問する",
    frequency: 3,
    difficulty: 2,
    tags: ["business", "exhibition"],
  },

  // ---- contract: 契約・商談 ----
  {
    id: "ctr1",
    scene: "contract",
    situation: "価格交渉で柔軟性を確認する",
    tiers: {
      quick: "Can you do better?",
      standard: "Is there any flexibility on price?",
      polite: "Would there be any room for flexibility on the pricing?",
    },
    gesture: "即答せず一呼吸置き、真剣な表情に切り替える",
    frequency: 3,
    difficulty: 2,
    tags: ["business"],
  },
  {
    id: "ctr2",
    scene: "contract",
    situation: "契約条件を一緒に確認する",
    tiers: {
      quick: "Let's confirm the terms.",
      standard: "Let's go over the contract terms together.",
      polite: "Could we go through the contract terms together, just to make sure everything's clear?",
    },
    gesture: "契約書の該当ページを一緒に開いて指差す",
    frequency: 3,
    difficulty: 2,
    tags: ["business"],
  },
  {
    id: "ctr3",
    scene: "contract",
    situation: "即決を避け検討時間が欲しいと伝える",
    tiers: {
      quick: "Need some time.",
      standard: "We need a bit more time to consider this.",
      polite: "Would it be possible to have a little more time to consider this internally?",
    },
    gesture: "手のひらを軽く見せる「少し待って」のジェスチャー",
    frequency: 2,
    difficulty: 2,
    tags: ["business"],
  },
  {
    id: "ctr4",
    scene: "contract",
    situation: "合意に至ったことを伝える",
    tiers: {
      quick: "Deal.",
      standard: "We have a deal.",
      polite: "I'm glad we could reach an agreement today.",
    },
    gesture: "握手をしながら、笑顔で相手の目を見る",
    frequency: 3,
    difficulty: 1,
    tags: ["business"],
  },

  // ---- smalltalk: 雑談・アイスブレイク ----
  {
    id: "smt1",
    scene: "smalltalk",
    situation: "移動後に話題を切り出す",
    tiers: {
      quick: "How was your flight?",
      standard: "How was your flight over?",
      polite: "I hope your trip here wasn't too tiring?",
    },
    gesture: "明るい表情でリラックスした姿勢を見せる",
    frequency: 4,
    difficulty: 1,
    tags: ["casual"],
  },
  {
    id: "smt2",
    scene: "smalltalk",
    situation: "天気の話で場を和ませる",
    tiers: {
      quick: "Nice weather, huh?",
      standard: "It's nice weather today, isn't it?",
      polite: "We're lucky to have such nice weather during your visit.",
    },
    gesture: "軽く空を見上げるジェスチャーを添える",
    frequency: 4,
    difficulty: 1,
    tags: ["casual"],
  },
  {
    id: "smt3",
    scene: "smalltalk",
    situation: "趣味やプライベートの話を振る",
    tiers: {
      quick: "Any hobbies?",
      standard: "Do you have any hobbies?",
      polite: "May I ask what you enjoy doing in your free time?",
    },
    gesture: "興味を示す表情でうなずきながら聞く",
    frequency: 3,
    difficulty: 1,
    tags: ["casual"],
  },

  // ---- sightseeing: 観光・おもてなし ----
  {
    id: "sig1",
    scene: "sightseeing",
    situation: "観光の提案に前向きに応じる",
    tiers: {
      quick: "Sounds great!",
      standard: "That sounds great, let's go.",
      polite: "That sounds wonderful — I'd love to see it if time allows.",
    },
    gesture: "目を輝かせてうなずく",
    frequency: 2,
    difficulty: 1,
    tags: ["casual"],
  },
  {
    id: "sig2",
    scene: "sightseeing",
    situation: "時間がなく丁重に断る",
    tiers: {
      quick: "Maybe next time.",
      standard: "I'd love to, but I'm a bit short on time.",
      polite: "I really appreciate the offer, but I'm afraid my schedule is quite tight this time.",
    },
    gesture: "申し訳なさそうな表情で軽く手を胸に当てる",
    frequency: 2,
    difficulty: 2,
    tags: ["casual", "business"],
  },
  {
    id: "sig3",
    scene: "sightseeing",
    situation: "写真撮影をお願いする",
    tiers: {
      quick: "Photo, please?",
      standard: "Could you take a photo of us?",
      polite: "Would you mind taking a photo of us together?",
    },
    gesture: "スマホを差し出しながら笑顔で頼む",
    frequency: 2,
    difficulty: 1,
    tags: ["casual"],
  },

  // ---- trouble: トラブル対応・聞き返し・確認 ----
  {
    id: "trb1",
    scene: "trouble",
    situation: "相手の発言が聞き取れなかった",
    tiers: {
      quick: "Sorry?",
      standard: "Could you say that again?",
      polite: "I'm sorry, could you say that once more, a little more slowly?",
    },
    gesture: "手を耳に軽く添え、困った笑顔を見せる",
    frequency: 5,
    difficulty: 1,
    tags: ["business", "medical"],
  },
  {
    id: "trb2",
    scene: "trouble",
    situation: "聞き間違いを防ぐため書いてほしいと頼む",
    tiers: {
      quick: "Could you write it down?",
      standard: "Could you write that down for me?",
      polite: "Would you mind writing that down, just so I don't misunderstand?",
    },
    gesture: "メモ帳とペンを差し出す",
    frequency: 4,
    difficulty: 1,
    tags: ["business"],
  },
  {
    id: "trb3",
    scene: "trouble",
    situation: "体調不良を伝える",
    tiers: {
      quick: "I feel sick.",
      standard: "I'm not feeling well.",
      polite: "I'm sorry, I'm not feeling very well — could we take a short break?",
    },
    gesture: "お腹や頭を軽く押さえながら伝える",
    frequency: 2,
    difficulty: 1,
    tags: ["business", "casual"],
  },
  {
    id: "trb4",
    scene: "trouble",
    situation: "忘れ物・紛失に気づいた",
    tiers: {
      quick: "I lost my bag.",
      standard: "I think I left my bag somewhere.",
      polite: "I'm afraid I may have left my bag behind — could you help me look into it?",
    },
    gesture: "手のひらを上に向け、困った表情を見せる",
    frequency: 2,
    difficulty: 2,
    tags: ["business"],
  },
  {
    id: "trb5",
    scene: "trouble",
    situation: "専門用語が伝わらず翻訳アプリの利用を提案する",
    tiers: {
      quick: "Use an app?",
      standard: "Could we use a translation app?",
      polite: "Would it be alright if we used a translation app to make sure we understand each other correctly?",
    },
    gesture: "スマホの翻訳アプリ画面を見せながら提案する",
    frequency: 3,
    difficulty: 1,
    tags: ["business", "medical"],
  },

  // ---- departure: 帰国 ----
  {
    id: "dep1",
    scene: "departure",
    situation: "別れの挨拶をする",
    tiers: {
      quick: "Thank you, safe travels.",
      standard: "Thank you so much, see you next time.",
      polite: "Thank you very much for everything — I look forward to our next visit.",
    },
    gesture: "握手＋軽いお辞儀、最後まで笑顔を保つ",
    frequency: 4,
    difficulty: 1,
    tags: ["business"],
  },
  {
    id: "dep2",
    scene: "departure",
    situation: "ホテルをチェックアウトする",
    tiers: {
      quick: "Checking out, please.",
      standard: "I'd like to check out, please.",
      polite: "I'd like to check out — could I also get a receipt for my stay?",
    },
    gesture: "ルームキーをカウンターに置きながら言う",
    frequency: 3,
    difficulty: 1,
    tags: ["business"],
  },
  {
    id: "dep3",
    scene: "departure",
    situation: "出国審査で渡航目的を聞かれた",
    tiers: {
      quick: "Business trip.",
      standard: "I was here on a business trip.",
      polite: "I was here on a business trip, visiting a hospital partner.",
    },
    gesture: "落ち着いた表情でパスポートを差し出す",
    frequency: 3,
    difficulty: 1,
    tags: ["business"],
  },
];

export function getScenePhrasesByCategory(scene: ScenePhrase["scene"]): ScenePhrase[] {
  return scenePhrases.filter((p) => p.scene === scene);
}

export function getScenePhraseById(id: string): ScenePhrase | undefined {
  return scenePhrases.find((p) => p.id === id);
}

/**
 * キーワード検索とタグ絞り込みを組み合わせて検索する。
 * キーワードは状況説明・3段階すべてのテキストを対象にする。
 */
export function searchScenePhrases(query: string, tags: IndustryTag[] = []): ScenePhrase[] {
  const q = query.trim().toLowerCase();
  if (!q && tags.length === 0) return [];

  return scenePhrases.filter((p) => {
    const matchesQuery =
      q === "" ||
      p.situation.includes(q) ||
      p.tiers.quick.toLowerCase().includes(q) ||
      p.tiers.standard.toLowerCase().includes(q) ||
      p.tiers.polite.toLowerCase().includes(q);
    const matchesTags = tags.length === 0 || tags.some((t) => p.tags.includes(t));
    return matchesQuery && matchesTags;
  });
}
