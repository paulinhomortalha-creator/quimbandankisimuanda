# 🎬 Guia - Logo em Vídeo no Painel

## ✅ O Que Foi Feito

Configurei o site para exibir um **vídeo como logo** no painel de navegação, antes do texto "Nkosimuanda".

### Estrutura Criada:

```
terreirodequimbandamkosimuanda/
├── mp4/              ← PASTA PARA VÍDEOS
│   └── logo.mp4      ← COLOQUE SEU VÍDEO AQUI
├── index.html        ← Atualizado ✅
├── contato.html      ← Atualizado ✅
├── sobre-sacerdote.html ← Atualizado ✅
├── sobre-terreiro.html  ← Atualizado ✅
└── style.css         ← Atualizado ✅
```

---

## 📹 Como Adicionar Seu Vídeo

### Opção 1: Criar um Vídeo Simples (Recomendado)

Use um editor de vídeo online gratuito para criar um logo animado:

#### 🌐 Sites Recomendados:
1. **Canva** (https://www.canva.com/)
   - Crie um design → Escolha "Video"
   - Tamanho: 300x300px ou 400x400px (quadrado)
   - Adicione um tridente 🔱 ou símbolo
   - Adicione efeito de glow vermelho
   - Tempo: 2-5 segundos
   - Exporte como MP4

2. **Kapwing** (https://www.kapwing.com/)
   - Mesmo processo do Canva
   - Interface fácil de usar

3. **Ezgif** (https://ezgif.com/)
   - Converta GIF animado para MP4
   - Bom se você já tem um GIF

### Opção 2: Usar um GIF Existente

Se você já tem um GIF animado:
1. Acesse: https://ezgif.com/gif-to-mp4
2. Faça upload do GIF
3. Clique em "Convert to MP4"
4. Baixe o MP4

### Opção 3: Criar no Photoshop/After Effects

Se você tem essas ferramentas:
1. Crie uma animação curta (2-5 segundos)
2. Tamanho: 300x300px ou 400x400px
3. Exporte como MP4 (H.264)
4. Taxa de quadros: 24-30 FPS

---

## 💾 Salvar o Vídeo

Depois de criar/baixar seu vídeo:

1. **Renomeie** o arquivo para `logo.mp4`
2. **Coloque** na pasta `mp4/logo.mp4`
3. **Pronto!** O vídeo vai aparecer automaticamente

Caminho completo:
```
c:\Users\mortalha777\Documents\terreirodequimbandamkosimuanda\mp4\logo.mp4
```

---

## ⚙️ Como Funciona

### HTML (em todos os arquivos)

```html
<div class="logo">
    <video class="logo-video" autoplay loop muted playsinline>
        <source src="mp4/logo.mp4" type="video/mp4">
    </video>
    Nkosimuanda
</div>
```

**Atributos do vídeo:**
- `autoplay` - Inicia automaticamente
- `loop` - Repete infinitamente (como GIF)
- `muted` - Sem áudio (necessário para autoplay)
- `playsinline` - Funciona em mobile

### CSS (style.css)

```css
.logo {
  display: flex;          /* Alinha vídeo e texto lado a lado */
  align-items: center;    /* Centraliza verticalmente */
  gap: 1rem;             /* Espaço entre vídeo e texto */
}

.logo-video {
  height: 40px;          /* Altura fixa do vídeo */
  width: auto;           /* Largura proporcional */
  object-fit: contain;   /* Mantém proporção */
}
```

---

## 🎨 Ajustar Tamanho do Vídeo

Se o vídeo estiver muito grande ou pequeno, edite o arquivo `style.css`:

### Aumentar o Vídeo:
```css
.logo-video {
  height: 60px;  /* Era 40px, agora maior */
  width: auto;
}
```

### Diminuir o Vídeo:
```css
.logo-video {
  height: 30px;  /* Era 40px, agora menor */
  width: auto;
}
```

### Deixar Redondo:
```css
.logo-video {
  height: 40px;
  width: 40px;           /* Largura fixa */
  border-radius: 50%;    /* Circular */
  object-fit: cover;     /* Preenche o círculo */
}
```

---

## 📱 Responsivo

O vídeo se ajusta automaticamente em mobile. Se quiser ajustes específicos:

```css
@media (max-width: 768px) {
  .logo-video {
    height: 30px;  /* Menor em mobile */
  }
  
  .logo {
    font-size: 1.2rem;  /* Texto menor em mobile */
  }
}
```

---

## 🔧 Dicas de Otimização

### Tamanho do Arquivo

Mantenha o vídeo leve para carregar rápido:
- **Resolução:** 300x300px a 500x500px (máximo)
- **Duração:** 2-5 segundos
- **Taxa de bits:** Média/Baixa
- **Tamanho ideal:** Menos de 1MB

### Comprimir Vídeo

Se o arquivo estiver muito grande:
1. Acesse: https://www.freeconvert.com/video-compressor
2. Faça upload do MP4
3. Escolha qualidade "Medium" ou "Low"
4. Baixe o vídeo comprimido

---

## 🎯 Sugestões de Design para o Logo

### Elementos Visuais:
- 🔱 Tridente (símbolo principal)
- 🔥 Chamas vermelhas/carmesim
- ⭕ Círculos místicos
- ✨ Brilho/glow vermelho
- 🌟 Partículas luminosas

### Animações:
- Rotação lenta do tridente
- Pulsação de luz vermelha
- Chamas dançando
- Glow que aumenta e diminui
- Símbolos aparecendo

### Cores:
- Vermelho escuro: `#8B0000`
- Vermelho carmesim: `#DC143C`
- Preto: `#000000`
- Branco: `#FFFFFF`

---

## 🚫 Solução de Problemas

### Vídeo não aparece?
1. Verifique se o arquivo está em `mp4/logo.mp4`
2. Verifique se o nome é exatamente `logo.mp4`
3. Abra o console (F12) para ver erros

### Vídeo muito pixelado?
1. Use uma resolução maior (400x400px ou 500x500px)
2. Exporte com qualidade "High"

### Vídeo não faz loop?
- Verifique se tem `loop` no HTML
- Alguns navegadores podem ter bugs, teste em outro navegador

### Vídeo não inicia automaticamente?
- `autoplay muted` são obrigatórios juntos
- Mobile pode bloquear autoplay em alguns casos

---

## ✅ Checklist

- [  ] Criar vídeo animado (300x300px, 2-5 seg)
- [  ] Converter para MP4 (se for GIF)
- [ ] Comprimir vídeo (< 1MB)
- [ ] Renomear para `logo.mp4`
- [  ] Colocar na pasta `mp4/`
- [ ] Abrir site no navegador
- [  ] Verificar se vídeo aparece
- [  ] Ajustar tamanho se necessário
- [ ] Testar em mobile

---

## 🎬 Exemplo Completo

**Estrutura final no painel:**

```
┌─────────────────────────────────────┐
│  [VÍDEO 🔱]  Nkosimuanda  [MENU]  │
└─────────────────────────────────────┘
```

O vídeo vai ficar **à esquerda** do texto "Nkosimuanda" e vai rodar em loop como um GIF animado!

---

Criado em: 2026-02-10
Projeto: Terreiro Nkosimuanda

**Qualquer dúvida, consulte este guia! 🚀**
