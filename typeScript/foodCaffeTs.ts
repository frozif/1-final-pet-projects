
type MenuItem  = {
  img: string, 
  price: number, 
  subtitle: string,
  weight: string;
}



// Меню выбора блюд 
  const menuData = {
burgers: [
  {img: `img/Burger1.png`, price: 689, subtitle: `Мясная бомба`, weight: `520г`},
   {img: `img/Burger2.png`, price: 550, subtitle: `Супер сырный`, weight: `512г`},
    {img: `img/Burger3.png`, price: 639, subtitle: `Сытный`, weight: `580г`},
     {img: `img/Burger4.png`, price: 480, subtitle: `Тяжелый удар`, weight: `470г`},
      {img: `img/Burger8.png`, price: 450, subtitle: `Вечная классика`, weight: `450г`},
       {img: `img/Burger9.png`, price: 560, subtitle: `Итальянский`, weight: `510г`}
],
snacks: [
  {img: `img/sneck1.png`, price: 200, subtitle: `Начос `, weight: `200г`},
  {img: `img/sneck2.png`, price: 140, subtitle: `Картошка Фри`, weight: `150г`},
  {img: `img/sneck3.png`, price: 190, subtitle: `Луковые кольца`, weight: `200г`},
  {img: `img/sneck4.png`, price: 500, subtitle: `Набор к Пиву`, weight: `300г`},
  {img: `img/sneck5.png`, price: 450, subtitle: `Крылышки Куриные`, weight: `6 шт`},
  {img: `img/sneck6.png`, price: 490, subtitle: `куриные ножки`, weight: `6 шт`},
], 
hotDogs: [
   {img: `img/hotDog1.png`, price: 290, subtitle: `Домашний хот-дог`, weight: `250г`},
  {img: `img/hotDog2.png`, price: 240, subtitle: `Жгучий хот-дог`, weight: `260г`},
  {img: `img/hotDog3.png`, price: 250, subtitle: `Классический хот-дог`, weight: `200г`},
  {img: `img/hotDog4.png`, price: 390, subtitle: `Необычный хот-дог`, weight: `250г`},
  {img: `img/hotDog5.png`, price: 450, subtitle: `Итальянский хот-дог`, weight: `300г`},
  {img: `img/hotDog6.png`, price: 520, subtitle: `Набор "Кенты"`, weight: `350г`}, 
], 
combo: [
     {img: `img/Combo1.png`, price: 890, subtitle: `Комбо "Сытный Набор"`, weight: `650г`},
  {img: `img/Combo2.png`, price: 440, subtitle: `Комбо "Хруст #1"`, weight: `390г`},
  {img: `img/Combo3.png`, price: 650, subtitle: `Комбо "Суши #1"`, weight: `500г`},
  {img: `img/Combo4.png`, price: 500, subtitle: `Комбо "Суши #2"`, weight: `450г`},
  {img: `img/Combo5.png`, price: 650, subtitle: `Комбо "Суши #3"`, weight: `550г`},
  {img: `img/Combo6.png`, price: 520, subtitle: `Комбо "Хруст #2"`, weight: `450г`}, 
], 
pizza: [
     {img: `img/pizza1.png`, price: 590, subtitle: `Пицца "Томатная"`, weight: `400г`},
  {img: `img/pizza2.png`, price: 540, subtitle: `Пицца "Пеперони"`, weight: `400г`},
  {img: `img/pizza3.png`, price: 550, subtitle: `Пицца "Италия"`, weight: `350г`},
  {img: `img/pizza4.png`, price: 550, subtitle: `Пицца "Пеперони"`, weight: `450г`},
  {img: `img/pizza5.png`, price: 550, subtitle: `Пицца "Сырная"`, weight: `400г`},
  {img: `img/pizza6.png`, price: 520, subtitle: `Пицца "Сырная"`, weight: `400г`}, 
],
shawerma: [
     {img: `img/shawerma.png`, price: 490, subtitle: `Мясная Шаурма`, weight: `400г`},
  {img: `img/shawerma2.png`, price: 440, subtitle: `Мясная Шаурма "Острая"`, weight: `400г`},
  {img: `img/shawerma3.png`, price: 550, subtitle: `ПП Шаурма`, weight: `350г`},
  {img: `img/shawerma4.png`, price: 450, subtitle: `Мясная Шаурма "Сырная"`, weight: `450г`},
  {img: `img/shawerma5.png`, price: 450, subtitle: `Мясная Шаурма`, weight: `400г`},
  {img: `img/shawerma6.png`, price: 420, subtitle: `Мясная Шаурма "Соус"`, weight: `400г`}, 
],
wok: [
     {img: `img/wok1.png`, price: 790, subtitle: `Вок "Китай"`, weight: `350г`},
  {img: `img/wok2.png`, price: 640, subtitle: `Вок "ПП"`, weight: `390г`},
  {img: `img/wok3.png`, price: 550, subtitle: `Вок "Терияки"`, weight: `300г`},
  {img: `img/wok4.png`, price: 500, subtitle: `Вок "Салатик"`, weight: `350г`},
  {img: `img/wok5.png`, price: 650, subtitle: `Вок "Острый"`, weight: `350г`},
  {img: `img/wok6.png`, price: 520, subtitle: `Вок с Салатом`, weight: `350г`}, 
],
desserts: [
       {img: `img/desserts1.png`, price: 490, subtitle: `Торт «Пинк-кейк»`, weight: `250г`},
  {img: `img/desserts2.png`, price: 440, subtitle: `Торт «Медовик»`, weight: `290г`},
  {img: `img/desserts3.png`, price: 550, subtitle: `Торт «Чизкейк Гранд Крю»`, weight: `300г`},
  {img: `img/desserts4.png`, price: 500, subtitle: `Торт «Профитроли с мороженым»`, weight: `250г`},
  {img: `img/desserts5.png`, price: 650, subtitle: `Торт «Хинкали»`, weight: `250г`},
  {img: `img/desserts6.png`, price: 520, subtitle: `Торт  «Дубайский Шоколад»`, weight: `250г`}, 
],
sauces: [
       {img: `img/sauces1.png`, price: 120, subtitle: `Кетчуп "Томатный`, weight: `70г`},
  {img: `img/sauces2.png`, price: 140, subtitle: `"Сырный" Соус`, weight: `90г`},
  {img: `img/sauces3.png`, price: 130, subtitle: `Соус "Острый"`, weight: `80г`},
  {img: `img/sauces4.png`, price: 120, subtitle: `Соус "Кислый"`, weight: `70г`},
  {img: `img/sauces5.png`, price: 140, subtitle: `Соус "гуакамоле"`, weight: `80г`},
  {img: `img/sauces6.png`, price: 120, subtitle: `Соус  "Чили"`, weight: `90г`}, 
]

// ----------------------------------------------------------------------------------------

  }
const menuListElement = document.querySelectorAll('.header_nav button');
const listCardElements = document.querySelector('.section_basket_Menu_list_main_Cards');
const hTitleElement = document.querySelector('.header_nav_menu_h2');
const panel = document.querySelector('.panel') as HTMLElement;
const body = document.body;
const panelImg = panel.querySelector('.main_info_panel img') as HTMLImageElement;
const panelTitle = panel.querySelector('.main_info_panel h2');
const panelPrice = panel.querySelector('.price_main_btns_panel');
const panelWeight = panel.querySelector('.weight_main_info_panel');
const panelAddBtn = panel.querySelector('.main_btns_panel_btn') as HTMLButtonElement;
const plusBtn = panel.querySelector('.btn-plus') as HTMLButtonElement;;
const minusBtn = panel.querySelector('.btn-minus') as HTMLButtonElement;
const countInput = panel.querySelector('.count') as HTMLInputElement;  
const closeBtn = document.querySelector('.x_button_panel') as HTMLButtonElement;
const basketCleanElement = document.querySelector(`.basket_list_clean`)
const basketContainer = document.querySelector('.basket_list_orders_wrapper') as HTMLElement;
const basketCompliteBtn = document.querySelector(`.basket_list_down_btn`) 
const ordersCheckBoxs=  document.querySelector(`.ordersCheckBoxsCheck`) as HTMLInputElement;
const pickupCheckBoxs = document.querySelector(`.castom_checkBox_input`) as HTMLInputElement;
const orderCmpltBtn = document.querySelector(`.order_Complite_btn`) as HTMLButtonElement;
const panelOrder = document.querySelector(`.panelOrder`) as HTMLElement;
const infoHouseElement = document.querySelector(`.info_house_order`) as HTMLElement;
const closeOrderCard = document.querySelector(`.panelOrder_closes`) as HTMLElement;
// ----------------------------------------------------------------------------------------
const categories = ['burgers','snacks','hotDogs','combo','shawerma','pizza','wok','desserts','sauces'];
const categoryNames = ['Бургеры','Закуски','Хот-доги','Комбо','Шаурма','Пицца','Вок','Десерты','Соусы'];

let currentItem: MenuItem  | null = null;
// -------------------------------------------------------
// карточки с едой на главном менью

hTitleElement.textContent = categoryNames[0];
listCardElements.innerHTML = '';

// ------------------------------------------------------------
// Функция для карточки

  function cardinfo(item: MenuItem ){
            currentItem = item;
        countInput.value = '1';
        panelImg.src = item.img;
        panelTitle.textContent = item.subtitle;
        panelPrice.textContent = item.price +'₽';
        panelWeight.textContent = item.weight;
        panel.style.display = 'flex';
         body.style.pointerEvents  = 'none';
        panel.classList.add('show');
        body.style.overflow = 'hidden';
  }

// ------------------------------------------------------------

menuData[categories[0]].forEach(item => {
  const card = document.createElement('div');
  card.className = 'section_basket_Menu_list_main_Card';
  card.innerHTML = `
    <img src="${item.img}">
    <h2>${item.price +' ₽'}</h2>
    <p class="section_basket_Menu_list_main_Card_txtOne">${item.subtitle}</p>
    <p class="section_basket_Menu_list_main_Card_txt">${item.weight}</p>
    <button class="addBtn">Добавить</button>
  `;


  card.querySelector('.addBtn').addEventListener('click', () => {
 cardinfo(item)
  });

  listCardElements.appendChild(card);
});

// -------------------------------------------------

menuListElement.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    const category = categories[i];
    hTitleElement.textContent = categoryNames[i];
    listCardElements.innerHTML = '';

    menuData[category].forEach(item => {
      const card = document.createElement('div') as HTMLDivElement;
      card.className = 'section_basket_Menu_list_main_Card';
      card.innerHTML = `
        <img src="${item.img}">
        <h2>${item.price +' ₽'}</h2>
        <p class="section_basket_Menu_list_main_Card_txtOne">${item.subtitle}</p>
        <p class="section_basket_Menu_list_main_Card_txt">${item.weight}</p>
        <button class="addBtn">Добавить</button>
      `;

      card.querySelector('.addBtn').addEventListener('click', () => {
         cardinfo(item)
      });

      listCardElements.appendChild(card);
    });
  });
});


// ----------------------------------------------------------
// Функции
function closePanelElement() {
    panel.classList.remove('show');
  setTimeout(() => {
    panel.style.display = 'none';
    body.style.overflow = '';
    body.style.pointerEvents  = 'auto';
  }, 300);
}

closeBtn.onclick = closePanelElement
// ----------------------------------------------------------
// Прибавление и убавления для корзины

 let  basketListPrice  = document.querySelector(`#basket_list_price`) as HTMLElement;
  plusBtn.onclick = () => {
 let countTwo: number = Number(countInput.value);
 countTwo++
      countInput.value = countTwo.toString()
          if (!currentItem) return;
  panelPrice.textContent = currentItem.price * countTwo + ' ₽';
  };

  minusBtn.onclick = () => {
           let countminusbtn: number = Number(countInput.value);
    if (countminusbtn > 1) {
       countminusbtn--
      countInput.value = countminusbtn.toString()
      if (!currentItem) return;
       panelPrice.textContent = currentItem.price * countminusbtn + ' ₽';
    }

  };

panelAddBtn.onclick = () => {
  const card = document.createElement('div') as HTMLElement; 
  card.className = 'basket_list_order_card';

  card.dataset.price = String(currentItem!.price);
  const price = Number((card as HTMLElement).dataset.price);
  card.innerHTML = `
    <img class="basket_list_order_card_img" src="${currentItem.img}">
    <div class="basket_list_order_card_txt">
<h2 class="basket_list_order_card_title">${currentItem.subtitle}</h2>
<p class="basket_list_order_card_subtitle_weight">${currentItem.weight}</p>
<p class="basket_list_order_card_subtitle">${currentItem.price +' ₽'}</p>
    </div>
    <div class="counter2">
      <button class="btn-minus2">−</button>
      <input type="number" class ="countsTwo" value="${countInput.value}" min="1" readonly>
      <button class="btn-plus2">+</button>
    </div>
  `;


  const input = card.querySelector('.countsTwo') as HTMLInputElement;

// ----------------------------------------------------------------
// Функция карзины
function btnBasketCod(){
  let sum = 0
    document.querySelectorAll('.basket_list_order_card').forEach(card => {
      const price = parseInt((card as HTMLElement).dataset.price!);
      const count = card.querySelector('.countsTwo') as HTMLInputElement; 
      let countbskt = Number(count.value)
      sum += price * countbskt;
})
 basketListPrice.textContent = `${sum} ₽`;
}
// ----------------------------------------------------------------
// прибавление и убавления для карточки

    let btnplusTw = card.querySelector('.btn-plus2') as HTMLButtonElement;
    btnplusTw.onclick  = () =>  {
      let counts = Number(input.value)
      counts++
       input.value = counts.toString()
btnBasketCod()
    } 

   let btnminustw = card.querySelector('.btn-minus2') as HTMLButtonElement;
    btnminustw.onclick = () => {
    if (+input.value > 1) {
            let counts = Number(input.value)
             counts--
       input.value = counts.toString()
btnBasketCod()
    }

    }

    basketContainer.appendChild(card);
  basketContainer.style.display = 'flex';


  btnBasketCod()
closePanelElement()
};
// ----------------------------------------------------------
// кнопка при который вы заказываете еду (Панель)

  let basketContainerLength = basketContainer

basketCompliteBtn.addEventListener(`click`, ()=>{
  if (basketContainerLength.children.length >0) {
      panelOrder.classList.add(`show`)
    document.body.style.overflow = 'hidden'; 
            body.style.pointerEvents  = 'none';
}
})

ordersCheckBoxs.addEventListener(`change`, ()=>{
  if (ordersCheckBoxs.checked) {
            panelOrder.classList.add('show');
            infoHouseElement.style.display = `flex`
            
  }
})

pickupCheckBoxs.addEventListener(`change`, ()=>{
if (pickupCheckBoxs.checked) {
infoHouseElement.style.display = `none`
orderCmpltBtn.style.marginTop = `92px`
}

})

// ------------------------------------------------------
// тут мы Закрываем карточку и чистим карзину

closeOrderCard.onclick = ()=>{
panelOrder.classList.remove(`show`)
  document.body.style.overflow = ''; 
  body.style.pointerEvents  = 'auto';
}

basketCleanElement.addEventListener(`click`, ()=>{
basketContainer.style.display= `none`
basketContainer.innerHTML = ``
let sum = 0
basketListPrice.textContent = ``;
})





