# 📸 Como Trocar a Imagem de Fundo da Página de Contato

## Passo a Passo

### 1. Coloque sua nova imagem na pasta `img/`

Copie a imagem desejada para a pasta `img/` do projeto. Exemplo:

```
img/contato-background.jpg
```

> **Dica:** Use imagens em `.jpg` ou `.webp` para melhor performance. Resolução recomendada: **1920x1080** ou maior.

---

### 2. Edite o arquivo `contato.html`

Abra o arquivo `contato.html` e encontre a **Hero Section** (por volta da linha 52):

```html
<!-- Código ATUAL -->
<section class="hero" style="min-height: 40vh;">
    <div class="hero-content">
        <h1 class="hero-title">Entre em Contato</h1>
        <p class="hero-subtitle">Estamos aqui para auxiliá-lo em sua jornada espiritual</p>
    </div>
</section>
```

**Substitua** por este código (trocando `contato-background.jpg` pelo nome da sua imagem):

```html
<!-- Código NOVO com imagem de fundo animada -->
<section class="hero hero-with-background" style="min-height: 40vh;">
    <div class="hero-bg-animated pan-effect">
        <img src="img/contato-background.jpeg" alt="Fundo Contato">
    </div>
    <div class="hero-bg-overlay"></div>
    <div class="hero-content">
        <h1 class="hero-title">Entre em Contato</h1>
        <p class="hero-subtitle">Estamos aqui para auxiliá-lo em sua jornada espiritual</p>
    </div>
</section>
```

---

### 3. Pronto! ✅

Salve o arquivo e abra no navegador. A imagem aparecerá com:
- **Efeito pan cinematográfico** (movimento lento)
- **Overlay escuro** com gradiente vermelho/preto
- **Vinheta** nas bordas

---

## 🎬 Efeitos Disponíveis

Você pode trocar o efeito mudando a classe no `div`:

| Efeito | Classe | Descrição |
|--------|--------|-----------|
| Pan (movimento) | `pan-effect` | Imagem se move suavemente |
| Zoom (aproximar) | `zoom-effect` | Imagem faz zoom lento |

**Exemplo com zoom:**
```html
<div class="hero-bg-animated zoom-effect">
    <img src="img/contato-background.jpg" alt="Fundo Contato">
</div>
```

---

## 🔧 Ajustes Opcionais

### Mudar a posição da imagem (foco)

Se a parte importante da imagem ficar cortada, edite no `animations.css` a linha:

```css
object-position: center 30%;
```

Valores comuns:
- `center center` → foco no centro
- `center top` → foco no topo
- `center 30%` → foco levemente acima do centro (padrão atual)
- `center bottom` → foco na parte de baixo

### Mudar a altura do hero

No HTML, altere o `min-height`:

```html
<section class="hero hero-with-background" style="min-height: 50vh;">
```

- `40vh` = 40% da tela (compacto)
- `60vh` = 60% da tela (médio)
- `70vh` = 70% da tela (grande, padrão das outras páginas)
