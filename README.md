# Paulinho Farma

Primeira versão do e-commerce da Drogaria Paulinho Farma.

## Rodar localmente

1. Instale Node.js.
2. Na pasta do projeto, execute `npm install`.
3. Crie `.env.local` com:
   `NEXT_PUBLIC_SUPABASE_URL=...`
   `NEXT_PUBLIC_SUPABASE_ANON_KEY=...`
4. Execute `npm run dev`.

A tabela `produtos` esperada no Supabase deve ter:
`id`, `created_at`, `nome`, `descricao`, `preco`, `estoque`, `categoria`, `imagem`, `ativo`.

## Próximos módulos
- autenticação do administrador
- painel `/admin`
- CRUD de produtos
- carrinho persistente
- pedidos
- checkout
- upload de imagens no Storage
