document.addEventListener("DOMContentLoaded", function() {
    const cardsData = [
        {
            imageSrc: './img/CG-Titan-AzulPerolizado_2023.png',
            title: 'Titan 160 Azul',
            description: 'A Honda CG 160 Titan foi a substituta da CG 150, que já era a moto mais vendida do Brasil.                                                                                                                               ',
        }, 
        {
            imageSrc: './img/TIGER SPORT.png',
            title: 'Tiger Sport 800 Azul',
            description: 'Esportiva e refinada, mas robusta e versátil, pronta para toda aventura na estrada. Tanque de 17 litros para autonomia em viagem.                                                                                        ',
        },
        {
            imageSrc: './img/Tracer_02.png',
            title: 'Tracer 900 Vermelha',
            description: 'A Tracer 900 GT é equipada com um motor de 847 cc, oferecendo uma potência impressionante de 115 cv a 10.000 rpm e um torque de 87,5 Nm a 8.500 rpm, proporcionando uma experiência de pilotagem empolgante e responsiva.',
        }
    ];

    const container = document.getElementById('cards-container');

    cardsData.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        const imgElement = document.createElement('img');
        imgElement.classList.add('img');
        imgElement.src = card.imageSrc;
        imgElement.alt = 'Imagem do Card';

        const bodyElement = document.createElement('div');
        bodyElement.classList.add('body');

        const titleElement = document.createElement('h2');
        titleElement.classList.add('titulo');
        titleElement.textContent = card.title;

        const textElement = document.createElement('p');
        textElement.classList.add('texto');
        textElement.textContent = card.description;

        const buttonElement = document.createElement('button');
        buttonElement.classList.add('botao');
        buttonElement.textContent = 'Saiba Mais';

        bodyElement.appendChild(titleElement);
        bodyElement.appendChild(textElement);
        bodyElement.appendChild(buttonElement);

        cardElement.appendChild(imgElement);
        cardElement.appendChild(bodyElement);

        container.appendChild(cardElement);
    });
});
