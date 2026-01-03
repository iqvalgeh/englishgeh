import { WordItem } from "./types";

export const verbs: WordItem[][] = [
  // LEVEL 1 — basic actions
  [
    { word: "run", icon: "walk-outline" },
    { word: "walk", icon: "walk-outline" },
    { word: "eat", icon: "restaurant-outline" },
    { word: "drink", icon: "water-outline" },
    { word: "sleep", icon: "bed-outline" },
    { word: "sit", icon: "help-circle-outline" },          // ❓
    { word: "stand", icon: "help-circle-outline" },        // ❓
    { word: "jump", icon: "trending-up-outline" },
    { word: "read", icon: "book-outline" },
    { word: "write", icon: "pencil-outline" },
    { word: "play", icon: "game-controller-outline" },
    { word: "sing", icon: "musical-notes-outline" },
    { word: "look", icon: "eye-outline" },
    { word: "listen", icon: "ear-outline" },
  ],

  // LEVEL 2 — daily actions
  [
    { word: "open", icon: "open-outline" },
    { word: "close", icon: "close-outline" },
    { word: "carry", icon: "briefcase-outline" },
    { word: "push", icon: "arrow-forward-outline" },
    { word: "pull", icon: "arrow-back-outline" },
    { word: "throw", icon: "paper-plane-outline" },
    { word: "catch", icon: "hand-left-outline" },
    { word: "clean", icon: "sparkles-outline" },
    { word: "wash", icon: "water-outline" },
    { word: "cook", icon: "restaurant-outline" },
    { word: "buy", icon: "cart-outline" },
    { word: "sell", icon: "pricetag-outline" },
    { word: "drive", icon: "car-outline" },
    { word: "ride", icon: "bicycle-outline" },
  ],

  // LEVEL 3 — skills & creation
  [
    { word: "build", icon: "build-outline" },               // fix (construct-outline ❌)
    { word: "create", icon: "bulb-outline" },
    { word: "design", icon: "color-palette-outline" },
    { word: "draw", icon: "brush-outline" },
    { word: "paint", icon: "color-fill-outline" },
    { word: "repair", icon: "hammer-outline" },
    { word: "fix", icon: "build-outline" },
    { word: "choose", icon: "checkmark-circle-outline" },
    { word: "decide", icon: "checkmark-done-outline" },
    { word: "plan", icon: "calendar-outline" },
    { word: "prepare", icon: "clipboard-outline" },
    { word: "organize", icon: "grid-outline" },
    { word: "practice", icon: "repeat-outline" },
    { word: "improve", icon: "trending-up-outline" },
  ],

  // LEVEL 4 — thinking & control
  [
    { word: "discover", icon: "compass-outline" },
    { word: "explore", icon: "map-outline" },
    { word: "develop", icon: "layers-outline" },
    { word: "manage", icon: "people-outline" },
    { word: "control", icon: "settings-outline" },
    { word: "protect", icon: "shield-checkmark-outline" },
    { word: "support", icon: "heart-outline" },
    { word: "provide", icon: "gift-outline" },
    { word: "increase", icon: "add-circle-outline" },
    { word: "reduce", icon: "remove-circle-outline" },
    { word: "analyze", icon: "analytics-outline" },
    { word: "compare", icon: "swap-horizontal-outline" },
    { word: "evaluate", icon: "clipboard-outline" },
    { word: "research", icon: "search-outline" },
  ],

  // LEVEL 5 — collaboration & systems
  [
    { word: "communicate", icon: "chatbubbles-outline" },
    { word: "participate", icon: "people-circle-outline" },
    { word: "collaborate", icon: "git-merge-outline" },
    { word: "negotiate", icon: "help-circle-outline" },     // ❌ handshake-outline
    { word: "coordinate", icon: "shuffle-outline" },
    { word: "implement", icon: "play-circle-outline" },
    { word: "monitor", icon: "eye-outline" },
    { word: "maintain", icon: "settings-outline" },
    { word: "predict", icon: "pulse-outline" },
    { word: "prevent", icon: "close-circle-outline" },
    { word: "respond", icon: "chatbox-ellipses-outline" },
    { word: "adapt", icon: "refresh-outline" },
    { word: "innovate", icon: "rocket-outline" },
    { word: "optimize", icon: "speedometer-outline" },
  ],

  // LEVEL 6 — advanced processes
  [
    { word: "specialize", icon: "star-outline" },
    { word: "prioritize", icon: "flag-outline" },
    { word: "characterize", icon: "person-outline" },
    { word: "differentiate", icon: "help-circle-outline" }, // ❌ contrast-outline
    { word: "standardize", icon: "list-outline" },
    { word: "visualize", icon: "eye-outline" },
    { word: "synchronize", icon: "sync-outline" },
    { word: "authorize", icon: "key-outline" },
    { word: "maximize", icon: "expand-outline" },
    { word: "minimize", icon: "contract-outline" },
    { word: "customize", icon: "options-outline" },
    { word: "formalize", icon: "document-text-outline" },
    { word: "globalize", icon: "globe-outline" },
    { word: "strategize", icon: "map-outline" },
  ],

  // LEVEL 7 — very abstract / academic
  [
    { word: "conceptualize", icon: "bulb-outline" },
    { word: "institutionalize", icon: "business-outline" },
    { word: "professionalize", icon: "briefcase-outline" },
    { word: "internationalize", icon: "globe-outline" },   // fix (earth-outline ❌)
    { word: "contextualize", icon: "layers-outline" },
    { word: "operationalize", icon: "settings-outline" },
    { word: "systematize", icon: "git-network-outline" },
    { word: "revolutionize", icon: "flash-outline" },
    { word: "philosophize", icon: "help-circle-outline" },  // ❓
    { word: "theorize", icon: "school-outline" },
    { word: "rationalize", icon: "analytics-outline" },
    { word: "prioritize", icon: "flag-outline" },
    { word: "legitimize", icon: "checkmark-circle-outline" }, // fix
    { word: "commercialize", icon: "cash-outline" },
  ],
];
