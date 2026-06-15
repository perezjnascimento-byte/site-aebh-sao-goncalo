Abaixo está o **texto pronto para você copiar e enviar para uma IA (como Manus, ChatGPT, DeepSeek, etc.)**, solicitando a criação completa do site da AEBH com as melhorias necessárias, incluindo banco de dados, sistema de login e integração com redes sociais.

---

## 📄 Instrução para enviar à IA (Manus ou similar)

---

**Título da solicitação:**  
Criação completa do site institucional da AEBH com banco de dados, login e redes sociais.

**Contexto:**  
A AEBH (Associação das Pessoas com Espinha Bífida e Hidrocefalia do Rio de Janeiro) é uma entidade sem fins lucrativos que atua há 16 anos. O site atual é muito simples, sem interatividade, sem área de doações online, sem cadastro de usuários e sem integração com redes sociais.

**Objetivo:**  
Desenvolver um site moderno, responsivo, acessível (para cadeirantes e pessoas com deficiência visual), com banco de dados, sistema de login e integração direta com Instagram e Facebook da instituição.

---

### 🔧 Requisitos técnicos obrigatórios:

1. **Banco de dados** (MySQL, PostgreSQL ou similar) para armazenar:
   - Usuários cadastrados (nome, email, senha criptografada, tipo de perfil: associado, doador, voluntário, admin).
   - Histórico de doações (valor, data, forma de pagamento, comprovante opcional).
   - Mensagens de contato enviadas pelo site.
   - Notícias e eventos publicados.

2. **Sistema de login e níveis de acesso:**
   - Página de login (email + senha).
   - Recuperação de senha por email.
   - Área do associado (conteúdo exclusivo, como materiais de apoio).
   - Área do administrador (para gerenciar usuários, doações, notícias, eventos).
   - Opção de logout.

3. **Páginas obrigatórias do site:**
   - **Home** (com resumo da missão, chamada para doação, últimas notícias).
   - **Sobre a AEBH** (história, equipe, estatuto).
   - **O que é Espinha Bífida e Hidrocefalia** (conteúdo informativo, prevenção).
   - **Acessibilidade** (explicar as obras necessárias na sede, meta de arrecadação).
   - **Doações** (formulário com valor, Pix, cartão de crédito, boleto – integrar com gateway como PagSeguro, Stripe ou Mercado Pago).
   - **Seja um parceiro/voluntário** (cadastro de interesse).
   - **Notícias e eventos** (com data, imagem, descrição – vindo do banco de dados).
   - **Contato** (formulário + mapa da sede).
   - **Área do associado** (só entra com login).
   - **Área administrativa** (só admin).

4. **Design e acessibilidade:**
   - Layout responsivo (funciona em celular, tablet e PC).
   - Alto contraste (opcional via botão).
   - Fonte legível (tamanho mínimo 16px).
   - Navegação por teclado (Tab, Enter).
   - Imagens com texto alternativo (alt).
   - Botão de Libras (opcional, mas desejável).

5. **Integração com redes sociais:**
   - Ícones clicáveis no cabeçalho ou rodapé levando para:
     - Instagram oficial da AEBH (fornecer depois)
     - Facebook oficial da AEBH (fornecer depois)
   - Exibir feed do Instagram na home (ou pelo menos um widget com as últimas 6 postagens).
   - Botão "Compartilhar" nas notícias e eventos (para Facebook, Instagram, WhatsApp).

6. **Melhorias visuais e funcionais extras:**
   - Banner de campanha atual ("Ajude nossa obra de acessibilidade").
   - Contador de metas (ex: R$ 50.000,00 arrecadados / R$ 150.000,00 necessários).
   - Depoimentos de associados (carrossel).
   - Galeria de fotos e vídeos (YouTube/Vimeo incorporado).
   - Newsletter (cadastro de email para receber novidades).
   - Selo de transparência (mostrar relatórios de prestação de contas em PDF).

---

### 📁 Estrutura de banco de dados sugerida (exemplo para você entregar)

**Tabela `usuarios`**  
id, nome, email, senha_hash, tipo (‘associado’, ‘doador’, ‘voluntario’, ‘admin’), data_cadastro, ativo (sim/não)

**Tabela `doacoes`**  
id, usuario_id (ou null se não logado), nome_doador, email, valor, data, status (‘pendente’, ‘pago’, ‘cancelado’), comprovante_path

**Tabela `noticias`**  
id, titulo, conteudo, imagem, data_publicacao, autor_id (relaciona com usuarios)

**Tabela `eventos`**  
id, titulo, descricao, data_inicio, data_fim, local, imagem

**Tabela `contatos`**  
id, nome, email, mensagem, data_envio, respondido (sim/não)

**Tabela `newsletter`**  
id, email, data_cadastro

---

### 🧠 Linguagens e tecnologias sugeridas (você decide, mas prefiro stack moderna)

- Front-end: HTML5, CSS3, JavaScript (React ou Vue.js opcional, mas pode ser apenas com Bootstrap).
- Back-end: PHP (com PDO) ou Node.js + Express.
- Banco de dados: MySQL ou PostgreSQL.
- Autenticação: JWT ou sessões PHP.
- Hospedagem: que suporte PHP/MySQL e envio de email (SMTP).

---

### 🎯 Entregáveis esperados:

1. Código-fonte completo do site (organizado em pastas: css, js, imagens, includes, pages, admin).
2. Script SQL para criar todas as tabelas do banco.
3. Arquivo `.env` ou `config.php` com dados de conexão.
4. Instruções de instalação e configuração (passo a passo).
5. Site funcional e navegável localmente (ou em servidor de testes).
6. Login de exemplo: admin@aebh.org.br / senha123 (para testes).

---

### 📱 Observações finais:

- O site precisa ter **links visíveis** para o Instagram e Facebook da AEBH (eu mesmo colocarei os URLs corretos depois).
- O sistema de login deve redirecionar cada tipo de usuário para sua respectiva área.
- A página de doações deve funcionar mesmo sem o usuário estar logado.
- Todo o código deve ser seguro contra SQL injection e XSS.

---

**Aguardo a entrega do site completo com todas essas funcionalidades. Por favor, gere os arquivos necessários e as instruções de implantação.**

---

Se quiser, posso gerar **um esboço do código HTML/CSS/JS** para você já ter um ponto de partida visual e depois você pede para a IA completar com o back-end e banco. Deseja que eu faça isso?