# Molti電商分析網站

這個網站是用[T3 Stack](https://create.t3.gg/)為基底的Project，用Nextjs(Page Router)當作前後端、[Tailwind CSS](https://tailwindcss.com)用來美化、[Prisma](https://prisma.io)來簡化數據管理、[tRPC](https://trpc.io)來建立呼叫數據的router，詳細的docs可以去看他們的官網資訊



## 檔案結構

首先我們來看檔案結構，白話點就是讓你如何在哪個資料夾找到你要的檔案

如果熟悉Nextjs，一定對下面的檔案結構不陌生<br>
<img src="./public/README/folder_structure.png" alt="Alt Text" width="200">

我們依序來看src裏面的資料夾檔案<br>
<img src="./public/README/src.png" alt="Alt Text" width="200">

首先最上面的component檔案夾裡有三個資料夾
- `global`(裡面會是像是Navbar之類的components)<br>
![src檔案結構](./public/README/components-global.png)
- `page`(裡面放的是各個page的components)<br>
![src檔案結構](./public/README/components-page.png)
- `ui`(裡面可以不用動，是那來存放shadcn/ui的components)<br>
![src檔案結構](./public/README/components-ui.png)
