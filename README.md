# Molti電商分析網站

這個網站是用[T3 Stack](https://create.t3.gg/)為基底的Project，用Nextjs(Page Router)當作前後端、[Tailwind CSS](https://tailwindcss.com)用來美化、[Prisma](https://prisma.io)來簡化數據管理、[tRPC](https://trpc.io)來建立呼叫數據的router，詳細的docs可以去看他們的官網資訊

## 使用的第三方library

<h1>登入系統</h1>

- [clerk](https://dashboard.clerk.com/)

clerk是一個現成使用者登入系統的套件，我們公司使用的帳戶是molti life(google)<br>
<img src="./public/README/molti_life_account.png" alt="Alt Text" width="200">

後續如果不知道如何使用可以去看- [clerk-nextjs-docs](https://clerk.com/docs/quickstarts/nextjs)



<h1>畫面呈現</h1>

- [shadcn/ui](https://ui.shadcn.com/)

這是一個很好用的ui套件

- [material-ui](https://mui.com/material-ui/material-icons/?theme=Outlined&query=scien)

我部分的icon會使用material-ui

- [tremor](https://www.tremor.so/)

目前的圖表都是用tremor上面的現成套件




## 檔案結構

再來我們來看檔案結構，白話點就是讓你如何在哪個資料夾找到你要的檔案

如果熟悉Nextjs，一定對下面的檔案結構不陌生<br>
<img src="./public/README/folder_structure.png" alt="Alt Text" width="200">

我們先依序來看src裏面的資料夾檔案<br>
<img src="./public/README/src.png" alt="Alt Text" width="200">

### components
首先最上面的components檔案夾裡有三個資料夾
- `global`(裡面會是像是Navbar之類的components)<br>
<img src="./public/README/components-global.png" alt="Alt Text" width="200">

這裡面存放會在global出現的components，像是Navbar會在很多route中出現，故可以將他存放到globsl資料夾裡

- `page`(裡面放的是各個page的components)<br>
<img src="./public/README/components-page.png" alt="Alt Text" width="200">

裡面存放的是各個page的components，換句話說是將一頁所有code做切割，將各個部分做成components方便管理，可以將各頁切割或重複使用的components存放到page資料夾裡


- `ui`(裡面可以不用動，是那來存放shadcn/ui的components)<br>
<img src="./public/README/components-ui.png" alt="Alt Text" width="200">

後續如果要新增shadcn/ui的components，他會自動載入到這個資料夾，相關資訊請看[shadcn/ui](https://ui.shadcn.com/)


