const cardsData = [
  {
    imgSrc: "./img/c1.png",
    title: "Бургер",
    establishments: "118 заведений",
  },
  {
    imgSrc: "./img/c2.png",
    title: "Пицца",
    establishments: "120 заведений",
  },
  {
    imgSrc: "./img/c3.png",
    title: "Салаты",
    establishments: "138 заведений",
  },
  {
    imgSrc: "./img/c4.png",
    title: "Супы",
    establishments: "107 заведений",
  },
  {
    imgSrc: "./img/c5.png",
    title: "Завтраки",
    establishments: "110 заведений",
  },
  {
    imgSrc: "./img/c6.png",
    title: "Десерты",
    establishments: "96 заведений",
  },
  {
    imgSrc: "./img/c7.webp",
    title: "Паста",
    establishments: "117 заведений",
  },
  {
    imgSrc: "./img/c8.webp",
    title: "Донер",
    establishments: "103 заведений",
  },
  {
    imgSrc: "./img/c9.webp",
    title: "Суши",
    establishments: "97 заведений",
  }
];

// Функция для создания карточки
function createCard(cardData) {
  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("img");
  image.src = cardData.imgSrc;
  card.appendChild(image);

  const content = document.createElement("div");
  content.classList.add("content");

  const title = document.createElement("h1");
  title.textContent = cardData.title;
  content.appendChild(title);

  const establishments = document.createElement("h3");
  establishments.textContent = cardData.establishments;
  content.appendChild(establishments);

  card.appendChild(content);
  return card;
}

// Получение контейнера для карточек
const container = document.querySelector(".inner");

// Создание и добавление карточек в контейнер
cardsData.forEach((data) => {
  const card = createCard(data);
  container.appendChild(card);
});

// Логика для кнопок карты
const buttons = document.querySelectorAll(".map button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    // Добавьте здесь логику для переключения между кнопками карты
  });
});


// JavaScript (jQuery)
$(document).ready(function() {
  const slideWidth = $('.card').outerWidth(true) * 3; // Получаем ширину карточки со слайдом
  let currentPosition = 0;

  $('.map').on('click', 'button', function() {
    $('.map').children().removeClass('active');
    $(this).addClass('active');

    if ($(this).hasClass('first')) {
      currentPosition = 0;
    } else if ($(this).hasClass('second')) {
      currentPosition = -slideWidth;
    } else if ($(this).hasClass('third')) {
      currentPosition = -slideWidth * 2;
    }

    $('.inner').css('transform', `translateX(${currentPosition}px)`);
  });
});


  // Данные о ресторанах (название, описание, изображение и прочее)
const restaurantsData = [
  {
    name: "Yaposha Sushi & Pizza",
    description: "Премиум роллы 🍣",
    imageUrl: "./img/r1.png",
    rating: 8.8
    // Добавьте другие данные для каждого ресторана
  },
  {
    name: "Burger King",
    description: "Taste is king 👑",
    imageUrl: "./img/r2.png",
    rating: 8.9
  },
  {
      name: "Винокурня By Ata",
      description: "Первый демократичный винный бар 🍕🥩🍝",
      imageUrl: "./img/r3.png",
      rating: 7.9
  },
  {
    name: "NINO",
    description: "Современный грузинско-итальянский ресторан Бесплатная доставка ",
    imageUrl: "./img/r4.png",
    rating: 9.9
  },
  {
    name: "BAYMAX GRILL&BAR",
    description: "🍗 Мясные сеты 🥩 Стейки 🍔 Бургеры 🍕 Пицца 🍖 Шашлыки",
    imageUrl: "./img/r5.png",
    rating: 8.9
  },
  {
    name: "Hawker Chan Dostyk Plaza",
    description: "Оригинальный стрит-фуд из Сингапура со звездой Мишлен.",
    imageUrl: "./img/r6.png",
    rating: 7.9
  },
];

function createRestaurantCardWithLink(restaurant, link) {
  const cardLink = $("<a>").attr("href", link); // Используем переданный параметр link

  const card = $(`
    <div class="card">
      <img src="${restaurant.imageUrl}" class="card-img-top" alt="...">
      <div class="card-body">
        <h4 class="card-title">${restaurant.name}</h4>
        <p class="card-text">${restaurant.description}</p>
        <div class="footer">
          <p>
            <img src="./img/SVG.png" alt="">  0 KZT 
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 13 13" fill="none">
              <!-- Ваш SVG код -->
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <g clip-path="url(#clip0_1_1670)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.48997 0.062153C9.78997 0.0633049 12.489 2.76425 12.4879 6.06425C12.4867 9.36425 9.78579 12.0633 6.48579 12.0622C3.18579 12.061 0.486729 9.36006 0.487881 6.06006C0.489032 2.76006 3.18997 0.0610011 6.48997 0.062153ZM6.48963 1.06215C3.73963 1.06119 1.48884 3.31041 1.48788 6.06041C1.48692 8.81041 3.73614 11.0612 6.48613 11.0622C9.23613 11.0631 11.4869 8.8139 11.4879 6.0639C11.4888 3.3139 9.23963 1.06311 6.48963 1.06215ZM8.8375 7.16297C9.03744 7.31304 9.13736 7.56308 8.98727 7.81303C8.38694 8.76282 7.58675 9.31254 6.48673 9.36215C5.38675 9.31177 4.5869 8.86149 4.08723 7.91131C3.98732 7.66128 3.98739 7.46128 4.13746 7.26133C4.23751 7.11137 4.43753 7.06144 4.63751 7.11151C4.8375 7.16158 4.88744 7.31159 4.98739 7.46163C5.33716 8.11175 5.93706 8.41196 6.63709 8.3122C7.23711 8.26241 7.63722 7.96255 8.03737 7.51269C8.08741 7.41271 8.13744 7.31273 8.23746 7.26276C8.33753 7.0628 8.58755 7.01289 8.8375 7.16297ZM8.48875 3.56285C8.98875 3.56303 9.43861 3.96318 9.43842 4.51318C9.43823 5.06318 9.03809 5.46304 8.48809 5.46285C7.98809 5.46268 7.53823 5.06252 7.53842 4.51252C7.53861 3.96252 7.93875 3.56266 8.48875 3.56285ZM4.48875 3.56145C4.98875 3.56163 5.43861 3.96179 5.43842 4.51179C5.43823 5.06179 5.03811 5.41165 4.48811 5.41145C3.93811 5.41126 3.53825 5.01112 3.53844 4.46112C3.53861 3.96112 3.98875 3.56128 4.48875 3.56145Z" fill="#202125" fill-opacity="0.64"/>
              </g>
              <defs>
                <clipPath id="clip0_1_1670">
                  <rect width="12" height="12" fill="white" transform="translate(0.489975 0.0600586) rotate(0.02)"/>
                </clipPath>
              </defs>
            </svg>
            </svg> ${restaurant.rating}
          </p>
        </div>
      </div>
    </div>
  `);

  cardLink.append(card);
  return cardLink;
}

$(document).ready(function () {
  const restaurantsContainer = $("#restaurants-container");
  const restaurantLinks = ["rest1.html", "rest1.html", "rest1.html", "rest1.html", "rest1.html", "rest1.html"]; // Массив ссылок

  let currentRow;
  restaurantsData.forEach((restaurant, index) => {
    if (index % 3 === 0) {
      currentRow = $("<div>").addClass("row");
      restaurantsContainer.append(currentRow);
    }

    const restaurantCard = createRestaurantCardWithLink(restaurant, restaurantLinks[index]); // Передаем конкретную ссылку для каждой карточки
    const column = $("<div>").addClass("col-lg-4 col-md-6 mb-4").append(restaurantCard);
    currentRow.append(column);
  });
});






