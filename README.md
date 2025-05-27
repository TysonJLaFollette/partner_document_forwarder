The Partner Document Forwarder is a demo of how I can integrate AI into a business process. It simulates a document forwarding process your organization might use to censor sensitive information out of business partner documents before forwarding them to clients. It uses an AI product called [Stable Diffusion](https://stability.ai/stable-image) to automate image editing that would previously have required manual action by an employee. The live demo of this code can be accessed here: COMING SOON.

This is not a production site being actively used by any organization or myself. It is made for demonstration purposes and contains no real sensitive information and affects no real business systems.

## Technical Details

The Partner Document Forwarder is a conventional two-part web-app consisting of a Next.js React frontend written in TypeScript that accesses functionality provided by a .NET backend REST API written in C#. The AI image editing functionality is provided by an AI product called [Stable Diffusion](https://stability.ai/stable-image). It is deployed to the cloud using a cloud provider called [Render](https://render.com/). Render was chosen because they use the same git actions based CI/CD process that a large enterprise with a team of SRE's would.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
