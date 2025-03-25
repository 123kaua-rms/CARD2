document.getElementById("drawCardBtn").addEventListener("click", drawCard);

let deckId = '';
let totalScore = 0; 

async function fetchDeck() {
    try {
        const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
        const data = await response.json();
        deckId = data.deck_id;
    } catch (error) {
        console.error('Erro ao buscar o baralho:', error);
        document.getElementById('message').textContent = 'Erro ao carregar o baralho. Tente novamente!';
    }
}

async function drawCard() {
    if (!deckId) {
        await fetchDeck();
    }

    try {
        const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
        const data = await response.json();
        
        if (data.cards && data.cards.length > 0) {
            const card = data.cards[0];
            const cardContainer = document.getElementById('cardImages');

            const cardElement = document.createElement('div');
            cardElement.classList.add('card-item');

            const img = document.createElement('img');
            img.src = card.image;
            img.alt = `Carta ${card.value} de ${card.suit}`;
            
            const cardText = document.createElement('p');
            cardText.textContent = `${card.value} de ${card.suit}`;
            cardText.classList.add('card-name');

            img.addEventListener("click", () => {
                cardText.style.display = "block";
            });

            cardElement.appendChild(img);
            cardElement.appendChild(cardText);

            cardContainer.appendChild(cardElement);

           
            let cardValue = card.value;
            if (["JACK", "QUEEN", "KING"].includes(cardValue)) {
                cardValue = 10;  
            } else if (cardValue === "ACE") {
                cardValue = 1; 
            } else {
                cardValue = parseInt(cardValue); 
            }

            totalScore += cardValue; 

           
            document.getElementById('score').textContent = `Pontuação: ${totalScore}`;

           
            setTimeout(() => {
               
                if (totalScore === 21) {
                    showMessage("🎉 Parabéns! Você fez 21!");
                } else if (totalScore > 21) {
                    showMessage("❌ Você estourou, tente novamente!");
                }
            }, 3000); 

        } else {
            document.getElementById('message').textContent = 'Não há mais cartas no baralho!';
        }
    } catch (error) {
        console.error('Erro ao puxar carta:', error);
        document.getElementById('message').textContent = 'Erro ao puxar a carta. Tente novamente!';
    }
}

function showMessage(msg) {
    document.getElementById('message').textContent = msg;
    document.getElementById('cardImages').innerHTML = "";
    document.getElementById('score').textContent = "";

    setTimeout(() => {
        resetGame();
    }, 2000);
}

function resetGame() {
    totalScore = 0;
    document.getElementById('score').textContent = "Pontuação: 0";
    document.getElementById('cardImages').innerHTML = ""; 
    document.getElementById('message').textContent = ""; 
    fetchDeck(); 
}
