---
name: closely-design
description: Use this skill to generate well-branded interfaces and assets for Closely, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation
- **Closely** = cloud AI-agents platform for physical security operations (SOCs / monitoring centers), Spanish-first / LATAM. Dark "operator console" aesthetic.
- **Tokens:** `colors_and_type.css` — import it and use the CSS variables + `.cl-*` type classes. Never hardcode hexes.
- **The look in one line:** near-black navy canvas (`#0A0B14`), electric-blue→indigo accent (`#3B82F6`→`#6366F1`), Tomorrow UPPERCASE display headings, Geist body, Geist Mono telemetry everywhere, translucent hairline-bordered cards over a soft radial glow, pulsing "live" dots.
- **Components:** copy from `ui_kits/closely-website/` (`primitives.jsx` has Icon/Button/Badge/SectionHeading).
- **Icons:** Lucide, 24×24, stroke 1.75, round.
- **Voice:** confident, technical, second-person ("your team"), quantified claims, human-in-the-loop reassurance. Display copy UPPERCASE, body sentence case. No emoji.
