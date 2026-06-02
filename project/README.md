# Closely — Design System

**Closely** (wordmark: **CloselyAI**) is a cloud-based **AI-agents platform for physical security operations** — built for Security Operations Centers, monitoring centers, and security companies, with an initial focus on **Latin America (Colombia, Q2 2026)**. It is **Spanish-first, English-supported**.

Closely plugs into a customer's **existing camera infrastructure** (Dahua, Hikvision, Milestone via NVR / RTSP — no rip-and-replace) and adds an intelligence layer powered by a **three-layer detection pipeline: motion trigger → YOLOv8 computer vision → Claude Vision reasoning**. It runs 100% on Google Cloud Platform and is positioned as "40× faster than on-premise alternatives." A core principle is **human-in-the-loop, always** — every detected incident is validated or dismissed by a human operator; Closely never takes autonomous physical actions.

### The product surface
There is **one product surface** represented in the source material: the **marketing landing page** (`closely.dev`), a dark, technical, "operator console" aesthetic that previews the real operator dashboard, the agent roster, and outcome metrics. The app/dashboard itself is shown only as embedded mockups within the marketing site (live camera feed, incidents feed, weekly report, patrol map, lobby access list).

### The AI agents (product taxonomy)
- **Watcher** *(active)* — per-camera anomaly detection: intrusion, loitering, tailgating, open doors, masked persons.
- **Investigator** *(active)* — natural-language semantic search across incident history.
- **Reporter** *(active)* — weekly/monthly AI-generated security reports.
- **Supervisor** *(active)* — GPS patrol tracking, coverage gaps, auto-dispatch to nearest guard.
- **Gatekeeper** *(coming soon)* — access-control integration for buildings and lobbies.

### Headline outcomes used in copy
`+32%` more proposals sold/month · `−90%` lower monitoring personnel costs · `12×` more alerts detected vs. traditional CCTV.

---

## Sources

This design system was reverse-engineered from the official landing-page codebase. If you have access, explore these to build with higher fidelity:

- **GitHub:** `miguel-castro-arango/Closely-AI-landing-page` (Next.js 16 · React 19 · Tailwind v4 · framer-motion · lucide-react · three.js)
  - Design tokens lifted from `src/app/globals.css` (Tailwind `@theme`).
  - Copy lifted from `src/i18n/dictionaries/en.json` and `public/llms.txt`.
  - Component structure from `src/components/{ui,layout,sections}`.
- **Live site:** https://closely.dev/en · https://closely.dev/es
- **Contact in materials:** hello@closely.dev · Bogotá, Colombia

> Note: the repo loads its three typefaces via `next/font` (no font files committed). This system loads the **same genuine Google Fonts** (Geist, Geist Mono, Tomorrow) from the Google Fonts CDN — not substitutes. See *Caveats* below.

---

## CONTENT FUNDAMENTALS

**Voice:** confident, technical, outcome-driven. Speaks operator-to-operator — it assumes the reader runs a real security operation and respects their expertise. No hype words, no fluff; claims are specific and quantified.

**Address:** Second person — **"your cameras," "your team," "your operator."** The product is "Closely" or "we." Never first-person singular.

**Tone & vibe:** "Active intelligence, not passive recording." A subtle adversarial edge against the status quo (traditional CCTV, rising labor costs) — e.g. *"Hire AI agents, not humans."* / *"Don't let rising labor costs destroy your margin."* Reassuring on safety and control (human-in-the-loop is repeated like a mantra).

**Casing:**
- **Display headings are set UPPERCASE** (Tomorrow font) — e.g. "ARTIFICIAL INTELLIGENCE FOR PHYSICAL SECURITY COMPANIES."
- **Body copy is sentence case.**
- **Mono micro-labels are UPPERCASE with wide tracking** — `AGENT.WATCHER`, `CAM-02 · BACK DOOR`, `ANALYZING`, `DELIVERED`, `LIVE`.

**Numbers & stats:** Always concrete and signed where relevant: `+32%`, `−90%`, `12×`, `40×`, `99.9%`, `<5%`, `>75%`. Confidence scores as percentages (`94%`) or decimals on overlays (`0.94`).

**Technical specificity is a feature:** real brand names (Dahua, Hikvision, Milestone), real stack (YOLOv8, Claude Vision, GCP, NVR/RTSP), real regulation (Colombia's Ley 1581). This signals competence to a technical buyer.

**Emoji:** Not used in prose. A **⚠ warning glyph** appears in camera-overlay alert tags (`⚠ Stolen vehicle`), and `●`/`✓`/`✕` glyphs appear as status markers in mono labels. That is the full extent — treat it as iconographic, not decorative.

**Bilingual:** All UI, alerts and reports ship in Spanish and English. Operator-facing action buttons in the live demo are often Spanish ("Validar · Despachar", "Descartar"). For new English work, use the English equivalents ("Validate · Dispatch", "Dismiss").

**Example copy:**
> *"Closely monitors every camera 24/7, detects intrusions, loitering, tailgating and more — and alerts your team in real time. No more passive recordings. Active intelligence."*

---

## VISUAL FOUNDATIONS

**Overall vibe:** a **dark "operator console."** Near-black navy canvas, electric-blue→indigo brand accent, monospace telemetry everywhere, and live-feeling motion (pulsing dots, rotating feeds, tracking boxes). It reads like looking over the shoulder of someone monitoring a real SOC.

**Color:**
- Canvas is **`#0A0B14`** (near-black blue). Elevated surfaces **`#11131F`**, and most cards are **translucent** (`rgba(17,19,32,0.6)`) so the background glow shows through.
- Brand accent is **electric blue `#3B82F6` → indigo `#6366F1`** (gradient), with light indigo `#818CF8` as the text-gradient endpoint. Used sparingly: CTAs, eyebrows, links, the "AI" in the wordmark, and gradient stat numbers.
- Semantic: **success `#10B981`** (validated/live), **danger `#EF4444`** (intrusion/critical), **warn `#F59E0B`** (loitering/open-door/"coming soon"). Always shown as a **10% tint fill + 30% border** chip, never as solid blocks of color in UI.
- Borders are low-contrast hairlines: `#1E2233` default, `#2A2F45` on hover/emphasis.

**Type:** three families. **Tomorrow** (techy geometric) for display headings + wordmark, set UPPERCASE, semibold, tight tracking. **Geist** for all body/UI. **Geist Mono** for the heavy layer of telemetry: eyebrows (0.18em tracking), timestamps, camera IDs, confidence scores, pipeline labels, terminal commands, stat sub-labels. Hero ~72px, section titles ~44px; body 16px; mono micro-text 9.5–11px.

**Backgrounds:** never flat. Layered: (1) a **radial blue/indigo glow** from the top (`bg-radial-fade`), (2) a faint **dotted grid** (`radial-gradient` dots, 32px) masked to fade out, and (3) on the hero, an animated three.js shader behind everything at low opacity. Imagery is sparse — the "imagery" is the **product mockups themselves** (camera feeds, dashboards). No stock photography in chrome; the only real photos are tiny incident thumbnails (delivery riders) inside the Investigator mockup.

**Imagery vibe:** cool, dark, surveillance-grade. Camera frames are near-black with subtle perspective/scanline texture and a colored detection box. Client logos shown **grayscale at reduced opacity** in a marquee strip.

**Motion:** purposeful and "alive," never bouncy. `fadeUp`/`fadeIn` on scroll reveal; a **typewriter** effect on section titles; **pulsing ping dots** for live/recording status; a **rotating incidents feed** (item shifts every ~4.2s); a **detection box that breathes** (opacity pulse) and drifts along waypoints; counters that ease up. Easing favors `[0.16, 1, 0.3, 1]` (expo-out) and `easeInOut`. All motion respects `prefers-reduced-motion`.

**Hover states:** links lighten (muted → fg). Primary buttons **brighten** (`brightness(1.1)`); active **darkens** (`brightness(0.95)`). Secondary buttons shift border toward accent. Cards/rows shift border `#1E2233 → #2A2F45`. No scale-on-hover.

**Borders, radii & cards:** generous, modern rounding — `4px` mono tags, `8px` rows, `12px` feeds/mockups, `16px` primary cards, `18px` the browser-chrome dashboard shell, `9999px` buttons & badges. A card = **1px hairline border + translucent dark fill + soft drop shadow** (`shadow-card`: subtle inset top-highlight + `0 20px 40px -20px` shadow). No heavy borders, no left-accent-stripe cards.

**Shadows & glow:** two ideas — a soft **elevation shadow** on cards/terminals, and a **brand glow** (`0 0 60px -10px blue/35%`) reserved for primary CTAs and "live" focal elements. An `ring-accent` (1px accent ring + glow) marks the active/focused element.

**Transparency & blur:** used heavily and intentionally — translucent cards over the background glow, and **backdrop-blur** on the sticky nav (on scroll), the dashboard chrome, and floating widgets (the voice-call popover). This is what gives the "glassy console" feel.

**Layout rules:** centered, max-width **1152px** container with 24px gutters. Sections separated by full-width `1px` top borders and ~96px (`py-24`) vertical rhythm. The nav is **fixed/sticky**, transparent at top, gaining border + blur after 16px scroll. Headings left-aligned in content sections, centered in the hero and final CTA.

---

## ICONOGRAPHY

- **System:** **Lucide** (`lucide-react` in the codebase). In this design system they're reproduced as inline SVGs: **24×24 viewBox, `stroke-width: 1.75`, round caps + joins, `fill: none`, `stroke: currentColor`.** Action glyphs use `stroke-width: 2`–`2.5` (check/x).
- **Color:** icons inherit `currentColor` — neutral `var(--fg)`/`var(--muted)` in chrome, semantic colors on status actions (success check, danger x), accent on the primary-CTA arrow.
- **Common icons:** `shield` (Watcher), `search` (Investigator), `file-text` (Reporter), `map-pin` (Supervisor), `door-open` (Gatekeeper); plus `eye`/`eye-off`, `film`, `bell-off`, `plug`, `sliders`, `user-check`, `alert-triangle`, `phone`, `globe`, `arrow-right`/`arrow-down`, `chevron-down`, `check`, `x`.
- **No icon font.** Use inline Lucide SVGs (the `Icon` component in `ui_kits/closely-website/primitives.jsx` carries the exact path set), or load Lucide from CDN at the same 1.75 stroke weight.
- **Glyphs as icons:** a small set of unicode glyphs appears inside mono labels — `●` (recording/live dot), `⚠` (alert tags), `✓`/`✕` (access allow/deny), `·` as a separator, `→` in pipeline strings. **No emoji** in the UI.
- **Logos:** the **CloselyAI wordmark** is type-only (Tomorrow, uppercase, "AI" in accent blue) — there is no separate logomark. Partner/client logos live in `assets/clients/`.

---

## Files in this design system (index)

| Path | What it is |
|---|---|
| `README.md` | This document — context, sources, content & visual foundations, iconography, manifest. |
| `colors_and_type.css` | The single source of truth for tokens: CSS variables (color, type, radii, shadows, gradients, spacing) + semantic type classes (`.cl-h1`, `.cl-eyebrow`, `.cl-mono`, …). Loads the three fonts. **Import this in any new artifact.** |
| `SKILL.md` | Agent-Skills front-matter wrapper so this folder can be used directly in Claude Code. |
| `assets/clients/*.png` | Partner / client security-company logos. |
| `assets/investigator/*.jpg` | Incident thumbnails (delivery riders) used in the Investigator search mockup. |
| `preview/*.html` | 19 small Design-System cards (type, color, spacing, components, brand) shown in the Design System tab. |
| `ui_kits/closely-website/` | **UI Kit** — a high-fidelity, interactive React recreation of the marketing site. |

### UI Kits
- **`ui_kits/closely-website/`** — the Closely marketing site. Open `index.html`. Interactive: live operator dashboard (rotating incident feed, validate/dismiss an alert, periodic voice-call popover), an agent **tab switcher** with five distinct mockups (Watcher feed, Investigator search, Reporter card, Supervisor patrol map, Gatekeeper lobby list), and an FAQ accordion. See its own `README.md` for component coverage.

---

## Caveats / substitutions
- **Fonts:** loaded from the Google Fonts CDN (Geist, Geist Mono, Tomorrow). These are the *genuine* families the product uses via `next/font` — not lookalikes — but no self-hosted font files are included. Drop `.woff2` files into a `fonts/` folder and swap the `@import` in `colors_and_type.css` if you need offline/self-hosted fonts.
- **Hero shader:** the real site renders an animated three.js shader behind the hero at low opacity. The UI kit approximates this with the static radial-glow + dotted-grid layers (visually very close, no WebGL dependency).
- **Video mockups:** the real Watcher/Supervisor mockups play `.mp4` clips (not in the repo's public assets). The UI kit reconstructs these as styled, animated CSS "camera/map" frames with the same HUD overlays.
