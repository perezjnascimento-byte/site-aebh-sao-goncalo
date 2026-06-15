Perfeito! Vou gerar um **esboço completo do front-end** (HTML/CSS/JS) para você já ter uma base visual moderna, responsiva e acessível. Depois você pode enviar esse código + as instruções anteriores para a IA (Manus) completar com o back-end, banco de dados e sistema de login.

---

## 🧩 Estrutura de arquivos que a IA vai gerar

```
aebh-site/
│
├── index.html              (página inicial)
├── sobre.html              (quem somos)
├── doencas.html            (Espinha Bífida e Hidrocefalia)
├── acessibilidade.html     (obras e metas)
├── doacoes.html            (formulário de doação)
├── voluntario.html         (cadastro de voluntário/parceiro)
├── noticias.html           (lista de notícias)
├── contato.html            (fale conosco)
├── login.html              (tela de login)
├── associado-dashboard.html (área logada - exemplo)
│
├── css/
│   └── style.css           (todos os estilos)
│
├── js/
│   └── main.js             (interatividade, menu mobile, contador, etc.)
│
├── imagens/                (placeholders - você substitui depois)
│   ├── logo.png
│   ├── banner-obra.jpg
│   ├── piscina.jpg
│   └── ...
│
└── assets/                 (opcional para fontes, ícones)
```

---

## 📄 CÓDIGO PRONTO PARA COPIAR

### 1. `index.html` (página inicial)

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
    <title>AEBH - Apoio a pessoas com Espinha Bífida e Hidrocefalia</title>
    <meta name="description" content="A AEBH é uma entidade sem fins lucrativos que há 16 anos apoia pessoas com Espinha Bífida e Hidrocefalia no Rio de Janeiro.">
    <link rel="stylesheet" href="css/style.css">
    <!-- Font Awesome para ícones -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>

    <!-- BARRA DE ACESSIBILIDADE -->
    <div class="acessibilidade-bar">
        <button id="altoContrasteBtn" aria-label="Ativar alto contraste">🌓 Alto Contraste</button>
        <button id="aumentarFonte" aria-label="Aumentar fonte">A+</button>
        <button id="diminuirFonte" aria-label="Diminuir fonte">A-</button>
    </div>

    <!-- CABEÇALHO -->
    <header>
        <div class="container header-flex">
            <div class="logo">
                <img src="imagens/logo.png" alt="Logo AEBH - Associação Espinha Bífida e Hidrocefalia RJ" width="80">
                <h1>AEBH<span>RJ</span></h1>
            </div>
            <nav>
                <button class="menu-mobile" id="menuMobileBtn" aria-label="Abrir menu">☰</button>
                <ul id="menuPrincipal">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="sobre.html">Sobre</a></li>
                    <li><a href="doencas.html">Espinha Bífida e Hidrocefalia</a></li>
                    <li><a href="acessibilidade.html">Acessibilidade</a></li>
                    <li><a href="doacoes.html" class="btn-doador">Doe agora</a></li>
                    <li><a href="login.html">🔐 Área do associado</a></li>
                </ul>
            </nav>
            <!-- REDES SOCIAIS -->
            <div class="redes-sociais">
                <a href="https://instagram.com/aebhrj" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                <a href="https://facebook.com/aebhrj" target="_blank" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
            </div>
        </div>
    </header>

    <!-- BANNER PRINCIPAL -->
    <section class="hero">
        <div class="container">
            <h2>Há 16 anos apoiando quem precisa</h2>
            <p>Somos uma entidade sem fins lucrativos. Tudo o que realizamos é por doações voluntárias.</p>
            <a href="doacoes.html" class="btn-destaque">Ajude nossa obra de acessibilidade</a>
        </div>
    </section>

    <!-- MENSAGEM RÁPIDA -->
    <section class="mensagem-destaque">
        <div class="container">
            <p>💙 A maioria dos nossos associados são cadeirantes. Precisamos fazer obras para que todos cheguem à nossa piscina. 💙</p>
        </div>
    </section>

    <!-- CONTADOR DA CAMPANHA -->
    <section class="campanha">
        <div class="container">
            <h3>Meta para acessibilidade da sede</h3>
            <div class="progresso">
                <div class="barra" style="width: 32%;">R$ 48.000,00</div>
            </div>
            <p>Arrecadado: R$ 48.000,00 | Meta: R$ 150.000,00</p>
            <a href="acessibilidade.html" class="btn-secundario">Saiba mais sobre as obras</a>
        </div>
    </section>

    <!-- NOTÍCIAS RECENTES (exemplo estático - será dinâmico no back-end) -->
    <section class="noticias">
        <div class="container">
            <h3>Últimas notícias</h3>
            <div class="grid-noticias">
                <article>
                    <img src="imagens/obra.jpg" alt="Início da obra de rampa">
                    <h4>Obra da rampa de acesso começa em junho</h4>
                    <p>Com recursos de doações, iniciaremos a construção da rampa principal.</p>
                    <a href="#">Leia mais →</a>
                </article>
                <article>
                    <img src="imagens/palestra.jpg" alt="Palestra sobre Hidrocefalia">
                    <h4>Palestra online sobre Hidrocefalia</h4>
                    <p>Dia 20/06 às 19h. Inscreva-se gratuitamente.</p>
                    <a href="#">Leia mais →</a>
                </article>
            </div>
        </div>
    </section>

    <!-- DEPOIMENTOS (acessibilidade com carrossel simples) -->
    <section class="depoimentos">
        <div class="container">
            <h3>Depoimentos de associados</h3>
            <div class="depoimento-slide">
                <p>"A AEBH mudou minha vida. Consegui orientação e apoio para minha filha."</p>
                <span>- Maria da Silva</span>
            </div>
        </div>
    </section>

    <!-- NEWSLETTER -->
    <section class="newsletter">
        <div class="container">
            <h3>Receba novidades</h3>
            <form id="formNewsletter">
                <input type="email" placeholder="Seu melhor e-mail" required>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    </section>

    <!-- RODAPÉ -->
    <footer>
        <div class="container footer-flex">
            <div>
                <h4>AEBH</h4>
                <p>Rio de Janeiro - RJ</p>
                <p>contato@aebhrj.org.br</p>
            </div>
            <div>
                <h4>Redes sociais</h4>
                <a href="#"><i class="fab fa-instagram"></i> Instagram</a><br>
                <a href="#"><i class="fab fa-facebook"></i> Facebook</a>
            </div>
            <div>
                <h4>Links úteis</h4>
                <a href="sobre.html">Sobre</a><br>
                <a href="doacoes.html">Doações</a><br>
                <a href="voluntario.html">Seja voluntário</a>
            </div>
        </div>
        <div class="copyright">
            <p>© 2026 AEBH - Todos os direitos reservados. Entidade sem fins lucrativos.</p>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>
```

---

### 2. `css/style.css` (estilos completos)

```css
/* RESET e variáveis */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --cor-primaria: #004d73;
    --cor-secundaria: #ff8c00;
    --cor-fundo-claro: #f4f9ff;
    --cor-texto: #1e2a3e;
    --fonte-padrao: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    font-family: var(--fonte-padrao);
    font-size: 18px;
    line-height: 1.5;
    color: var(--cor-texto);
    background-color: white;
    transition: all 0.3s ease;
}

/* ALTO CONTRASTE */
body.alto-contraste {
    background-color: black;
    color: yellow;
}
body.alto-contraste a,
body.alto-contraste button {
    color: yellow;
    background-color: black;
    border: 1px solid yellow;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* CABEÇALHO */
header {
    background-color: var(--cor-primaria);
    color: white;
    padding: 15px 0;
    position: sticky;
    top: 0;
    z-index: 1000;
}

.header-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.logo {
    display: flex;
    align-items: center;
    gap: 15px;
}

.logo img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
}

nav ul {
    display: flex;
    list-style: none;
    gap: 20px;
}

nav a {
    color: white;
    text-decoration: none;
    font-weight: 600;
}

.btn-doador {
    background-color: var(--cor-secundaria);
    padding: 10px 20px;
    border-radius: 30px;
    transition: 0.3s;
}

.btn-doador:hover {
    background-color: #e07c00;
}

.menu-mobile {
    display: none;
    font-size: 2rem;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
}

/* BANNER HERO */
.hero {
    background: linear-gradient(rgba(0,77,115,0.8), rgba(0,77,115,0.8)), url('../imagens/banner-obra.jpg') center/cover;
    color: white;
    text-align: center;
    padding: 100px 20px;
}
.hero h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
}
.btn-destaque {
    background-color: var(--cor-secundaria);
    color: white;
    padding: 15px 30px;
    display: inline-block;
    margin-top: 30px;
    border-radius: 40px;
    text-decoration: none;
    font-weight: bold;
}

/* MENSAGEM DESTAQUE */
.mensagem-destaque {
    background-color: #ffefd0;
    text-align: center;
    padding: 30px;
    font-size: 1.3rem;
    font-weight: bold;
}

/* CAMPANHA / PROGRESSO */
.progresso {
    background-color: #ddd;
    border-radius: 30px;
    margin: 20px 0;
    overflow: hidden;
}
.barra {
    background-color: var(--cor-secundaria);
    color: white;
    text-align: right;
    padding-right: 15px;
    border-radius: 30px;
    line-height: 40px;
}

/* GRID NOTÍCIAS */
.grid-noticias {
    display: flex;
    gap: 30px;
    margin-top: 30px;
    flex-wrap: wrap;
}
.grid-noticias article {
    background: var(--cor-fundo-claro);
    border-radius: 20px;
    padding: 20px;
    flex: 1;
}
.grid-noticias img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 12px;
}

/* NEWSLETTER */
.newsletter {
    background-color: var(--cor-primaria);
    color: white;
    text-align: center;
    padding: 50px;
}
.newsletter form {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
    flex-wrap: wrap;
}
.newsletter input {
    padding: 15px;
    width: 280px;
    border: none;
    border-radius: 30px;
}
.newsletter button {
    background-color: var(--cor-secundaria);
    border: none;
    padding: 0 30px;
    border-radius: 30px;
    color: white;
    font-weight: bold;
    cursor: pointer;
}

/* RODAPÉ */
footer {
    background-color: #001e2c;
    color: #ccc;
    padding: 40px 0 20px;
}
.footer-flex {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
}
footer a {
    color: #ffb347;
    text-decoration: none;
}
.copyright {
    text-align: center;
    padding-top: 30px;
    font-size: 0.9rem;
}

/* RESPONSIVO */
@media (max-width: 768px) {
    .menu-mobile {
        display: block;
    }
    nav ul {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 70px;
        left: 0;
        width: 100%;
        background-color: var(--cor-primaria);
        padding: 20px;
        text-align: center;
    }
    nav ul.show {
        display: flex;
    }
    .header-flex {
        flex-direction: row;
        justify-content: space-between;
    }
    .hero h2 {
        font-size: 1.8rem;
    }
}
```

---

### 3. `js/main.js` (interatividade)

```javascript
// Menu mobile
const menuBtn = document.getElementById('menuMobileBtn');
const menu = document.getElementById('menuPrincipal');

if(menuBtn) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
}

// Alto contraste
const contrasteBtn = document.getElementById('altoContrasteBtn');
contrasteBtn.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
});

// Aumentar / diminuir fonte
let tamanhoFonte = 18;
const aumentar = document.getElementById('aumentarFonte');
const diminuir = document.getElementById('diminuirFonte');

aumentar.addEventListener('click', () => {
    tamanhoFonte += 2;
    document.body.style.fontSize = tamanhoFonte + 'px';
});
diminuir.addEventListener('click', () => {
    if(tamanhoFonte > 12) {
        tamanhoFonte -= 2;
        document.body.style.fontSize = tamanhoFonte + 'px';
    }
});

// Simular cadastro newsletter (front-end apenas)
const formNews = document.getElementById('formNewsletter');
if(formNews) {
    formNews.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Obrigado! Em breve você receberá nossas novidades. (Demonstração)');
        formNews.reset();
    });
}
```

---

## ✅ O que você deve fazer agora:

1. **Crie uma pasta** chamada `aebh-site`.
2. Dentro dela, crie as subpastas `css`, `js`, `imagens`.
3. Cole cada código acima nos respectivos arquivos.
4. Coloque algumas imagens placeholder na pasta `imagens` (ex: logo.png, banner-obra.jpg, obra.jpg, palestra.jpg).
5. Abra o `index.html` no navegador para ver o resultado visual.
6. **Envie o conteúdo desta pasta + as instruções anteriores** para a IA Manus (ou similar) com o seguinte prompt:

---

> "Aqui está o front-end de um site para a instituição AEBH.  
> Preciso que você implemente o back-end completo com:  
> - Banco de dados MySQL (estrutura das tabelas já descrita anteriormente)  
> - Sistema de login com sessão PHP (ou Node.js)  
> - Área administrativa para gerenciar notícias, doações e usuários  
> - Integração real com Instagram e Facebook (links e feed)  
> - Formulário de doação conectado a gateway de pagamento  
> - CRUD de notícias e eventos  
> - Página de perfil do associado  
> 
> Por favor, gere os arquivos PHP (ou outra linguagem) e o script SQL. O front-end já está pronto; você só precisa conectar as funções dinâmicas."

---

Se quiser, posso gerar também **uma das páginas internas completas** (ex: `login.html` com formulário bonito ou `doacoes.html`). É só pedir!