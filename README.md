The Partner Document Forwarder is a demo of how I can integrate AI into a business process. It simulates a document forwarding process your organization might use to censor sensitive information out of business partner documents before forwarding them to clients. It uses an AI product called [Stable Diffusion](https://stability.ai/stable-image) to automate image editing that would previously have required manual action by an employee. The live demo of this code can be accessed here: COMING SOON.

This is not a production site being actively used by any organization or myself. It is made for demonstration purposes and contains no real sensitive information and affects no real business systems.

## Technical Details

The Partner Document Forwarder is a conventional two-part web-app consisting of a Next.js React frontend written in TypeScript that accesses functionality provided by an ASP.NET backend REST API written in C#. The AI image editing functionality is provided by an AI product called [Stable Diffusion](https://stability.ai/stable-image). It is deployed to the cloud using a cloud provider called [Render](https://render.com/). Render was chosen because they use the same git actions based CI/CD process that a large enterprise with a team of SRE's would.

## What This Demo Showcases

## What I Learned From Making This project
- That even a small application requires significant amounts of code and configuration that is easy to overlook in planning. For example:
 * DNS configuration so your site can even be reached using a consistent URL. Storage of that URL in your app's configuration, injected by your CICD pipeline during release.
 * SSL configuration so users don't expose their credentials to hackers every time they visit. And do you think your local dev environment is going to kindly accept unencrypted requests without more configuration? Ha!
 * Perfectly matching user models, token audience strings, token issuer strings, and auth request payloads. Login APIs are picky for good reason, and if you configure anything incorrectly they don't give you any error feedback... for good reason! Be prepared for a lot of trial-and-error.
 * Session management code that stores received auth tokens and automatically utilizes refresh tokens when the original expires. The best-case scenario is a middleware that wraps all HTTP requests, injecting the token.
 * Retry and cirtuit breaker policies that retry failed requests and give up when appropriate. This is probably another middleware wrapper around HTTP requests. 
 * Cryptographic key generation. If your simple app is going to accept logins then it needs to generate cryptographic keys and auth tokens for user sessions. Even if you utilize an external authentication API this still requires an interface and implementation for working with that API. You'll still have to store your credentials and tokens for THAT API.
 * All the authentication difficulties mentioned above, but for every API your app is going to be a client of. The Partner Document Forwarder is only a client of the Stable Diffusion API, but that alone doubled the amount of user models, token strings, token storage, and token injection needed. 
 * Lots of React components to properly encapsulate independent UI behaviors. The Partner Document Forwarder started off as a single HTML form, but quickly ballooned into a dozen nested React components which each accept props to conditionally render and to communicate their form data to their parent component. If you do it right there will be a lot of them, and it's hard to see the full list when just planning. A mock-up project is probably a better way to find the boundaries of each component.
 * Testing environment configuration. You need to install Jest and Jest types. You need to create config files for jest, typescript so they can actually parse your files. You need jest.config.js, jest.setup.js, jest-dom.d.ts. You need to make sure tsconfig.ts includes jest-dom.d.ts.
 * User interface unit tests. Just... wow. The amount of tests required to test all desired behaviors is huge. Does it populate its options with the provided props? Does it start with the correct default selections? Does it render at the correct width? Does that width limit its max and min correctly? Does it use the theme colors? Does its heading obey the theme font? etc., etc.. Each new behavior requires multiple tests.

## How I Will Use That Learning
- I will always set up my testing environment before creating ANY code. How can I measure my progress if I can't even test it?
- Begin documenting how long it takes to write tests. Begin documenting how long it takes to satisfy each test. Estimate each feature request in terms of how many tests it requires.
- Document the amount of time it takes to perform DNS and SSL configuration, and include that in my estimates and project timelines.
- Do everything in my power to use the same authx APIs so I can become familiar and fast with their configuration.
- Utilize ASP.NET CORE's session management tools in all future projects.
- Include retry and circuit breaker wrappers before even writing any HTTP requests.
- Create two authx interfaces in each project: One for the app providing logins to outsiders, and one for the app logging in to other services.

## Some Numbers
- It took rough 1.5 hours to get the Jest testing environment working. A significant portion (0.5hr) was because of my attempts to write tests for a complicated server component. Now having documented the process I could do it significantly faster. I find that even still that running the app is overwritign my 'jsx' setting in tsconfig.ts and breaking Jest tests.
- Writing each test takes perhaps 5 minutes. More complicated tests that check for invokations or types take roughly the same time as simple ones... IF you use a tool like ChatGPT to find the needed syntax. ChatGPT's LLM is boss at navigating the complex grammar of unfamiliar parts of an API.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



## Todo List
- 
- Make UI store login token.
- Unit tests for BusinessPartnerToolbox
- Unit tests for the ForwardForm React component.
- Move secret key to user secrets repository
- Move audience and issuer strings to user secrets repo.
- Get Stable Diffusion license and secrets
- Create skeleton of image censorer class.
- Unit tests for logic layer transformation functions.