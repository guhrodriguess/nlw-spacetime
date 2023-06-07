<h3 align="center">
   <img src="./web/src/app/icon.png" alt="NLW Spacetime" width="300"/>
</h3>

<h1 align="center">
   NLW Spacetime - Cápsula do Tempo
</h1>

<p align="center">
  Aplicação feita no NLW da <a href="https://www.rocketseat.com.br/" target="_blank">@Rocketseat</a> com o intuito de recordar memórias, onde o usuário pode adicionar à uma timeline textos e fotos de acontecimentos marcantes da sua vida, organizados por mês e ano.
</p>

---

# 👨‍💻 Execução

> Clone o repositório

```bash
git clone https://github.com/projects-gustavo/nlw-spacetime.git
```

## Server

> Acesse o Server

```bash
cd server
```

> Instale as dependências

```bash
npm install
```

> Informe as variáveis de ambiente

```bash
GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""
```

> Execute o prisma para criar as tabelas

```bash
npx prisma migrate dev
```

> Inicie o serviço

```bash
npm run dev
```

## Web

> Com o server iniciado, acesse o projeto web

```bash
cd .. && cd web
```

> Instale as dependências

```bash
npm install
```

> Informe a variável ambiente

```bash
NEXT_PUBLIC_GITHUB_CLIENT_ID=
```

> Inicie o projeto

```bash
npm run dev
```

> ➡️ Para acessar a aplicação basta colocar [http://localhost:3000](http://localhost:3000) no seu navegador.

---

# 🚀 Tecnologias


### Web
- Next.js
- TypeScript
- Tailwind CSS
- Axios
- Lucide-react
- Dayjs
- Js-cookie
- Jwt-decode

### Server
- Fastify
- TypeScript & tsx
- Prisma
- Axios
- Zod
- Dotenv

### Mobile
- Expo
- React Native
- TypeScript
- NativeWind & Tailwind CSS
- Axios
- Dayjs

---

<p align="center">
  Feito com 💜 no NLW da <a href="https://www.rocketseat.com.br/" target="_blank">Rocketseat</a>
</p>
