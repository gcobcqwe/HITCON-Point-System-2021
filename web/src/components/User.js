import React from "react";

const User = ({nickname, point, imageSrc}) => {
  return (
    <div className="user">
      <div className="user__info">
        <div className="flex-column">
          <div className="user__info__name">{nickname}</div>
        </div>
        <div>
          <img className="user__info__image" src={imageSrc}  onClick="codePopUp()" />
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
      <a href="https://shopee.tw/hitcon" target="_blank">
       <button className="user__action">前往 HITCON 商城</button>
      </a>
     </div>
    </div>
  )
}

User.defaultProps = {
  nickname: "未知人物",
  imageSrc: "https://via.placeholder.com/78x78" ,
  point: "-1000000",
}


export default User;
