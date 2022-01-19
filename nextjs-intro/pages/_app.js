//next.js 는 렌더링 되기전에 _app.js 를 먼저 확인한다

import NavBar from "../components/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <style jsx>
        {`
          html,
          body {
            padding: 0;
            margin: 0;
          }

          a {
            color: inherit;
            text-decoration: none;
          }
          * {
            box-sizing: border-box;
          }
        `}
      </style>
    </>
  );
}

//next.j prop 으로 (Component,pageProps)  를 불러온다

//about 페이지를 불러오고 싶으며 next.js 는 Component에 test를 불러온다
