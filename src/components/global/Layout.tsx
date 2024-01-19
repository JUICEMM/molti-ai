// Layout.tsx

import Navbar from "./Navbars/Navbar";
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
        <div className="bg-neutral-900 p-5 space-y-2 text-white flex flex-col items-center">
          <p className="font-bold font-mono text-2xl">Moltiai.com</p>
          <p>Copyright © 2022- All rights reserved.</p>
          <p className="text-sm text-center">
            Moltiai 不隸屬於 TikTok
            或字節跳動有限公司，也不受其支持。我們的網站顯示由 TikTok
            之外的第三方服務提供的內容。Countik
            無法控制繼續在其網站上顯示的實體，考拉新媒體導航/ 快推易 大數據詞雲
            / 梅花網排行 / 千瓜數據 / Countik / SocialBook 也不批准或認可它。
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
