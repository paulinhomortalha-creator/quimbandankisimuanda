/* ========================================
   CÓDIGO PARA ATIVAR EMAILJS
   Copie e cole este código no main.js
   ======================================== */

// ⚠️ INSTRUÇÕES:
// 1. Crie conta em https://www.emailjs.com/
// 2. Configure seu serviço de e-mail
// 3. Crie um template
// 4. Copie: Service ID, Template ID e Public Key
// 5. Substitua os valores abaixo
// 6. Adicione o script do EmailJS no contato.html (veja exemplo abaixo)

// ========================================
// ADICIONAR NO contato.html ANTES DE </body>
// ========================================
/*
<!-- EmailJS SDK -->
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>
  emailjs.init("SUA_PUBLIC_KEY_AQUI");
</script>
*/

// ========================================
// SUBSTITUIR A FUNÇÃO showSuccessMessage() NO main.js
// ========================================

function showSuccessMessage() {
    // Coletar dados do formulário
    const formData = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value || 'Sem assunto',
        message: document.getElementById('message').value
    };

    // ⚠️ TROCAR ESTES IDs PELOS SEUS
    const SERVICE_ID = 'service_abc123';    // ← SEU SERVICE ID AQUI
    const TEMPLATE_ID = 'template_xyz789';  // ← SEU TEMPLATE ID AQUI

    // Enviar e-mail via EmailJS
    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData)
        .then(function (response) {
            console.log('✅ E-mail enviado com sucesso!', response);

            // Mostrar mensagem de sucesso para o usuário
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
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
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

        }, function (error) {
            console.error('❌ Erro ao enviar e-mail:', error);

            // Mostrar mensagem de erro
            alert('Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato pelo WhatsApp.');
        });
}

// ========================================
// TEMPLATE PARA USAR NO EMAILJS
// ========================================
/*

Vá em Email Templates no EmailJS e use este template:

ASSUNTO DO EMAIL:
Nova mensagem do site - {{from_name}}

CORPO DO EMAIL:
Olá!

Você recebeu uma nova mensagem do formulário de contato do site Terreiro Nkosimuanda.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 DETALHES DA MENSAGEM:

👤 Nome: {{from_name}}
📧 E-mail: {{from_email}}
📱 Telefone: {{phone}}
📌 Assunto: {{subject}}

💬 Mensagem:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Enviado automaticamente do formulário de contato em {{current_date}}

*/
