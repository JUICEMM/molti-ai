import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Matrix_AI_InformationPage = () => {
  const [showStatus, setShowStatus] = useState("info");

  return (
    <div className="p-5 min-h-dvh">
      <div>
        <h1 className="text-3xl font-bold">資訊公告</h1>
      </div>
      <div className="my-5 flex items-center gap-2">
        <Button
          variant={"ghost"}
          className={
            showStatus === "info" ? `text-xl font-bold bg-slate-100` : `text-xl`
          }
          onClick={() => setShowStatus("info")}
        >
          全部
        </Button>
        <Button
          variant={"ghost"}
          className={
            showStatus === "tutorial" ? `text-xl font-bold bg-slate-100` : `text-xl`
          }
          onClick={() => setShowStatus("tutorial")}
        >
          系統教程
        </Button>
      </div>
      {showStatus === "info" ? (
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>開放 API 重新綁定通知</AccordionTrigger>
            <AccordionContent>
              1、客戶發佈涉及黃色內容，導致抖音接口被封，之前在【矩陣號授權】-【D音掃碼（開放接口）】授權的帳號，需要將之前的帳號刪除並重新綁定，其他平台的掃碼授權沒有影響。
              <br></br>
              2、新的解決方案即將上線，每個視頻通過百度雲識別審核內容。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>平台發佈規範</AccordionTrigger>
            <AccordionContent>
              一、綁定的D音號有什麼要求<br></br>
              沒有要求，不過為了更好的效果建議注意以下方面：<br></br>
              不要直接打硬廣告，檢查自己帳號的暱稱、頭像、個性簽名、視頻等，是否帶有特別露骨的廣告，比如把暱稱寫為xx產品總代
              <br></br>
              個性簽名直接就是加微信，如果是這種情況，先修改成正常的網名，正常的頭像，個性簽名前期最好不要留有太露骨的聯絡方式
              <br></br>
              建議是以企業身份註冊並且認證後的新號。以避免原來的抖音號已經降權。
              <br></br>
              二、發布到D音、快手的視頻是第一次發布，不可發布重複視頻，即D音發布過的視頻將不被審核。如出現重複的視頻D音審核不通過，影響後期發布效果，多次出現將停止發布該用戶視頻。
              <br></br>
              三、發布的視頻內容不可帶有視頻剪輯工具標識、水印、CCTV、微視、好看視頻、優酷、騰訊視頻、D音、快手等相關水印標識。
              <br></br>
              四、發布的視頻編輯的標題以“關鍵詞1，關鍵詞2，關鍵詞3+簡短修飾詞
              #關鍵詞1 #關鍵詞2 @公司D音號”<br></br>
              例如：室內吊頂裝飾燈，吊頂裝飾燈展示，吊頂裝飾燈室內展示效果
              #高端裝飾燈 #吊頂裝飾燈 @艾佳裝飾燈<br></br>
              五、視頻尺寸不符合，質量太差、時間太短，拍攝清晰、視頻時長15秒——15分鐘內（建議30秒-1分鐘，可提升完播率），大小150M內。
              <br></br>
              六、不可發布裸露、香煙、招商加盟、藥品、醫療、金融、交友、灰色行業和國家和平台禁止行業視頻相關內容。
              <br></br>
              七、不可展示商家地址、商家聯繫方式、二維碼等，不可展示價格、打折等，不可進行好物安利並引導站外購買等。
              <br></br>
              例如：免費領取、優惠券、免費贈送等文字 【官方參考】<br></br>
              八、發布內容不可涉及廠家批發、廠家源頭等組合相關字符<br></br>
              例如：南寧市政井蓋廠家批發【南寧市政井蓋廠家批發】、南寧水泥井蓋成產廠家【井蓋廠家批發】價格
              <br></br>
              九、發布內容和標題不可涉及廣告法禁止文字相關內容<br></br>
              例如：國家級、世界級、最高級、最佳、唯一等廣告極限詞。<br></br>
              十、Logo大於30*30像素，特殊需求如涉及公司水印Logo需要透明底圖片製作，且不要影響視頻美觀。
              <br></br>
              凡涉及上述2、3、4、5、10條規範不符合條件將審核不通過，發布涉及6、7、8、9出現三次將停用發布功能。
              <br></br>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>抖音用戶協會公約</AccordionTrigger>
            <AccordionContent>
              <a href="https://www.douyin.com/draft/douyin_agreement/douyin_agreement_user.html?id=6773906068725565448">
                點擊連結前往
              </a>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>禁止發布和傳播的商業行為</AccordionTrigger>
            <AccordionContent>
              <a href="https://www.douyin.com/video/6807640571759365384">
                點擊連結前往
              </a>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>敏感違禁詞整合</AccordionTrigger>
            <AccordionContent>
              一、嚴禁使用極限用語<br></br>
              1、嚴禁使用國家級、世界級、最高級、第一、唯一、首個、首選、頂級、國家級產品、填補國內空白、獨家、首家、最新、最先進、第一品牌、金牌、名牌、優秀、頂級、獨家、全網銷量第一、全球首發、全國首家、全網首發、世界領先、頂級工藝、王牌、銷量冠軍、第一（NO1\Top1）、極致、永久、王牌、掌門人、領袖品牌、獨一無二、絕無僅有、史無前例、萬能等。
              <br></br>
              2、嚴禁使用最高、最低、最、最具、最便宜、最新、最先進、最大程度、最新技術、最先進科學、最佳、最大、最好、最大、最新科學、最新技術、最先進加工工藝、最時尚、最受歡迎、最先、等含義相同或近似的絕對化用語。
              <br></br>
              3、嚴禁使用絕對值、絕對、大牌、精確、超賺、領導品牌、領先上市、巨星、著名、奢侈、世界
              全國X大品牌之一等無法考證的詞語。<br></br>
              4、嚴禁使用100%、國際品質、高檔、正品、國家級、世界級、最高級最佳等虛假或無法判斷真偽的誇張性表述詞語。
              <br></br>
              抖音發不出去甚至被封號？可能是你觸碰了這8類敏感違禁詞
              二、違禁時限用語<br></br>
              限時須有具體時限，所有團購須標明具體活動日期，嚴禁使用隨時結束、僅此一次、隨時漲價、馬上降價、最後一波等無法確定時限的詞語。
              <br></br>
              三、違禁權威性詞語<br></br>
              1、嚴禁使用國家XXX領導人推薦、國家XX機關推薦、國家XX機關專供、特供等借國家、國家機關工作人員名稱進行宣傳的用語
              <br></br>
              2、嚴禁使用質量免檢、無需國家質量檢測、免抽檢等宣稱質量無需檢測的用語
              <br></br>
              3、嚴禁使用人民幣圖樣（央行批准的除外）<br></br>
              4、嚴禁使用老字號、中國馳名商標、特供、專供等詞語（唯品會專供除外）
              <br></br>
              四、嚴禁使用疑似欺騙消費者的詞語
              例如“恭喜獲獎”“全民免單”“點擊有驚喜”“點擊獲取”“點擊試穿”“領取獎品”“非轉基因更安全”等文案元素。
              <br></br>
              抖音發不出去甚至被封號？可能是你觸碰了這8類敏感違禁詞
              五、嚴禁使用刺激消費詞語<br></br>
              嚴禁使用激發消費者搶購心理詞語，如“秒殺”“搶爆”“再不搶就沒了”“不會再便宜了”“錯過就沒機會了”“萬人瘋搶”“搶瘋了”等詞語。
              <br></br>
              六、疑似醫療詞語<br></br>
              這一點僅針對普通商品，不含特殊用途化妝品、保健食品、醫療器械。
              <br></br>
              1、全面調整人體內分泌平衡；增強或提高免疫力；助眠；失眠；滋陰補陽；壯陽
              <br></br>
              2、消炎；可促進新陳代謝；減少紅血絲；產生優化細胞結構；修復受損肌膚；治愈（治愈系除外）；抗炎；活血；解毒；抗敏；脫敏
              <br></br>
              3、減肥；清熱解毒；清熱袪濕；治療；除菌；殺菌；抗菌；滅菌；防菌；消毒；排毒
              <br></br>
              4、防敏；柔敏；舒敏；緩敏；脫敏；褪敏；改善敏感肌膚；改善過敏現象；降低肌膚敏感度
              <br></br>
              5、鎮定；鎮靜；理氣；行氣；活血；生肌肉；補血；安神；養腦；益氣；通脈
              <br></br>
              6、胃脹蠕動；利尿；驅寒解毒；調節內分泌；延緩更年期；補腎；祛風；生髮
              <br></br>
              7、防癌；抗癌<br></br>
              8、祛疤；降血壓；防治高血壓；治療<br></br>
              9、改善內分泌；平衡荷爾蒙；防止卵巢及子宮的功能紊亂；去除體內毒素；吸附鉛汞
              <br></br>
              10、除濕；潤燥；治療腋臭；治療體臭；治療陰臭<br></br>
              11、美容治療；消除斑點；斑立淨；無斑；治療斑禿；逐層減退多種色斑；妊娠紋
              <br></br>
              12、毛髮新生；毛髮再生；生黑髮；止脫；生髮止脫；脂溢性脫發；病變性脫發；毛囊激活
              <br></br>
              13、酒糟鼻；傷口愈合清除毒素<br></br>
              14、緩解痙攣抽搐；減輕或緩解疾病症狀；處方；藥方；經××例臨床觀察具有明顯效果
              <br></br>
              15、丘疹；膿疱；手癬；甲癬；體癬；頭癬；股癬；腳癬；腳氣；鵝掌癬；花斑癬；牛皮癬；傳染性濕疹
              <br></br>
              16、感冒；經痛；肌痛；頭痛；腹痛；便秘；哮喘；支氣管炎；消化不良
              <br></br>
              17、刀傷；燒傷；燙傷；疮痈；毛囊炎；皮膚感染；皮膚面部痙攣等疾病名稱或症狀
              <br></br>
              18、細菌、真菌、念珠菌、糠秕孢子菌、厭氧菌、牙孢菌、痤疮、毛囊寄生蟲等微生物名稱
              <br></br>
              19、雌性激素、雄性激素、荷爾蒙、抗生素、激素<br></br>
              20、藥物；中草藥；中枢神經<br></br>
              21、細胞再生；細胞增殖和分化；免疫力；患處；疤痕；關節痛；凍瘡；凍傷
              <br></br>
              22、皮膚細胞間的氧氣交換；紅腫；淋巴液；毛細血管；淋巴毒等
              <br></br>
              七、迷信用語<br></br>
              帶來好運氣，增強第六感、化解小人、增加事業運、招財進寶、健康富貴、提升運氣、有助事業、護身、
              平衡正負能量、消除精神壓力、調和氣壓、逢凶化吉、時來運轉、萬事亨通、旺人、旺財、助吉避凶、轉富招福等。
              <br></br>
              抖音發不出去甚至被封號？可能是你觸碰了這8類敏感違禁詞
              八、化妝品虛假宣傳用語<br></br>
              特效；高效；全效；強效；速效；速白；一洗白；XX天見效；XX周期見效；超強；激活；全方位；全面；安全；無毒；溶脂、吸脂、燃燒脂肪；瘦身；瘦臉；瘦腿；減肥；延年益壽；提高（保護）記憶力
              <br></br>
              提高肌膚抗刺激；消除；清除；化解死細胞；去（祛）除皺紋；平皺；修復斷裂彈性（力）纖維；止脫；採用新型著色機理永不褪色
              <br></br>
              迅速修復受紫外線傷害的肌膚；更新肌膚；破壞黑色素細胞；阻斷（阻礙）黑色素的形成；豐乳、豐胸、使乳房豐滿、預防乳房鬆弛下垂（美乳、健美類化妝品除外）；改善（促進）睡眠；舒眠等。
              <br></br>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>收費標準</AccordionTrigger>
            <AccordionContent>
              <table>
                <thead>
                  <tr>
                    <th>序號</th>
                    <th>項目</th>
                    <th>收費明細</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>視頻矩陣</td>
                    <td>每個視頻/每個賬號 1點</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>查排名</td>
                    <td>每個詞/每位博主 1點</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>引流外鏈</td>
                    <td>
                      每次訪問 0點（自帶防刷功能，短時間屏蔽訪問頻繁的IP段）
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>無水印下載</td>
                    <td>每個 0點</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>剪輯視頻</td>
                    <td>每個視頻 1點</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>企業號運維天數</td>
                    <td>每天 1點</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>排名達標前10</td>
                    <td>每天每個詞 2點</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>排名達標前20</td>
                    <td>每天每個詞 1點</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>評論回復</td>
                    <td>每條 1點</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>私信回復</td>
                    <td>每條 1點</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>防封抖鏈</td>
                    <td>每條 1點</td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>抖音外賣&探店</td>
                    <td>每條 1點</td>
                  </tr>
                </tbody>
              </table>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ) : (
        <div>
          <div>
            <a href="https://docs.google.com/document/d/1RmoSpztnm8PEPm3pCnk7Ea0Sie0-5J0Wi6f493BmmfQ/edit?usp=sharing">
              圖文教學
            </a>
          </div>
          <div>
            <a href="https://docs.google.com/document/d/1i1F7QjWLNG1QQ_vYrWShTVGZDJ8lei0rtKybZhiAwlw/edit#heading=h.nj2hkqucuqe9">
              影片教學
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Matrix_AI_InformationPage;
