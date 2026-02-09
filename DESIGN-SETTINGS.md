# AI Partner Landing Page - Design Settings

## Farbpalette

### Primaerfarben
- **Blue**: `#3B82F6` (blue-500), `#60a5fa` (blue-400), `#2563eb` (blue-600)
- **Cyan**: `#06b6d4` (cyan-500)
- **Emerald**: `#34d399` (emerald-400), `#10b981` (emerald-500)
- **Purple**: `#a855f7` (purple-500), `#9333ea` (purple-600)

### Hintergruende
- **App-Root**: `bg-black` (#000000) - solider schwarzer Hintergrund
- **Sektionen**: `bg-black/80` - semi-transparent, damit globale Sterne durchscheinen
- **SocialProof**: `bg-black/50 backdrop-blur-sm` - staerker transparent fuer Hero-Uebergang
- **Cards/Container**: `bg-neutral-900/50`, `bg-[#080814]`

### Headline-Gradient (Hero)
- `linear-gradient(to right, #60a5fa, #34d399)` auf "mit AI-Systemen"

---

## Globaler Sternenhintergrund

### App.tsx - Fixed Star Layer
```
Position: fixed, inset-0, z-0
Komponente: StarsBackground
starDensity: 0.00025
Animation: Nur Twinkle (kein Rotate)
```

### App.tsx - Globale Shooting Stars
```
Position: fixed, inset-0, z-[1], pointer-events-none
Komponente: ShootingStarsOverlay (components/ui/shooting-stars.tsx)
Max gleichzeitig: 3
Spawn-Wahrscheinlichkeit: 0.45% pro Frame
Y-Spawn-Bereich: obere 60% des Viewports
Winkel: 210-240 Grad (diagonal nach unten-links)
```

### App.tsx - Milky Way Band
```
Position: fixed, inset-0, z-[2], pointer-events-none
Typ: CSS-only (linear-gradient 35deg + blur 40px)
Farben: purple-500 + blue-500 + weiss (max 9% Gradient-Opacity)
Animation: milkyWayDrift, 50s, ease-in-out (Opacity pendelt 7-11%)
Beschreibung: Subtiles diagonales Lichtband, simuliert Milchstrasse
```

### Hero.tsx - Lokaler Star Layer (additiv zum globalen)
```
Position: absolute inset-[-15%]
Komponente: StarsBackground (Standard-Density: 0.00030)
Animation: animate-star-rotate (240s, linear, infinite, scale 1.3)
```

---

## Custom Animationen (index.css)

| Animation | Dauer | Easing | Beschreibung |
|-----------|-------|--------|--------------|
| `starRotate` | 240s | linear | Rotation des Hero-Sternenfelds (scale 1.3) |
| `marquee` | 25s | linear | Tool-Icon Laufband (SocialProof) |
| `shimmer` | 4s | ease-in-out | Shimmer-Linie auf Service-Cards |
| `nebulaDrift` | 30s / 35s (reverse) | ease-in-out | Langsame Drift-Bewegung der Nebula-Blobs |
| `subtlePulse` | 8s | ease-in-out | Sanftes Opacity-Pulsieren (1 → 0.6 → 1) |
| `milkyWayDrift` | 50s | ease-in-out | Sanfte Drift + Opacity-Wechsel der Milchstrasse |
| `nebulaVortex` | 90s | linear | Volle Rotation des Nebula-Vortex |

### Utility-Klassen
- `.animate-star-rotate` - 240s Rotation
- `.animate-marquee` - 25s horizontaler Scroll
- `.animate-nebula-drift` - 30s Drift
- `.animate-nebula-drift-reverse` - 35s Drift rueckwaerts
- `.animate-subtle-pulse` - 8s Pulsieren
- `.animate-milky-way` - 50s Milchstrassen-Drift
- `.animate-nebula-vortex` - 90s Nebula-Rotation

---

## Hintergrund-Effekte pro Sektion

### Hero
- **Sterne**: Eigene rotierende StarsBackground (density 0.00030) + globale Sterne
- **Spotlight**: SVG-basiert, fill="#3B82F6", Gaussian blur stdDeviation="151", opacity 0.21
- **Shooting Stars**: Global (via App.tsx), canvas-basiert, max 3, weisse Gradient-Trails
- **Dashboard Glow**: 3-Layer (outer: blue→cyan→emerald/20-10-5%, middle: blue→cyan/10%, inner: blue→cyan→emerald/30-10-5%)
- **Decorative Blobs**: 2x 500px, blur-[140px], blue-500/6% + neutral-500/4%, rotierend
- **Bottom Fade**: h-64, gradient to-t from-black to-transparent

### SocialProof
```
Hintergrund: bg-black/50 backdrop-blur-sm
Hero Light Bleed: h-40, from-blue-500/15 to-transparent
Blob links oben: 600px, bg-blue-500/15, blur-[80px], animate-nebula-drift
Blob rechts unten: 500px, bg-purple-500/10, blur-[80px], animate-nebula-drift-reverse
```

### CompareSection
```
Hintergrund: bg-black/80
Nebula Vortex: 700px, 4-Layer radial-gradient (purple+blue+cyan+weiss), blur-[60px], opacity 12%, animate-nebula-vortex (90s), zentriert
```

### ServiceTimeline (timeline.tsx)
```
Hintergrund: bg-black/80
Purple Nebula: 600px, bg-purple-500/15, blur-[80px], top-[10%] left-[-100px], animate-nebula-drift
Blue Nebula: 500px, bg-blue-500/15, blur-[80px], top-[45%] right-[-80px], animate-nebula-drift-reverse
Emerald Nebula: 500px, bg-emerald-500/15, blur-[80px], bottom-[5%] left-[-60px], animate-nebula-drift
```
Nebula-Farben spiegeln die drei Service-Card Themes wider (purple=Workshop, blue=Audit, emerald=Implementation).

### AboutSection
```
Hintergrund: bg-black/80
Diagonal Gradient: inset-0, from-purple-500/8 via-transparent to-cyan-500/5
Blue Glow: 500px, bg-blue-500/10, blur-[80px], bottom-[10%] right-[5%], animate-subtle-pulse
Bild-Hover Glow (vorhanden): from-purple-500/20 to-blue-500/20, blur-2xl
```

### CalendarCTA
```
Hintergrund: bg-black/80
Purple Glow (vorhanden): 600px, bg-purple-600/10, blur-[150px], zentriert, -z-10
Blue Glow: 500px, bg-blue-500/10, blur-[80px], top-[30%] left-[30%], -z-10, animate-nebula-drift
```

### NewsletterSection
```
Hintergrund: bg-black/80
Purple Glow (vorhanden): 500px, bg-purple-600/12, blur-[150px], zentriert
Kein zusaetzlicher Blob.
```

### FAQSection
```
Hintergrund: bg-black/80
Bottom Gradient: inset-0, from-purple-500/8 via-transparent to-transparent (gradient-to-t)
```

### Footer
```
Hintergrund: bg-black/80, border-t border-white/5
Top Gradient: h-32, from-blue-500/8 to-transparent
```

---

## Design-Prinzipien

1. **Progressive Intensitaet**: Effekte werden schwaecher je weiter vom Hero entfernt
2. **Performance**: CSS-only Effekte (Gradients, Blurs) + zwei globale Canvas-Layer (Sterne + Sternschnuppen) + ein globaler CSS-Layer (Milchstrasse)
3. **Farbkonsistenz**: Nebula-Blobs verwenden die gleichen Farben wie die zugehoerigen Sektionen (z.B. emerald fuer Implementation)
4. **Subtilitaet**: Blob-Opacities zwischen 8-15%, Gradient-Opacities zwischen 5-15%
5. **Sterne ueberall**: Globales fixed Sternenfeld scheint durch semi-transparente Sektions-Hintergruende (bg-black/80)

## Blob-Einstellungen Referenz

| Parameter | Typischer Wert | Beschreibung |
|-----------|---------------|--------------|
| Groesse | 500-700px | Durchmesser des Blob-Divs |
| Opacity | 8-15% | Farbintensitaet (z.B. blue-500/15) |
| Blur | 80-100px | CSS filter blur |
| Animation | nebulaDrift 30-35s | Langsame Drift-Bewegung |
| Position | Negativ-Offset | Teilweise ausserhalb der Sektion (z.B. -left-[100px]) |
| overflow-hidden | Auf Parent-Sektion | Verhindert horizontalen Scrollbar |
