# 📸 Instruções para Adicionar Foto de Fundo

## ✅ Configuração Aplicada

Adicionei a classe `hero-with-background` à seção hero do **sobre-terreiro.html** que permite usar uma imagem de fundo.

---

## 📁 Onde Colocar a Imagem

Salve sua foto de fundo em:
```
c:\Users\mortalha777\Documents\terreirodequimbandamkosimuanda\img\terreiro-background.jpg
```

**Formatos aceitos:** `.jpg`, `.jpeg`, `.png`, `.webp`

---

## 🎨 Recomendações para a Imagem

### Dimensões Ideais:
- **Largura:** 1920px
- **Altura:** 800px a 1080px
- **Proporção:** 16:9 ou 21:9

### Conteúdo:
- Altar de Quimbanda
- Símbolos espirituais (velas, oferendas)
- Ambiente do terreiro
- Imagens místicas com tons escuros

### Qualidade:
- **Resolução:** Alta (mínimo 1920px de largura)
- **Tamanho do arquivo:** Menos de 500KB (comprima se necessário)
- **Iluminação:** Preferir imagens com boa iluminação, o CSS já adiciona overlay escuro

---

## 🔧 CSS Aplicado

```css
.hero-with-background {
    min-height: 50vh;
    background-image: url('../img/terreiro-background.jpeg');
    background-size: cover;           /* Cobre toda a área */
    background-position: center;       /* Centraliza a imagem */
    background-repeat: no-repeat;      /* Não repete */
    background-attachment: fixed;      /* Efeito parallax */
}

.hero-with-background::before {
    /* Overlay escuro sobre a imagem */
    background: linear-gradient(
        135deg,
        rgba(10, 10, 10, 0.85) 0%,    /* Preto 85% opaco */
        rgba(139, 0, 0, 0.75) 50%,    /* Vermelho 75% opaco */
        rgba(10, 10, 10, 0.85) 100%   /* Preto 85% opaco */
    );
}
```

---

## 🎯 Ajustes Personalizados

### Mudar o Nome da Imagem

Se sua imagem tiver outro nome, edite o `components.css`:

```css
background-image: url('../img/SEU-ARQUIVO-AQUI.jpg');
```

### Ajustar Altura da Seção

No `components.css`, mude `min-height`:

```css
.hero-with-background {
    min-height: 60vh;  /* 60% da altura da tela */
}
```

Opções:
- `40vh` - Mais baixo
- `50vh` - Padrão (atual)
- `70vh` - Mais alto
- `100vh` - Tela inteira

### Ajustar Escurecimento (Overlay)

No `components.css`, altere os valores de `rgba`:

**Mais escuro:**
```css
rgba(10, 10, 10, 0.95)  /* 95% opaco = mais escuro */
```

**Mais claro:**
```css
rgba(10, 10, 10, 0.70)  /* 70% opaco = mais claro */
```

**Sem vermelho (só preto):**
```css
background: rgba(0, 0, 0, 0.80);
```

### Mudar Posição da Imagem

```css
background-position: top;      /* Topo da imagem */
background-position: bottom;   /* Base da imagem */
background-position: left;     /* Esquerda */
background-position: right;    /* Direita */
```

### Remover Efeito Parallax

```css
background-attachment: scroll;  /* Em vez de 'fixed' */
```

---

## 🖼️ Onde Encontrar Imagens

### Opção 1: Usar suas próprias fotos
- Fotos do altar
- Fotos do terreiro
- Fotos de rituais (se permitido)

### Opção 2: Bancos de imagens gratuitos
- **Unsplash** (https://unsplash.com/)
  - Buscar: "candles", "altar", "spiritual", "mystical"
- **Pexels** (https://www.pexels.com/)
- **Pixabay** (https://pixabay.com/)

### Opção 3: Criar com IA
- **Leonardo.ai** (https://leonardo.ai/)
- **Midjourney** (via Discord)
- Prompt sugerido: "mystical altar with red candles, dark atmosphere, spiritual setting, cinematic lighting"

---

## 🗜️ Comprimir Imagem

Se a imagem estiver muito grande (> 500KB):

1. Acesse: https://tinypng.com/
2. Faça upload da imagem
3. Baixe a versão comprimida
4. Use a imagem comprimida

---

## ✅ Checklist

- [ ] Escolher ou criar imagem
- [ ] Comprimir se necessário (< 500KB)
- [ ] Renomear para `terreiro-background.jpg`
- [ ] Salvar em `img/terreiro-background.jpg`
- [ ] Abrir `sobre-terreiro.html` no navegador
- [ ] Verificar se aparece corretamente
- [ ] Ajustar altura/overlay se necessário

---

## 🚫 Problemas Comuns

### Imagem não aparece?
1. Verifique se o arquivo está em `img/terreiro-background.jpg`
2. Verifique o nome do arquivo (exatamente igual)
3. Tente atualizar a página (Ctrl+F5)
4. Verifique o console (F12) para erros

### Imagem aparece cortada?
Mude `background-size`:
```css
background-size: contain;  /* Mostra imagem completa */
```

### Imagem muito clara/escura?
Ajuste o overlay (veja seção "Ajustar Escurecimento")

---

**Pronto! Sua seção hero terá uma foto de fundo profissional! 🎨**
