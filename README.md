nextjs，登录相关文章：https://weijunext.com/article/061d8cd9-fcf3-4d9e-bd33-e257bc4f9989

ai产品构建：https://www.gradio.app/guides/getting-started-with-the-js-client


```shell
# 初始化数据库
npx prisma migrate dev --name "init"

# 安装包
pnpm install

```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## 重要功能
支付流程(有教程)
登录后跳转
充值，以及调用api剩余计数（）
seo等问题修复

## Deploy on Vercel

反向打洞
ssh -NfR 8589:localhost:3000 root@47.115.211.159 -p 22

ssh -NfR server_port:localhost:local_port root@47.115.211.159 -p 22

ssh -qngfNTR 3000:127.0.0.1:8589 dell

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## 工具使用

notion image