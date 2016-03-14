function init(ev) {
    console.log('document loded..');

    var page = document.querySelector('.page');
    var card = document.querySelector('.card');

    var icons = [
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/communication-icons/communications.svg',
            title: 'Способы коммуникации'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/communication-icons/communications-phone.svg',
            title: 'Телефон'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/communication-icons/communications-mobile.svg',
            title: 'Мобильный телефон'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/communication-icons/communications-mail.svg',
            title: 'Почта'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/communication-icons/communications-personal.svg',
            title: 'Личная беседа'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/communication-icons/communications-business-trip.svg',
            title: 'Коммандировка'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/communication-icons/communications-work-group.svg',
            title: 'Рабочая группа'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/communication-icons/communications-meeting.svg',
            title: 'Собрание'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/communication-icons/communications-videoconference.svg',
            title: 'Видео-конференция'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/communication-icons/communications-feedback.svg',
            title: 'Обратная связь'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/communication-icons/communications-ev.svg',
            title: 'Easy Vista'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/communication-icons/communications-template.svg',
            title: ''
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/tasks-icons/tasks.svg',
            title: 'Области задач'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/tasks-icons/tasks-template.svg',
            title: ''
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/tasks-icons/tasks-service-request.svg',
            title: 'Запрос на обслуживание'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/tasks-icons/tasks-change-request.svg',
            title: 'Запрос на изменение'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/tasks-icons/tasks-audit.svg',
            title: 'Аудит'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/tasks-icons/tasks-bi.svg',
            title: 'Аналитика'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/tasks-icons/tasks-automation.svg',
            title: 'Автоматизация'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/tasks-icons/tasks-failure-elimination.svg',
            title: 'Устранение сбоев'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/tasks-icons/tasks-learn.svg',
            title: 'Консультирование и обучение'
        }
    ];

    // icons = Array.apply(null, {length: 64});

    icons
        .reduce(function (prev, val, idx) {
            console.log(arguments);
            var i = idx/64>>0;

            if(prev[i] === undefined) {prev[i] = []};
            prev[i].push(val);

            return prev;
        }, [])
        .forEach(function (iconArray, idx) {
            var newPage = page.cloneNode(true);

            iconArray.forEach(function (icon, idx){
                var newCard = card.cloneNode(true);

                if(!!icon){
                    console.log(icon);
                    var cardHeader = newCard.querySelector('.card__header');
                    cardHeader.innerText = cardHeader.textContent = icon.title;
                    console.log(cardHeader.innerText);

                    var img = document.createElement('img');
                    img.src = icon.src;
                    img.classList.add('card__icon-image');
                    var cardIcon = newCard.querySelector('.card__icon');

                    cardIcon.appendChild(img);
                };


                newPage.appendChild(newCard);
            });

            document.body.appendChild(newPage);
        });
};

// console.log(document);
document.addEventListener("DOMContentLoaded", init);
