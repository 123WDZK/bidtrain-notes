import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title:'标途 · 招投标实训', description:'从共学基础到双岗位实训，用完整项目建立招投标实务能力。', icons:{icon:'/favicon.svg'} };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="zh-CN"><body>{children}</body></html>; }
