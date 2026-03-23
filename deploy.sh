#!/bin/bash

# Terrau Portfolio - 一键部署脚本
# 使用方法: bash deploy.sh

echo "🚀 开始构建项目..."

# 构建项目
pnpm build

echo "✅ 构建完成！"
echo ""
echo "📁 dist 文件夹已准备好"
echo ""
echo "📋 下一步操作："
echo ""
echo "1️⃣  部署到 GitHub Pages："
echo "   - 将 dist 文件夹内容上传到 GitHub"
echo "   - 或使用 GitHub Actions 自动部署"
echo ""
echo "2️⃣  部署到 Versal："
echo "   - 登录 Versal.com"
echo "   - 导入 GitHub 仓库或手动上传 dist 内容"
echo ""
echo "💡 详细教程请查看 PROJECT_GUIDE.md"
echo ""

# 如果有 git，询问是否推送到 GitHub
if [ -d ".git" ]; then
    echo "检测到 Git 仓库"
    read -p "是否推送到 GitHub？(y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git add .
        git commit -m "Update portfolio"
        git push
        echo "✅ 已推送到 GitHub"
    fi
fi
