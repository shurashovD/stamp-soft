## Приложение для заказа напитков

### AppController

Контроллер верхнего уровня. Следит за выполнением трёх этапов - выбор напитка, оплата, приготовление. Переключает роуты.
Переключает инициативу между контроллерами операций.

### ShowCaseController

Контроллер операции показа витрины. Выводит категории и продукты. Хранит выбранный продукт.

### ProductController

Контроллер операции настройки выбранного товара. Выбор вариатнта и т.д.

### PayController

Контроллер операции оплаты.

### CookController

Контроллер операции приготовления.
