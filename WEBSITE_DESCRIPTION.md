# CyTutor - Complete Website Description for Claude Artifacts Recreation

## Overview

CyTutor is a cybersecurity learning platform with a dark, hacker/terminal aesthetic. It is a multi-page static website with no backend. The entire UI uses a dark theme with green (#22c55e) as the primary brand color and purple (#6E40C9) as a secondary accent. The design emphasizes glassmorphism, glow effects, animated particle backgrounds, and CSS 3D flip cards.

---

## Design System

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| Primary (Green) | `#22c55e` | Brand color, buttons, links, glows, active states |
| Primary Dark | `#16a34a` | Hover states on green elements |
| Secondary (Purple) | `#6E40C9` | Accent color, gradients paired with green |
| Background Dark | `#0f0f0f` | Page background |
| Background Light | `#1a1a1a` | Card backgrounds |
| Header Background | `#121212` | Sticky header background |
| Text | `#e5e5e5` | Primary body text |
| Text Dim | `#aaa` | Muted/secondary text |
| Border | `#222` | Card and section borders |
| Success | `#2EA043` | Success states (green) |
| Warning | `#F59E0B` | Warning/in-progress states (amber) |
| Error | `#F85149` | Error/failed states (red) |

### Domain-Specific Colors (used on challenge and domain cards)

| Domain | Color |
|---|---|
| Web Security | `#22c55e` (green) |
| Cryptography | `#3b82f6` (blue) |
| Reverse Engineering | `#8b5cf6` (purple) |
| Digital Forensics | `#f59e0b` (amber) |
| Malware Analysis | `#ef4444` (red) |
| Network Security | `#06b6d4` (cyan) |

### Typography

- **Primary font**: Inter (Google Fonts) - weights 400, 500, 600, 700 - used for all UI text
- **Monospace font**: Fira Code (Google Fonts) - weights 400, 500 - used only in the terminal widget on the landing page
- **Dashboard font**: Poppins (Google Fonts) - weights 400, 600, 700 - used on dashboard, leaderboard, profile, settings pages

### Common UI Patterns

- **Glassmorphism**: Cards use semi-transparent backgrounds (`rgba(255,255,255,0.05)`) with `backdrop-filter: blur()` and subtle borders
- **Green glow effects**: `box-shadow: 0 0 20px rgba(34, 197, 94, 0.3)` on hover for buttons and active elements
- **Border radius**: 12px for cards, 8-12px for buttons and inputs
- **Transitions**: All interactive elements use `transition: all 0.3s ease`

---

## Global Components (Present on Every Page)

### Animated Particle Background

Every page has a full-screen `<canvas>` element behind all content (fixed position, z-index: -10, opacity: 0.4). It renders:
- 80-100 small floating particles in green (`#22c55e`) and purple (`#6E40C9`)
- Particles drift slowly across the screen with random velocities
- When two particles are within ~120px of each other, a thin connecting line is drawn between them (creating a network/constellation effect)
- The animation loops continuously via `requestAnimationFrame`

### Sticky Header

- Fixed at top, full-width, z-index: 1000
- Background: `#121212` with slight transparency and `backdrop-filter: blur(10px)`
- Bottom border: 1px solid `#222`
- **Left side**: Logo text "CyTutor" in green (`#22c55e`) with a subtle green glow/text-shadow
- **Center**: Horizontal navigation links in dim text that turn white/green on hover, with an animated green underline that slides in from the left on hover. The current page link has the underline permanently visible
- **Right side** (authenticated pages only): User avatar dropdown (described below)

**Public navigation** (landing, login, signup): Home | Challenges | Learn | Leaderboard | [Login / Sign Up button]

**Authenticated navigation** (dashboard, challenges, domains, leaderboard, profile, settings): Dashboard | Challenges | Learning Paths | Leaderboard | [User Avatar Dropdown]

### User Avatar Dropdown (Authenticated Pages Only)

- A circular green avatar showing initials "JD" (34px circle, green background, dark text)
- Next to it: "John Doe" text + a chevron-down icon
- Clicking toggles a dropdown menu that slides down with a scale animation
- Dropdown has a small upward-pointing caret/arrow at the top
- Dropdown items: Profile (user icon), Settings (gear icon), Logout (log-out icon, red colored)
- The dropdown uses glassmorphism styling (blurred translucent background)
- Closes on: clicking outside, pressing Escape, or clicking an item

---

## Page-by-Page Description

### 1. Landing Page (index.html)

**Title**: "CyTutor - Learn Cybersecurity by Doing"

**Layout**: Two-section vertical layout

**Hero Section** (top):
- Two-column CSS Grid layout
- **Left column**:
  - Large heading: "Learn Cybersecurity by Doing." (white, bold, ~2.5rem)
  - Subtitle paragraph: "CyTutor helps you master cybersecurity with hands-on labs, gamified rankings, and real-world scenarios." (dim text)
  - Two CTA buttons side by side:
    - "Start Learning" - solid green button (primary) linking to login
    - "View Challenges" - outlined/secondary button linking to challenges
- **Right column**:
  - A decorative terminal window widget:
    - Window header with three traffic-light circles (red, yellow, green dots)
    - Terminal body with monospace (Fira Code) text showing a simulated terminal session:
      ```
      user@cytutor:~$ whoami
      cytutor_user
      user@cytutor:~$ ls challenges/
      web_hacking  cryptography  reverse_engineering  forensics
      Pick a challenge to start learning...
      user@cytutor:~$ █  (blinking cursor)
      ```
    - The terminal has a typing animation effect where characters appear one by one
    - Dark background (`#0d1117`), green prompt text, white command text

**Features Section** (below hero):
- Three cards in a responsive grid (`auto-fit, minmax(300px, 1fr)`)
- Each card has glassmorphism styling:
  1. **"Hands-On Labs"** - "Practice real-world attack and defense scenarios in a safe environment."
  2. **"Gamified Learning"** - "Earn points, badges, and climb the leaderboard while improving your skills."
  3. **"Guided Paths"** - "Follow structured learning tracks for Web, Forensics, Crypto, and more."
- Cards have a subtle gradient overlay that appears on hover, plus a lift effect (`translateY(-5px)`)

**Header**: Public nav with "Login / Sign Up" CTA button (green, rounded pill shape)

---

### 2. Login Page (login.html)

**Title**: "Login - CyTutor"

**Header**: Minimal - just logo + "Back to Home" link

**Layout**: Centered single card on the particle background

**Login Card**:
- Centered vertically and horizontally, max-width 450px
- Glass card with translucent dark background, rounded corners (12px)
- **Top**: "cytutor" brand text in green, centered
- **Below**: "Welcome!" heading + "Sign in to continue your cybersecurity journey" subtitle
- **Tab switcher**: A pill-shaped container with two tabs:
  - "Sign In" tab (active) - green background, dark text
  - "Register" tab - dim text, links to signup page, highlights on hover
- **Form fields**:
  - "User ID" label + text input (placeholder: "Enter your username or email")
  - "Password" label + password input (placeholder: "Enter your password")
  - Inputs have: rounded corners (12px), translucent background (`rgba(255,255,255,0.08)`), 2px border that turns green on focus with a green outer glow (`box-shadow: 0 0 0 4px rgba(34,197,94,0.1)`)
- **"Forgot Password?"** link aligned right, green text
- **"Sign In" button**: Full-width, green gradient background (`linear-gradient(135deg, #22c55e, #16a34a)`), dark text, lifts on hover with green glow shadow
- **Divider**: Thin horizontal line with "or" text centered on it
- **Bottom text**: "Don't have an account? Create one" (green link)

**Interactions**:
- On submit: button text changes to "Signing In..." with animated dots, then shows "Success!" with a checkmark, then redirects to dashboard
- Empty fields: red border on the empty field, shake animation on the card
- Field borders reset to normal when user starts typing

---

### 3. Signup Page (signup.html)

**Title**: "Sign Up - CyTutor"

**Header**: Logo + Home link + Login link

**Layout**: Centered card, same particle background

**Signup Card**:
- Similar glass card styling to login
- **Header**: "Create Account" heading + "Join the cybersecurity learning revolution" subtitle
- **Form fields** (each with label above input):
  1. Username (text input)
  2. Email (email input)
  3. Password (password input)
  4. Confirm Password (password input)
- **"Create Account" button**: Full-width, green styled button
- **Bottom**: "Already have an account? Login here" link

**Validation**:
- All fields required
- Password must be at least 6 characters
- Password and Confirm Password must match
- Email must match a valid email regex pattern
- On success: toast notification slides in from the top-right corner saying "Account created successfully! Redirecting..." then redirects to login page

---

### 4. Dashboard Page (dashboard.html)

**Title**: "Dashboard - CyTutor"

**Header**: Authenticated nav with user avatar dropdown

**Layout**: Full-width vertical sections

**Welcome Section**:
- "Welcome back, CyberNinja" heading with a robot icon (Font Awesome fa-robot)
- "Continue your journey in cybersecurity" subtitle
- Text is centered

**Domains Grid** (6 cards):
- CSS Grid with `auto-fit, minmax(350px, 1fr)`
- These are NOT flip cards (different from the domains page). They are standard hover-lift cards:
  - Each card has a centered Font Awesome icon at the top, a title, and a description
  - On hover: lifts up, green left border appears, subtle gradient overlay
  - Cards:
    1. **Cryptography** (fa-lock icon) - "Master encryption, hashing, and secure communication protocols."
    2. **Forensics** (fa-search icon) - "Learn digital investigation and evidence analysis techniques."
    3. **Malware** (fa-virus icon) - "Study malware analysis and reverse engineering."
    4. **Reverse Engineering** (fa-microchip icon) - "Decode and understand compiled programs and binaries."
    5. **Web Security** (fa-globe-americas icon) - "Explore web vulnerabilities and secure coding practices."
    6. **VAPT** (fa-shield-virus icon) - "Learn vulnerability assessment and penetration testing."

**Progress Section**:
- "Your Progress" heading
- Full-width progress bar:
  - Background: dark (`#222`)
  - Fill: 65% width, green-to-purple gradient (`linear-gradient(90deg, #22c55e, #6E40C9)`)
  - An animated shimmer/shine effect passes across the fill bar continuously
  - Rounded corners
- Below the bar: "Level 5" on the left, "3,250 XP / 5,000 XP" on the right

**Recent Activity Section**:
- "Recent Activity" heading
- Three activity items stacked vertically:
  1. **Green circle** (fa-check-circle) + "SQL Injection Basics" + "+100 XP" (solved)
  2. **Red circle** (fa-times-circle) + "Advanced Buffer Overflow" + "Try Again" (failed)
  3. **Yellow/amber circle** (fa-clock) + "Network Protocol Analysis" + "In Progress" (in progress)
- Each item is a horizontal row. On hover, the row slides slightly to the right (`translateX(10px)`)

---

### 5. Challenges Page (challenges.html)

**Title**: "Challenges - CyTutor"

**Header**: Authenticated nav with user avatar dropdown

**Layout**: Page title + grid of flip cards

**Page Title**: "Challenges" (large, centered)

**Challenges Grid**:
- CSS Grid with `auto-fit, minmax(350px, 1fr)`, gap between cards
- **6 flip cards** that rotate 180 degrees on the Y-axis when hovered (CSS 3D transform with `perspective(1000px)`)

**Each Flip Card**:

**Front face**:
- Dark background card (~300px height)
- Top area: Three animated floating circles/blobs in varying colors (primary green, secondary purple, and a warm accent). These circles use CSS animation to slowly float/drift
- A small badge/tag at the top showing "Challenge 1", "Challenge 2", etc.
- Title in bold (e.g., "Challenge 1")
- Description text at the bottom:
  - Challenge 1: "Begin your cybersecurity journey with this introductory challenge."
  - Challenge 2: "Test your skills with this intermediate-level challenge."
  - Challenge 3: "Push your limits with this advanced cybersecurity challenge."
  - Challenge 4: "Another beginner-friendly challenge to build your foundation."
  - Challenge 5: "Dive deeper into cybersecurity concepts with this challenge."
  - Challenge 6: "Test your expertise with this complex security scenario."

**Back face**:
- Gradient background (green-to-purple diagonal gradient)
- Centered content:
  - Difficulty badge:
    - "Easy" (green badge) - Challenges 1 and 4
    - "Medium" (amber/yellow badge) - Challenges 2 and 5
    - "Hard" (red badge) - Challenges 3 and 6
  - "START" button (white text, bordered button)

---

### 6. Learning Paths / Domains Page (domains.html)

**Title**: "Learning Domains - CyTutor"

**Header**: Authenticated nav with user avatar dropdown

**Page Header Section**:
- "Learning Domains" large title
- Subtitle: "Master cybersecurity through our comprehensive learning paths. Each domain is carefully crafted to take you from basics to advanced concepts."

**Domains Grid**:
- Same CSS Grid layout as challenges page
- **6 flip cards** with the same flip mechanic as the challenges page

**Each Domain Card**:

**Front face**:
- Same structure as challenge cards: three floating animated circles + badge + title + footer
- The badge and title show the domain name
- Footer shows challenge/course counts:

| Domain | Challenges | Courses |
|---|---|---|
| Web Security | 24 | 4 |
| Cryptography | 18 | 3 |
| Reverse Engineering | 16 | 3 |
| Digital Forensics | 20 | 4 |
| Malware Analysis | 15 | 3 |
| Network Security | 22 | 4 |

**Back face**:
- Gradient background
- Large Font Awesome icon (3x size) centered:
  - Web Security: fa-globe
  - Cryptography: fa-lock
  - Reverse Engineering: fa-microchip
  - Digital Forensics: fa-search
  - Malware Analysis: fa-virus
  - Network Security: fa-shield-alt
- Domain name in bold text below the icon

---

### 7. Leaderboard Page (leaderboard.html) - Stub

- Authenticated nav
- "Leaderboard" heading
- "Coming Soon" message
- Same particle background

### 8. Profile Page (profile.html) - Stub

- Authenticated nav
- Large avatar circle showing "JD"
- "Coming Soon" message

### 9. Settings Page (settings.html) - Stub

- Authenticated nav
- "Settings" heading
- Three setting category cards in a grid:
  1. **Theme** - green tinted background
  2. **Notifications** - purple tinted background
  3. **Privacy** - amber/yellow tinted background
- "Coming Soon" overlay on each

---

## Navigation Flow

```
Landing Page (index.html)
  ├── Click "Start Learning" or "Login / Sign Up"
  │     └── Login Page (login.html)
  │           ├── Click "Register" tab or "Create one" link
  │           │     └── Signup Page (signup.html)
  │           │           └── On success → redirects to Login
  │           └── On login success → redirects to Dashboard
  │
  └── Click "Challenges" or "Learn"
        └── Public access to challenges.html / domains.html

Dashboard (dashboard.html)  [authenticated home]
  ├── Nav: Challenges → challenges.html
  ├── Nav: Learning Paths → domains.html
  ├── Nav: Leaderboard → leaderboard.html
  ├── Dropdown: Profile → profile.html
  ├── Dropdown: Settings → settings.html
  └── Dropdown: Logout → clears storage, redirects to login.html
```

---

## Animation & Interaction Details

### Particle Canvas Background
- Particles: small circles (radius 1-3px), colors randomly chosen from green/purple
- Count: ~80-100 particles
- Movement: random velocity between -0.5 and 0.5 on both axes
- Connection lines: drawn between particles within 120px of each other, opacity fades with distance
- Canvas resizes with window

### Terminal Typing Effect (Landing Page)
- Characters appear one at a time at 50-100ms intervals
- After each command "completes", the output appears
- The cursor (a blinking green block `█`) appears at the end

### Flip Card Animation
- `transform-style: preserve-3d` on the card container
- `perspective: 1000px` on the grid
- On hover: `transform: rotateY(180deg)` with `transition: transform 0.6s`
- Front face: `backface-visibility: hidden`
- Back face: `backface-visibility: hidden; transform: rotateY(180deg)` (pre-rotated)

### Floating Circle Animation (on flip card fronts)
- Three circles per card, each ~100-150px diameter
- CSS `@keyframes` animation making them float/drift slowly (translate up/down and slight rotation)
- Colors vary: green, purple, and amber
- `filter: blur()` applied for a soft glow look
- Positioned absolutely within the card's image area

### Progress Bar Shimmer
- A diagonal white gradient overlay that translates across the bar from left to right
- Continuous looping animation (`@keyframes shimmer`)

### Button Hover Effects
- Primary buttons: `translateY(-2px)` lift + green glow box-shadow
- Cards: `translateY(-5px)` lift + border color change to green
- Nav links: green underline slides in from left via `::after` pseudo-element with `scaleX(0)` to `scaleX(1)`

### Activity Items Hover
- `translateX(10px)` slide to the right on hover

### Toast Notification (Signup)
- Appears in top-right corner
- Slides in from the right
- Shows success message with green accent
- Auto-dismisses after ~3 seconds with slide-out animation

### Login Error Shake
- `@keyframes shake`: translateX oscillates between -5px and 5px
- Duration: 0.5s
- Applied to the form card when submitting with empty fields

---

## Responsive Behavior

- **Above 1024px**: Full layout, two-column hero, multi-column card grids
- **768px - 1024px**: Hero collapses to single column (terminal below text). Card grids become 2 columns. Nav links may shrink
- **Below 768px**: Navigation links hidden (mobile hamburger menu area exists but no hamburger button is implemented). Card grids become single column. User name text hidden in header (avatar only). Form padding reduces. Font sizes scale down
- **Below 480px**: Further reduction in hero heading size, terminal text shrinks to 12px, card heights adjusted

---

## Important Notes for Recreation

1. **This is a purely static/demo site** - there is no real backend. Login/signup are simulated with timeouts and redirects. All user data (name, XP, activity) is hardcoded.

2. **The particle canvas is critical** to the site's visual identity. Every page should have it as a background layer.

3. **The dark theme is essential** - the entire site is dark mode only. There is no light mode.

4. **Glassmorphism** (translucent backgrounds + backdrop blur) is used extensively on cards, headers, and form containers.

5. **The green glow** (`box-shadow` with green rgba) appears on almost every interactive element's hover state and is a key part of the visual identity.

6. **Flip cards** are the signature component of the challenges and domains pages. They use CSS 3D transforms, not JavaScript animation.

7. **Font Awesome icons** are used throughout for domain/status icons. Lucide icons are used specifically for the user dropdown menu items (user, settings, log-out, chevron-down).

8. When recreating as a single-page Claude Artifact, you'll need to implement client-side routing/tab switching to simulate the multi-page navigation, since Artifacts are single HTML files.
