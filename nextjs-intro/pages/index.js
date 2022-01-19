import { useState } from "react";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
//라이브러리 개발자로 서 사용 라이브러를 사용

//프레임워크 코드를 불러온다

//라이브러리는 사용하고  싶을때 사용

//next.js 의 가장 좋은 기능중 하나는 앱에 있는 페이지들이 미리 렌더링 된다-이것들은 정적(static)으로 생성 된다

//create react app 은 client-side render 를 하는 앱을 만든다
//브라우저가 유저가 보는 ui 를 만드는 모든것을 한다

//hydration - react.js 를 프론트엔드 안에서 실행하는것 - next.js 는 백엔드에서 동작시켜서 이 페이지를 미리만드는데 컴포넌트를 렌더링 -html - next 는 htmp 자바스크립트를 넣는다 - react 로딩 되엇을때 존재하는 것들과 연결 -> react app
//pre-rendering - 초기상태르 프리렌더링 - 카운터가 0 이기에 count 에 0값을 갖는 초기 상태
