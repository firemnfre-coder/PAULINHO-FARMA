import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

async function getProducts() {
  if (!supabaseUrl || !supabaseKey) return [];
  const supabase = createClient(supabaseUrl, supabaseKey);
  const { data } = await supabase
    .from("produtos")
    .select("id,nome,descricao,preco,estoque,categoria,imagem,ativo")
    .eq("ativo", true)
    .order("created_at", { ascending: false });
  return data || [];
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main>
      <div className="topbar">
        <span>📍 Entregas para Santa Luzia e região</span>
        <span>🚚 Entrega rápida e segura</span>
        <span>💳 Aceitamos cartões e PIX</span>
      </div>

      <header className="header">
        <div className="brand">
          <div className="cross">✚</div>
          <div>
            <div className="brandName">DROGARIA<br/>PAULINHO FARMA</div>
            <div className="slogan">A mais popular do bairro — Qualidade tem nome!</div>
          </div>
        </div>

        <div className="search">
          <input placeholder="O que você está procurando?" />
          <button>🔎</button>
        </div>

        <div className="actions">
          <span>👤 Minha conta<br/><small>Entrar / Cadastrar</small></span>
          <span>🛒 Meu carrinho<br/><small>R$ 0,00</small></span>
        </div>
      </header>

      <nav className="nav">
        <b>☰ Todas as Categorias</b>
        <span>💊 Medicamentos</span>
        <span>🧴 Higiene Pessoal</span>
        <span>💄 Beleza e Dermocosméticos</span>
        <span>🌿 Vitaminas e Suplementos</span>
        <span>👶 Bebê e Infantil</span>
      </nav>

      <section className="hero">
        <div className="heroText">
          <h1>Seu remédio<br/><strong>com mais economia!</strong></h1>
          <p>Qualidade, praticidade e cuidado para sua família.</p>
          <button>Comprar agora →</button>
        </div>
        <div className="heroSide">
          <b>📲 PEÇA PELO WHATSAPP</b>
          <b>🚚 ENTREGA RÁPIDA E SEGURA</b>
          <b>💳 CARTÕES E PIX</b>
        </div>
      </section>

      <section className="categories">
        {["💊 Medicamentos","🧴 Higiene Pessoal","💄 Beleza","🌿 Vitaminas","👶 Bebê e Infantil","❤️ Saúde e Bem-estar"].map(x =>
          <div key={x}>{x}</div>
        )}
      </section>

      <section className="content">
        <aside>
          <h3>Categorias</h3>
          {["Medicamentos","Higiene Pessoal","Beleza e Dermocosméticos","Vitaminas e Suplementos","Bebê e Infantil","Saúde e Bem-estar"].map(x => <p key={x}>› {x}</p>)}
          <div className="info">📦 Entrega rápida<br/>💳 Pagamento seguro<br/>📱 Atendimento pelo WhatsApp</div>
        </aside>

        <div className="catalog">
          <div className="sectionTitle">
            <h2>Produtos em destaque</h2>
            <span>{products.length} produto(s)</span>
          </div>

          {products.length === 0 ? (
            <div className="empty">Nenhum produto cadastrado ainda.<br/><small>Cadastre produtos no painel administrativo.</small></div>
          ) : (
            <div className="grid">
              {products.map(p => (
                <article className="card" key={p.id}>
                  <div className="photo">
                    {p.imagem ? <img src={p.imagem} alt={p.nome}/> : <span>💊</span>}
                  </div>
                  <small>{p.categoria || "Produto"}</small>
                  <h3>{p.nome}</h3>
                  <p className="desc">{p.descricao}</p>
                  <strong>R$ {Number(p.preco).toFixed(2).replace(".", ",")}</strong>
                  <button>🛒 Adicionar</button>
                </article>
              ))}
            </div>
          )}
        </div>

        <aside className="right">
          <h3>Meu carrinho</h3>
          <p>Nenhum produto adicionado.</p>
          <button>Ver carrinho</button>
          <h3>Horário de funcionamento</h3>
          <p>Segunda a sexta<br/>07:00 às 22:00</p>
          <p>Sábado<br/>07:00 às 20:00</p>
          <p>Domingo<br/>08:00 às 14:00</p>
        </aside>
      </section>

      <footer>
        <b>DROGARIA PAULINHO FARMA</b> · A mais popular do bairro — Qualidade tem nome!
      </footer>
    </main>
  );
}