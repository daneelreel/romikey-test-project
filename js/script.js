document.addEventListener("DOMContentLoaded", function () {
  const page = document.querySelector('body');

  const runningLineHeader = page.querySelector('.running-line_type_header');
  const runningLineHeaderCards = [
    {
      text: 'Figma',
      image: './images/figma.png'
    },
    {
      text: 'Serpstat',
      image: './images/serpstat.png'
    },
    {
      text: 'SE-Ranking',
      image: './images/se-ranking.png'
    },
    {
      text: 'KeyCollector',
      image: './images/key-collector.png'
    },
    {
      text: 'Google-Analytics',
      image: './images/google-analytics.png'
    },
    {
      text: 'Google-Ads',
      image: './images/google-ads.png'
    },
    {
      text: 'Yandex-Metrika',
      image: './images/yandex-metrika.png'
    },
    {
      text: 'Yandex-Direct',
      image: './images/yandex-direct.png'
    },
    {
      text: 'Roistat',
      image: './images/roistat.png'
    },
    {
      text: 'используем множество инструментов',
      accent: 'Y',
    }
  ];

  const runningLineFooter = page.querySelector('.running-line_type_footer');
  const runningLineFooterCards = [
    {
      text: 'создаем с нуля',
      accent: 'Y',
    },
    {
      text: 'стратегии',
    },
    {
      text: 'кампании',
    },
    {
      text: 'медиапланы',
    },
    {
      text: 'интеграции',
    },
    {
      text: 'ux',
    },
    {
      text: 'сайты',
    }
  ];

  const serviceList = page.querySelector('.service-list');
  const serviceItems = [
    {
      name: 'Контекст',
      price: 'от 85 000 Р',
      link: 'https://romikey.ru/context/',
      responsibilities: ['Поисковые кампании в&nbsp;Директе и&nbsp;Google Ads', 'Кампании в&nbsp;РСЯ и&nbsp;КМС', 'Ретаргетинг и&nbsp;ремаркетинг', 'Видеореклама в&nbsp;YouTube и&nbsp;на&nbsp;площадках Яндекса и&nbsp;Google', 'Реклама в&nbsp;Google Merchant Center', 'Кампании с&nbsp;оплатой за&nbsp;конверсию']
    },
    {
      name: 'Таргет',
      price: 'от 30 000 Р',
      link: 'https://romikey.ru/target/',
      responsibilities: ['Аудит проекта и&nbsp;разработка медиаплана', 'Кампании в&nbsp;ВКонтакте и&nbsp;myTarget', 'Привлечение трафика на&nbsp;сайт или в&nbsp;группу социальной сети', 'Кампании Lead Ads для сбора заявок прямо в&nbsp;соцсетях', 'Настройка чат-бота в&nbsp;ВК для увеличении конверсии группы']
    },
    {
      name: 'SEO',
      price: 'от 75 000 Р',
      link: 'https://romikey.ru/seo/',
      responsibilities: ['Ежемесячное планирование работ', 'Внутренняя и&nbsp;внешняя оптимизация', 'Ежедневный мониторинг позиций', 'Работа с репутацией', 'Ежемесячный отчет о&nbsp;результатах']
    },
    {
      name: 'Разработка',
      price: 'от 100 000 Р',
      link: 'https://romikey.ru/web-development/',
      responsibilities: ['Технические доработки сайта для повышения конверсии', 'Создание продающей структуры и&nbsp;прототипирование', 'Разработка одностраничных и&nbsp;многостраничных сайтов', 'Разработка дизайн-макетов', 'Перенос существующих сайтов и&nbsp;настройка различных CMS']
    },
    {
      name: 'Веб-аналитика',
      price: 'от 30 000 Р',
      link: 'https://romikey.ru/web-analytics/',
      responsibilities: ['Аудит рекламных каналов Яндекс, Google, VK, MyTarget', 'SEO аудит и&nbsp;аудит репутации компании в&nbsp;поисковиках', 'Аудит юзабилити с&nbsp;техническим заданием для программиста', 'Настройка Яндекс.Метрики и&nbsp;Google Analytics']
    }
  ];

  function createRunningLineItem (item) {
    const runningLineItemTemplate = page.querySelector('[data-id="runningLineItemTemplate"]').content;
    const runningLineItem = runningLineItemTemplate.querySelector('.running-line__item').cloneNode(true);
    const runningLineImage = runningLineItem.querySelector('.running-line__image');
    if (item.image) {
      runningLineItem.classList.add('running-line__item_image-wrapper')
      runningLineImage.src = item.image;
      runningLineImage.alt = `Логотип ${item.text}`;
    }
    else {
      runningLineItem.textContent = item.text;
      if (item.accent) {
        runningLineItem.classList.add('running-line__item_accent')
      }
    };
    return runningLineItem
  };

  function createServiceItem (item) {
    const serviceItemTemplate = page.querySelector('[data-id="serviceTemplate"]').content;
    const serviceItem = serviceItemTemplate.querySelector('.service').cloneNode(true);
    const serviceName = serviceItem.querySelector('.service__name');
    const servicePrice = serviceItem.querySelector('.service__price');
    const serviceLink = serviceItem.querySelector('.service__link');
    const responsibilitieList = serviceItem.querySelector('.responsibilitie-list');
    serviceName.textContent = item.name;
    servicePrice.textContent = item.price;
    serviceLink.href = item.link;
    item.responsibilities.forEach(text => {
      const responsibilitie = document.createElement('li');
      responsibilitie.classList.add('responsibilitie');
      responsibilitie.innerHTML = text;
      responsibilitieList.appendChild(responsibilitie);
    });
    return serviceItem
  };
  
  runningLineHeaderCards.forEach(function (item) {
    runningLineHeader.append(createRunningLineItem(item));
  });
  runningLineHeaderCards.forEach(function (item) {
    runningLineHeader.append(createRunningLineItem(item));
  });
  runningLineFooterCards.forEach(function (item) {
    runningLineFooter.append(createRunningLineItem(item));
  });
  runningLineFooterCards.forEach(function (item) {
    runningLineFooter.append(createRunningLineItem(item));
  });
  serviceItems.forEach(function (item) {
    serviceList.append(createServiceItem(item));
  });

  const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    loop: false,
    spaceBetween: 0,
    grabCursor: true,
    slideToClickedSlide: true,
    breakpoints: {
      768: {
        spaceBetween: 24
      }
    }
  });
});