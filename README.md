# 🐍 Gerador do Jogo da Cobrinha

Este projeto permite que você crie facilmente o Jogo da Cobrinha animado a partir do gráfico de contribuições do GitHub. Ele gera os códigos necessários em Markdown e YAML para personalizar seu perfil no GitHub com essa divertida animação.

## 🚀 Funcionalidades

- **Geração de Código Markdown**: Exibe a animação da cobrinha no gráfico de contribuições no perfil do GitHub.
- **Geração de Código YAML**: Configura o GitHub Actions para gerar automaticamente a animação.
- **Opção de Tema**: Escolha entre as versões `Light` e `Dark` para personalizar o estilo do jogo.

## 🛠️ Tecnologias Utilizadas

<a href="https://programartudo.blogspot.com/2024/11/html-tudo-o-que-precisa-para-comecar.html" target="_blank"><img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="40" height="40"/></a> <a href="https://programartudo.blogspot.com/2024/11/css-como-dar-estilo-ao-teu-website.html" target="_blank"><img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="40" height="40"/></a> <a href="https://programartudo.blogspot.com/2024/11/javascript-linguagem-dinamica-da-web.html" target="_blank"><img loading="lazy" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40" height="40"/></a>

- **HTML**: Para estruturar a aplicação.
- **CSS**: Para estilização e responsividade.
- **JavaScript**: Para gerenciar a lógica e interação dos usuários.

## 📂 Estrutura do Projeto

```plaintext
│ Gerador-do-jogo-da-cobrinha/
├── index.html     # Arquivo principal do projeto
├── style.css      # Estilização do layout
├── script.js      # Lógica de interação
├── snake-icon.png # Ícone da aba do navegador
└── README.md      # Documentação
```
## 📖 Como Usar

**1. Clone o Repositório:**

   ```bash
   git clone https://github.com/Ninja1375/Gerador-do-jogo-da-cobrinha.git
   ```

**2. Acesse o diretório do projeto:**

```bash
cd Gerador-do-jogo-da-cobrinha
```

**3. Abra o arquivo** `index.html` no navegador.

**4. Insira o nome de usuário do GitHub** no campo indicado.

**5. Escolha a versão da cobrinha** (Light ou Dark).

**6. Clique no botão "Gerar Código Markdown":**

- O código é copiado automaticamente ao clicar nele.
- O código Markdown gerado pode ser adicionado ao arquivo `README.md` no seu repositório GitHub.

- Exemplo:

```markdown
## 🐍 Jogo da Cobrinha

![Snake animation](https://raw.githubusercontent.com/Ninja1375/Ninja1375/output/github-contribution-grid-snake.svg)
```

- Salve e faça o commit no repositório.

**7. Clique no botão "Gerar Código YAML":**

- O código é copiado automaticamente ao clicar nele.
- O código YAML gerado deve ser salvo no seguinte caminho do repositório:`.github/workflows/snake.yml`.

- Exemplo de estrutura do repositório do usuário.

```plaintext
Ninja1375/Ninja1375 
├── README.md
└── .github/workflows/snake.yml 
```

- Faça o commit e push do arquivo para que o GitHub Actions comece a funcionar.

**8. Resultado Final:**

- O Jogo da Cobrinha será exibido automaticamente no seu perfil GitHub.
- Exemplo abaixo:

![Snake animation](https://raw.githubusercontent.com/Ninja1375/Ninja1375/output/github-contribution-grid-snake.svg)

## 🌟 Demonstração

**[Página do Projeto](https://ninja1375.github.io/Gerador-do-jogo-da-cobrinha/)**

**Interface do Projeto**

![Gerador-do-jogo-da-cobrinha](https://github.com/user-attachments/assets/046f6e90-f8dd-4a18-988d-b365048602c8)

**Exemplo de Código Markdown Gerado**

```markdown
## 🐍 Jogo da Cobrinha

![Snake animation](https://raw.githubusercontent.com/Ninja1375/Ninja1375/output/github-contribution-grid-snake.svg)
```

**Exemplo de Código YAML Gerado**

```yaml
name: generate animation

on:
  schedule:
    - cron: "0 */24 * * *"
  workflow_dispatch:
  push:
    branches:
    - master

jobs:
  generate:
    permissions: 
      contents: write
    runs-on: ubuntu-latest
    timeout-minutes: 5
    
    steps:
      - name: generate github-contribution-grid-snake.svg
        uses: Platane/snk/svg-only@v3
        with:
          github_user_name: ${{ github.repository_owner }}
          outputs: |
            dist/github-contribution-grid-snake.svg
            dist/github-contribution-grid-snake-dark.svg?palette=github-dark
          
      - name: push github-contribution-grid-snake.svg to the output branch
        uses: crazy-max/ghaction-github-pages@v3.1.0
        with:
          target_branch: output
          build_dir: dist
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

```

## 📚 Créditos

Este projeto foi inspirado no repositório [Platane/snk](https://github.com/Platane/snk), que fornece uma implementação completa e documentada para criar o Jogo da Cobrinha animado.

Consulte a [documentação oficial](https://github.com/Platane/snk) para mais detalhes sobre como configurar e personalizar o jogo.

## 🤝 Contribuições

Contribuições são bem-vindas! Se você tiver sugestões ou melhorias, sinta-se à vontade para abrir um [pull request](https://github.com/Ninja1375/Gerador-do-jogo-da-cobrinha/pulls)

**Desenvolvido com 🧡 por [Antônio Nascimento](https://portfolio-antonio-nascimento.netlify.app/)**
