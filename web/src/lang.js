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
        }
    }

    return textTranslated[key][LANG];
}
