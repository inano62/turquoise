
import Link from 'next/link';

export function Citrus() {
    return (
      //   <header
      //       className="
      //   sticky top-0 z-50
      //   backdrop-blur-xl
      //   bg-white/70
      //   border-b border-pink-soft/30
      //   text-gray-800
      // "
      //   >
  //       <header
  //           className="
  //   sticky top-0 z-50
  //   backdrop-blur-xl
  //   bg-turquoise-900/70
  //   border-b border-pink-soft/30
  //   text-white
  // "
  //       >
        <header
            className="
    sticky top-0 z-50
    backdrop-blur-xl
    bg-citrus-400/70
    border-b border-pink-soft/30
    text-gray-900
  "
        >

<nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
  <div className="text-lg font-bold text-gray-900">Citrus</div>
  <div className="flex gap-6 text-sm text-gray-700">
    <a href="/">Home</a>
    <a href="/services">サービス一覧</a>
    <a href="/login">ログイン</a>
  </div>
</nav>
        </header>
    );
}
