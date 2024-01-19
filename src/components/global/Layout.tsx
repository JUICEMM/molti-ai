// Layout.tsx

import Navbar from "./navbars/Navbar";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Common layout elements, header, footer, etc. */}
      <Navbar />

      {/* Page content */}
      {children}

      {/* Common layout elements, footer, etc. */}
      <footer>
        <div className="bg-neutral-900 px-9 py-6 space-y-2 text-white flex flex-col items-center">
          <p className="font-bold font-mono text-lg md:text-2xl">Moltiai.com</p>
          <p className="font-bold font-mono text-lg text-center md:text-2xl">
            Copyright © 2024- All rights reserved.
          </p>
          <p className="text-xs md:text-sm text-center">
            Moltiai 不隸屬於 TikTok
            或字節跳動有限公司，也不受其支持。我們的網站顯示由 考拉新媒體導航/
            快推易 大數據詞雲 / 梅花網排行 / 千瓜數據 / Countik / SocialBook
            之外的第三方服務提供的內容。Molti無法控制繼續在其網站上顯示的實體
            第三方服務提供的內容也不批准或認可它。
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;