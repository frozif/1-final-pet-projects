// Меню выбора блюд 
var menuData = {
    burgers: [
        { img: "img/Burger1.png", price: 689, subtitle: "\u041C\u044F\u0441\u043D\u0430\u044F \u0431\u043E\u043C\u0431\u0430", weight: "520\u0433" },
        { img: "img/Burger2.png", price: 550, subtitle: "\u0421\u0443\u043F\u0435\u0440 \u0441\u044B\u0440\u043D\u044B\u0439", weight: "512\u0433" },
        { img: "img/Burger3.png", price: 639, subtitle: "\u0421\u044B\u0442\u043D\u044B\u0439", weight: "580\u0433" },
        { img: "img/Burger4.png", price: 480, subtitle: "\u0422\u044F\u0436\u0435\u043B\u044B\u0439 \u0443\u0434\u0430\u0440", weight: "470\u0433" },
        { img: "img/Burger8.png", price: 450, subtitle: "\u0412\u0435\u0447\u043D\u0430\u044F \u043A\u043B\u0430\u0441\u0441\u0438\u043A\u0430", weight: "450\u0433" },
        { img: "img/Burger9.png", price: 560, subtitle: "\u0418\u0442\u0430\u043B\u044C\u044F\u043D\u0441\u043A\u0438\u0439", weight: "510\u0433" }
    ],
    snacks: [
        { img: "img/sneck1.png", price: 200, subtitle: "\u041D\u0430\u0447\u043E\u0441 ", weight: "200\u0433" },
        { img: "img/sneck2.png", price: 140, subtitle: "\u041A\u0430\u0440\u0442\u043E\u0448\u043A\u0430 \u0424\u0440\u0438", weight: "150\u0433" },
        { img: "img/sneck3.png", price: 190, subtitle: "\u041B\u0443\u043A\u043E\u0432\u044B\u0435 \u043A\u043E\u043B\u044C\u0446\u0430", weight: "200\u0433" },
        { img: "img/sneck4.png", price: 500, subtitle: "\u041D\u0430\u0431\u043E\u0440 \u043A \u041F\u0438\u0432\u0443", weight: "300\u0433" },
        { img: "img/sneck5.png", price: 450, subtitle: "\u041A\u0440\u044B\u043B\u044B\u0448\u043A\u0438 \u041A\u0443\u0440\u0438\u043D\u044B\u0435", weight: "6 \u0448\u0442" },
        { img: "img/sneck6.png", price: 490, subtitle: "\u043A\u0443\u0440\u0438\u043D\u044B\u0435 \u043D\u043E\u0436\u043A\u0438", weight: "6 \u0448\u0442" },
    ],
    hotDogs: [
        { img: "img/hotDog1.png", price: 290, subtitle: "\u0414\u043E\u043C\u0430\u0448\u043D\u0438\u0439 \u0445\u043E\u0442-\u0434\u043E\u0433", weight: "250\u0433" },
        { img: "img/hotDog2.png", price: 240, subtitle: "\u0416\u0433\u0443\u0447\u0438\u0439 \u0445\u043E\u0442-\u0434\u043E\u0433", weight: "260\u0433" },
        { img: "img/hotDog3.png", price: 250, subtitle: "\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0445\u043E\u0442-\u0434\u043E\u0433", weight: "200\u0433" },
        { img: "img/hotDog4.png", price: 390, subtitle: "\u041D\u0435\u043E\u0431\u044B\u0447\u043D\u044B\u0439 \u0445\u043E\u0442-\u0434\u043E\u0433", weight: "250\u0433" },
        { img: "img/hotDog5.png", price: 450, subtitle: "\u0418\u0442\u0430\u043B\u044C\u044F\u043D\u0441\u043A\u0438\u0439 \u0445\u043E\u0442-\u0434\u043E\u0433", weight: "300\u0433" },
        { img: "img/hotDog6.png", price: 520, subtitle: "\u041D\u0430\u0431\u043E\u0440 \"\u041A\u0435\u043D\u0442\u044B\"", weight: "350\u0433" },
    ],
    combo: [
        { img: "img/Combo1.png", price: 890, subtitle: "\u041A\u043E\u043C\u0431\u043E \"\u0421\u044B\u0442\u043D\u044B\u0439 \u041D\u0430\u0431\u043E\u0440\"", weight: "650\u0433" },
        { img: "img/Combo2.png", price: 440, subtitle: "\u041A\u043E\u043C\u0431\u043E \"\u0425\u0440\u0443\u0441\u0442 #1\"", weight: "390\u0433" },
        { img: "img/Combo3.png", price: 650, subtitle: "\u041A\u043E\u043C\u0431\u043E \"\u0421\u0443\u0448\u0438 #1\"", weight: "500\u0433" },
        { img: "img/Combo4.png", price: 500, subtitle: "\u041A\u043E\u043C\u0431\u043E \"\u0421\u0443\u0448\u0438 #2\"", weight: "450\u0433" },
        { img: "img/Combo5.png", price: 650, subtitle: "\u041A\u043E\u043C\u0431\u043E \"\u0421\u0443\u0448\u0438 #3\"", weight: "550\u0433" },
        { img: "img/Combo6.png", price: 520, subtitle: "\u041A\u043E\u043C\u0431\u043E \"\u0425\u0440\u0443\u0441\u0442 #2\"", weight: "450\u0433" },
    ],
    pizza: [
        { img: "img/pizza1.png", price: 590, subtitle: "\u041F\u0438\u0446\u0446\u0430 \"\u0422\u043E\u043C\u0430\u0442\u043D\u0430\u044F\"", weight: "400\u0433" },
        { img: "img/pizza2.png", price: 540, subtitle: "\u041F\u0438\u0446\u0446\u0430 \"\u041F\u0435\u043F\u0435\u0440\u043E\u043D\u0438\"", weight: "400\u0433" },
        { img: "img/pizza3.png", price: 550, subtitle: "\u041F\u0438\u0446\u0446\u0430 \"\u0418\u0442\u0430\u043B\u0438\u044F\"", weight: "350\u0433" },
        { img: "img/pizza4.png", price: 550, subtitle: "\u041F\u0438\u0446\u0446\u0430 \"\u041F\u0435\u043F\u0435\u0440\u043E\u043D\u0438\"", weight: "450\u0433" },
        { img: "img/pizza5.png", price: 550, subtitle: "\u041F\u0438\u0446\u0446\u0430 \"\u0421\u044B\u0440\u043D\u0430\u044F\"", weight: "400\u0433" },
        { img: "img/pizza6.png", price: 520, subtitle: "\u041F\u0438\u0446\u0446\u0430 \"\u0421\u044B\u0440\u043D\u0430\u044F\"", weight: "400\u0433" },
    ],
    shawerma: [
        { img: "img/shawerma.png", price: 490, subtitle: "\u041C\u044F\u0441\u043D\u0430\u044F \u0428\u0430\u0443\u0440\u043C\u0430", weight: "400\u0433" },
        { img: "img/shawerma2.png", price: 440, subtitle: "\u041C\u044F\u0441\u043D\u0430\u044F \u0428\u0430\u0443\u0440\u043C\u0430 \"\u041E\u0441\u0442\u0440\u0430\u044F\"", weight: "400\u0433" },
        { img: "img/shawerma3.png", price: 550, subtitle: "\u041F\u041F \u0428\u0430\u0443\u0440\u043C\u0430", weight: "350\u0433" },
        { img: "img/shawerma4.png", price: 450, subtitle: "\u041C\u044F\u0441\u043D\u0430\u044F \u0428\u0430\u0443\u0440\u043C\u0430 \"\u0421\u044B\u0440\u043D\u0430\u044F\"", weight: "450\u0433" },
        { img: "img/shawerma5.png", price: 450, subtitle: "\u041C\u044F\u0441\u043D\u0430\u044F \u0428\u0430\u0443\u0440\u043C\u0430", weight: "400\u0433" },
        { img: "img/shawerma6.png", price: 420, subtitle: "\u041C\u044F\u0441\u043D\u0430\u044F \u0428\u0430\u0443\u0440\u043C\u0430 \"\u0421\u043E\u0443\u0441\"", weight: "400\u0433" },
    ],
    wok: [
        { img: "img/wok1.png", price: 790, subtitle: "\u0412\u043E\u043A \"\u041A\u0438\u0442\u0430\u0439\"", weight: "350\u0433" },
        { img: "img/wok2.png", price: 640, subtitle: "\u0412\u043E\u043A \"\u041F\u041F\"", weight: "390\u0433" },
        { img: "img/wok3.png", price: 550, subtitle: "\u0412\u043E\u043A \"\u0422\u0435\u0440\u0438\u044F\u043A\u0438\"", weight: "300\u0433" },
        { img: "img/wok4.png", price: 500, subtitle: "\u0412\u043E\u043A \"\u0421\u0430\u043B\u0430\u0442\u0438\u043A\"", weight: "350\u0433" },
        { img: "img/wok5.png", price: 650, subtitle: "\u0412\u043E\u043A \"\u041E\u0441\u0442\u0440\u044B\u0439\"", weight: "350\u0433" },
        { img: "img/wok6.png", price: 520, subtitle: "\u0412\u043E\u043A \u0441 \u0421\u0430\u043B\u0430\u0442\u043E\u043C", weight: "350\u0433" },
    ],
    desserts: [
        { img: "img/desserts1.png", price: 490, subtitle: "\u0422\u043E\u0440\u0442 \u00AB\u041F\u0438\u043D\u043A-\u043A\u0435\u0439\u043A\u00BB", weight: "250\u0433" },
        { img: "img/desserts2.png", price: 440, subtitle: "\u0422\u043E\u0440\u0442 \u00AB\u041C\u0435\u0434\u043E\u0432\u0438\u043A\u00BB", weight: "290\u0433" },
        { img: "img/desserts3.png", price: 550, subtitle: "\u0422\u043E\u0440\u0442 \u00AB\u0427\u0438\u0437\u043A\u0435\u0439\u043A \u0413\u0440\u0430\u043D\u0434 \u041A\u0440\u044E\u00BB", weight: "300\u0433" },
        { img: "img/desserts4.png", price: 500, subtitle: "\u0422\u043E\u0440\u0442 \u00AB\u041F\u0440\u043E\u0444\u0438\u0442\u0440\u043E\u043B\u0438 \u0441 \u043C\u043E\u0440\u043E\u0436\u0435\u043D\u044B\u043C\u00BB", weight: "250\u0433" },
        { img: "img/desserts5.png", price: 650, subtitle: "\u0422\u043E\u0440\u0442 \u00AB\u0425\u0438\u043D\u043A\u0430\u043B\u0438\u00BB", weight: "250\u0433" },
        { img: "img/desserts6.png", price: 520, subtitle: "\u0422\u043E\u0440\u0442  \u00AB\u0414\u0443\u0431\u0430\u0439\u0441\u043A\u0438\u0439 \u0428\u043E\u043A\u043E\u043B\u0430\u0434\u00BB", weight: "250\u0433" },
    ],
    sauces: [
        { img: "img/sauces1.png", price: 120, subtitle: "\u041A\u0435\u0442\u0447\u0443\u043F \"\u0422\u043E\u043C\u0430\u0442\u043D\u044B\u0439", weight: "70\u0433" },
        { img: "img/sauces2.png", price: 140, subtitle: "\"\u0421\u044B\u0440\u043D\u044B\u0439\" \u0421\u043E\u0443\u0441", weight: "90\u0433" },
        { img: "img/sauces3.png", price: 130, subtitle: "\u0421\u043E\u0443\u0441 \"\u041E\u0441\u0442\u0440\u044B\u0439\"", weight: "80\u0433" },
        { img: "img/sauces4.png", price: 120, subtitle: "\u0421\u043E\u0443\u0441 \"\u041A\u0438\u0441\u043B\u044B\u0439\"", weight: "70\u0433" },
        { img: "img/sauces5.png", price: 140, subtitle: "\u0421\u043E\u0443\u0441 \"\u0433\u0443\u0430\u043A\u0430\u043C\u043E\u043B\u0435\"", weight: "80\u0433" },
        { img: "img/sauces6.png", price: 120, subtitle: "\u0421\u043E\u0443\u0441  \"\u0427\u0438\u043B\u0438\"", weight: "90\u0433" },
    ]
    // ----------------------------------------------------------------------------------------
};
var menuListElement = document.querySelectorAll('.header_nav button');
var listCardElements = document.querySelector('.section_basket_Menu_list_main_Cards');
var hTitleElement = document.querySelector('.header_nav_menu_h2');
var panel = document.querySelector('.panel');
var body = document.body;
var panelImg = panel.querySelector('.main_info_panel img');
var panelTitle = panel.querySelector('.main_info_panel h2');
var panelPrice = panel.querySelector('.price_main_btns_panel');
var panelWeight = panel.querySelector('.weight_main_info_panel');
var panelAddBtn = panel.querySelector('.main_btns_panel_btn');
var plusBtn = panel.querySelector('.btn-plus');
;
var minusBtn = panel.querySelector('.btn-minus');
var countInput = panel.querySelector('.count');
var closeBtn = document.querySelector('.x_button_panel');
var basketCleanElement = document.querySelector(".basket_list_clean");
var basketContainer = document.querySelector('.basket_list_orders_wrapper');
var basketCompliteBtn = document.querySelector(".basket_list_down_btn");
var ordersCheckBoxs = document.querySelector(".ordersCheckBoxsCheck");
var pickupCheckBoxs = document.querySelector(".castom_checkBox_input");
var orderCmpltBtn = document.querySelector(".order_Complite_btn");
var panelOrder = document.querySelector(".panelOrder");
var infoHouseElement = document.querySelector(".info_house_order");
var closeOrderCard = document.querySelector(".panelOrder_closes");
// ----------------------------------------------------------------------------------------
var categories = ['burgers', 'snacks', 'hotDogs', 'combo', 'shawerma', 'pizza', 'wok', 'desserts', 'sauces'];
var categoryNames = ['Бургеры', 'Закуски', 'Хот-доги', 'Комбо', 'Шаурма', 'Пицца', 'Вок', 'Десерты', 'Соусы'];
var currentItem = null;
// -------------------------------------------------------
// карточки с едой на главном менью
hTitleElement.textContent = categoryNames[0];
listCardElements.innerHTML = '';
// ------------------------------------------------------------
// Функция для карточки
function cardinfo(item) {
    currentItem = item;
    countInput.value = '1';
    panelImg.src = item.img;
    panelTitle.textContent = item.subtitle;
    panelPrice.textContent = item.price + '₽';
    panelWeight.textContent = item.weight;
    panel.style.display = 'flex';
    body.style.pointerEvents = 'none';
    panel.classList.add('show');
    body.style.overflow = 'hidden';
}
// ------------------------------------------------------------
menuData[categories[0]].forEach(function (item) {
    var card = document.createElement('div');
    card.className = 'section_basket_Menu_list_main_Card';
    card.innerHTML = "\n    <img src=\"".concat(item.img, "\">\n    <h2>").concat(item.price + ' ₽', "</h2>\n    <p class=\"section_basket_Menu_list_main_Card_txtOne\">").concat(item.subtitle, "</p>\n    <p class=\"section_basket_Menu_list_main_Card_txt\">").concat(item.weight, "</p>\n    <button class=\"addBtn\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</button>\n  ");
    card.querySelector('.addBtn').addEventListener('click', function () {
        cardinfo(item);
    });
    listCardElements.appendChild(card);
});
// -------------------------------------------------
menuListElement.forEach(function (btn, i) {
    btn.addEventListener('click', function () {
        var category = categories[i];
        hTitleElement.textContent = categoryNames[i];
        listCardElements.innerHTML = '';
        menuData[category].forEach(function (item) {
            var card = document.createElement('div');
            card.className = 'section_basket_Menu_list_main_Card';
            card.innerHTML = "\n        <img src=\"".concat(item.img, "\">\n        <h2>").concat(item.price + ' ₽', "</h2>\n        <p class=\"section_basket_Menu_list_main_Card_txtOne\">").concat(item.subtitle, "</p>\n        <p class=\"section_basket_Menu_list_main_Card_txt\">").concat(item.weight, "</p>\n        <button class=\"addBtn\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</button>\n      ");
            card.querySelector('.addBtn').addEventListener('click', function () {
                cardinfo(item);
            });
            listCardElements.appendChild(card);
        });
    });
});
// ----------------------------------------------------------
// Функции
function closePanelElement() {
    panel.classList.remove('show');
    setTimeout(function () {
        panel.style.display = 'none';
        body.style.overflow = '';
        body.style.pointerEvents = 'auto';
    }, 300);
}
closeBtn.onclick = closePanelElement;
// ----------------------------------------------------------
// Прибавление и убавления для корзины
var basketListPrice = document.querySelector("#basket_list_price");
plusBtn.onclick = function () {
    var countTwo = Number(countInput.value);
    countTwo++;
    countInput.value = countTwo.toString();
    if (!currentItem)
        return;
    panelPrice.textContent = currentItem.price * countTwo + ' ₽';
};
minusBtn.onclick = function () {
    var countminusbtn = Number(countInput.value);
    if (countminusbtn > 1) {
        countminusbtn--;
        countInput.value = countminusbtn.toString();
        if (!currentItem)
            return;
        panelPrice.textContent = currentItem.price * countminusbtn + ' ₽';
    }
};
panelAddBtn.onclick = function () {
    var card = document.createElement('div');
    card.className = 'basket_list_order_card';
    card.dataset.price = String(currentItem.price);
    var price = Number(card.dataset.price);
    card.innerHTML = "\n    <img class=\"basket_list_order_card_img\" src=\"".concat(currentItem.img, "\">\n    <div class=\"basket_list_order_card_txt\">\n<h2 class=\"basket_list_order_card_title\">").concat(currentItem.subtitle, "</h2>\n<p class=\"basket_list_order_card_subtitle_weight\">").concat(currentItem.weight, "</p>\n<p class=\"basket_list_order_card_subtitle\">").concat(currentItem.price + ' ₽', "</p>\n    </div>\n    <div class=\"counter2\">\n      <button class=\"btn-minus2\">\u2212</button>\n      <input type=\"number\" class =\"countsTwo\" value=\"").concat(countInput.value, "\" min=\"1\" readonly>\n      <button class=\"btn-plus2\">+</button>\n    </div>\n  ");
    var input = card.querySelector('.countsTwo');
    // ----------------------------------------------------------------
    // Функция карзины
    function btnBasketCod() {
        var sum = 0;
        document.querySelectorAll('.basket_list_order_card').forEach(function (card) {
            var price = parseInt(card.dataset.price);
            var count = card.querySelector('.countsTwo');
            var countbskt = Number(count.value);
            sum += price * countbskt;
        });
        basketListPrice.textContent = "".concat(sum, " \u20BD");
    }
    // ----------------------------------------------------------------
    // прибавление и убавления для карточки
    var btnplusTw = card.querySelector('.btn-plus2');
    btnplusTw.onclick = function () {
        var counts = Number(input.value);
        counts++;
        input.value = counts.toString();
        btnBasketCod();
    };
    var btnminustw = card.querySelector('.btn-minus2');
    btnminustw.onclick = function () {
        if (+input.value > 1) {
            var counts = Number(input.value);
            counts--;
            input.value = counts.toString();
            btnBasketCod();
        }
    };
    basketContainer.appendChild(card);
    basketContainer.style.display = 'flex';
    btnBasketCod();
    closePanelElement();
};
// ----------------------------------------------------------
// кнопка при который вы заказываете еду (Панель)
var basketContainerLength = basketContainer;
basketCompliteBtn.addEventListener("click", function () {
    if (basketContainerLength.children.length > 0) {
        panelOrder.classList.add("show");
        document.body.style.overflow = 'hidden';
        body.style.pointerEvents = 'none';
    }
});
ordersCheckBoxs.addEventListener("change", function () {
    if (ordersCheckBoxs.checked) {
        panelOrder.classList.add('show');
        infoHouseElement.style.display = "flex";
    }
});
pickupCheckBoxs.addEventListener("change", function () {
    if (pickupCheckBoxs.checked) {
        infoHouseElement.style.display = "none";
        orderCmpltBtn.style.marginTop = "92px";
    }
});
// ------------------------------------------------------
// тут мы Закрываем карточку и чистим карзину
closeOrderCard.onclick = function () {
    panelOrder.classList.remove("show");
    document.body.style.overflow = '';
    body.style.pointerEvents = 'auto';
};
basketCleanElement.addEventListener("click", function () {
    basketContainer.style.display = "none";
    basketContainer.innerHTML = "";
    var sum = 0;
    basketListPrice.textContent = "";
});


