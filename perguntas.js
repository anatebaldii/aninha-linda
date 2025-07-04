criarCartao(
    "Geografia",    
    "Qual é o maior país do mundo em área?",  
    " O maior país do mundo em área é a Rússia." 
);

criarCartao(
    "História",    
    "Quem foi o primeiro presidente do Brasil?",  
    "O primeiro presidente do Brasil foi Deodoro da Fonseca." 
);

criarCartao(
    "Ciência",    
    "Qual é o elemento químico representado pelo símbolo O na tabela periódica?",  
    "O símbolo O representa o oxigênio.

" 
);

criarCartao(
    "Esportes",    
    "Em que esporte o Brasil é conhecido por ter conquistado várias Copas do Mundo?",  
    "Futebol." 
);

criarCartao(
    "Literatura",    
    "Quem escreveu "Dom Casmurro"?",  
    "Machado de Assis." 
);

criarCartao(
    "Música",    
    "Qual banda britânica é famosa pelo álbum "Abbey Road"?",  
    "The Beatles." 
);

document.querySelectorAll('#container .cartao').forEach(cartao => {
    if (!cartao.innerHTML.trim()) {
        cartao.remove();
    }
});