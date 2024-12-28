document.getElementById("generateMarkdownButton").addEventListener("click", () => {
    const githubUsername = document.getElementById("githubUsername").value.trim();
    if (!githubUsername) {
        alert("Por favor, insira um nome de usuário do GitHub.");
        return;
    }

    // Verifica qual versão da cobrinha foi selecionada
    const selectedVersion = document.querySelector('input[name="snakeVersion"]:checked').value;
    const snakePath = selectedVersion === "light" ? "github-contribution-grid-snake.svg" : "github-contribution-grid-snake-dark.svg";

    const markdownCode = `
## 🐍 Jogo da Cobrinha

![Snake animation](https://raw.githubusercontent.com/${githubUsername}/${githubUsername}/output/${snakePath})
`;
    document.getElementById("markdownOutput").value = markdownCode;
    alert("Código Markdown gerado com sucesso!");
});

document.getElementById("generateYmlButton").addEventListener("click", () => {
    const ymlCode = `
name: generate animation

on:
  # run automatically every 24 hours
  schedule:
    - cron: "0 */24 * * *" 
  
  # allows to manually run the job at any time
  workflow_dispatch:
  
  # run on every push on the master branch
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
      # generates a snake game from a github user (<github_user_name>) contributions graph, output a svg animation at <svg_out_path>
      - name: generate github-contribution-grid-snake.svg
        uses: Platane/snk/svg-only@v3
        with:
          github_user_name: \${{ github.repository_owner }}
          outputs: |
            dist/github-contribution-grid-snake.svg
            dist/github-contribution-grid-snake-dark.svg?palette=github-dark
          
          
      # push the content of <build_dir> to a branch
      # the content will be available at https://raw.githubusercontent.com/<github_user>/<repository>/<target_branch>/<file> , or as github page
      - name: push github-contribution-grid-snake.svg to the output branch
        uses: crazy-max/ghaction-github-pages@v3.1.0
        with:
          target_branch: output
          build_dir: dist
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
`;
    document.getElementById("ymlOutput").value = ymlCode;
    alert("Código YAML gerado com sucesso!");
});

// Função para copiar o conteúdo ao clicar no textarea
function copyToClipboard(event) {
    try {
        const textarea = event.target;
        textarea.select();
        document.execCommand("copy");
        alert("Conteúdo copiado para a área de transferência!");
    } catch (error) {
        alert("Erro ao copiar para a área de transferência.");
        console.error("Erro:", error);
    }
}

// Adiciona eventos de clique para copiar o conteúdo dos textareas
document.getElementById("markdownOutput").addEventListener("click", copyToClipboard);
document.getElementById("ymlOutput").addEventListener("click", copyToClipboard);
