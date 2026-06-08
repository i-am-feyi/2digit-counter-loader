# Next.Js GSAP + Lenis Starter

A minimal Next.js starter with GSAP and Lenis smooth scroll pre-configured.

## Stack

- Next.js 15 (App Router, TypeScript, Tailwind CSS v4)
- GSAP + ScrollTrigger
- Lenis smooth scroll via `lenis/react`

## Getting started

```bash
git clone https://github.com/i-am-feyi/next-gsap-lenis-starter.git my-project
cd my-project
npm install
npm run dev
```

## Project structure

```
src/
├── app/
│   ├── globals.css        # Reset, CSS variables, Lenis classes
│   ├── layout.tsx         # Root layout with SmoothScroll wrapper
│   └── page.tsx           # Blank starting page
├── providers/
│   └── smooth-scroll.tsx  # Lenis wired to GSAP ticker
└── lib/
    └── utils.ts           # Utility code
```

## Notes

- `autoRaf: false` on Lenis lets GSAP's ticker drive the scroll loop — keeps ScrollTrigger in sync
- Register `ScrollTrigger` at the module level in each component that uses it, not inside `useEffect`
- `gsap.context()` scopes selectors to the container ref and handles cleanup automatically
