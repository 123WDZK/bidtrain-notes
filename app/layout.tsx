import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title:'标途 · 招投标学习笔记', description:'个人整理的招投标知识、法规依据与学习路径，供公开学习与资料核对。', icons:{icon:'/favicon.svg'} };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="zh-CN"><body>{children}</body></html>; }
