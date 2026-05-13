This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

結論から言うと、**WSL（Ubuntu 22.04）に PostgreSQL を入れるのは完全に可能で、Next.js（WSL 内）と問題なく連携できる**。  
いなのの環境（WSL Ubuntu / Next.js / Docker なし構成）に最適化した手順をまとめる。

---

## 🎯 結論：Ubuntu 22.04 では PostgreSQL 15 を入れるのが最適
理由は：

- Ubuntu 22.04 の標準リポジトリは PostgreSQL 14
- でも **PostgreSQL 15 の方が安定・高速・拡張が豊富**
- Next.js の Prisma / Drizzle も 15 で最適化されている

だから **公式リポジトリから PostgreSQL 15 を入れる**のが正解。

---

## 🟩 ① PostgreSQL 公式リポジトリを追加

WSL Ubuntu 22.04 で：

```
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt jammy-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
```

GPG キー追加：

```
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
```

更新：

```
sudo apt update
```

---

## 🟩 ② PostgreSQL 15 をインストール

```
sudo apt install postgresql-15 postgresql-client-15
```

---

## 🟩 ③ PostgreSQL を起動

WSL は systemd が動くので：

```
sudo service postgresql start
```

状態確認：

```
sudo service postgresql status
```

---

## 🟩 ④ postgres ユーザーに入る

```
sudo -u postgres psql
```

---

## 🟩 ⑤ Next.js 用の DB とユーザーを作成

psql の中で：

```
CREATE DATABASE myapp;
CREATE USER inano WITH PASSWORD 'password';
GRANT ALL PRIVILEGES ON DATABASE myapp TO inano;
```

終了：

```
\q
```

---

## 🟦 ⑥ Next.js（WSL）から接続するための URI

`.env.local` に書く：

```
DATABASE_URL="postgresql://inano:password@localhost:5432/myapp"
```

Next.js（Prisma / Drizzle）どちらでもこの形式で OK。

---

## 🟧 ⑦ WSL で PostgreSQL が起動しているか確認

```
sudo service postgresql status
```

もし起動してなければ：

```
sudo service postgresql start
```

---

## 🟣 いなのの環境に合わせたポイント

- WSL 内で Next.js を動かしているので **localhost:5432 で直接つながる**
- Docker を使わない構成なので **WSL の PostgreSQL が最も安定**
- Prisma / Drizzle どちらでも PostgreSQL 15 が最適

---

## 🟠 次のステップを選んで

どれを進めたい？

- Prisma を入れて Next.js と PostgreSQL をつなぐ
- Drizzle を入れてスキーマ管理する
- Seeder / Migration の構造を作る
- API（CRUD）を作る
- Citrus Admin を PostgreSQL 版に作り直す

選んでくれたら、いなの専用の手順を続けて作るよ。

MONGODB_URI="mongodb://localhost:27017"
DB_NAME="turquoise"
JWT_SECRET=supersecretkey_ina_no_2026
DATABASE_URL="postgresql://inano:password@localhost:5432/myapp"
