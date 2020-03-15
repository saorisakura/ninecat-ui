# ninecat-ui 贡献指南

Hi，很高兴认识你！你能来贡献代码真的太好了，欢迎欢迎！

# Pull Request 规范

- 请先 fork 一份到自己的项目下，不要直接在仓库下建分支。

- commit 信息,可参考相关的提交记录

```
  feat：新功能（feature）
  fix：修补bug
  docs：文档（documentation）
  style： 格式（不影响代码运行的变动）
  refactor：重构（即不是新增功能，也不是修改bug的代码变动）
  test：增加测试
  chore：构建过程或辅助工具的变动
```

- 提交 PR 前请 rebase，确保 commit 记录的整洁。

- 确保 PR 是提交到 dev 分支，而不是 master 分支。

- 如果是修复 bug，请在 PR 中给出描述信息。

# 开发环境搭建

首先你需要 Node.js 4+，yarn 和 npm 3+。注意：我们使用 yarn 进行依赖版本的锁定，所以请不要使用 npm install 安装依赖。

`git clone https://github.com/ninecat-ui/ninecat-ui.git`

`cd ninecat-ui`

`yarn`

`yarn start`

访问http://localhost:8081