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
Cada `git push` na branch `main` publica o app automaticamente no GitHub Pages.

1. No GitHub: **Settings → Pages → Source: GitHub Actions**.
2. Aba **Actions**: aguarde o workflow "Publicar Selá (web)" ficar verde.
3. Link do app: `https://SEU_USUARIO.github.io/NOME_DO_REPOSITORIO/`
4. No celular, abra o link e use **Adicionar à tela inicial** (Chrome: menu ⋮; iPhone/Safari: Compartilhar).

O backend (IA) precisa de hospedagem própria (Render, Railway, etc.). Depois, em
**Settings → Secrets and variables → Actions → Variables**, crie `EXPO_PUBLIC_API_URL` com o endereço dele.
Chaves de API nunca vão para o GitHub: ficam só no serviço do backend.

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
