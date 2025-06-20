The Partner Document Forwarder is a demo of how I can integrate AI into a business process. It simulates a document forwarding process your organization might use to censor sensitive information out of business partner documents before forwarding them to clients. It uses an AI product called [Stable Diffusion](https://stability.ai/stable-image) to automate image editing that would previously have required manual action by an employee. The live demo of this code can be accessed here: COMING SOON.

This is not a production site being actively used by any organization or myself. It is made for demonstration purposes and contains no real sensitive information and affects no real business systems.

## Technical Details

The Partner Document Forwarder is a conventional two-part web-app consisting of a Next.js React frontend written in TypeScript that accesses functionality provided by an ASP.NET backend REST API written in C#. The AI image editing functionality is provided by an AI product called [Stable Diffusion](https://stability.ai/stable-image). It is deployed to the cloud using a cloud provider called [Render](https://render.com/). Render was chosen because they use the same git actions based CI/CD process that a large enterprise with a team of SRE's would.


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Todo List
- Unit tests for the ForwardForm React component.
- Move secret key to user secrets repository
- Get Stable Diffusion license and secrets
- Extract authx code from program.cs to an authenticator class.
- Create skeleton of image censorer class.
- Create logic layer classes for working with each business object type.
- Unit tests for logic layer transformation functions.