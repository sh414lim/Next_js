//next.js 에서 routering 를 할때는 next/link 를 사용해야한다
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      {/* Link 에는 어떤것을 전달할 수 없다 */}
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? "active" : ""}>about</a>
      </Link>
      <style jsx>
        {`
          nav {
            background-color: tomato;
          }
          a {
            text-decoration: none;
          }
          .active {
            color: yellow;
          }
        `}
      </style>
    </nav>
  );
}

//style.jsx

//App Component App Page

//app 컴포넌트 - 모든페이지 렌더링( next.js) =>
