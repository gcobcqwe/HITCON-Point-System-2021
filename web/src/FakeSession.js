import moment from 'moment';
import { __esModule } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const fakeSession = {};
fakeSession["sessions"] = [];
fakeSession["speakers"] = [
    {
        "id": "41305dc2-364d-41f0-8667-3c79cb7a2b5b",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/01-2.jpg",
        "zh": {
            "name": "翁浩正",
            "bio": "戴夫寇爾 DEVCORE 執行長、台灣駭客協會 HITCON 常務理事。具備多年駭客技術研究及資安輔導經驗，協助政府及企業化解防禦盲點，消除與攻擊方的資訊不對稱。曾任學術及政府單位專任講師及顧問，並熱衷於社群經營及分享，培育更多資安人才。\n專長於紅隊演練（Red Team）、滲透測試、企業真實資安風險評鑑、專業教育訓練。"
        },
        "en": {
            "name": "Allen Own",
            "bio": ""
        }
    },
    {
        "id": "b9a98f91-a0c0-4357-84de-cce4be041617",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/01-1.jpg",
        "zh": {
            "name": "鍾澤華",
            "bio": "現任戴夫寇爾事業發展經理，負責將真實攻擊技巧轉換成企業防守策略及制度。曾任大型組織資安部門主管，負責資安政策、稽核、維運、採購等事項等業務；具備多年資安管理制度、防護及監控機制規劃經驗，擅長組織資安策略規劃、資安產品及服務發展趨勢分析，具有豐富的事件處理經驗。致力於將資安轉譯為企業可以理解及重視的項目，讓其從策略、管理面，持續改善防護姿態。"
        },
        "en": {
            "name": "Aaron Chung",
            "bio": ""
        }
    },
    {
        "id": "2344ac3e-72bf-4069-b625-99d66df60634",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/02-2.jpg",
        "zh": {
            "name": "zha0",
            "bio": "長期在資安產業打滾多年，擔任打雜工的角色"
        },
        "en": {
            "name": "zha0",
            "bio": ""
        }
    },
    {
        "id": "ab6cb6a6-fffc-408a-8eab-ac1822998ccb",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/default.jpg",
        "zh": {
            "name": "Tom",
            "bio": "長期投入資安工作，努力學習的資安從業人員{{{(>_<)}}}"
        },
        "en": {
            "name": "Tom",
            "bio": ""
        }
    },
    {
        "id": "4178d3b1-b52a-446c-91ab-92ee13886d90",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/02-1.png",
        "zh": {
            "name": "Aragorn",
            "bio": "長期投入資安研究工作，擔任zha的小弟"
        },
        "en": {
            "name": "Aragorn",
            "bio": ""
        }
    },
    {
        "id": "b24937c5-4226-4094-afda-af2823af5fab",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/03.jpeg",
        "zh": {
            "name": "Orange Tsai",
            "bio": "I am Orange!"
        },
        "en": {
            "name": "Orange Tsai",
            "bio": "I am Orange!"
        }
    },
    {
        "id": "28f17e03-e9b2-4001-836e-8b636deea0de",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/05.png",
        "zh": {
            "name": "Joey Chen",
            "bio": "Joey Chen is working as a Cyber Threat Researcher for Trend Micro Incorporated in Taiwan. His major areas of research include incident response, APT investigation, malware analysis and cryptography analysis. He not only has been a speaker at DeepIntel, CODEBLUE and CYBERSEC conference but also got 2018 Training Ambassador & Trainer price in TrendMicro. Now he is focusing on the security issues of target attack emerge threat and IOT systems."
        },
        "en": {
            "name": "Joey Chen",
            "bio": "Joey Chen is working as a Cyber Threat Researcher for Trend Micro Incorporated in Taiwan. His major areas of research include incident response, APT investigation, malware analysis and cryptography analysis. He not only has been a speaker at DeepIntel, CODEBLUE and CYBERSEC conference but also got 2018 Training Ambassador & Trainer price in TrendMicro. Now he is focusing on the security issues of target attack emerge threat and IOT systems."
        }
    },
    {
        "id": "e03c0412-7cf1-42cc-90ed-0341636d9a98",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/06-1.jpg",
        "zh": {
            "name": "Anthony Lai",
            "bio": "Anthony is interested in bug hunting, vulnerability research, malware and APT analysis. He is PhD candidate in HKUST.\n\nAnthony found VXCON and VXRL since 2010. He is Blackhat Asia, Cansecwest, HITB CFP reviewer and mentor in BoB, Korea and has spoken in different hacker conference including AVTokyo, Codegate, Blackhat USA, DEFCON, HiTB and Secuinside."
        },
        "en": {
            "name": "Anthony Lai",
            "bio": "Anthony is interested in bug hunting, vulnerability research, malware and APT analysis. He is PhD candidate in HKUST.\n\nAnthony found VXCON and VXRL since 2010. He is Blackhat Asia, Cansecwest, HITB CFP reviewer and mentor in BoB, Korea and has spoken in different hacker conference including AVTokyo, Codegate, Blackhat USA, DEFCON, HiTB and Secuinside."
        }
    },
    {
        "id": "6eb7b2aa-a663-4fa0-9954-254f9485bd94",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/06-2.jpg",
        "zh": {
            "name": "Byron Wai",
            "bio": "Byron is now a researcher of VXRL and working as a system engineer. CTF enthusiast and as member of Black Bauhinia. Currently working hard on OSCP."
        },
        "en": {
            "name": "Byron Wai",
            "bio": "Byron is now a researcher of VXRL and working as a system engineer. CTF enthusiast and as member of Black Bauhinia. Currently working hard on OSCP."
        }
    },
    {
        "id": "a1e2551c-9b31-41ab-a838-367c59198225",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/06-3.jpg",
        "zh": {
            "name": "Ken Wong",
            "bio": "Ken Wong(@wwkenwong) is a MPhil student in HKUST. He is holder of OSCP ,OSCE and CTF player of Black Bauhinia(@BlackB6a) and VXRL(vxresearch). His research interests are fuzzing and AI."
        },
        "en": {
            "name": "Ken Wong",
            "bio": "Ken Wong(@wwkenwong) is a MPhil student in HKUST. He is holder of OSCP ,OSCE and CTF player of Black Bauhinia(@BlackB6a) and VXRL(vxresearch). His research interests are fuzzing and AI."
        }
    },
    {
        "id": "8ff192e2-6276-4011-8277-1381f18d4d53",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/07.jpg",
        "zh": {
            "name": "Cheng-Yu Chao",
            "bio": "Cheng-Yu Chao (also known as Jeffxx) is security researcher at TrapaSecurity. Hs is also a member of Chroot - the top private hacker group in Taiwan. He has been taking part in CTF competitions for over 10 years, is a member of HITCON and 217 CTF teams which achieved second place at Defcon CTF 22 & 25. He has also presented at HITCON and PoC conferences. He is now focusing on Mobile and IoT security, particularly exploitation techniques."
        },
        "en": {
            "name": "Cheng-Yu Chao",
            "bio": "Cheng-Yu Chao (also known as Jeffxx) is security researcher at TrapaSecurity. Hs is also a member of Chroot - the top private hacker group in Taiwan. He has been taking part in CTF competitions for over 10 years, is a member of HITCON and 217 CTF teams which achieved second place at Defcon CTF 22 & 25. He has also presented at HITCON and PoC conferences. He is now focusing on Mobile and IoT security, particularly exploitation techniques."
        }
    },
    {
        "id": "65afda9a-71b2-4641-9bd6-8001c06ae700",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/08.jpeg",
        "zh": {
            "name": "Lays",
            "bio": "Lays 目前為 TeamT5 的資深研究員, 專注於逆向工程及漏洞研究\n且為 HITCON 及 217 CTF team 的成員, 在 DEF CON CTF 25 及 27 獲得亞軍\n同時也是 2019 及 2020 微軟 MSRC 的最有價值研究員之一, 曾經向 Microsoft, Samsung, NETGEAR 及 Synology 等廠商回報過漏洞"
        },
        "en": {
            "name": "Lays",
            "bio": "Shih-Fong Peng, also known as Lays, is a senior researcher at TeamT5. He is now focusing on reverse engineering and vulnerability research. He is a member of HITCON and 217 CTF team which achieved second place at DEF CON CTF 25 and 27. He is also one of the 2019 and 2020 MSRC Most Valuable Security Researchers and has reported vulnerabilities to Microsoft, Samsung, NETGEAR and Synology."
        }
    },
    {
        "id": "8edec924-4af5-430b-a4c3-46311b8c4be0",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/09.jpg",
        "zh": {
            "name": "Ken Lee",
            "bio": "Ken Lee is currently a manager and product security officer at Synology, managing the Security Bounty Program, Product Security Incident Response Team (PSIRT), and Computer Security Incident Response Team (CSIRT) to respond to all security incidents regarding the company."
        },
        "en": {
            "name": "Ken Lee",
            "bio": "Ken Lee is currently a manager and product security officer at Synology, managing the Security Bounty Program, Product Security Incident Response Team (PSIRT), and Computer Security Incident Response Team (CSIRT) to respond to all security incidents regarding the company."
        }
    },
    {
        "id": "8ded8865-a93a-426c-87da-ef58f13875d4",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/10.jpg",
        "zh": {
            "name": "Yanyu Zhang",
            "bio": "Yanyu Zhang，Chaitin Tech security researcher，Geekpwn 2018 winner，speaker of 36C3 and CSS, member of Tea Deliverers. "
        },
        "en": {
            "name": "Yanyu Zhang",
            "bio": "Yanyu Zhang，Chaitin Tech security researcher，Geekpwn 2018 winner，speaker of 36C3 and CSS, member of Tea Deliverers. "
        }
    },
    {
        "id": "e83826d6-d0d8-4d0a-8c80-27f88e324d5d",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/11-1.jpg",
        "zh": {
            "name": "Shin-Ming Cheng",
            "bio": "Prof. Shin-Ming Cheng received his B.S. and Ph.D. degrees in computer science and information engineering from National Taiwan University, Taipei, Taiwan, in 2000 and 2007, respectively. He was a Post-Doctoral Research Fellow at the Graduate Institute of Communication Engineering, National Taiwan University, from 2007 to 2012. Since 2012, he has been on the faculty of the Department of Computer Science and Information Engineering, National Taiwan University of Science and Technology, Taipei, where he is currently an associate professor. Since 2017, he has been with the Research Center for Information Technology Innovation, Academia Sinica, Taipei, where he is currently a joint associate research fellow.\n \nHis current interests are secure mechanism design and security-related platform development in 4G/5G networks and IoT networks. Recently he investigates the robustness issue in machine learning. He received 2014 K. T. Li Young Researcher Award from ACM Taipei/Taiwan Chapter and IEEE PIMRC 2013 Best Paper Award, Since 2015, he served as the PI of the largest security education camp, AIS3, in Taiwan and trained almost 1000 students in these years."
        },
        "en": {
            "name": "Shin-Ming Cheng",
            "bio": "Prof. Shin-Ming Cheng received his B.S. and Ph.D. degrees in computer science and information engineering from National Taiwan University, Taipei, Taiwan, in 2000 and 2007, respectively. He was a Post-Doctoral Research Fellow at the Graduate Institute of Communication Engineering, National Taiwan University, from 2007 to 2012. Since 2012, he has been on the faculty of the Department of Computer Science and Information Engineering, National Taiwan University of Science and Technology, Taipei, where he is currently an associate professor. Since 2017, he has been with the Research Center for Information Technology Innovation, Academia Sinica, Taipei, where he is currently a joint associate research fellow.\n \nHis current interests are secure mechanism design and security-related platform development in 4G/5G networks and IoT networks. Recently he investigates the robustness issue in machine learning. He received 2014 K. T. Li Young Researcher Award from ACM Taipei/Taiwan Chapter and IEEE PIMRC 2013 Best Paper Award, Since 2015, he served as the PI of the largest security education camp, AIS3, in Taiwan and trained almost 1000 students in these years."
        }
    },
    {
        "id": "41499ca0-a89e-436f-9b6b-c9d931f93562",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/11-2.jpg",
        "zh": {
            "name": "Bing-Kai Hong",
            "bio": "Bing-Kai Hong (Jed Hung) is a Ph.D. student in the Computer Science and Information Engineering at the National Taiwan University of Science and Technology, with preparing his thesis on 5G network security. Since 2017, he started working at the Sentra Smart Technology Inc., where his position is the System Architect. Specialize in infrastructure deploy and security solutions at the networking, software, and cloud services in environments. In 2018, he is an intern member of the Communication Systems Department at EURECOM, who participated in many international group research and development open-source projects connected with a network protocol, security, virtualization, cloud computing, and programmable 5G network. The main contribution was done in the projects: “OpenAirInterface: The F1 CU-DU split”. As part of the project realization, he cooperated and coordinated work with other international EURECOM units, including France, the USA, China, Romania, Tunisia. Since 2019, he is a trainee member of the Cybersecurity Laboratory at the National Institute of Information and Communications Technology. He participated in Cybersecurity group research and development projects connected with IoT security, IoT Firmware, and Malware analysis, virtualization, and programmable networks."
        },
        "en": {
            "name": "Bing-Kai Hong",
            "bio": "Bing-Kai Hong (Jed Hung) is a Ph.D. student in the Computer Science and Information Engineering at the National Taiwan University of Science and Technology, with preparing his thesis on 5G network security. Since 2017, he started working at the Sentra Smart Technology Inc., where his position is the System Architect. Specialize in infrastructure deploy and security solutions at the networking, software, and cloud services in environments. In 2018, he is an intern member of the Communication Systems Department at EURECOM, who participated in many international group research and development open-source projects connected with a network protocol, security, virtualization, cloud computing, and programmable 5G network. The main contribution was done in the projects: “OpenAirInterface: The F1 CU-DU split”. As part of the project realization, he cooperated and coordinated work with other international EURECOM units, including France, the USA, China, Romania, Tunisia. Since 2019, he is a trainee member of the Cybersecurity Laboratory at the National Institute of Information and Communications Technology. He participated in Cybersecurity group research and development projects connected with IoT security, IoT Firmware, and Malware analysis, virtualization, and programmable networks."
        }
    },
    {
        "id": "e3c23ba8-97d2-475e-b8fe-cbcc41cdc864",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/12.jpg",
        "zh": {
            "name": "Julian Suleder",
            "bio": "Julian Suleder is a Security Analyst & Researcher at ERNW Research GmbH\nin Heidelberg, Germany. His research interest is the security of medical\ndevices as he holds a master’s degree in medical informatics from\nHeidelberg University and Heilbronn University, Germany. Besides IT\nsecurity, he enjoys researching in the special interest group Consumer\nHealth Informatics (CHI) of the German Association for Medical\nInformatics, Biometry, and Epidemiology (GMDS)."
        },
        "en": {
            "name": "Julian Suleder",
            "bio": "Julian Suleder is a Security Analyst & Researcher at ERNW Research GmbH\nin Heidelberg, Germany. His research interest is the security of medical\ndevices as he holds a master’s degree in medical informatics from\nHeidelberg University and Heilbronn University, Germany. Besides IT\nsecurity, he enjoys researching in the special interest group Consumer\nHealth Informatics (CHI) of the German Association for Medical\nInformatics, Biometry, and Epidemiology (GMDS)."
        }
    },
    {
        "id": "48565031-c338-44ac-a6df-6c33f27974b0",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/13-1.jpeg",
        "zh": {
            "name": "Sheng-Hao Ma",
            "bio": "Sheng-Hao Ma (aaaddress1) is a core member of CHROOT Security Group and TDOHacker security community in Taiwan. He has over 10-year experience in reverse engineering, machine language, and Intel 8086. He experts in Windows vulnerability, and Reverse Engineering.\n \nMoreover, Sheng-Hao Ma was also a speaker at Black Hat, DEFCON USA, beVXCON, VXCON, HITCON, SITCON and iThome."
        },
        "en": {
            "name": "Sheng-Hao Ma",
            "bio": "Sheng-Hao Ma (aaaddress1) is a core member of CHROOT Security Group and TDOHacker security community in Taiwan. He has over 10-year experience in reverse engineering, machine language, and Intel 8086. He experts in Windows vulnerability, and Reverse Engineering.\n \nMoreover, Sheng-Hao Ma was also a speaker at Black Hat, DEFCON USA, beVXCON, VXCON, HITCON, SITCON and iThome."
        }
    },
    {
        "id": "2a7da063-9c1b-42a8-907a-c2f5406e1cea",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/14.jpg",
        "zh": {
            "name": "Federico Maggi",
            "bio": "With more than a decade of research experience in the cybersecurity field, Federico Maggi has done offensive and defensive research on web applications, network protocols and devices, embedded systems, radio-frequency control systems, industrial robots, cars, and mobile devices. Some of his research work has been featured on mainstream and media outlets such as Wired, Reuters, Forbes, Hackread, ZDNet, and MIT Technology Review.\nCurrently employed as a Senior Researcher with security giant Trend Micro (https://trendmicro.com), Federico was an Assistant Professor at Politecnico di Milano, one of the leading engineering technical universities in Italy. Aside his teaching activities, Federico co-directed the security group and has managed hundreds of graduate students.\nFederico has given several lectures and talks as an invited speaker at international venues and research schools, and also serves in the review or organizing committees of well-known conferences.\nMore info about Federico and his work is available online at https://maggi.cc"
        },
        "en": {
            "name": "Federico Maggi",
            "bio": "With more than a decade of research experience in the cybersecurity field, Federico Maggi has done offensive and defensive research on web applications, network protocols and devices, embedded systems, radio-frequency control systems, industrial robots, cars, and mobile devices. Some of his research work has been featured on mainstream and media outlets such as Wired, Reuters, Forbes, Hackread, ZDNet, and MIT Technology Review.\nCurrently employed as a Senior Researcher with security giant Trend Micro (https://trendmicro.com), Federico was an Assistant Professor at Politecnico di Milano, one of the leading engineering technical universities in Italy. Aside his teaching activities, Federico co-directed the security group and has managed hundreds of graduate students.\nFederico has given several lectures and talks as an invited speaker at international venues and research schools, and also serves in the review or organizing committees of well-known conferences.\nMore info about Federico and his work is available online at https://maggi.cc"
        }
    },
    {
        "id": "78e429a0-5ac8-40bd-99f2-8e063464103b",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/15.jpg",
        "zh": {
            "name": "劉榮太",
            "bio": "劉榮太博士為趨勢科技副總裁暨 TXOne Networks 執行長，於資安產品開發與商業管理領域擁有超過20年經驗。\nTXOne Networks是趨勢科技和Moxa四零四科技合資設立之公司，專注於工業物聯網及OT的安全防禦，為工控領域帶來務實有效的資安方案。作為趨勢科技的副總裁，劉博士領導趨勢科技的網路威脅防禦技術部，將公司的業務範圍擴展到電信網路及物聯網。在加入趨勢科技之前，劉博士是Broadweb的首席執行官。Broadweb於2013年10月被趨勢科技收購。\n劉博士自國立清華大學資訊工程系博士班畢業，並擁有多項專利及IEEE 及ACM的期刊和會議著作。"
        },
        "en": {
            "name": "劉榮太",
            "bio": "Dr. Terence Liu is Vice President in Trend Micro and General Manager in TXOne Networks. He has more than 20 years of experience in cybersecurity product development and business management. \n\nTXOne Networks is a company formed by a joint venture of Trend Micro and Moxa, focusing on industrial IoT and OT cybersecurity defense, bringing practical and effective cybersecurity solutions to the industrial control field. As the Vice President in Trend Micro, Dr. Terence Liu leads Trend Micro's Network Threat Defense Technology Group to expand the company’s footprint to the Telecommunication network and IoT.  Before joining Trend Micro, Terence was the CEO of Broadweb. BroadWeb was acquired by Trend Micro in October 2013.\n\nDr. Liu graduated from the Ph.D. Program of the Department of Computer Science at National Chiao Tung University, and he also holds several patents, and IEEE and ACM journals and conference work."
        }
    },
    {
        "id": "6a0f611e-3639-4b6a-ba72-25cb7b61165c",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/16.jpeg",
        "zh": {
            "name": "Boik Su",
            "bio": "CHROOT 成員 / h@cktivitycon, OWASP AppSec, ROOTCON"
        },
        "en": {
            "name": "Boik Su",
            "bio": ""
        }
    },
    {
        "id": "8ba05dc4-c29e-4d09-a2a3-557b67c84594",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/17.jpg",
        "zh": {
            "name": "Inndy Lin",
            "bio": "Inndy 是任職於奧義智慧科技的資訊安全研究員，專注於研究惡意程式、APT 攻擊以及 Windows 攻防。他喜愛鑽研逆向工程、Python以及分析惡意程式。曾經於 BlackHat、ROOTCON、SITCON 發表研究以及演講。"
        },
        "en": {
            "name": "Inndy Lin",
            "bio": ""
        }
    },
    {
        "id": "15d4304b-8778-49b9-a743-dbea7a790b38",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/04-1.png",
        "zh": {
            "name": "陳仲寬",
            "bio": "Bletchley 現為奧義智慧的資深研究員，負責協調資安研究團隊。他於國立交通大學網路安全實驗室取得博士學位。研究方向專注於網路攻防、惡意程式分析、漏洞分析與挖掘與自動化攻防。並利用機器學習等技術協助自動攻防系統之設計。他發表了多篇學術會議與期刊論文，並參與了許多大型資安研究計畫，主題包含：數位鑑識、事件處理及程式分析。在許多非學術技術會議，如：CodeBlue OpenTalk、HITB、FIRST(2020), HITCON 及 VXCON，亦積極參與並發表其研究。此外，他致力於資安教育，在交大創立交大網路安全策進會，鼓勵並培訓學生參與國際型 CTF 比賽。他為台灣資安社群相當活躍的成員，現為 Chroot 成員之一，並擔任 HITCON／荷蘭 HITB 資安會議的審查委員。"
        },
        "en": {
            "name": "Bletchley",
            "bio": ""
        }
    },
    {
        "id": "f1952240-fe02-4224-8424-79c36755fc58",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/04-2.jpg",
        "zh": {
            "name": "JohnThunder",
            "bio": "姜尚德（John Jiang）奧義智慧研究員，他專注研究在 Incident Response 和 Endpoint Security 領域。"
        },
        "en": {
            "name": "JohnThunder",
            "bio": ""
        }
    },
    {
        "id": "de724d8e-089b-4635-aec4-8a37b5dc2d17",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/Marcello-Pogliani.jpg",
        "zh": {
            "name": "Marcello Pogliani",
            "bio": "Marcello Pogliani holds a PhD in information technology (computer security) from Politecnico di Milano. His research interests focus on cybersecurity in general, and particularly on security analysis topics concerning cyber-physical and industrial systems. In his spare time, he enjoys playing and organizing Capture the Flag competitions with Politecnico's team, Tower of Hanoi, and with the Italian team mHACKeroni. Currently, Marcello is a Security Engineer with Secure Network Srl, an information security consultancy firm, and sometimes collaborates on research work with his former colleagues at Politecnico. The research presented at Black Hat 2020 was performed while Marcello was a PhD candidate at Politecnico di Milano."
        },
        "en": {
            "name": "Marcello Pogliani\r",
            "bio": "Marcello Pogliani holds a PhD in information technology (computer security) from Politecnico di Milano. His research interests focus on cybersecurity in general, and particularly on security analysis topics concerning cyber-physical and industrial systems. In his spare time, he enjoys playing and organizing Capture the Flag competitions with Politecnico's team, Tower of Hanoi, and with the Italian team mHACKeroni. Currently, Marcello is a Security Engineer with Secure Network Srl, an information security consultancy firm, and sometimes collaborates on research work with his former colleagues at Politecnico. The research presented at Black Hat 2020 was performed while Marcello was a PhD candidate at Politecnico di Milano."
        }
    },
    {
        "id": "6038d37d-39f1-4506-a458-583280722d20",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/default.jpg",
        "zh": {
            "name": "Davide Quarta",
            "bio": "While working on this project Davide Quarta was a Postdoctoral Researcher with the System Security group under the supervision of Davide Balzarotti. He received his PhD from Politecnico di Milano where he worked in the NECSTLab under the supervision of Stefano Zanero and Federico Maggi. During this journey, he co-advised more than 10 students on their master thesis, and projects. He received my Laurea Magistrale in Software and Digital Systems, and Laurea from Politecnico di Torino. As a Marie-Skłodowska Curie alumni, Davide has been an exchange student at UC Santa Barbara' SecLab, working under the supervision of Giovanni Vigna and Christopher Kruegel. At the end of his PhD, Davide had a chance to work as an engineering intern in Qualcomm' Product Security group under the supervision of Pouyan Sepehrdad. He served as a reviewer for several journals, and as part of the Security&Privacy '18 student program committee, and WOOT '19 Artifact Evaluation Committee. Davide loves teaching: He worked as TA in basic programming, and computer security courses. As a freelance consultant, he taught malware analysis, and mobile and windows reverse engineering for the Consorzio Interuniversitario Nazionale per l'Informatica, and national, and international clients of Italian security firms Secure Network, and Shorr Kan."
        },
        "en": {
            "name": "Davide Quarta",
            "bio": "While working on this project Davide Quarta was a Postdoctoral Researcher with the System Security group under the supervision of Davide Balzarotti. He received his PhD from Politecnico di Milano where he worked in the NECSTLab under the supervision of Stefano Zanero and Federico Maggi. During this journey, he co-advised more than 10 students on their master thesis, and projects. He received my Laurea Magistrale in Software and Digital Systems, and Laurea from Politecnico di Torino. As a Marie-Skłodowska Curie alumni, Davide has been an exchange student at UC Santa Barbara' SecLab, working under the supervision of Giovanni Vigna and Christopher Kruegel. At the end of his PhD, Davide had a chance to work as an engineering intern in Qualcomm' Product Security group under the supervision of Pouyan Sepehrdad. He served as a reviewer for several journals, and as part of the Security&Privacy '18 student program committee, and WOOT '19 Artifact Evaluation Committee. Davide loves teaching: He worked as TA in basic programming, and computer security courses. As a freelance consultant, he taught malware analysis, and mobile and windows reverse engineering for the Consorzio Interuniversitario Nazionale per l'Informatica, and national, and international clients of Italian security firms Secure Network, and Shorr Kan."
        }
    },
    {
        "id": "4b3c75aa-fa71-41fd-8034-f8e7a25476b5",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/Stefano-Zanero.jpg",
        "zh": {
            "name": "Stefano Zanero",
            "bio": "Stefano Zanero received a PhD in Computer Engineering from Politecnico di Milano, where he is currently an associate professor with the Dipartimento di Elettronica, Informazione e Bioingegneria. His research focuses on malware analysis, cyberphysical security, and cybersecurity in general. Besides teaching \"Computer Security\" and \"Computer Forensics\" at Politecnico, he has an extensive speaking and training experience in Italy and abroad. He co-authored over 70 scientific papers and books. He is a Senior Member of the IEEE (for which he sits on the MGA board), the IEEE Computer Society (for which he is a member of the Board of Governors), and a lifetime senior member of the ACM. Stefano co-founded the Italian chapter of ISSA (Information System Security Association). He has been named a Fellow of ISSA and sits in its International Board of Directors. Stefano is also a co-founder and chairman of Secure Network, a leading information security consulting firm based in Milan and in London; a co-founder of 18Months, a cloud-based ticketing solutions provider; and a co-founder of BankSealer, a startup in the FinTech sector that addresses fraud detection through machine learning techniques."
        },
        "en": {
            "name": "Stefano Zanero\r",
            "bio": "Stefano Zanero received a PhD in Computer Engineering from Politecnico di Milano, where he is currently an associate professor with the Dipartimento di Elettronica, Informazione e Bioingegneria. His research focuses on malware analysis, cyberphysical security, and cybersecurity in general. Besides teaching \"Computer Security\" and \"Computer Forensics\" at Politecnico, he has an extensive speaking and training experience in Italy and abroad. He co-authored over 70 scientific papers and books. He is a Senior Member of the IEEE (for which he sits on the MGA board), the IEEE Computer Society (for which he is a member of the Board of Governors), and a lifetime senior member of the ACM. Stefano co-founded the Italian chapter of ISSA (Information System Security Association). He has been named a Fellow of ISSA and sits in its International Board of Directors. Stefano is also a co-founder and chairman of Secure Network, a leading information security consulting firm based in Milan and in London; a co-founder of 18Months, a cloud-based ticketing solutions provider; and a co-founder of BankSealer, a startup in the FinTech sector that addresses fraud detection through machine learning techniques."
        }
    },
    {
        "id": "fcfe4c8c-3735-46a2-8ba3-4318275f08ef",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/Marco-Balduzzi.jpg",
        "zh": {
            "name": "Marco Balduzzi",
            "bio": "Dr. Marco Balduzzi holds a PhD in applied security from Télécom ParisTech and a M.Sc. in computer engineering from University of Bergamo. His interests concern all aspects of computer security, with particular emphasis on real problems that affect systems and networks. Some topics of interest are web and browser security, code analysis, malware detection, cyber-crime, privacy, and threats in the IoT space. With 15 years of experience in IT security, he's now with Trend Micro as a Senior Research Scientist. His work has been published in top peer-reviewed conferences like NDSS, RAID and ACSAC, and featured by distinguished media like Forbes, The Register, InfoWorld, DarkReading, BBC, and CNN. He's a regular speaker at conferences like Black Hat, HITB, OWASP AppSec, and now sits on the review board of IEEE journals and venues like HITB, AppSec, eCrime, and DIMVA."
        },
        "en": {
            "name": "Marco Balduzzi\r",
            "bio": "Dr. Marco Balduzzi holds a PhD in applied security from Télécom ParisTech and a M.Sc. in computer engineering from University of Bergamo. His interests concern all aspects of computer security, with particular emphasis on real problems that affect systems and networks. Some topics of interest are web and browser security, code analysis, malware detection, cyber-crime, privacy, and threats in the IoT space. With 15 years of experience in IT security, he's now with Trend Micro as a Senior Research Scientist. His work has been published in top peer-reviewed conferences like NDSS, RAID and ACSAC, and featured by distinguished media like Forbes, The Register, InfoWorld, DarkReading, BBC, and CNN. He's a regular speaker at conferences like Black Hat, HITB, OWASP AppSec, and now sits on the review board of IEEE journals and venues like HITB, AppSec, eCrime, and DIMVA."
        }
    },
    {
        "id": "1d93e386-558b-4998-b9d8-a04aa388970e",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/default.jpg",
        "zh": {
            "name": "cp",
            "bio": "最近右手手腕在復健，但是我結印還是很快\nhttps://www.linkedin.com/in/chipin-chen/"
        },
        "en": {
            "name": "cp",
            "bio": ""
        }
    },
    {
        "id": "6b76a17c-8280-4a50-ad27-f462992951db",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/default.jpg",
        "zh": {
            "name": "zet",
            "bio": "HackStuff 成員，接觸資訊安全超過五分鐘\n常常做一做研究就跑去休息，一年休息三次，一次休息四個月"
        },
        "en": {
            "name": "zet",
            "bio": ""
        }
    },
    {
        "id": "d64f6a89-ebfb-4fa1-9179-9e9ece36cf6d",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/freetsubasa.JPG",
        "zh": {
            "name": "freetsubasa",
            "bio": "貓奴 + 電玩收藏家\r\n最近的興趣是組模型\r"
        },
        "en": {
            "name": "freetsubasa",
            "bio": ""
        }
    },
    {
        "id": "a55cb106-9dfa-4bd9-90bf-c82813888e28",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/20.jpg",
        "zh": {
            "name": "邱品仁",
            "bio": "目前為中華資安國際的研發副理，主要負責資安產品與服務之技術研發。接觸網路資安領域已超過10年，下班後仍是一位對資安題材抱持著極高興趣與熱忱的小書僮，平常的興趣是資安威脅情資研究與攻防技巧鑽研，期望有一天可以達成指哪打哪的技術成就，並貢獻一己之力於資安社群與產業界。"
        },
        "en": {
            "name": "邱品仁",
            "bio": ""
        }
    },
    {
        "id": "92fa70b6-6c35-4772-9fab-2b028bc29909",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/劉作仁.png",
        "zh": {
            "name": "劉作仁",
            "bio": "2008年開始從事資訊安全工作，主要以滲透測試、網頁安全、物聯網安全及網路攻擊為主，有SSCP, GPEN, GWAPT, ECSA, CEH等資安證照，並曾於2015年獲得ISC2亞太區資安從業人員獎項。目前為安華聯網技術服務處處長暨技術長，帶領團隊建置 ISO17025實驗室，針對雲端、物聯網、行動裝置、車載及工控的安全測試與研究。"
        },
        "en": {
            "name": "劉作仁",
            "bio": "CTO and technology service director of Onward Security. Familiar with web security and fuzzing technique, loves to find the security vulnerabilities in different field, such as web application, cloud service, ICS/SCADA, mobile application, automotive and IoT device."
        }
    },
    {
        "id": "4d9cb366-8662-4b60-bb5c-6fdde7fe4a69",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/Aobo_Wang.jpg",
        "zh": {
            "name": "Aobo Wang",
            "bio": "Security researcher from Chaitin Tech.\r\nGeekPwn 2019 Winner\r\nCTF Player of Tea Deliverers"
        },
        "en": {
            "name": "Aobo Wang\r",
            "bio": "Security researcher from Chaitin Tech.\r\nGeekPwn 2019 Winner\r\nCTF Player of Tea Deliverers"
        }
    },
    {
        "id": "4a0cfd80-e65a-40fe-bbc2-7d4dc7c6768d",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/Jihong_Zheng.jpg",
        "zh": {
            "name": "Jihong Zheng",
            "bio": "Chaitin Tech. Security Researcher\r\nGeekpwn 2018/2019 winner\r\nSpeaker of ISC\r\nMember of Tea Deliverers"
        },
        "en": {
            "name": "Jihong Zheng",
            "bio": "Chaitin Tech. Security Researcher\r\nGeekpwn 2018/2019 winner\r\nSpeaker of ISC\r\nMember of Tea Deliverers"
        }
    },
    {
        "id": "c7334e0e-a1a5-4de0-bfa0-db38a9334946",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/junsato.JPG",
        "zh": {
            "name": "Jun Sato",
            "bio": "Jun Sato is security engineer at Panasonic Product Security Center. He started his career as a system engineer at FUJITSU LIMITED. After that he worked for NTT DATA INTELLILINK Corporation during 2015 to 2018 as a security engineer. After joined Panasonic since 2019, he has focused on IoT, including Product security training for developers, Threat intelligence of IoT. He holds a master of engineering from Nara Institute of Science and Technology in Japan."
        },
        "en": {
            "name": "Jun Sato\r",
            "bio": "Jun Sato is security engineer at Panasonic Product Security Center. He started his career as a system engineer at FUJITSU LIMITED. After that he worked for NTT DATA INTELLILINK Corporation during 2015 to 2018 as a security engineer. After joined Panasonic since 2019, he has focused on IoT, including Product security training for developers, Threat intelligence of IoT. He holds a master of engineering from Nara Institute of Science and Technology in Japan."
        }
    },
    {
        "id": "2e35b668-1623-4e69-a45b-4d5384a54d4b",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/jimmy.jpg",
        "zh": {
            "name": "張智翔",
            "bio": "Chih-Hsiang is a staff engineer at Panasonic Cyber Security Lab. He was a web developer at Gorilla technology for two years. He has a huge passion for cybersecurity so he got CEH and changed his career. After joined Panasonic, he focused on malware analysis, reverse engineering and Honeypot projects."
        },
        "en": {
            "name": "張智翔",
            "bio": "Chih-Hsiang is a staff engineer at Panasonic Cyber Security Lab. He was a web developer at Gorilla technology for two years. He has a huge passion for cybersecurity so he got CEH and changed his career. After joined Panasonic, he focused on malware analysis, reverse engineering and Honeypot projects."
        }
    },
    {
        "id": "dfd26aad-adeb-4e24-92d0-bff5be0ee01b",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/etizaz.png",
        "zh": {
            "name": "Etizaz Mohsin",
            "bio": "Etizaz Mohsin is an information security researcher and enthusiast. His core interest lies in low level software exploitation both in user and kernel mode, vulnerability research, reverse engineering. He holds a Bachelors in Software Engineering and started his career in Penetration Testing. He is an active speaker at international security conferences. He has achieved industry certifications, the prominent of which are OSCP, OSCE, OSWP, OSWE, OSEE, CREST CRT, CPSA, EWPTX, CEH."
        },
        "en": {
            "name": "Etizaz Mohsin\r",
            "bio": "Etizaz Mohsin is an information security researcher and enthusiast. His core interest lies in low level software exploitation both in user and kernel mode, vulnerability research, reverse engineering. He holds a Bachelors in Software Engineering and started his career in Penetration Testing. He is an active speaker at international security conferences. He has achieved industry certifications, the prominent of which are OSCP, OSCE, OSWP, OSWE, OSEE, CREST CRT, CPSA, EWPTX, CEH."
        }
    },
    {
        "id": "adf7fe61-4d4f-43b2-8a23-9a3b2445fbd3",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/25..jpg",
        "zh": {
            "name": "何明洋\t",
            "bio": "何明洋(HO, MING-YANG)目前為台大生醫電資所資訊組之研究生，主要研究領域為深度學習在醫療影像與訊號方面之應用。曾經於中研院開發基因序列\n表現之預測模型，亦於Dcard開發過推薦系統，平時會自行開發各種工具，如醫療用途之抗生素計算app，具前端開發、CTF等經驗，同時也是平面設計師、藥師。"
        },
        "en": {
            "name": "何明洋\t",
            "bio": ""
        }
    },
    {
        "id": "a32ffc52-f26a-4d11-b6b6-60250c82fcc1",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/Kevin Backhouse.jpg",
        "zh": {
            "name": "Kevin Backhouse",
            "bio": ""
        },
        "en": {
            "name": "Kevin Backhouse",
            "bio": ""
        }
    },
    {
        "id": "7d0657dd-95ec-46f4-8f80-9e4265a4b559",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/default.jpg",
        "zh": {
            "name": "Daniel J. Bernstein",
            "bio": "Daniel J. Bernstein, University of Illinois at Chicago and Ruhr-University Bochum"
        },
        "en": {
            "name": "Daniel J. Bernstein",
            "bio": "Daniel J. Bernstein, University of Illinois at Chicago and Ruhr-University Bochum"
        }
    },
    {
        "id": "0073a12d-30d1-4399-9d6d-0f230b370228",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/default.jpg",
        "zh": {
            "name": "Tanja Lange",
            "bio": "Tanja Lange, Eindhoven University of Technology"
        },
        "en": {
            "name": "Tanja Lange",
            "bio": "Tanja Lange, Eindhoven University of Technology"
        }
    },
    {
        "id": "5c6e6d3a-517a-44e3-9462-e30b54b5742c",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/elivis.JPG",
        "zh": {
            "name": "楊承穎",
            "bio": "現任於安華聯網技術服務處，主要研究領域有通訊安全、物聯網裝置、工控以及硬體入侵。"
        },
        "en": {
            "name": "楊承穎",
            "bio": "Elvis is the security researcher at Onward Security. His interests include: communications security, IoT devices, ICS/SCADA and hardware hacking. "
        }
    },
    {
        "id": "c952e609-5dd6-48a9-a660-8c1d031cc29a",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/default.jpg",
        "zh": {
            "name": "陳立中",
            "bio": ""
        },
        "en": {
            "name": "陳立中",
            "bio": ""
        }
    },
    {
        "id": "0f0392a6-4d7c-42d6-a4c1-d554fbfdb378",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/蔡福隆.jpg",
        "zh": {
            "name": "蔡福隆 處長",
            "bio": "現職\n - 金融監督管理委員會 資訊服務處處長\n\n學歷\n - 國立交通大學經營管理研究所博士\n - 國立交通大學管理科學研究所碩士\n - 國立成功大學工業管理科學系學士\n\n經歷\n - 行政院主計總處主計資訊處副處長\n - 行政院主計處電子處理資料中心副主任、組長"
        },
        "en": {
            "name": "蔡福隆 處長",
            "bio": "現職\n - 金融監督管理委員會 資訊服務處處長\n\n學歷\n - 國立交通大學經營管理研究所博士\n - 國立交通大學管理科學研究所碩士\n - 國立成功大學工業管理科學系學士\n\n經歷\n - 行政院主計總處主計資訊處副處長\n - 行政院主計處電子處理資料中心副主任、組長"
        }
    },
    {
        "id": "6b6c41ee-f0ee-424a-9949-358ed17e91ba",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/郭建中.jpg",
        "zh": {
            "name": "郭建中 董事長",
            "bio": "英國蘇賽克斯大學政治經濟學博士，財團法人金融聯合徵信中心董事長，曾任淡江大學中國大陸研究所教授及所長、台灣中小企銀董事、常務董事。"
        },
        "en": {
            "name": "郭建中 董事長",
            "bio": "英國蘇賽克斯大學政治經濟學博士，財團法人金融聯合徵信中心董事長，曾任淡江大學中國大陸研究所教授及所長、台灣中小企銀董事、常務董事。"
        }
    },
    {
        "id": "f25bf54b-b6d8-4a6c-8b34-331f2e493a9c",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/蘇清偉.jpg",
        "zh": {
            "name": "蘇清偉 資安長",
            "bio": "蘇清偉先生係交通大學資訊管理研究所碩士、中央警察大學資訊管理系畢，目前就讀交通大學科技管理所博士班。\n- 現職：富邦金控資安長，並兼任台北富邦銀行資安長。\n- 經歷：\n    - 內政部警政署資訊室主任、新北政府警察局保安警察大隊長、新北市政府警察局資訊室主任、刑事局數位鑑識組組長。\n    - 曾任警政署資訊室主任兼任警政資訊分析團隊召集人，具資訊系統研發、規劃、建置與推動、科技(網路)犯罪偵防工作、電腦鑑識與數位證據解析、資訊網路安全、創新警政科技應用等專業領域，工作年資約25年餘，任職期間負責規劃警政單位之雲端架構、大數據、人工智慧等技術應用計畫，助益於運用數位科技，全面強化資訊安全防禦體系。\n- 專長：科技維安、科技犯罪偵查、資安管理與防處、資訊規劃與建置。"
        },
        "en": {
            "name": "蘇清偉 資安長",
            "bio": "蘇清偉先生係交通大學資訊管理研究所碩士、中央警察大學資訊管理系畢，目前就讀交通大學科技管理所博士班。\n- 現職：富邦金控資安長，並兼任台北富邦銀行資安長。\n- 經歷：\n - 內政部警政署資訊室主任、新北政府警察局保安警察大隊長、新北市政府警察局資訊室主任、刑事局數位鑑識組組長。\n - 曾任警政署資訊室主任兼任警政資訊分析團隊召集人，具資訊系統研發、規劃、建置與推動、科技(網路)犯罪偵防工作、電腦鑑識與數位證據解析、資訊網路安全、創新警政科技應用等專業領域，工作年資約25年餘，任職期間負責規劃警政單位之雲端架構、大數據、人工智慧等技術應用計畫，助益於運用數位科技，全面強化資訊安全防禦體系。\n- 專長：科技維安、科技犯罪偵查、資安管理與防處、資訊規劃與建置。"
        }
    },
    {
        "id": "aed44e16-a825-4eca-b0d7-842374aa59fb",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/劉培文.jpg",
        "zh": {
            "name": "劉培文 執行副總經理",
            "bio": "劉培文博士是第一商業銀行的執行副總經理，負責資訊、資安、數位金融及金融科技業務推動。在加入第一銀行前，劉副總經理擁有 20 年資訊產業之工作經驗，除擔任資策會資安科技研究所副所長，並兼任國家資通安全技術服務中心主任，長期協助政府與關鍵資訊基礎建設推動與落實資訊安全。"
        },
        "en": {
            "name": "劉培文 執行副總經理",
            "bio": "劉培文博士是第一商業銀行的執行副總經理，負責資訊、資安、數位金融及金融科技業務推動。在加入第一銀行前，劉副總經理擁有 20 年資訊產業之工作經驗，除擔任資策會資安科技研究所副所長，並兼任國家資通安全技術服務中心主任，長期協助政府與關鍵資訊基礎建設推動與落實資訊安全。"
        }
    },
    {
        "id": "76f19369-3e35-47e5-a1fc-f52cb8b356ee",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/1206396_n.png",
        "zh": {
            "name": "毛敬豪 所長",
            "bio": "學歷\n- 臺灣科技大學資訊工程研究所 博士 \n\n現職\n- 資策會資安所 所長 \n\n經歷\n- 臺灣科大/長庚大學 兼任助理教授\n- 美國卡內基梅隆大學訪問學者\n- 行政院資通安全會報技術服務中心\n- 美商台灣莊臣\n- 資策會資訊市場情報中心"
        },
        "en": {
            "name": "毛敬豪 資策會 資安所長",
            "bio": "學歷\n- 臺灣科技大學資訊工程研究所 博士 \n\n現職\n- 資策會資安所 所長 \n\n經歷\n- 臺灣科大/長庚大學 兼任助理教授\n- 美國卡內基梅隆大學訪問學者\n- 行政院資通安全會報技術服務中心\n- 美商台灣莊臣\n- 資策會資訊市場情報中心"
        }
    },
    {
        "id": "81390511-ec59-4bce-8d80-09f3b6e8ef00",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/15.jpg",
        "zh": {
            "name": "劉榮太 執行長",
            "bio": "劉榮太博士為趨勢科技副總裁暨TXOne Networks 執行長，於資安產品開發與商業管理領域擁有超過20年經驗。\nTXOne Networks是趨勢科技和Moxa四零四科技合資設立之公司，專注於工業物聯網及OT的安全防禦，為工控領域帶來務實有效的資安方案。作為趨勢科技的副總裁，劉博士領導趨勢科技的網路威脅防禦技術部，將公司的業務範圍擴展到電信網路及物聯網。在加入趨勢科技之前，劉博士是Broadweb的首席執行官。Broadweb於2013年10月被趨勢科技收購。\n劉博士自國立清華大學資訊工程系博士班畢業，並擁有多項專利及IEEE 及ACM的期刊和會議著作。"
        },
        "en": {
            "name": "劉榮太 執行長",
            "bio": "Dr. Terence Liu is Vice President in Trend Micro and General Manager in TXOne Networks. He has more than 20 years of experience in cybersecurity product development and business management. \n\nTXOne Networks is a company formed by a joint venture of Trend Micro and Moxa, focusing on industrial IoT and OT cybersecurity defense, bringing practical and effective cybersecurity solutions to the industrial control field. As the Vice President in Trend Micro, Dr. Terence Liu leads Trend Micro's Network Threat Defense Technology Group to expand the company’s footprint to the Telecommunication network and IoT.  Before joining Trend Micro, Terence was the CEO of Broadweb. BroadWeb was acquired by Trend Micro in October 2013.\n\nDr. Liu graduated from the Ph.D. Program of the Department of Computer Science at National Chiao Tung University, and he also holds several patents, and IEEE and ACM journals and conference work."
        }
    },
    {
        "id": "f291c7f4-7ef8-4117-acd8-66b3fd1a8c51",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/albert.jpeg",
        "zh": {
            "name": "鄭嘉信 執行長",
            "bio": "學歷：臺灣科技大學資管所碩士、台大資工系\r\n\r\n銓安智慧科技股份有限公司創辦人暨執行長\r\n匯智安全科技股份有限公司總經理\r\n永豐餘集團智慧卡部門協理\r\nIBM Application Management Service 專任技術顧問\r\n法商阿爾卡特技術經理\r\n\r\n專長：為密碼學密鑰管理與硬體安全防護"
        },
        "en": {
            "name": "鄭嘉信 執行長",
            "bio": "學歷：臺灣科技大學資管所碩士、台大資工系\r\n\r\n銓安智慧科技股份有限公司創辦人暨執行長\r\n匯智安全科技股份有限公司總經理\r\n永豐餘集團智慧卡部門協理\r\nIBM Application Management Service 專任技術顧問\r\n法商阿爾卡特技術經理\r\n\r\n專長：為密碼學密鑰管理與硬體安全防護"
        }
    },
    {
        "id": "83fe5096-0992-47d7-a54b-7c905b04c7c4",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/allane02.PNG",
        "zh": {
            "name": "楊瑞祥 技術長",
            "bio": "楊瑞祥 (Allan) 於2014年加入研華科技擔任技術長，負責帶領團隊建立 WISE-PaaS AIoT 工業物聯網雲平台，以研華全球領先的工業電腦邊緣運算與數據採集模塊為基礎，延伸發展可跨雲移動的產業數據平台與低代碼應用框架服務，協助各產業策略夥伴以數據驅動創新架構進行AIoT數位轉型。WISE-PaaS AIoT工業物聯網雲平台已有許多指標用戶導入，產業遍及電子，半導體，鋼鐵，紡織，機械，水泥，物流，綠能，醫療，零售，…，等。從現場數據採集串流，邊緣運算及時處理，數據導入雲架構數據湖，再以可視化，結構化，AI化三階層作資料價值擷取，協助產業客戶大批量訓練及佈署各種產業AI推論引擎到邊緣現場，並持續收集現場例外資料，線上再訓練再校準推論引擎提升AI自適化，成功快速建構有效的AIoT解決方案。"
        },
        "en": {
            "name": "楊瑞祥 技術長",
            "bio": "楊瑞祥 (Allan) 於2014年加入研華科技擔任技術長，負責帶領團隊建立 WISE-PaaS AIoT 工業物聯網雲平台，以研華全球領先的工業電腦邊緣運算與數據採集模塊為基礎，延伸發展可跨雲移動的產業數據平台與低代碼應用框架服務，協助各產業策略夥伴以數據驅動創新架構進行AIoT數位轉型。WISE-PaaS AIoT工業物聯網雲平台已有許多指標用戶導入，產業遍及電子，半導體，鋼鐵，紡織，機械，水泥，物流，綠能，醫療，零售，…，等。從現場數據採集串流，邊緣運算及時處理，數據導入雲架構數據湖，再以可視化，結構化，AI化三階層作資料價值擷取，協助產業客戶大批量訓練及佈署各種產業AI推論引擎到邊緣現場，並持續收集現場例外資料，線上再訓練再校準推論引擎提升AI自適化，成功快速建構有效的AIoT解決方案。"
        }
    },
    {
        "id": "e3f952d0-1c0c-42da-b52b-d6067798e2a3",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/9805.JPG",
        "zh": {
            "name": "李柏鋒 OCF",
            "bio": "李柏鋒現任開放文化基金會董事長，阿宅小兒科醫師，正職之餘幫忙推廣開放源碼、開放資料、開放政府等相關活動。"
        },
        "en": {
            "name": "李柏鋒 OCF",
            "bio": "李柏鋒現任開放文化基金會董事長，阿宅小兒科醫師，正職之餘幫忙推廣開放源碼、開放資料、開放政府等相關活動。"
        }
    },
    {
        "id": "99a908af-a2ef-407c-b07d-17b85fe7b033",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/簡宏偉.PNG",
        "zh": {
            "name": "簡宏偉 處長",
            "bio": "現任行政院資安處處長。中正大學資訊工程研究所碩士。曾歷任國發會資管處處長、行政院研考會資管處副處長、高級分析師、科長等多項職務，負責協助規畫和推動政府機關內部資訊化作業。此外，也曾擔任過僑委會資訊科科長與中央氣象局氣象資訊中心技正等職務。"
        },
        "en": {
            "name": "簡宏偉 處長",
            "bio": "現任行政院資安處處長。中正大學資訊工程研究所碩士。曾歷任國發會資管處處長、行政院研考會資管處副處長、高級分析師、科長等多項職務，負責協助規畫和推動政府機關內部資訊化作業。此外，也曾擔任過僑委會資訊科科長與中央氣象局氣象資訊中心技正等職務。"
        }
    },
    {
        "id": "8ae2662d-e55f-4603-aeb4-cc10fab3ec4b",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/龐一鳴.jpg",
        "zh": {
            "name": "龐一鳴 處長",
            "bio": "專長：流行病學、醫院管理、衛生資訊、健康保險支付制度、健康保險審查制度、衛生科技評估、醫療品質測量"
        },
        "en": {
            "name": "龐一鳴 處長",
            "bio": "專長：流行病學、醫院管理、衛生資訊、健康保險支付制度、健康保險審查制度、衛生科技評估、醫療品質測量"
        }
    },
    {
        "id": "fc3279a2-9787-4832-a041-03c8d87d0ff9",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/PORTRAIT.jpg",
        "zh": {
            "name": "劉宇倫 醫師",
            "bio": "現任衛生福利部疾病管制署防疫醫師，曾任急診醫師，對資訊技術應用於防疫充滿興趣。"
        },
        "en": {
            "name": "劉宇倫 醫師",
            "bio": "現任衛生福利部疾病管制署防疫醫師，曾任急診醫師，對資訊技術應用於防疫充滿興趣。"
        }
    },
    {
        "id": "9b5a2790-9ec5-44f8-abbc-610121d7d0ec",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/default.jpg",
        "zh": {
            "name": "Sherry Chung MyData Taiwan",
            "bio": ""
        },
        "en": {
            "name": "Sherry Chung MyData Taiwan",
            "bio": ""
        }
    },
    {
        "id": "3e10a8d9-e71f-4cea-8961-9b301e35d248",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/alan.jpg",
        "zh": {
            "name": "Alan Lee",
            "bio": "李倫銓，HITCON CTF 領隊與CTF競賽負責人，曾帶領台灣駭客戰隊取得世界駭客大賽 DEFCON CTF 亞軍，他也協助規劃每年的HITCON CTF競賽並推動其成為DEFCON CTF種子賽事。他也規劃了2017-2019的HITCON Badge活動推動硬體資安人才培育。他目前任職於聯發科技 IT 部門。"
        },
        "en": {
            "name": "Alan Lee",
            "bio": "李倫銓，HITCON CTF 領隊與CTF競賽負責人，曾帶領台灣駭客戰隊取得世界駭客大賽 DEFCON CTF 亞軍，他也協助規劃每年的HITCON CTF競賽並推動其成為DEFCON CTF種子賽事。他也規劃了2017-2019的HITCON Badge活動推動硬體資安人才培育。他目前任職於聯發科技 IT 部門。"
        }
    },
    {
        "id": "f85296df-b2a6-4961-a1f9-78f26ead438a",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/tcwu.jpg",
        "zh": {
            "name": "Tzong-Chen Wu",
            "bio": ""
        },
        "en": {
            "name": "Tzong-Chen Wu",
            "bio": ""
        }
    },
    {
        "id": "8ef2d92a-958c-4889-96e4-20cd511f9947",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/Seungjoo Kim.jpg",
        "zh": {
            "name": "Seungjoo Kim",
            "bio": "Seungjoo (Gabriel) Kim is a professor of School of Cybersecurity, Korea University from 2011 and his research areas focus on security by design, security assessment & authorization, blockchain and crypto engineering.\r\n\r\nFor the past seven years, he was an associate professor of Sungkyunkwan University and has five years of background of team leader of KISA(Korea Internet & Security Agency).\r\n\r\nIn addition to being a professor, he is positioning a director of ARC(Army RMF Research Center), a director of CHAOS(Center for High-Assurance Operating Systems), a head of SANE(Security Assessment aNd Engineering) Lab, an adviser of undergraduate hacking club 'CyKor (DEFCON CTF 2015 & 2018 winner)' of Korea University from from 2011 to February 2020, and a founder/advisory director of an international security & hacking conference 'SECUINSIDE'.\r\n\r\nHis numerous professional focus on a presidential committee member on the 4th industrial revolution and an advisory committee member of several public and private organizations. He also taught at the Korea Military Academy.\r\n\r\nTwitter: @skim71 / Homepage: www.KimLab.net\r\n"
        },
        "en": {
            "name": "Seungjoo Kim",
            "bio": "Seungjoo (Gabriel) Kim is a professor of School of Cybersecurity, Korea University from 2011 and his research areas focus on security by design, security assessment & authorization, blockchain and crypto engineering.\r\n\r\nFor the past seven years, he was an associate professor of Sungkyunkwan University and has five years of background of team leader of KISA(Korea Internet & Security Agency).\r\n\r\nIn addition to being a professor, he is positioning a director of ARC(Army RMF Research Center), a director of CHAOS(Center for High-Assurance Operating Systems), a head of SANE(Security Assessment aNd Engineering) Lab, an adviser of undergraduate hacking club 'CyKor (DEFCON CTF 2015 & 2018 winner)' of Korea University from from 2011 to February 2020, and a founder/advisory director of an international security & hacking conference 'SECUINSIDE'.\r\n\r\nHis numerous professional focus on a presidential committee member on the 4th industrial revolution and an advisory committee member of several public and private organizations. He also taught at the Korea Military Academy.\r\n\r\nTwitter: @skim71 / Homepage: www.KimLab.net\r\n"
        }
    },
    {
        "id": "bfe55627-0937-48a8-b2d8-c5651e606255",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/Kana Shinoda.jpg",
        "zh": {
            "name": "Kana Shinoda",
            "bio": "From her various experiences running international conferences such as Black Hat Japan,  APWG and others, Ms. Kana Shinoda founded the information security conference “Code Blue” with the purpose of introducing excellent-but-unknown researchers to Japan and the world. The aim of the Code Blue security conference is to create  official and unofficial relationships between researchers across borders."
        },
        "en": {
            "name": "Kana Shinoda",
            "bio": "From her various experiences running international conferences such as Black Hat Japan,  APWG and others, Ms. Kana Shinoda founded the information security conference “Code Blue” with the purpose of introducing excellent-but-unknown researchers to Japan and the world. The aim of the Code Blue security conference is to create  official and unofficial relationships between researchers across borders."
        }
    },
    {
        "id": "899fe6fe-feee-4761-a1a8-524658a326e8",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/yans.jpg",
        "zh": {
            "name": "Yan Shoshitaishvili",
            "bio": "Yan Shoshitaishvili is an assistant professor at Arizona State University, where he pursues research in automated program analysis and vulnerability identification techniques. As part of this, Yan led Shellphish's participation in the DARPA Cyber Grand Challenge, applying his research to the creation of a fully autonomous hacking system that won third place in the competition. Underpinning this system is angr, an open-source binary analysis project created by Yan (and others!) over the years. When he is not doing research, Yan is pushing the area of cybersecurity competitions into the future from his position on the Order of the Overflow, the organizers of DEF CON CTF. Recently, he launched pwn.college, a cybersecurity education platform to bootstrap the next generation of hackers!"
        },
        "en": {
            "name": "Yan Shoshitaishvili",
            "bio": "Yan Shoshitaishvili is an assistant professor at Arizona State University, where he pursues research in automated program analysis and vulnerability identification techniques. As part of this, Yan led Shellphish's participation in the DARPA Cyber Grand Challenge, applying his research to the creation of a fully autonomous hacking system that won third place in the competition. Underpinning this system is angr, an open-source binary analysis project created by Yan (and others!) over the years. When he is not doing research, Yan is pushing the area of cybersecurity competitions into the future from his position on the Order of the Overflow, the organizers of DEF CON CTF. Recently, he launched pwn.college, a cybersecurity education platform to bootstrap the next generation of hackers!"
        }
    },
    {
        "id": "150d8db1-b978-44e4-9140-24c095f9b06b",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/default.jpg",
        "zh": {
            "name": "邱銘彰",
            "bio": ""
        },
        "en": {
            "name": "邱銘彰",
            "bio": ""
        }
    },
    {
        "id": "ffc90be9-d323-460e-a38e-7a268d6f6dcc",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/default.jpg",
        "zh": {
            "name": "陳品諭 博士",
            "bio": ""
        },
        "en": {
            "name": "陳品諭 博士",
            "bio": ""
        }
    },
    {
        "id": "d1da489f-f56b-4d24-9037-ef49046af4bd",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/蔡振華.jpg",
        "zh": {
            "name": "蔡振華",
            "bio": "Weber Tsai 任職於中華資安國際，專注於程式逆向與攻擊事件分析，江湖人稱塔西，楓之谷毒瘤大師，若我沒走正道上，我勢必在逆向。"
        },
        "en": {
            "name": "蔡振華",
            "bio": "Weber Tsai 任職於中華資安國際，專注於程式逆向與攻擊事件分析，江湖人稱塔西，楓之谷毒瘤大師，若我沒走正道上，我勢必在逆向。"
        }
    },
    {
        "id": "fd52c391-9e8f-49f3-9669-f7ab373afeff",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/李樸.jpg",
        "zh": {
            "name": "李樸",
            "bio": "任職於中華資安國際，擔任資訊安全研究員，專注於惡意程式分析、 APT 攻擊分析。平時喜歡研究逆向工程及分析程式通訊協定。\r\n曾於 Synology / QNAP Bug Bounty 回報漏洞。"
        },
        "en": {
            "name": "李樸",
            "bio": "任職於中華資安國際，擔任資訊安全研究員，專注於惡意程式分析、 APT 攻擊分析。平時喜歡研究逆向工程及分析程式通訊協定。\r\n曾於 Synology / QNAP Bug Bounty 回報漏洞。"
        }
    },
    {
        "id": "df959505-1940-4e92-b7c5-2d9fab5ddc57",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/Angelboy.jpg",
        "zh": {
            "name": "Angelboy",
            "bio": "Angelboy is a member of chroot, DEVCORE and HITCON CTF team. He is researching about binary exploitation, especially in heap related exploitation. He participated in a lot of CTF, such as HITB、DEFCON、Boston key party, won 2nd in DEFCON CTF 25,27 and won 1st in Boston key party 2016, 2017 with HTICON CTF Team. He is also a speaker at conferences such as HITCON, VXCON, AVTokyo, HITB GSEC."
        },
        "en": {
            "name": "Angelboy",
            "bio": "Angelboy is a member of chroot, DEVCORE and HITCON CTF team. He is researching about binary exploitation, especially in heap related exploitation. He participated in a lot of CTF, such as HITB、DEFCON、Boston key party, won 2nd in DEFCON CTF 25,27 and won 1st in Boston key party 2016, 2017 with HTICON CTF Team. He is also a speaker at conferences such as HITCON, VXCON, AVTokyo, HITB GSEC."
        }
    },
    {
        "id": "4f2566d0-a268-4392-8649-9189870e6d36",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/3hzNB32.png",
        "zh": {
            "name": "黃俊穎 博士",
            "bio": "黃俊穎博士目前於交通大學資訊工程學系擔任教授一職。 黃博士的研究興趣包括系統安全及多媒體網路領域。他亦主持或協同主持多件網路與系統安全相關的教學、研究與產學合作計畫, 其中包括教育部資安人才培育計畫(ISIP和AIS3)和科技部交大資通安全教學與研究中心(TWISC@NCTU)。黃博士於2014年獲ACM台灣/台北分會李國鼎青年研究獎，並於2020年獲交大教學優良獎。除了教學和研究工作外，黃博士也熱衷於社群服務。他是交大網路安全策進會(bamboofox)的指導老師之一，目前也擔任中華民國資訊安全學會秘書長。"
        },
        "en": {
            "name": "黃俊穎 博士",
            "bio": "Dr. Chun-Ying Huang is a Professor at Department of Computer Science, National Chiao Tung University (NCTU). Dr. Huang's research interests fall in the areas of system security and multimedia networking. He also served as PIs or co-PIs of several teaching, research, and industrial projects in network and system security areas, including information security incubation program (ISIP and AIS3) from Ministry of Education and Taiwan information security center program (TWISC) at NCTU from Ministry of Science and Technology. Dr. Huang received ACM Taipei/Taiwan Chapter K. T. Li Young Researcher Award in 2014, and NCTU excellent teaching awards in 2020. In addition to research and teaching works, Dr. Huang is also a volunteer in communities. He is one of the advisors of NCTU cyber security student club (bamboofox), and currently served as the secretary general of the Chinese Cryptology and Information Security Association."
        }
    },
    {
        "id": "00926d82-732f-45b9-9619-be0686a84038",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/default.jpg",
        "zh": {
            "name": "ddaa",
            "bio": "ddaa, a.k.a 0xddaa, HITCON CTF 戰隊的成員之一, 多次參加 DEF CON CTF 並獲得佳績, 曾任職 Synology 資深安全分析師\r\n現職 TrapaSecurity 資安研究員兼共同創辦人, 主要研究領域為 NAS 和 IoT Security"
        },
        "en": {
            "name": "ddaa",
            "bio": ""
        }
    },
    {
        "id": "da90995c-9f17-4ad7-8198-5b055d59fd45",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/jenfu.png",
        "zh": {
            "name": "王仁甫 總監",
            "bio": "王仁甫研究員自2006年起投入資安政策與科技前瞻研究、駭客行為研究、行動安全研究、雲安全研究及主動式資安防禦等研究，以協助政府調查資安產業與指標、草擬資安白皮書專章及草擬資安即國安戰略等重要規劃，並致力推動資安產業發展及推廣駭客與資安活動，於2020年接任資訊工業策進會資安科技研究所總監。"
        },
        "en": {
            "name": "王仁甫 總監",
            "bio": "王仁甫研究員自2006年起投入資安政策與科技前瞻研究、駭客行為研究、行動安全研究、雲安全研究及主動式資安防禦等研究，以協助政府調查資安產業與指標、草擬資安白皮書專章及草擬資安即國安戰略等重要規劃，並致力推動資安產業發展及推廣駭客與資安活動，於2020年接任資訊工業策進會資安科技研究所總監。"
        }
    },
    {
        "id": "fb93ec52-8761-4f78-ad77-4e42f15df0b2",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/jimmy.png",
        "zh": {
            "name": "Jimmy Liu",
            "bio": "目前任職於資策會資安所，主要工作內容為針對各式聯網裝置進行資安測試，有時出去教教IoT資安技術入門課程 \r\n最近剛考到OSCP，但發現仍然自己仍然是雞立鶴群。"
        },
        "en": {
            "name": "Jimmy Liu",
            "bio": "目前任職於資策會資安所，主要工作內容為針對各式聯網裝置進行資安測試，有時出去教教IoT資安技術入門課程 \r\n最近剛考到OSCP，但發現仍然自己仍然是雞立鶴群。"
        }
    },
    {
        "id": "19ce3876-c1f8-474a-9f0d-3b9a9b6ee346",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/Jock.jpg",
        "zh": {
            "name": "張嘉哲 技術發展總監",
            "bio": ""
        },
        "en": {
            "name": "張嘉哲 技術發展總監",
            "bio": ""
        }
    },
    {
        "id": "e9d90fbb-9892-4d53-a104-5c3cc22421a2",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/default.jpg",
        "zh": {
            "name": "yuawn ",
            "bio": "張元 (yuawn)，現任 Balsn 戰隊隊長，DoubleSigma 核心成員之一，目前就讀於台大資工所，NSLab 成員，專注於 Binary Exploitation & Fuzzing。"
        },
        "en": {
            "name": "yuawn ",
            "bio": "張元 (yuawn)，現任 Balsn 戰隊隊長，DoubleSigma 核心成員之一，目前就讀於台大資工所，NSLab 成員，專注於 Binary Exploitation & Fuzzing。"
        }
    },
    {
        "id": "d0b374c0-edbe-41c4-9d68-8e32f336892b",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/default.jpg",
        "zh": {
            "name": "",
            "bio": ""
        },
        "en": {
            "name": "",
            "bio": ""
        }
    },
    {
        "id": "3b7f0367-7f44-4cbe-9c42-92a41ad8ab67",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/default.jpg",
        "zh": {
            "name": "",
            "bio": ""
        },
        "en": {
            "name": "",
            "bio": ""
        }
    },
    {
        "id": "8193263d-adcc-448a-89f5-d2ebdd203e77",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/default.jpg",
        "zh": {
            "name": "",
            "bio": ""
        },
        "en": {
            "name": "",
            "bio": ""
        }
    },
    {
        "id": "f2ba9f6a-71ae-457c-a2e8-8fe6c45b06dd",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/default.jpg",
        "zh": {
            "name": "",
            "bio": ""
        },
        "en": {
            "name": "",
            "bio": ""
        }
    },
    {
        "id": "72284207-c365-44dd-9bf0-f99bc0da992a",
        "avatar": "https://hitcon.org/2020/assets/img/speaker/default.jpg",
        "zh": {
            "name": "",
            "bio": ""
        },
        "en": {
            "name": "",
            "bio": ""
        }
    }
];
fakeSession["rooms"] = [
    {
        "id": "R0",
        "zh": {
            "name": "國際會議廳",
            "description": ""
        },
        "en": {
            "name": "R0",
            "description": ""
        }
    },
    {
        "id": "R1",
        "zh": {
            "name": "第一會議廳",
            "description": ""
        },
        "en": {
            "name": "R1",
            "description": ""
        }
    },
    {
        "id": "R2",
        "zh": {
            "name": "第二會議廳",
            "description": ""
        },
        "en": {
            "name": "R2",
            "description": ""
        }
    },
    {
        "id": "R3",
        "zh": {
            "name": "遠距會議室",
            "description": ""
        },
        "en": {
            "name": "R3",
            "description": ""
        }
    },
    {
        "id": "R4",
        "zh": {
            "name": "交誼廳",
            "description": ""
        },
        "en": {
            "name": "Social Room",
            "description": ""
        }
    }
];

var day = new Date();
day.setHours(9, 0, 0, 0);
var endDay = moment(day).add(3, 'days');
for (var d = moment(day); d.isBefore(endDay); d.add(1, 'days')) {
    var endTime = d.toDate().setHours(23, 59, 59);
    for (var t = d; t.isBefore(endTime); t.add(1, 'hours')) {
        for (const room of fakeSession.rooms) {
            var session = {};
            session["id"] = uuidv4();
            session["room"] = room.id;
            session["start"] = t.toISOString(true);
            session["end"] = moment(t).add(50, 'minutes').toISOString(true);
            session["zh"] = {
                "title": "測試議程 " + t.toISOString(true),
                "description": "這是一個測試議程\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et leo suscipit lorem convallis vulputate ac ut orci. Donec orci sapien, pellentesque sit amet magna at, pellentesque pretium augue. Aliquam erat volutpat. Aenean lacinia dui vel fringilla congue."
            };
            session["en"] = {
                "title": "Testing session on " + t.toISOString(true),
                "description": "This is a testing session."
            };
            session["speakers"] = [];
            var speakerNumber = Math.floor(Math.random() * 3 + 1);
            for (var i = 1; i <= speakerNumber; i++) {
                session.speakers.push(fakeSession.speakers[Math.floor(Math.random() * fakeSession.speakers.length)].id);
            }
            fakeSession["sessions"].push(session);
        }
    }
}

exports.fakeSession = fakeSession;