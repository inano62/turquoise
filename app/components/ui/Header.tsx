import Link from "next/link";

export function Header() {
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

        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="text-xl font-semibold text-turquoise-900">
                    Turquoise
                </div>

                <nav className="flex gap-6 text-gray-600">
                    <Link href={"/"} className="hover:text-citrus-500 transition">Home</Link>
                    <Link href={"/admin"} className="hover:text-citrus-500 transition">Admin</Link>
                    <Link href={"/admin/dashboard"} className="hover:text-citrus-500 transition">Dashboard</Link>
                    <Link href={"/signup"} className="hover:text-citrus-500 transition">アカウント作成</Link>
                    <Link href={"/login"} className="hover:text-citrus-500 transition">ログイン</Link>
                </nav>
            </div>
        </header>
    );
}
