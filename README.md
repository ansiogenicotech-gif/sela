# Selá 🌤️
**Uma pausa para ouvir a Palavra e cuidar do coração.**

Aplicativo mobile (Android e iOS) para reflexões bíblicas acolhedoras e criação de imagens com versículos.

## Estrutura
```
selah/
├── app/        → Aplicativo (React Native + Expo + TypeScript)
├── backend/    → API segura (Node.js + TypeScript): IA, base bíblica, imagens
├── docs/       → Privacidade, segurança emocional, base bíblica, publicação
└── .github/    → Automação (CI)
```

## Rodar localmente
```bash
# 1) Backend
cd backend && cp .env.example .env && npm install && npm run dev

# 2) App (outro terminal)
cd app && cp .env.example .env && npm install && npx expo start
```
Abra o **Expo Go** no celular e leia o QR Code.


## Acesso pelo celular (link público)
O arquivo `index.html` na raiz é a versão navegável do Selá.
1. No GitHub: **Settings → Pages → Source: Deploy from a branch → main → / (root) → Save**.
2. Em 1 a 3 minutos o link aparece no topo da página: `https://SEU_USUARIO.github.io/NOME_DO_REPOSITORIO/`
3. No celular, abra o link e use **Adicionar à tela inicial**.

## Publicar no GitHub
```bash
git init && git add . && git commit -m "Selá: estrutura inicial"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/sela.git
git push -u origin main
```

## Fases
- [x] 1 – Estrutura, identidade visual (céu e nuvens), navegação, tela inicial
- [ ] 2 – Conversa e base bíblica verificada
- [ ] 3 – Reflexão com IA e tratamento de erros
- [ ] 4 – Imagens com texto validado
- [ ] 5 – Voz
- [ ] 6 – Biblioteca, privacidade, acessibilidade, testes
- [ ] 7 – Builds e publicação

Regras inegociáveis: nunca inventar versículos; chaves de API só no backend; modo demonstração sempre identificado.
