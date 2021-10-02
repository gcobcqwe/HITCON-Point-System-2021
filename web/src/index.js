import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const Header = () => (<header>HITCON 2021</header>);

const WelcomeMessage = ({title, description}) => {
  return (
  <div className="welcome">
    <div className="welcome__title">{title}</div>
    <div className="welcome__description">{description}</div>
  </div>
  )
}

const User = ({nickName, point}) => {
  return (
    <div className="user">
      <div className="user__info">
        <div className="flex-column">
          <div className="user__info__name">{nickName}</div>
        </div>
        <div>
          <img className="user__info__image" src="https://via.placeholder.com/78x78"  onClick="codePopUp()" />
        </div>
      </div>

     <div className="user__points">
       <div className="user__points__number">{point}</div>
       <div className="user__points__unit">P</div>
     </div>
     <div>
       <button className="user__action" onClick="transactionPopUp()" >交易點數</button>
     </div>
     <div>
      <a href="https://shopee.tw/hitcon">
       <button className="user__action">前往 HITCON 商城</button>
      </a>
     </div>
    </div>
  )
}


const Topic = () => {
  return (
    <div className="topic">
      <div className="topic__text">主題活動</div>
      <div className="topic__content">
        <div>
          <div className="topic__content__title">駭客喵喵</div>
          <div className="topic__content__description">喵～我是駭客喵喵，HITCON 最新開發的貓咪聊天機器人，不過我可沒有百寶袋唷！喵喵將會在 Telegram 以及 IRC 上協助大家參與 HITCON 2021，也許還會有一些小驚喜唷！喵～期待大會與各位相見！#聊天機器人 #駭客喵喵</div>
          <form method="POST" action="https://t.me/hitcon_bot?start=00000001_6ce709f26bf3d745565024957ea1d003">
            <button type ="submit" className="topic__content__button">前往駭客喵喵</button>
          </form>
        </div>
        <div>
          <img className="topic__content__preview-image" src="https://via.placeholder.com/296x187" />
        </div>
      </div>
    </div>
  )
}

const MainTopic = () => {
  return (
    <>
      <Topic />
      <Topic />
      <Topic />
    </>
  )
}

const Program = () => {
  return (
    <div className="program">
      <div className="program__location">R3</div>
        <div className="program__context">
          <div className="program__context__title">晶片卡 Agent 逆向工程與重製：以健保卡為例</div>
          <div className="program__context__auther">Inndy Lin</div>
          <div className="program__context__brief">2020年初，武漢肺炎 (COVID-19) 爆發全球大流行，健保署推行口罩實名制以確保民眾都能買到口罩，其中線上預購可使用健保卡或自然人憑證進行實名身份驗證。除口罩實名制外，相同驗證程式也用於線上報稅等其他官方服務。 健保卡 agent 會在個人電腦上提供 websock 服務，作為瀏覽器與晶片卡讀卡機間的溝通媒介，軟體品質會對眾多使用者造成影響，由於好奇安裝在使用者電腦上的 agent 以及通訊協定是否存在漏洞，因此對健保卡 agent 進行逆向工程，以瞭解程式架構及通訊協定運作細節。 在進行了深入的研究後，我們成功的還原了 agent 與伺服器驗證健保卡的流程，發現了數個軟體缺陷與漏洞，通報後官方已著手進行修補。我們以 Python 實作了一個跨平臺的 agent 替代品，避開了前述的漏洞與缺陷，做為官方 agent 修正前的替代品，也讓其他人得以瞭解驗證流程的運作細節。 在這個議程我們將會介紹這個驗證流程是如何運作的、部分的軟體缺陷、逆向與重新實作的整個過程，並且探討此類在使用者電腦上運作的 agent 服務，在設計架構上容易出現的問題與最佳實踐。</div>
          <div className="program__context__detail">...more</div>
          <button className="program__context__link button--secondary">前往議程直播 →</button>
      </div>
    </div>
  )
};

const Schedule = () => {
  return (
    <div className="schedule">
      <div className="schedule__title">
        <div className="schedule__title__text">進行中議程</div>
        <div className="schedule__title__link" onClick="window.location='https://hitcon.org/2021/agenda/'">查看完整議程表</div>
      </div>
    <Program />
    <Program />
    <Program />
    </div>
  )
}

const Footer = () => (
<footer class="footer">
  <div class="footer__text">HITCON 2021</div>
  <div>
    <a class="footer__link" href="https://fb.com/hitcon" target="_blank">Facebook</a>
    <span>|</span>
    <a class="footer__link" href="https://twitter.com/HacksInTaiwan" target="_blank">Twitter</a>
    <span>|</span>
    <a class="footer__link" href="https://blog.hitcon.org" target="_blank">Blog</a>
  </div>
</footer>
)


const descriptions = {
  welcome: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut"
}


const App = () => {
  return (
    <>
      <Header />
      <WelcomeMessage title="歡迎來到 HITCON 2021" description={descriptions.welcome} />
      <User nickName="Can" point={999} />
      <MainTopic />
      <Schedule />
      <Footer />
    </>
  )
}

ReactDom.render(<App />, document.getElementById("root"));
