//next.js 는 렌더링 되기전에 _app.js 를 먼저 확인한다

import Layout from "../components/Layout";
import NavBar from "../components/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
        <style jsx>
          {`
            nav {
              display: flex;
              gap: 10px;
              flex-direction: column;
              align-items: center;
              padding-top: 20px;
              padding-bottom: 10px;
              box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
            }
            img {
              max-width: 100px;
              margin-bottom: 5px;
            }
            nav a {
              font-weight: 600;
              font-size: 18px;
            }
            .active {
              color: tomato;
            }
            nav div {
              display: flex;
              gap: 10px;
            }
          `}
        </style>
      </Layout>
    </>
  );
}

//next.j prop 으로 (Component,pageProps)  를 불러온다

//about 페이지를 불러오고 싶으며 next.js 는 Component에 test를 불러온다
