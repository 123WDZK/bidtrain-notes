# 标途 · 招投标实训

首期课程验证版本。12 个学习单元、8 阶段双岗流程、学习计划、项目草稿和资料目录。

学习状态仅保留于当前 React 会话；学员应导出 Markdown。当前无账号、云端持久化、教师后台及自动能力认证。

## 开发与验证

使用项目锁定依赖运行 `pnpm run dev`、`pnpm run build`；运行 `node node_modules/typescript/bin/tsc --noEmit` 检查类型；运行 `node --experimental-strip-types scripts/verify-course.mjs` 核验课程、计划和资料。

课程来源是用户提供文件及宿州平台 2026-09-08 抓取目录；法规全部保留待复核标签。5 个法规页面需补取正文，3 个旧版 DOC 待转换，1 个图片型流程图待识别。完整规划见 public/implementation-plan.md。

未进行浏览器交互或视觉 QA（本次未要求）。页面提供可选 WebMCP configure_learning_plan；运行环境未提供用于验证该契约的受支持上下文，不能声称已验证 WebMCP。浏览器不支持时正常使用页面控件。

后续正式试点需专业审核课程、核对法规版本，接入账户、持久化进度和导师反馈后再进行能力认定。
