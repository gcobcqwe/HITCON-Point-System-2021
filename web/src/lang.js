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
            "zh": "搜尋「HITCON 2021 行前通知信"
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
            "en": "Trade points",
            "zh": "交易點數"
        },
        "USER_REDEEM_POINTS": {
            "en": "Redeem points",
            "zh": "兌換點數"
        }
    }

    return textTranslated[key][LANG];
}
