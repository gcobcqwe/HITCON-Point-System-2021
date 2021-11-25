import Cookies from 'js-cookie'

export const LANG = Cookies.get('lang') || "zh";

export function langText(key) {
    const textTranslated = {
        "TOPIC_SECTION_TITLE": {
            "en": "Events",
            "zh": "主題活動"
        },
        "TOPIC_SECTION_DESC": {
            "en": "We strongly suggest you to access following events through PC: HITCON Online, Hacker Cat Adventure, and Malware Playground.",
            "zh": "HITCON Online、駭客貓歷險記、煉蠱等活動，建議使用電腦參與。"
        },
        "TAB_EVENT": {
            "en": "Events",
            "zh": "主題活動"
        },
        "TAB_AGENDA": {
            "en": "Agenda",
            "zh": "議程資訊"
        },
        "SCHEDULE_TITLE": {
            "en": "Current Session",
            "zh": "進行中議程"
        },
        "SCHEDULE_FULL_AGENDA": {
            "en": "Full Agenda",
            "zh": "查看完整議程表"
        },
        "PROGRAM_NO_ONGOING_SESSION": {
            "en": "There's no ongoing session currently.",
            "zh": "沒有進行中的議程"
        },
        "PROGRAM_CHECK_AGENDA": {
            "en": "Check the full agenda for next session.",
            "zh": "查看議程表確認下場議程"
        },
        "PROGRAM_VIEW_LIVESTREAM": {
            "en": "View Session Livestream",
            "zh": "前往議程直播"
        },
        "PROGRAM_VIEW_TRANSLATION": {
            "en": "View Translated Livestream",
            "zh": "前往議程口譯（英）"
        },
        "UNAUTH_GREETING_TITLE": {
            "en": "Welcome to HITCON 2021",
            "zh": "歡迎來到 HITCON 2021"
        },
        "UNAUTH_GREETING_DESC": {
            "en": 'You need to log in to access the events of HITCON 2021. You can find the login link in the "HITCON 2021 Pre-departure Notification Letter" in your inbox!',
            "zh": "需登入才能參加本次大會的活動，您可以在報名信箱裡的「HITCON 2021 行前通知信」中找到登入連結！"
        },
        "UNAUTH_STEP_INBOX": {
            "en": "Go To Inbox",
            "zh": "前往收件夾"
        },
        "UNAUTH_STEP_SEARCH_MAIL": {
            "en": 'Search "HITCON 2021 Pre-departure notification"',
            "zh": "搜尋「HITCON 2021 行前通知信」"
        },
        "UNAUTH_STEP_LOGIN": {
            "en": "Click the link inside the mail to login",
            "zh": "點選信中連結進行登入"
        },
        "UNAUTH_ALTER_METHOD": {
            "en": "Or login through the following steps",
            "zh": "或透過以下方式登入"
        },
        "UNAUTH_EMAIL_METHOD": {
            "en": "Email",
            "zh": "電子信箱"
        },
        "UNAUTH_EMAIL_DESC": {
            "en": "Please enter the e-mail address used for purchasing the ticket below. We will re-send the login link to you.",
            "zh": "請輸入購票時使用的電子信箱，我們將會重新寄送登入連結給您"
        },
        "UNAUTH_EMAIL_SEND": {
            "en": "Send",
            "zh": "寄送"
        },
        "UNAUTH_QRCODE_DESC": {
            "en": "Scan the QR code on the KKTIX ticket to login.",
            "zh": "請掃描 KKTIX 票券上的 QR code 進行登入"
        },
        "UNAUTH_QRCODE_OPEN_CAM": {
            "en": "Turn on the camera",
            "zh": "開啟相機"
        },
        "UNAUTH_QRCODE_TOKEN": {
            "en": "Enter the token manually",
            "zh": "手動輸入 token"
        },
        "UNAUTH_TOKEN_TITLE": {
            "en": "Enter Token",
            "zh": "輸入 Token"
        },
        "UNAUTH_TOKEN_DESC": {
            "en": "Please enter the token on your KKTIX ticket",
            "zh": "請輸入 KKTIX 票券上的 Token"
        },
        "CONFIRM": {
            "en": "Confirm",
            "zh": "確認"
        },
        "UNAUTH_TOKEN_QRCODE": {
            "en": "Scan QR code",
            "zh": "掃描 QR code"
        },
        "UNAUTH_EMAIL_LINK_TITLE": {
            "en": "Please click the link inside the mail to login.",
            "zh": "請透過信件中的連結登入"
        },
        "UNAUTH_EMAIL_MATCH": {
            "en": "If the",
            "zh": "若有報名資料符合"
        },
        "UNAUTH_EMAIL_SENDING": {
            "en": "exists in registration data, we will send the login link to that email.",
            "zh": "我們將會寄送登入連結至該信箱。"
        },
        "UNAUTH_QRCODE_SCAN": {
            "en": "Scan QR code",
            "zh": "掃描 QR code"
        },
        "UNAUTH_QRCODE_SCAN_KKTIX": {
            "en": "Please scan QR code on KKTIX ticket.",
            "zh": "請掃描 KKTIX 票券上的 QRcode "
        },
        "USER_CURRENT_POINTS": {
            "en": "Current points: ",
            "zh": "現有點數："
        },
        "USER_TRADE_POINTS": {
            "en": "Trade",
            "zh": "交易點數"
        },
        "USER_REDEEM_POINTS": {
            "en": "Exchange",
            "zh": "兌換折價券"
        },
        "TOPIC_ONLINE_TITLE": {
            "en": "HITCON online #NewbieFriendly",
            "zh": "HITCON online #新手友善"
        },
        "TOPIC_ONLINE_DESC": {
            "en": "In addition to providing a platform for online communication with sponsors, we will also add online activities and integrate Hacker Cat Adventures to bring a different game experience mixing virtuality, hoping to bring a different online experience to our members.",
            "zh": "2021 虛擬會場再次登場，承襲去年的精神，簡化系統設計，以網頁做為介面降低使用門檻及難度。除了原有提供線上會眾與贊助商交流的平台之外，還會加入線上的活動及結合駭客貓歷險記帶來不同的遊戲體驗，期望帶給會眾不一樣的線上體驗。"
        },
        "TOPIC_ADV_TITLE": {
            "en": "HITCON：Hacker Cat Adventure",
            "zh": "HITCON - 駭客貓歷險記"
        },
        "TOPIC_ADV_DESC": {
            "en": "Meow ~ hackers, are you ready for an adventure? Hacker Cat Adventures is an online puzzle game composed of plot, puzzle and information security elements, with unlimited playing time! Players can not only learn more about HITCON 2021 from the perspective of the hacker cats, but also collect points to redeem limited edition gifts.",
            "zh": "喵～駭客們，你準備好一起冒險了嗎？駭客貓歷險記是透過劇情、解謎與資安等要素所組成的解謎遊戲，不限遊玩時間只要是年會期間隨時可透過 HITCON Online 參與。進入 HITCON Online 以後，只需要找到 Hacker Cat 並和他說想要參與駭客貓歷險記，即可體驗我們的世界。玩家除了能認識 HITCON 2021 之外，也能同時收集點數換取限量精美禮品。"
        },
        "TOPIC_MP_TITLE": {
            "en": "Malware Playground",
            "zh": "煉蠱"
        },
        "TOPIC_MP_DESC": {
            "en": "The 2020 Malware Playground will continue to get even more difficult. The contestants will be even more difficult, what kind of tricks will be the king of compulsion this year? Are you ready to fight with each other on the net? The strongest Tricky King 2.0 is waiting for you to challenge!",
            "zh": "2020 好評延續，煉蠱大會將會再度進化！參賽者也會面對更困難的規則，今年將會是什麼樣高手利用奇技淫巧搶奪蠱王寶座呢？你準備好一起網內互打了嗎？最強蠱王 2.0 等你來挑戰！"
        },
        "TOPIC_MP_INTRO_LINK": {
            "en": "Intro Session",
            "zh": "新手村"
        },
        "TOPIC_MP_ADV_LINK": {
            "en": "Advanced Session",
            "zh": "進階場"
        },
        "TOPIC_MP_DOC_LINK": {
            "en": "Introduction",
            "zh": "說明文件"
        },
        "TOPIC_CAT_TITLE": {
            "en": "Operation：Hacker Cat #OnSiteOnly #ChatBot #HackerMeow",
            "zh": "駭客喵喵 & 駭客貓行動：#現場限定活動 #聊天機器人 #駭客喵喵"
        },
        "TOPIC_CAT_DESC": {
            "en": "Hello everyone ~ I'm Hacker Meow. Do you enjoy our HITCON event? You said the conference hall is so big that you don't know where to start? Okay, then! I'll take you around the conference hall! I've put some codes inside the conference hall.  Find all of them and answer them correctly. I'll be your assistant, so let's join the Operation：Hacker Cat together!  This is an onsite only event. I invite you to visit HITCON 2021 and use Telegram to call Hacker Meow and answer the questions. You will receive a nice gift!  In addition, I will be on Telegram and IRC to help you communicate with people at HITCON 2021. Looking forward to seeing you all at HITCON!",
            "zh": "大家好喵～我是駭客喵喵，大家有好好的來參與我們 HITCON 活動嗎？你說會場太大你不知道怎麼逛？好吧！那我帶著你們去逛會場好了！但單純的導覽挺無趣的，所以我在會場裡面放了一些機密代號，找到他們並且回答我正確答案，我會擔任你的小助理，讓我們一起參與駭客貓行動吧～ 屆時我也會提供小驚喜給你們呦～快行動吧！本活動屬於現場限定活動，邀請會眾們一邊參觀會場一邊使用 Telegram 呼叫駭客喵喵並回答他的題目，就能夠獲得精美小禮！另外，我將會在 Telegram 以及 IRC 上協助大家在 HITCON 2021 與大家交流。喵～期待大會與各位相見！"
        },
        "TOPIC_VILLAGE_TOPIC": {
            "en": "HITCON Village &  Salon Agenda (Unofficial Agenda) #OnSiteOnly",
            "zh": "HITCON Village & Village 沙龍議程（非官方議程）#現場限定活動"
        },
        "TOPIC_VILLAGE_DESC": {
            "en": "HITCON Village will have different community participation and provide rich topics, hoping to lead the audience to take a look at different aspects of information security technology and issues through practice questions and interactions, as well as experience the fun of the hacker life.\nSalon Agenda (Unofficial Agenda) is provided by our community partners and will be held in R3 conference room on Day 2 (11/27). There's in total of 2 sessions:\n\n13:10-13:55「IR 獵魔士：問題的起源與探討」from the village BlueTeamTown\n14:10 - 14:55「想靠桌遊發大財買小島」from the village 台科大資安研究社 ＆ 逢甲黑客社。\n\nIf you want to get more information of the event, welcome to visit our village booth!",
            "zh": "HITCON Village 會有不同的社群參與，提供豐富的主題，希望透過實作題與互動帶領會眾一窺不同面向的資安技術與議題，也體驗駭客生活圈的樂趣！\nDay 2 (11/27) 活動會場 R3 會議室將有社群帶來的沙龍議程（非官方議程），共有兩場：\n\n13:10-13:55 由 BlueTeamTown 帶來的「IR 獵魔士：問題的起源與探討」\n14:10 - 14:55 由 台科大資安研究社 ＆ 逢甲黑客社 帶來的「想靠桌遊發大財買小島」。\n\n詳細資訊歡迎詢問各 Village 攤位！"
        },
        "COUPON_YOUR_COUPON": {
            "en": "My Coupons",
            "zh": "擁有的折價券"
        },
        "COUPON_DEADLINE_NOTICE": {
            "en": "Points can be used to redeem for HITCON online store coupons until 12/05. Please complete your redemption before the deadline. The Coupon Code is valid before 2022-02-27 23:59.",
            "zh": "大會點數可用於兌換 HITCON 線上賣場折價券，兌換期間開放至 12/05，請於截止日前兌換完畢。以兌換的折價券請於 2022-02-27 23:59 前使用完畢"
        },
        "COUPON_PRICE": {
            "en": "Price",
            "zh": "金額"
        },
        "COUPON_CHANGED_DATE": {
            "en": "Redemption date",
            "zh": "兌換日期"
        },
        "COUPON_TOKEN": {
            "en": "Coupon Code",
            "zh": "折價券代碼"
        },
        "COUPON_HITCON_STORE": {
            "en": "HITCON Online Store",
            "zh": "HITCON 線上商店"
        },
        "BACK": {
            "en": "Back",
            "zh": "返回"
        },
        "COUPON_NAME": {
            "en": "$ Coupon",
            "zh": "$ 折價券"
        },
        "COUPON_COST": {
            "en": "Needs",
            "zh": "需要"
        },
        "COUPON_EXCHANGE": {
            "en": "Exchange",
            "zh": "兌換"
        },
        "COUPON_EXCH_ITEM": {
            "en": "Exchangeable items",
            "zh": "可兌換項目"
        },
        "COUPON_CONFIRM_EXCH": {
            "en": "Comfirm to exchange",
            "zh": "確認兌換"
        },
        "COUPON_USING_POINTS": {
            "en": "<div>Using {cost} points to exange for</div><div>{value}$ coupon.</div><div>Remaining points: xxxP </div>",
            "zh": "<div>您即將使用 {cost} 點兌換</div><div>「 {value} $折價券 」</div><div>完成後將剩餘 {points} 點</div>"
        },
        "CANCEL": {
            "en": "Cancel",
            "zh": "取消"
        },
        "COUPON_EXCH_DONE": {
            "en": "Completed",
            "zh": "兌換完成"
        },
        "COUPON_DONE_NOTICE": {
            "en": 'You can check the Coupon Code in "My Coupon" section. The Coupon Code is valid before 2022-02-27 23:59.',
            "zh": "兌換券代碼可於「擁有的折價券」中確認 請於 2022-02-27 23:59 前使用完畢"
        },
        "REDEEM_LIST_TITLE": {
            "en": "Send",
            "zh": "兌換碼發放"
        },
        "REDEEM_VALUE": {
            "en": "Points",
            "zh": "點數"
        },
        "REDEEM_STATE": {
            "en": "State",
            "zh": "狀態"
        },
        "REDEEM_STATE_AVAIABLE": {
            "en": "Available",
            "zh": "可發送"
        },
        "REDEEM_STATE_SENT": {
            "en": "Sent",
            "zh": "已發送"
        },
        "REDEEM_CODE": {
            "en": "Redemption Code",
            "zh": "兌換券代碼"
        },
        "REDEEM_TARGET": {
            "en": "Please provide this to the reciever.",
            "zh": "請出示給欲發送對象"
        },
        "REDEEM_COUNTER": {
            "en": "You have {number} Redemption Code available",
            "zh": "尚有 {number} 份兌換碼可發送"
        },
        "DONE": {
            "en": "Done",
            "zh": "完成"
        },
        "COUPON_POINTS_EXCH": {
            "en": "Exchange Points",
            "zh": "點數兌換"
        },
        "POINTS_OWNED": {
            "en": "You have {points} points",
            "zh": "您目前共有 {points} 點"
        },
        "TRADE_SEND_POINTS": {
            "en": "Send points",
            "zh": "發送點數"
        },
        "TRADE_SCAN_QR": {
            "en": "Please scan the QR code provided by the receiver",
            "zh": "請掃描欲發送對象的 QR code"
        },
        "TRADE_SENDING_QTY": {
            "en": "Please enter the point quantity you're going to send. You have {points} points.",
            "zh": "請輸入欲發送的點數數量 您目前共有 {points} 點"
        },
        "TRADE_SENDING_TARGET": {
            "en": "Sending to: ",
            "zh": "發送對象："
        },
        "TRADE_SENT_SUCCESS": {
            "en": "Succeeded",
            "zh": "發送成功"
        },
        "TRADE_SENT_DESC": {
            "en": "Sent {sendPoint} points to {receiver}",
            "zh": "您已將 {sendPoint} 點給予 {receiver}"
        },
        "TRADE_SENT_REMAINING": {
            "en": "{points} points remaining",
            "zh": "剩餘 {points} 點"
        },
        "TRADE_RECEIVING": {
            "en": "Receive points",
            "zh": "接收點數"
        },
        "TRADE_PROVIDE_QR": {
            "en": "Please show the QR code to the sender",
            "zh": "請出示下方 QR code 給發送對象"
        },
        "TRADE_REDEEM_POINTS": {
            "en": "Redeem Points",
            "zh": "領取點數"
        },
        "TRADE_REDEEM_QR": {
            "en": "Please scan the QR code",
            "zh": "請掃描大會提供的 QR code"
        },
        "TRADE_REDEEM_CONFIRM": {
            "en": "Redeem",
            "zh": "領取"
        },
        "TRADE_REDEEM_DONE": {
            "en": "Received {points} points",
            "zh": "您已收到 {points} 點"
        },
        "TRADE_TRADING_POINTS": {
            "en": "Trade Points",
            "zh": "交易點數"
        },
        "TRADE_SEND": {
            "en": "Send",
            "zh": "發送"
        },
        "TRADE_RECEIVE": {
            "en": "Receive",
            "zh": "接收"
        },
        "TRADE_REDEEM": {
            "en": "Redeem",
            "zh": "領取"
        }
    }

    return textTranslated[key][LANG];
}
