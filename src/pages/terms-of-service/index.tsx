const data = [
  {
    "title": "接受條款",
    "content": "這些條款規定了您使用Moltiai（以下簡稱「我們」）提供的服務的條件。透過訪問或使用我們的服務，即表示您同意遵守這些條款。"
  },
  {
    "title": "服務描述",
    "content": "Moltiai提供多種服務，包括但不限於（列舉您公司提供的主要服務）。我們保留隨時修改或終止服務的權利，恕不另行通知。"
  },
  {
    "title": "帳戶註冊與安全性",
    "content": "在使用我們的服務之前，您需要創建一個帳戶。請確保您提供的資訊準確且及時更新。您有責任保護您的帳戶信息及密碼。如有未經授權的使用，請立即通知我們。"
  },
  {
    "title": "使用者責任",
    "content": "您同意在使用我們的服務時遵守所有相關的法律法規。您不得從事任何非法、有害、威脅、侵犯他人權利或令人不悅的活動。"
  },
  {
    "title": "隱私保護",
    "content": "我們尊重並保護用戶隱私。請參閱我們的隱私政策以了解我們如何收集、使用和分享您的個人信息。"
  },
  {
    "title": "付款與退款",
    "content": "付款條件和政策將根據您所選擇的服務方案而定。有關退款的信息，請參閱我們的退款政策。"
  },
  {
    "title": "免責聲明",
    "content": "我們的服務基於現有技術提供，不保證無錯誤，並且可能受到各種因素的影響。我們不對可能由於使用我們的服務而引起的損失或損害負責。"
  },
  {
    "title": "修訂條款",
    "content": "我們保留隨時修改這些條款的權利，修改將在我們的網站上發佈。您應定期查看條款以確保您了解最新的條款。"
  },
  {
    "title": "聯絡我們",
    "content": "如有任何問題或疑慮，請聯繫我們，我們將盡快回應。"
  }
]


const PrivacyPolicyPage = () => {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">Moltiai 服務條款</h1>
      <div className="p-5 flex flex-col gap-5">
        {data.map((item, index) => (
          <div key={index}>
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
