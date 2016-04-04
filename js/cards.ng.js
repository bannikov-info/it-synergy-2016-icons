;(function () {
    angular.module('BlankApp')
        .constant('cardIcons', [
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
                    src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/knowing-icons/knowing-it-special.svg',
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
                },
                {
                    src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/roles-icons/roles-template.svg',
                    title: ''
                },
                {
                    src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/roles-icons/roles-it-coord.svg',
                    title: 'ИТ координатор'
                },
                {
                    src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/roles-icons/roles-it-spec.svg',
                    title: 'ИТ-специалист магазина'
                },
                {
                    src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/roles-icons/roles-client.svg',
                    title: 'Клиент'
                },
                {
                    src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/roles-icons/roles-orga.svg',
                    title: 'ОРГА'
                },
                {
                    src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/roles-icons/roles-user.svg',
                    title: 'Пользователь'
                },
                {
                    src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/roles-icons/roles-outsource.svg',
                    title: 'Аутсорсинг'
                },
                {
                    src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/roles-icons/roles-supplier.svg',
                    title: 'Поставщик/подрядчик'
                },
                {
                    src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/roles-icons/roles-level-2.svg',
                    title: 'Специалист 2 уровня поддержки'
                },
                {
                    src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/roles-icons/roles-other-user.svg',
                    title: 'Пользователь другого магазина'
                },
                {
                    src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/roles-icons/roles-implementer.svg',
                    title: 'Исполнитель'
                },
                {
                    src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/roles-icons/roles-call-center.svg',
                    title: 'Колл-центр'
                },
                {
                    src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/roles-icons/roles-cc.svg',
                    title: 'Контроллер Управления'
                },
                {
                    src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/roles-icons/roles-customer.svg',
                    title: 'Покупатель'
                },
                {
                    src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/roles-icons/roles-level-3.svg',
                    title: '3 уровень поддержки'
                },
                {
                    src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/roles-icons/roles-helpdesk.svg',
                    title: 'Helpdesk'
                },
                {
                    src: 'https://rawgit.com/bannikov-info/it-synergy-2016-icons/master/roles-icons/roles-it-director.svg',
                    title: 'Директора ИТ'
                }
        ])
}())
