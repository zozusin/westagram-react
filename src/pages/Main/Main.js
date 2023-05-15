import React from "react";
import "./Main.css";

function Main() {
  return (
    <>
      <nav>
        <div>
          <img src="images/인스타로고.png" alt="인스타로고" />
          <span id="line"></span>
          <i id="subject">Westagram</i>
        </div>

        <div id="searchBox">
          <input type="text" placeholder="검색" />
          <i
            className="fa-solid fa-magnifying-glass"
            style={{ color: "#737578" }}
          ></i>
        </div>

        <div>
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            alt="탐색"
          />
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            alt="하트"
          />
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            alt="마이페이지"
          />
        </div>
      </nav>
      ;
      <main>
        <div className="feeds">
          <article>
            <div id="articleTop">
              <div id="articleTopLeft">
                <img
                  class="profileImage"
                  src="images/wecode_logo_1590553949.webp"
                  alt="프로필"
                />
                <div>
                  <p className="subject">wecode_bootcamp</p>
                  <p className="additional">Wecode - 위코드</p>
                </div>
              </div>
              <i
                className="fa-solid fa-ellipsis"
                style={{ color: "#616975" }}
              ></i>
            </div>
            <img id="articleImg" src="images/article사진.avif" alt="과일" />
            <div id="feedIcon">
              <div id="iconLeft">
                <img className="icon" src="images/favorite.png" alt="좋아요" />
                <img className="icon" src="images/comment.png" alt="채팅" />
                <img className="icon" src="images/download.png" alt="공유" />
              </div>
              <div id="iconRight">
                <img className="icon" src="images/bookmark.png" alt="저장" />
              </div>
            </div>
            <div id="articleBottom">
              <div id="feedLikeBox">
                <img id="likeBoxImg" src="images/flower.avif" alt="사진" />
                <p id="likeBoxText">aineworld님 외 10명이 좋아합니다</p>
              </div>
              <div id="content">
                <span className="id">wecode_bootcamp</span>
                <span>과일처럼 상큼한 여러분~</span>
                <span id="more">더 보기</span>
              </div>
              <ul>
                <li className="commentList">
                  <div>
                    <span className="id">zosuzin</span>
                    <span> 완전 맛있겠다~~~</span>
                  </div>
                  <div className="commentListRight">
                    <i className="fa-regular fa-heart"></i>
                    <button className="deleteBtn">삭제</button>
                  </div>
                </li>
                <li className="commentList">
                  <div>
                    <span className="id">bts_RM</span>
                    <span> 상큼 YO~~</span>
                  </div>
                  <div className="commentListRight">
                    <i className="fa-regular fa-heart"></i>
                    <button className="deleteBtn">삭제</button>
                  </div>
                </li>
              </ul>
              <div id="time">42분 전</div>
            </div>
            <div id="commentBox">
              <input id="comment" type="text" placeholder="   댓글 달기..." />
              <button className="commentBt">게시</button>
            </div>
          </article>
        </div>
        <div className="main-right">
          <div className="user">
            <img
              className="profileImage"
              src="images/wecode_logo_1590553949.webp"
              alt="프로필"
            />
            <div>
              <p className="subject">wecode_bootcamp</p>
              <p className="additional">Wecode | 위코드</p>
            </div>
          </div>

          <div id="stories">
            <div className="storiesTop">
              <p>스토리</p>
              <p className="allSee">모두 보기</p>
            </div>
            <div className="user">
              <img
                className="profileImage"
                src="https://plus.unsplash.com/premium_photo-1681406994502-bb673c265877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt="프로필"
              />
              <div>
                <p className="subject">yumy</p>
                <p className="additional">16분 전</p>
              </div>
            </div>

            <div className="user">
              <img
                className="profileImage"
                src="https://images.unsplash.com/photo-1682685797507-d44d838b0ac7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt="프로필"
              />
              <div>
                <p className="subject">drink</p>
                <p className="additional">3시간 전</p>
              </div>
            </div>

            <div className="user">
              <img
                className="profileImage"
                src="https://plus.unsplash.com/premium_photo-1682088221085-a99b7aa535b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt="프로필"
              />
              <div>
                <p className="subject">hyuk</p>
                <p className="additional">20시간 전</p>
              </div>
            </div>
          </div>
          <div id="stories">
            <div className="storiesTop">
              <p>회원님을 위한 추천</p>
              <p className="allSee">모두 보기</p>
            </div>
            <div className="userTwoBox">
              <div className="userTwo">
                <img
                  className="profileImage"
                  src="https://images.unsplash.com/photo-1682686581580-d99b0230064e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  alt="프로필"
                />
                <div className="recommend">
                  <div className="recommendName">
                    <p className="subject">joaaaaah</p>
                    <p className="additional">yumy님 외 2명이 팔로우합니다</p>
                  </div>
                </div>
              </div>
              <button>팔로우</button>
            </div>

            <div className="userTwoBox">
              <div className="userTwo">
                <img
                  className="profileImage"
                  src="https://images.unsplash.com/photo-1683526976156-1a3f1a315049?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80"
                  alt="프로필"
                />
                <div className="recommend">
                  <div className="recommendName">
                    <p className="subject">rampart</p>
                    <p className="additional">drink님 외 12명이 팔로우합니다</p>
                  </div>
                </div>
              </div>
              <button>팔로우</button>
            </div>

            <div className="userTwoBox">
              <div className="userTwo">
                <img
                  className="profileImage"
                  src="https://images.unsplash.com/photo-1683669260701-2a12766c2bb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  alt="프로필"
                />
                <div className="recommend">
                  <div className="recommendName">
                    <p className="subject">shawn</p>
                    <p className="additional">jimmy님 외 1명이 팔로우합니다</p>
                  </div>
                </div>
              </div>
              <button>팔로우</button>
            </div>

            <footer>
              <p id="footerTop">
                <a href="s">Instagram 정보 · </a>
                <a href="s">지원 · </a>
                <a href="s">홍보 · </a>
                <a href="s">센터 · </a>
                <a href="s">채용정보 · </a>
                <a href="s">개인정보처리방침 · </a>
                <a href="s">약관 · </a>
                <a href="s">디렉터리 · </a>
                <a href="s">프로필 · </a>
                <a href="s">해시태그 · </a>
                <a href="s">언어 </a>
              </p>
              @ 2019 INSTAGRAM
            </footer>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
