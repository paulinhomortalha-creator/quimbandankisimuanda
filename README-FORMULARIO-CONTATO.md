# 📧 README - Formulário de Contato

## 📋 Status Atual

Atualmente, o formulário de contato está **funcionando apenas no front-end** com validação, mas **não envia e-mails reais**.

Quando você preenche e envia o formulário:
- ✅ Os campos são validados
- ✅ Mensagens de erro aparecem se algo estiver errado
- ✅ Uma mensagem de sucesso é exibida
- ❌ **Nenhum e-mail é enviado de verdade**

---

## 🚀 Como Ativar o Envio de E-mails

Existem várias opções para fazer o formulário enviar e-mails de verdade:

### Opção 1: EmailJS (⭐ RECOMENDADO - Grátis e Fácil)
### Opção 2: FormSubmit (Mais Simples)
### Opção 3: Formspree
### Opção 4: Backend Próprio (PHP, Node.js)

---

## ⭐ OPÇÃO 1: EmailJS (Recomendada)

EmailJS é um serviço gratuito que envia e-mails diretamente do navegador sem precisar de servidor.

### ✅ Vantagens:
- ✅ **100% Gratuito** (até 200 e-mails/mês)
- ✅ Não precisa de backend/servidor
- ✅ Configuração em 5 minutos
- ✅ Funciona com Gmail, Outlook, etc.
- ✅ Recebe notificações no seu e-mail

### 📝 Passo a Passo:

#### 1️⃣ Criar Conta no EmailJS

1. Acesse: https://www.emailjs.com/
2. Clique em **"Sign Up"** (Criar Conta)
3. Use seu e-mail do Gmail, Outlook ou qualquer outro
4. Confirme sua conta no e-mail

#### 2️⃣ Conectar Seu E-mail

1. No painel do EmailJS, vá em **"Email Services"**
2. Clique em **"Add New Service"**
3. Escolha seu provedor (Gmail, Outlook, etc.)
4. Siga as instruções para conectar
5. **Copie o Service ID** (ex: `service_abc123`)

#### 3️⃣ Criar Template de E-mail

1. Vá em **"Email Templates"**
2. Clique em **"Create New Template"**
3. Use este template:

```
Assunto: Nova mensagem do site - {{from_name}}

Nova mensagem recebida do formulário de contato:

Nome: {{from_name}}
E-mail: {{from_email}}
Telefone: {{phone}}
Assunto: {{subject}}

Mensagem:
{{message}}

---
Enviado automaticamente do site Terreiro Nkosimuanda
```

4. **Copie o Template ID** (ex: `template_xyz789`)

#### 4️⃣ Pegar sua Public Key

1. Vá em **"Account"** → **"General"**
2. Procure por **"Public Key"**
3. **Copie a Public Key** (ex: `abcdefgh123456`)

#### 5️⃣ Configurar o Código

Abra o arquivo `contato.html` e **ADICIONE** este código antes do fechamento da tag `</body>`:

```html
<!-- EmailJS SDK -->
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>
  // Inicializar EmailJS com sua Public Key
  emailjs.init("SUA_PUBLIC_KEY_AQUI"); // ← TROCAR
</script>
```

#### 6️⃣ Atualizar o main.js

Abra `main.js` e **SUBSTITUA** a função `showSuccessMessage()` por esta versão:

```javascript
function showSuccessMessage() {
  // Enviar e-mail via EmailJS
  const formData = {
    from_name: document.getElementById('name').value,
    from_email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value
  };
  
  // ⚠️ TROCAR pelos seus IDs do EmailJS
  emailjs.send('service_abc123', 'template_xyz789', formData)
    .then(function(response) {
      console.log('E-mail enviado!', response);
      
      // Mostrar mensagem de sucesso
      const successDiv = document.createElement('div');
      successDiv.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #25D366;
        color: white;
        padding: 20px 30px;
        border-radius: 8px;
        z-index: 10000;
      `;
      successDiv.innerHTML = `
        <strong>✓ Mensagem Enviada!</strong><br>
        Entraremos em contato em breve.
      `;
      
      document.body.appendChild(successDiv);
      
      setTimeout(() => {
        if (successDiv.parentNode) {
          successDiv.remove();
        }
      }, 3000);
      
    }, function(error) {
      console.error('Erro ao enviar:', error);
      alert('Erro ao enviar mensagem. Tente novamente.');
    });
}
```

#### 7️⃣ Testar

1. Abra `contato.html` no navegador
2. Preencha o formulário
3. Clique em "Enviar Mensagem"
4. Verifique seu e-mail - você deve receber a mensagem! 📧

---

## 🔄 OPÇÃO 2: FormSubmit (Mais Simples)

FormSubmit é ainda mais simples - sem cadastro!

### 📝 Como Configurar:

1. Abra `contato.html`
2. Encontre a tag `<form id="contact-form">`
3. **Substitua** por:

```html
<form action="https://formsubmit.co/SEU_EMAIL@example.com" method="POST">
```

4. Troque `SEU_EMAIL@example.com` pelo seu e-mail real
5. **IMPORTANTE**: Adicione estes campos ocultos dentro do form:

```html
<input type="hidden" name="_subject" value="Nova mensagem do site!">
<input type="hidden" name="_captcha" value="false">
<input type="hidden" name="_template" value="table">
```

6. **Mude os atributos `name`** dos campos:

```html
<input type="text" id="name" name="name" ...>
<input type="email" id="email" name="email" ...>
<input type="tel" id="phone" name="phone" ...>
<select id="subject" name="subject" ...>
<textarea id="message" name="message" ...>
```

7. Na primeira vez, você receberá um e-mail de confirmação
8. Clique no link de confirmação
9. Pronto! O formulário agora envia e-mails 📧

---

## 📮 OPÇÃO 3: Formspree

Similar ao FormSubmit, mas com mais recursos.

1. Acesse: https://formspree.io/
2. Crie uma conta gratuita
3. Crie um novo formulário
4. Copie o endpoint (ex: `https://formspree.io/f/xpzgkjld`)
5. No `contato.html`, mude o form para:

```html
<form action="https://formspree.io/f/SEU_ID_AQUI" method="POST">
```

6. Adicione `name` em todos os campos (igual FormSubmit)
7. Teste enviando uma mensagem

---

## 🖥️ OPÇÃO 4: Backend Próprio

Se você tem um servidor com PHP, Node.js ou Python, pode criar seu próprio backend.

### Exemplo com PHP:

1. Crie um arquivo `enviar.php`:

```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['name'];
    $email = $_POST['email'];
    $telefone = $_POST['phone'];
    $assunto = $_POST['subject'];
    $mensagem = $_POST['message'];
    
    $para = "seu_email@example.com";
    $titulo = "Nova mensagem do site - $nome";
    $corpo = "Nome: $nome\nE-mail: $email\nTelefone: $telefone\nAssunto: $assunto\n\nMensagem:\n$mensagem";
    $headers = "From: $email";
    
    if (mail($para, $titulo, $corpo, $headers)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }
}
?>
```

2. Configure seu servidor PHP
3. Aponte o formulário para o script PHP

---

## 📊 Comparação das Opções

| Opção | Dificuldade | Custo | Servidor | Limite |
|-------|-------------|-------|----------|--------|
| **EmailJS** | ⭐⭐☆☆☆ | Grátis | ❌ Não precisa | 200/mês |
| **FormSubmit** | ⭐☆☆☆☆ | Grátis | ❌ Não precisa | Ilimitado |
| **Formspree** | ⭐☆☆☆☆ | Grátis | ❌ Não precisa | 50/mês |
| **Backend PHP** | ⭐⭐⭐⭐☆ | Depende | ✅ Precisa | Ilimitado |

---

## 🎯 Recomendação

**Para este projeto, recomendo EmailJS porque:**
- ✅ Não precisa alterar muito código
- ✅ Funciona totalmente no navegador
- ✅ Gratuito até 200 e-mails/mês (mais que suficiente)
- ✅ Você recebe os e-mails no seu Gmail/Outlook
- ✅ Interface bonita no painel

---

## 🐛 Problemas Comuns

### E-mails não chegam?
- Verifique a pasta de SPAM
- Confirme que copiou os IDs corretamente
- Teste com outro endereço de e-mail

### Erro "Service ID not found"?
- Verifique se copiou o Service ID correto
- Certifique-se que o serviço está ativo no EmailJS

### Formulário não envia?
- Abra o Console do navegador (F12)
- Veja se há erros em vermelho
- Verifique se incluiu o script do EmailJS

---

## 📞 Suporte

Se tiver problemas:
1. Verifique o console do navegador (F12)
2. Consulte a documentação oficial:
   - EmailJS: https://www.emailjs.com/docs/
   - FormSubmit: https://formsubmit.co/
   - Formspree: https://help.formspree.io/

---

## ✅ Checklist de Configuração

### EmailJS:
- [ ] Criar conta no EmailJS
- [ ] Conectar serviço de e-mail (Gmail, Outlook, etc.)
- [ ] Criar template de e-mail
- [ ] Copiar Service ID
- [ ] Copiar Template ID
- [ ] Copiar Public Key
- [ ] Adicionar script do EmailJS no contato.html
- [ ] Atualizar função no main.js
- [ ] Testar envio

### FormSubmit:
- [ ] Adicionar action no form
- [ ] Adicionar campos hidden
- [ ] Adicionar name nos campos
- [ ] Confirmar e-mail
- [ ] Testar envio

---

Criado em: 2026-02-09
Atualizado em: 2026-02-09

**Boa sorte! 🚀**
