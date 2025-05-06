#!/bin/bash

echo "🔧 Instalando dependências do frontend..."
cd frontend
npm install

echo "🏗️  Gerando build do Vite..."
npm run build

echo "📦 Movendo arquivos do build para templates/static do Flask..."
mkdir -p ../templates
mkdir -p ../static

cp -r dist/assets ../static/assets         # move os arquivos JS/CSS
cp dist/index.html ../templates/index.html     # move o index.html para o Flask

echo "✅ Build do frontend finalizado"
