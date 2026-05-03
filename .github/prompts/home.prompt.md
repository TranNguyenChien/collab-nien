---
agent: "agent"
description: "Build the Homepage for SEN NGHỆ THUẬT – Collab with NIÉN"
---

# 🏠 Homepage – SEN NGHỆ THUẬT

## Goal

Build the homepage for the **SEN NGHỆ THUẬT** platform based on the design. The page consists of 5 sections: Navbar, Hero, Cards, Quick Links, and Footer.

---

## Files to Create

```
src/
├── app/
│   └── routes/
│       └── home.tsx                   # HomePage component (page-level)
├── features/
│   └── home/
│       ├── components/
│       │   ├── HomeHero.tsx           # Hero section
│       │   ├── HomeCards.tsx          # Two-card section
│       │   └── HomeQuickLinks.tsx     # Quick links row
│       └── index.ts                   # Public API
├── components/
│   └── layouts/
│       ├── SiteHeader.tsx             # Navbar (shared layout)
│       └── SiteFooter.tsx             # Footer (shared layout)
└── routes/
    └── index.tsx                      # Update to use HomePage
```

---

## Before Writing Code

1. Read `src/styles.css` to check existing color tokens and typography scale.
2. Read `.github/instructions/folder-structure-tanstack-router.instructions.md` to ensure correct architecture.
3. Read `.github/instructions/features.instructions.md` to follow feature module conventions.
4. Read `.github/instructions/tailwind.instructions.md` to use correct colors from `@theme`.
5. **NEVER use arbitrary colors** (e.g. `bg-[#735735]`). Only use token names declared in `src/styles.css`.

---

## Section Details

### 1. SiteHeader (Navbar)

- Layout: `flex` with 3 columns — left nav, center logo, right CTA.
- **Center logo:** Text "SEN NGHỆ THUẬT" (2 lines, uppercase, bold) with a small icon/badge above it.
- **Left nav:** 3 links — "VỀ TRANG CHỦ" (active, underlined), "HỘI VIÊN", "ĐỐI TÁC SẢN XUẤT".
- **Right CTA:** Button "LIÊN HỆ" — `bg-primary`, `text-on-primary`, small border radius.
- Background: `bg-background`, sticky top, moderate horizontal padding.
- Active link is highlighted with an underline (`border-b-2`).

### 2. HomeHero (Hero Section)

- Background: `bg-background` (warm cream).
- **Top badge:** Text "PREMIUM ATELIER EXPERIENCE" — uppercase, wide letter-spacing, small font (`text-label-sm`), `text-on-surface-variant`.
- **Main heading:** "COLABB WITH NIÊN" — `text-display-lg`, font-weight 700, `text-on-surface`, centered, uppercase.
- **Subtitle:** "Khám phá không gian nghệ thuật đương đại, nơi tinh hoa truyền thống hòa quyện cùng tư duy sáng tạo mới." — `text-body-lg`, `text-on-surface-variant`, centered, constrained max-width.
- Spacing: large top padding, balanced gap between elements.

### 3. HomeCards (Feature Cards)

Two cards side by side (`grid grid-cols-2 gap-6`):

#### Card 1 – HỘI VIÊN (Member)

- Background: `bg-surface-container-low`, `rounded-2xl`, generous padding.
- **Icon:** Connection/user icon (lucide-react or SVG) inside a soft circular background.
- **Title:** "HỘI VIÊN" — `text-headline-md`, bold, uppercase.
- **Description:** "Tham gia cộng đồng sáng tạo và nhận những ưu đãi đặc quyền dành riêng cho nghệ sĩ và người yêu nghệ thuật." — `text-body-lg`.
- **CTA Button:** "GIA NHẬP NGAY" — `bg-primary`, `text-on-primary`, full-width, uppercase, small border radius.

#### Card 2 – ĐỐI TÁC SẢN XUẤT (Production Partner)

- Background: `bg-surface-container-low`, `rounded-2xl`, generous padding.
- **Icon:** Robotic arm / production icon (lucide-react or SVG) inside a soft circular background.
- **Title:** "ĐỐI TÁC SẢN XUẤT" — `text-headline-md`, bold, uppercase.
- **Description:** "Kết nối và hiện thực hóa những ý tưởng thiết kế độc bản cùng đội ngũ sản xuất chuyên nghiệp từ chúng tôi." — `text-body-lg`.
- **CTA Button:** "HỢP TÁC SẢN XUẤT" — outline style (`border-primary`, `text-primary`, transparent background), full-width, uppercase.

### 4. HomeQuickLinks

- Layout: `flex` centered, separated by `•` bullet characters.
- 3 links: "Forgot Password?", "Sign Up", "VỀ TRANG CHỦ".
- Small font, `text-on-surface-variant`.
- "VỀ TRANG CHỦ" is highlighted (underlined or darker color — active state).

### 5. SiteFooter

- **Left:** Logo "SEN NGHỆ THUẬT" and copyright line "© 2024 SEN NGHỆ THUẬT. TINH HOA NGHỆ THUẬT TRUYỀN THỐNG."
- **Right:** 3 links — "QUY TRÌNH", "BẢO MẬT", "ĐIỀU KHOẢN" — uppercase, small font, `text-on-surface-variant`.
- Background: `bg-surface-container-low` or `bg-surface-container`.
- Divider line above the footer.

---

## Technical Requirements

- **All UI-facing text must be in Vietnamese** (as shown in the design).
- **No `any` types** — TypeScript strict mode.
- **No arbitrary colors** — only use tokens from `src/styles.css`.
- **Max ~50 lines per component** — extract sub-components if needed.
- **Responsive:** Mobile-first. Cards stack to 1 column on mobile (`grid-cols-1 md:grid-cols-2`).
- Update `src/routes/index.tsx` to import and use `HomePage` from `src/app/routes/home.tsx`.
- Export the feature via `src/features/home/index.ts`.

---

## Color Token Reference

Only use tokens already declared in `src/styles.css`:

| Purpose               | Token                         |
| --------------------- | ----------------------------- |
| Page background       | `bg-background`               |
| Card background       | `bg-surface-container-low`    |
| Primary button        | `bg-primary text-on-primary`  |
| Outline button        | `border-primary text-primary` |
| Heading text          | `text-on-surface`             |
| Subtitle / muted text | `text-on-surface-variant`     |
| Border / divider      | `border-outline-variant`      |
