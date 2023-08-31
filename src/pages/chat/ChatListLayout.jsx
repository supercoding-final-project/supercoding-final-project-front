import * as S from './chat.style';

const ChatListLayout = () => {
  return (
    <S.ChatListWrap>
      <h2>채팅</h2>
      <input type="text" />
      <ul className="tab">
        <li>전체</li>
        <li>안 읽음</li>
      </ul>
      <div className="not-have-box">
        <img src="" alt="" />
        <strong>채팅이 없습니다.</strong>
        <span>멘토님을 찾아 채팅을 시작해보세요!</span>
        <button>멘토님 찾기</button>
      </div>
    </S.ChatListWrap>
  );
};

export default ChatListLayout;
