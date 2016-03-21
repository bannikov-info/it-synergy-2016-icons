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
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/tools-icons/tools.svg',
            title: 'Инструменты\\методы решения'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/tools-icons/tools-template.svg',
            title: ''
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/tools-icons/tools-incident.svg',
            title: 'Инцидент'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/tools-icons/tools-mail.svg',
            title: 'Почта'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/tools-icons/tools-helpdesk.svg',
            title: 'Система учета заявок'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/tools-icons/tools-it.svg',
            title: 'Инструменты ИТ'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/tools-icons/tools-monitoring.svg',
            title: 'мониторинг'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/tools-icons/tools-planing.svg',
            title: 'Планирование'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/tools-icons/tools-best-practice.svg',
            title: 'Лучшие практики'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/tools-icons/tools-shop-projects.svg',
            title: 'уникальные проекты магазина'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/tools-icons/tools-delegate.svg',
            title: 'Делегирование прав'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/tools-icons/tools-intraru.svg',
            title: 'Интрару'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/tools-icons/tools-phone.svg',
            title: 'Телефон'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/tools-icons/tools-makros.svg',
            title: 'макрос'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/is-icons/is.svg',
            title: 'Информационные системы'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/is-icons/is-template.svg',
            title: ''
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/is-icons/is-cloud.svg',
            title: 'Облако'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/is-icons/is-flow.svg',
            title: 'Информационный поток'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/site-icons/site.svg',
            title: 'Место присутствия'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/site-icons/site-template.svg',
            title: ''
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/site-icons/site-temporary-office.svg',
            title: 'временный офис'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/site-icons/site-temporary-reception-48px.svg',
            title: 'Временная приемка'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/site-icons/site-shop.svg',
            title: 'Магазин'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/site-icons/site-region-office.svg',
            title: 'Региональный офис'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/site-icons/site-remote-work-area.svg',
            title: 'Удаленное рабочее место'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/site-icons/site-time-zones.svg',
            title: 'Часовые пояса'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/site-icons/site-balisage.svg',
            title: 'Бализаж'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/site-icons/site-regions.svg',
            title: 'Регион ЛМ'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/site-icons/site-work-area.svg',
            title: 'Автоматизированное рабочее место'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/site-icons/site-distribution-center.svg',
            title: 'Распределительный центр'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/site-icons/site-central-office.svg',
            title: 'Центральный офис'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/site-icons/site-new-shop.svg',
            title: 'Открывающиеся магазины'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/hw-icons/hw.svg',
            title: 'Оборудование'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/hw-icons/hw-template.svg',
            title: ''
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/hw-icons/hw-san.svg',
            title: 'СХД'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/hw-icons/hw-mobile.svg',
            title: 'Мобильная связь'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/hw-icons/hw-office.svg',
            title: 'Оргтехника'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/hw-icons/hw-server.svg',
            title: 'Сервера'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/knowing-icons/knowing.svg',
            title: 'Знания Компании'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/knowing-icons/knowing-template.svg',
            title: ''
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/knowing-icons/knowing-it-specialist.svg',
            title: 'Знания ИТ специалиста'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/knowing-icons/knowing-education.svg',
            title: 'Обучение'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/knowing-icons/knowing-store.svg',
            title: 'Хранилище инструкций'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/knowing-icons/knowing-internal-orders.svg',
            title: 'Внутренние Приказы'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/knowing-icons/knowing-experience.svg',
            title: 'Опыт\\знания'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/knowing-icons/knowing-responsibility.svg',
            title: 'Отвественность'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/knowing-icons/knowing-it-secure.svg',
            title: 'Положение по ИБ'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/knowing-icons/knowing-official-instructions.svg',
            title: 'Должностная инструкция'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/other-icons/other.svg',
            title: 'Другое'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/other-icons/other-template.svg',
            title: ''
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/other-icons/other-iniciative.svg',
            title: 'Инициативы'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/sw-icons/sw.svg',
            title: 'SW\\Программное обеспечение'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/sw-icons/sw-template.svg',
            title: ''
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/sw-icons/sw-std-soft.svg',
            title: 'Стандартизированное ПО'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/sw-icons/sw-license.svg',
            title: 'Лицензии'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/sw-icons/sw-other-soft.svg',
            title: 'Стороннее ПО'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/trable-icons/trable.svg',
            title: 'Проблема'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/trable-icons/trable-template.svg',
            title: ''
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/trable-icons/trable-importance.svg',
            title: 'Важность'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/trable-icons/trable-data-range.svg',
            title: 'Тайминг (сроки)'
        },
        {
            src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/trable-icons/trable-priority.svg',
            title: 'Срочность'
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
        
        document.setCardFormatClass = function(className){
            var reg = /^card_a(\d{1,2})_(landscape|portrait)/i;
            var match = className.match(reg);
            var formatIdx = Number.parseInt(match[1]);
            var cardOrient = match[2];
            console.log('card orientation: '+cardOrient);
            var pgOrient = "";
            if (formatIdx%2 == 0){
                pgOrient = cardOrient || "portrait"
            }else{
                pgOrient = (/(landscape)/i).test(cardOrient) ? 'portrait' : 'landscape';
                
            };
            
            var pg = $('.page');
            pg.removeClass('page_a4_landscape', 'page_a4_portrait');
            pg.addClass(['page','a4',pgOrient].join('_'));
            
            var cd = $('.card');
            cd.removeClass(function(){
                return ['a7','a8','a9','a10']
                         .map(function(v){
                            return ['landscape', 'portrait']
                                        .map(function(v2){return [v,v2].join('_')})
                                        .map(function(v){return ['card', v].join('_')})
                                        .join(' ')})
                         .join(' ');
            });
            cd.addClass(className);
        };
        
        document.getPageFormat= function(){
            var pg = $('page')[0];
            var reg = /^page_(a\d{1:2}_(landscape|portrait))/i;
            return Array.prototype.reduce.call(pg.classList, function(prev, el){
                var match = el.match(reg);
                if(!!match){
                    return {
                        format: match[1],
                        orientation: match[2]
                    };
                };
            }, null)
        }
};

// console.log(document);
document.addEventListener("DOMContentLoaded", init);
