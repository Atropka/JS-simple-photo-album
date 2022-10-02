# JS-simple-photo-album
_______________
## Это пример, показывающий разаработку блока простого фото-альбома с использованием JavaScript, HTML, CSS

### Основная задача: Реализация фото-альбома. Увелицение фотокарточки при наведении.
______________

```js
//Тут представлен простой код, предоставляющий функционал сайту
for (const slide of slides) {
  slide.addEventListener("mouseover", () => {
    clearActive();

    slide.classList.add("active");
  });
}

const clearActive = () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
};

function nonActive() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}

```

_________
## Результат работы сайта(Без наведения):
![resualt-1](https://sun9-82.userapi.com/impg/PVCVVpO2ExuL8Qn7n9zxj62Oi3-UGWBHTNQxpA/2k2wj1wOwms.jpg?size=1610x763&quality=96&sign=442c89a893ec7802e35eb09a0e9e1b85&type=album)
____________
## Результат работы сайта(С наведением):
![resualt-2](https://sun9-75.userapi.com/impg/3LypukYX3hUeMUNqN193xUssYaQdJPb8sGEnWA/1aS1V2aCkIs.jpg?size=1606x777&quality=96&sign=98b453d69fe9dce29a61cb3a30baf82f&type=album)
