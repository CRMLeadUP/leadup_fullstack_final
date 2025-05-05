#!/bin/bash

echo "🔧 Instalando dependências do frontend..."
cd frontend
npm install

echo "🏗️  Gerando build do Vite..."
npm run build

echo "📦 Movendo arquivos do build para templates/static do Flask..."
mkdir -p ../templates
mkdir -p ../static

cp -r dist/assets ../static/          # move os arquivos JS/CSS
cp dist/index.html ../templates/      # move o index.html para o Flask

echo "✅ Build do frontend finalizado"
