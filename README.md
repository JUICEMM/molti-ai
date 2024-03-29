# Molti電商分析網站

這個網站是用[T3 Stack](https://create.t3.gg/)為基底的Application，用Nextjs(Page Router)當作前後端(後端及資料庫尚未實現，如果很熟悉Nodejs可自己將頁面資料遷移)、[Tailwind CSS](https://tailwindcss.com)用來美化、[Prisma](https://prisma.io)來簡化數據管理、[tRPC](https://trpc.io)來建立呼叫數據的router，詳細的docs可以去看他們的官網資訊

## 使用的第三方套件

1.登入系統

- [clerk](https://dashboard.clerk.com/)

我們這裡不用NextAuth，我們改用clerk

clerk是一個現成使用者登入系統的套件，我們公司使用的帳戶是molti life(google)<br>
<img src="./public/README/molti_life_account.png" alt="Alt Text" width="400">

後續如果不知道如何使用可以去看[clerk-nextjs-docs](https://clerk.com/docs/quickstarts/nextjs)


2.畫面呈現

- [shadcn/ui](https://ui.shadcn.com/) 這是一個很好用的ui套件

- [material-ui](https://mui.com/material-ui/material-icons/?theme=Outlined&query=scien) 我部分的icon會使用material-ui

3.Form管理(將form資料傳給後端及資料庫)

我們使用shadcn/ui裡的[Form](https://ui.shadcn.com/docs/components/form)，它使用[react-hook-form](https://www.react-hook-form.com/)配zod(type safe)，可以按找他給的範例去客製管理

## 檔案結構

再來我們來看檔案結構，白話點就是讓你如何在哪個資料夾找到你要的檔案


如果熟悉Nextjs，一定對下面的檔案結構不陌生<br>
<img src="./public/README/folder_structure.png" alt="Alt Text" width="400">

## src

我們先依序來看src裏面的資料夾檔案<br>
<img src="./public/README/src.png" alt="Alt Text" width="400">

### components
首先最上面的components檔案夾裡有三個資料夾<br>
<img src="./public/README/components.png" alt="Alt Text" width="400">

- `global` (存放會出現在各個route的components)<br>
<img src="./public/README/components-global.png" alt="Alt Text" width="400">

這裡面存放會在各個地方出現的components，像是Navbar會在很多route中出現，故可以將他存放到global資料夾裡

- `page` (裡面放的是各個page的components)<br>
<img src="./public/README/components-page.png" alt="Alt Text" width="400">

裡面存放的是各個page的components，換句話說是將一個頁面的tsx code切割成數個小部分，將各個部分做成components方便管理，可以將各頁切割或重複使用的components分別依照他在哪一個route存放到page的相對應資料夾裡

ex:我將home主頁的code分成4個components，那就把它們放在components/page/home/*裡面(＊裡面的資料夾結構就沒有限制了，如果覺得編排的不好可以自己調整方便自己後續找到，目前是指要是分global跟page(會出現在很多地方或是只有在自己的route))


- `ui` (裡面可以不用動，這是拿來存放shadcn/ui的components)<br>
<img src="./public/README/components-ui.png" alt="Alt Text" width="400">

後續如果要新增shadcn/ui的components，他會自動載入到這個資料夾，我已經載的就不用重新載了，相關資訊請看[shadcn/ui](https://ui.shadcn.com/)

### context
詳細doc:https://react.dev/reference/react/useContext<br>
<img src="./public/README/context.png" alt="Alt Text" width="400"><br>
這裡存放React context api，裡面的folder structure可以按照Application的route進行排版

ex:在 hotspot route 裡有一個 prop drolling 的 state，為了方便維護與處理我們將此state放在名為 DataRowSelectionContext api 裡，並且將需要用到的component當children包在裡面<br>
<img src="./public/README/data_context.png" alt="Alt Text" width="400">
ex:目前只有一個控制勾選資料表格行位的state，由於它是控制在 hotspot route 裡面的一個資料表格，故將它放在src/context/page/hotspot

### hooks
裡面存放custom hook，目前只有一個可以重複呼叫twitch api的hook

### libs
libs資料夾主要是放各種function<br>
<img src="./public/README/lib.png" alt="Alt Text" width="400">

- `page`<br>

跟components資料夾裡的page一樣，裡面有各route的檔案夾，各route的檔案夾裡存放該頁的相關function

在我們的例子中，page底下有route為hotspot的頁面資料夾，只要是該頁相關的function都可以放在裡面，另外裡面的其他資料夾要怎麼分類都可以自己去調整

- `utils`<br>

裡面存放關於taiwind的相關function，沒特殊需求請不要動因為要配合shadcn/ui

### pages
pages是Nextjs裡的固定資料夾，裡面每一個資料夾代表一個route，詳細資料可以去[Nextjs-page-router](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts)<br>
<img src="./public/README/pages.png" alt="Alt Text" width="400">

- `api` 檔案夾是與trpc連接的api，大部分情況下幾乎不會碰到

- `sign-in` && `sign-up` 這兩個是clerk提供的內建route頁面，有登入跟註冊，除非後續有想要客制登入畫面，不然幾乎不會再動到
- `其他` 各route的名稱

### server
trpc router，未來如果需要使用可以參考[theo的示範](https://www.youtube.com/watch?v=YkOSUVzOAA4&t=4800s&ab_channel=Theo-t3%E2%80%A4gg)

### styles
css檔與icon

### utils 
裡面放一些重要的檔案 api.ts不會動到、openai.ts是連openai-api的檔案、ssgHelper是trpc裡一個可以融合 Nextjs SSR與SSG的helper function，目前尚未使用到

## types
由於我們使用Typescript，故需要用到大量的types，這個資料夾可以存放各種types<br>

## prisma
此為prisma檔案，詳細資訊請看：https://www.prisma.io/
如果依然不知道如何使用，可以參考：https://www.youtube.com/watch?v=RebA5J-rlwg&ab_channel=WebDevSimplified

### public
存放圖片，README檔案夾僅存放README的相關圖片








