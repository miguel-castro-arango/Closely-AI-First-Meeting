## Closely Website — UI Kit

A high-fidelity, interactive recreation of the **Closely** marketing site (`closely.dev`), rebuilt from the `miguel-castro-arango/Closely-AI-landing-page` codebase. Dark "operator console" aesthetic. Open **`index.html`**.

These are cosmetic recreations for prototyping — modular, reusable, not production code.

### Run it
Open `index.html`. It loads React 18 + Babel from CDN and pulls tokens from `../../colors_and_type.css`. All component files are plain JSX loaded via `<script type="text/babel">`; each exports to `window`.

### Files
| File | Components |
|---|---|
| `primitives.jsx` | `Icon` (Lucide path set), `Button` (primary/secondary/ghost), `Badge` (status pills + pulse), `Container`, `SectionHeading` |
| `Nav.jsx` | `Nav` — sticky header, blurs on scroll, lang switcher, CTA |
| `Dashboard.jsx` | `Dashboard` — browser-chrome shell + `CameraFeed` (detection box, voice-call popover, **validate/dismiss** actions), `AlertBar`, `IncidentsFeed` (rotates every 4.2s) |
| `Hero.jsx` | `Hero` — uppercase gradient headline, layered glow/grid background, embeds the live dashboard |
| `Agents.jsx` | `Agents` — **tab switcher** across the 5 agents, each with a distinct mockup: Watcher (camera feed), Investigator (semantic search + thumbnails), Reporter (report card + bar chart), Supervisor (patrol map), Gatekeeper (lobby access list) |
| `Sections.jsx` | `Clients`, `Problem`, `HowItWorks` (terminal strips), `Metrics` (gradient big-numbers), `Differentiators`, `Comparison` (table), `Faq` (accordion), `FinalCta`, `Footer` |

### Interactions
- **Validate / Dismiss** an alert in the camera feed → state swaps to a confirmation row.
- **Incident feed** auto-rotates; **voice-call** popover appears periodically.
- **Agent tabs** swap copy + mockup.
- **FAQ** accordion expands one item at a time.
- Nav links smooth-scroll; nav gains border + blur after scrolling.

### Fidelity notes
- The hero's three.js shader is approximated with the radial-glow + dotted-grid background layers.
- Video-based Watcher/Supervisor mockups are reconstructed as animated CSS camera/map frames with the same HUD overlays.
- Operator action labels are in English here; the live site uses Spanish ("Validar · Despachar" / "Descartar").
