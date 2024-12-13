// leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client();
// serviço de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// apos isso ele diz que foi tudo certo
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});
// E inicializa tudo 
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra

// Funil

client.on('message', async msg => {

    if (msg.body.match(/(menu|Menu|0|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'🤖 *Olá!*  '+name.split(" ")[0]+'  tudo bem? \nNós da *CidNet Rastreamento* agradecemos o seu contato🤩,  que bom te ver por aqui, como podemos te ajudar? \n\n*Digite Apenas o Número Correspondente ao que Precisa.* \n 👇\n *1* - Comercial/Vendas 👨🏻‍💻 \n *2* - Financeiro 💰 \n *3* - Agendamento 📝 \n *4* - Suporte Técnico 🛠️ \n *5* - Falar com Atendente 📞'); //Primeira mensagem de texto
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(5000); //Delay de 5 segundos
    
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    }

    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Veja abaixo no vídeo como funciona o Rastreador Veicularcom Bloqueio de Veículo direto pelo aplicativo de celular:');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '👉 📺 https://youtu.be/ce0UxzBhULs');

            
       
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Ou qualquer momento digite \n\ 👉🏻 *0* para voltar ao menu *principal*');
       
       

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    }

    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '💰 *Financeiro*');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Pagina em construção \n cidsatmonitoramento.lojavirtualnuvem.com.br');

       
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Ou qualquer momento digite \n\ 👉🏻 *0* para voltar ao menu *principal*');

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    }

    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Digite uma das opções abaix para qual deseja agendamento. \n📡 *Falha na Transmissão* \n❓ Possiveis causas: \n✔️ Bateria ruim 🚗🔋 \n✔️ Reparo no carro 🛠️ \n✔️ Falha de sinal de GPS 📶 \n✔️ Local fechado como garagens 🏠');
        
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*Importantes* \n se o carro for roubado e o problema não for corrigido, não conseguimos encontra=lo 🚨🚘 \n⚠️ Para realizar a tratativa da falha para manutenção Informa o local abaixo onde o veiculo se encontra? \n✅ *Falha no aplicativo* \n✅ *O rastreamento não funciona* \n✅ *Aplicativo foi desinstalado* \n✅ *O rastreador não esta fazendo a localização em tempo real*');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '⚠️ Caso esta com um dos problemas acima favor abrir um chamado tecnico na opção abaixo.\n👇 \n*6* - Ajuda sobre o aplicativo 📲 \n*7* - Visita Técnica 📝 \n*8* - Agendar Instalação 🗒️ \n*9* - Agendar Revisão 🗂️ \n*10* - Cancelar Instalação / Revisão ❌');


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Ou qualquer momento digite \n\ 👉🏻 *0* para voltar ao menu *principal*');


        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    }

    if (msg.body !== null && msg.body === '4' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Você pode aderir aos nossos planos diretamente pelo nosso site ou pelo WhatsApp.\n\nApós a adesão, você terá acesso imediato');


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Link para cadastro:  cidsatmonitoramento.lojavirtualnuvem.com.br');

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    }

    if (msg.body !== null && msg.body === '5' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Se você tiver outras dúvidas ou precisar de mais informações, por favor, fale aqui nesse whatsapp ou visite nosso site: https:cidsatmonitoramento.lojavirtualnuvem.com.br ');

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    }








});