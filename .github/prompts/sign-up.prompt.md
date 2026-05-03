---
agent: agent
description: Create the Manufacturing Partner Registration (sign-up) page for SEN NGHỆ THUẬT
---

Create the **`/_auth/sign-up` Manufacturing Partner Registration page** for the SEN NGHỆ THUẬT project. The page is a long-form registration flow rendered inside `src/routes/_auth/sign-up.tsx`, with all feature components living in `src/features/auth/sign-up/components/`. All user-facing text must be in **Vietnamese**.

---

## Project Context

- **Framework:** React 19 + TypeScript, TanStack Router file-based routing
- **Styling:** Tailwind CSS v4 — use existing design tokens from `styles.css`:
  - Colors: `bg-background`, `bg-surface-container-low`, `bg-primary-container`, `text-on-surface`, `text-on-surface-variant`, `text-primary`, `border-outline-variant`
  - Typography: `text-label-sm`, `text-body-lg`, `text-headline-md`, `text-display-lg`, `font-heads`, `font-sans`
  - Radius: `rounded-lg`, `rounded-full`
  - Shadows: `shadow-float`, `shadow-modal`
  - Utility: `.page-wrap`, `.glass`
- **Components:** Use `<Button>` from `@/components/ui/button` (variants: `default`, `outline`); use `cn()` from `@/lib/utils`, use Form `<Field>` from `@/components/ui/field`, use Label `<Label>` from `@/components/ui/label`.
- **Layouts:** Wrap the page with the existing `<SiteHeader />` and `<SiteFooter />` from `@/components/layouts/`
- **No `any` types** — define explicit TypeScript interfaces for all form data

---

## Page Layout Structure

```
<SiteHeader />                        ← sticky top header with logo
<main>
  <SignUpHero />                      ← eyebrow tag + big heading + description + decorative image
  <OrgInfoSection />                  ← Section 1: Thông tin tổ chức
  <RepresentativeSection />           ← Section 2: Thông tin người đại diện
  <WorkshopExperienceSection />       ← Section 3: Loại xưởng & Kinh nghiệm
  <BankAccountSection />              ← Section 4: Tài khoản ngân hàng
  <TermsAndSubmit />                  ← 2 checkboxes + submit button
</main>
<MarqueeStrip />                      ← "SEN NGHỆ THUẬT • TRADITION • CRAFTSMANSHIP • MODERN ATELIER • QUALITY" decorative text
<SiteFooter />
```

---

## Section Specifications

### Hero Section (`SignUpHero.tsx`)

- Eyebrow: `"TRỞ THÀNH ĐỐI TÁC"` — `text-label-sm uppercase tracking-[0.2em] text-on-surface-variant`
- Heading: `"Đăng ký Đối tác Sản xuất"` — large `font-heads font-extrabold text-on-surface`, two lines
- Body: `"Kết nối cùng SEN NGHỆ THUẬT để kiến tạo những giá trị thẩm mỹ bền vững. Chúng tôi tìm kiếm những xưởng sản xuất tinh hoa, cam kết chất lượng và sự tỉ mỉ trong từng đường kim mũi chỉ."` — `text-body-lg text-on-surface-variant max-w-prose`
- Right side: `<img>` of a copper/bronze decorative sphere — `w-28 h-28 rounded-full object-cover`
- Layout: `flex justify-between items-start` inside `.page-wrap px-6 py-12`

### Form Card Container Style (shared by all 4 sections)

```
bg-card rounded-xl p-8 shadow-float border border-outline-variant
```

Section header pattern: lucide-react icon + number + Vietnamese title using `text-headline-md font-bold text-on-surface font-heads`

---

### Section 1 — Thông tin tổ chức (`OrgInfoSection.tsx`, icon: `Building2`)

Grid: `grid grid-cols-2 gap-6`

| Field Label                  | Input Type | Placeholder                                | Width      |
| ---------------------------- | ---------- | ------------------------------------------ | ---------- |
| TÊN TỔ CHỨC / DOANH NGHIỆP   | text       | Nhập tên đầy đủ                            | col-span-1 |
| LOẠI HÌNH                    | select     | Doanh nghiệp Tư nhân                       | col-span-1 |
| NƠI ĐĂNG KÝ KINH DOANH       | text       | Thành phố / Tỉnh                           | col-span-1 |
| MÃ SỐ THUẾ                   | text       | Số MST                                     | col-span-1 |
| NGÀY THÀNH LẬP (DD/MM/YYYY)  | date       | 01/01/2020                                 | col-span-1 |
| SỐ VĂN BẢN ỦY QUYỀN (NẾU CÓ) | text       | Số hiệu văn bản                            | col-span-1 |
| ĐỊA CHỈ TRỤ SỞ CHÍNH         | text       | Số nhà, tên đường, phường, quận, thành phố | col-span-2 |

---

### Section 2 — Thông tin người đại diện (`RepresentativeSection.tsx`, icon: `UserCheck`)

Grid: `grid grid-cols-2 gap-6`

| Field Label      | Input Type | Placeholder                           | Width      |
| ---------------- | ---------- | ------------------------------------- | ---------- |
| HỌ VÀ TÊN        | text       | Nguyễn Văn A                          | col-span-1 |
| CHỨC VỤ          | text       | Giám đốc / Chủ xưởng                  | col-span-1 |
| SỐ CCCD          | text       | 12 chữ số                             | col-span-1 |
| NGÀY CẤP         | date       | dd/mm/yyyy                            | col-span-1 |
| NƠI CẤP          | text       | Cục CS QLHC về TTXH                   | col-span-1 |
| SỐ ĐIỆN THOẠI    | tel        | 0XXXXXXXXX                            | col-span-1 |
| NGÀY SINH        | date       | dd/mm/yyyy                            | col-span-1 |
| GIỚI TÍNH        | select     | Nam / Nữ / Khác                       | col-span-1 |
| ĐỊA CHỈ LIÊN LẠC | text       | Thành phố / Quận / Phường / Tên đường | col-span-2 |

---

### Section 3 — Loại xưởng & Kinh nghiệm (`WorkshopExperienceSection.tsx`, icon: `Shirt`)

Two side-by-side sub-cards, each with `bg-surface-container-low rounded-lg p-6`:

**Left — LOẠI XƯỞNG** (radio group):

- `Sản xuất FOB (Free on Board)`
- `Sản xuất OEM (Original Equipment Manufacturer)`

**Right — KINH NGHIỆM** (checkbox group, 2×2 grid):

- `Local Brand` | `High-end Brand`
- `Designer` | `Export`

Below checkboxes: info callout box:

```
bg-primary-container/40 border border-primary-container rounded-lg p-3 text-label-sm text-on-primary-container
```

Text: `"Lưu ý: Vui lòng gửi hồ sơ năng lực theo địa chỉ email: info@snnson.vn. Chấp nhận file pdf, hình ảnh, tài liệu minh chứng."`

---

### Section 4 — Tài khoản ngân hàng (`BankAccountSection.tsx`, icon: `Landmark`)

Grid: `grid grid-cols-2 gap-6`

| Field Label               | Input Type | Placeholder                        |
| ------------------------- | ---------- | ---------------------------------- |
| SỐ TÀI KHOẢN              | text       | Nhập số tài khoản                  |
| TÊN NGÂN HÀNG & CHI NHÁNH | text       | Ví dụ: Vietcombank – Chi nhánh HCM |
| TÊN TÀI KHOẢN             | text       | Ví dụ: CTY TNHH ĐT VA PT DHNSON    |

---

## Form Field Styling (apply to component `<Input>`, `<Select>`)

Field use Form `<Field>` from `@/components/ui/field`

Field labels:

```
text-label-sm uppercase tracking-widest text-on-surface-variant mb-1.5 block
```

---

## Terms & Submit Section (`TermsAndSubmit.tsx`)

Two checkboxes with `accent-primary`:

1. `"Tôi cam kết mọi thông tin cung cấp trên đây là hoàn toàn chính xác và chịu trách nhiệm trước pháp luật về tính xác thực của các thông tin này."`
2. `"Tôi đã đọc, hiểu rõ và đồng ý với Điều khoản sử dụng và Chính sách bảo mật của SEN NGHỆ THUẬT."` — linked words use `text-primary underline`

Submit button (centered, `flex justify-center pt-6`):

```jsx
<Button size="lg" className="w-48 font-bold uppercase tracking-widest">
  ĐĂNG KÝ NGAY
</Button>
```

---

## Marquee Decorative Strip

Use the existing `<Marquee />` component from `@/components/ui/marquee`. Repeat `"TRADITION • CRAFTSMANSHIP"` with:

```
text-display-lg font-extrabold uppercase text-outline-variant tracking-widest
```

---

## State Management

Create `src/features/auth/sign-up/hooks/useSignUpForm.ts` with react-hook-form.

## Validation

Use zod and declare folder schema. And define schema with type.

---

## TypeScript Types (`src/features/auth/sign-up/types.ts`)

```ts
export interface OrgInfo {
  name: string;
  businessType: string;
  registrationLocation: string;
  taxCode: string;
  establishedDate: string;
  authorizationDoc: string;
  address: string;
}

export interface RepresentativeInfo {
  fullName: string;
  position: string;
  nationalId: string;
  idIssueDate: string;
  idIssuePlace: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  contactAddress: string;
}

export interface WorkshopInfo {
  type: "FOB" | "OEM" | "";
  experience: Array<"local_brand" | "high_end" | "designer" | "export">;
}

export interface BankInfo {
  accountNumber: string;
  bankName: string;
}

export interface SignUpFormData {
  org: OrgInfo;
  representative: RepresentativeInfo;
  workshop: WorkshopInfo;
  bank: BankInfo;
  agreedToAccuracy: boolean;
  agreedToTerms: boolean;
}
```

---

## File Structure to Create

```
src/features/auth/sign-up/
├── components/
│   ├── sign-up-hero.tsx
│   ├── org-info.tsx
│   ├── representative.tsx
│   ├── workshop-experience.tsx
│   ├── bank-account.tsx
│   └── terms-and-submit.tsx
├── hooks/
│   └── use-sign-up-form.ts
├── helper.ts
├── service/
│   └── sign-up.service.ts #handle API here
├── types.ts

src/routes/_auth/sign-up.tsx  ← import SignUpPage from @/features/auth/sign-up, render it
```

---

## Conventions

- Function components only, `interface` for all props
- No `any` types — use the `SignUpFormData` types throughout
- Max ~50 lines per component — extract sub-components if needed
- Use lookup objects for conditional classes instead of ternary chains
- Import `cn` from `@/lib/utils` for all conditional `className` merging
- Import icons from `lucide-react`
- Grid layouts use `grid grid-cols-2 gap-6` inside each section card
- `page-wrap px-6` wrapper for page-level horizontal padding
- All section cards spaced with `space-y-6` or `flex flex-col gap-6` inside `<main>`
  s
