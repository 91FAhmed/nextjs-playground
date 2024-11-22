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

## important learing Notes

### react routing:-

##### 1)filebased-routing

inside (src/app)
create a folder and add page.tsx !important then wite react functional component auto \_layouts.tsx will auto import and generate children prop for you

##### 2)[dynamic routing]:-

while creating folder adding braces will [foldername] will create dynamic route and add page.tsx as usual

###### {params} as props to fetch the dynamic url name

```bash
https:localhost:3000/about/[profile]
```

#### 3) [slugs] dynamic segmentation

ability to fetch multiple routes

```bash
https:localhost:3000/about/[slugroute]
ex:https:localhost:3000/about/profile/1
\_#[...slug]
   \_#page.tsx
```

const [] = params.slugRoute
params.slugRoute = ["profile","1"]

#### 4) protected routes

"\_" = protected route
ex \_lib for utility functions route

```bash
https:localhost:3000/about/_lib
\_#_lib
   \_#page.tsx
    \_#utility.ts
```

#### 4)grouped routes

(grouped)
useful for omitting previous routes

```bash
  https:localhost:3000/about/(auth)/login
  ex:https:localhost:3000/about/login
  \_#(auth)
     \_#page.tsx
```

#### 5) rest... nesting routes

nesting multiple routes by compining many routing methods
