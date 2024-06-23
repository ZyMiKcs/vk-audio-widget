# VK Audio Widget

## Задание

Необходимо реализовать виджет для воспроизведения аудиозаписи по макету.

### Условия:

- Минимальные версии браузеров https://caniuse.com/es6-module.
- Использовать React и MobX.
- Использовать VK UI.

### Критерии оценки:

- Результат должен быть рабочим (аудиозапись воспроизводится, ставится на паузу, UI реагирует на изменение состояния).
- Pixel Perfect.
- Чистота кода.

## О приложении

Этот проект представляет собой виджет для воспроизведения музыки с использованием VK UI и MobX для управления состоянием. Виджет позволяет пользователям просматривать список треков и воспроизводить их.

### Используемые технологии

-   **React 18**
-   **VK UI**
-   **MobX**
  
### Установка и запуск

1. Клонируйте репозиторий:
   ```
   git clone https://github.com/ZyMiKcs/vk-audio-widget.git
   cd vk-audio-widget
   ```
   
2. Установите зависимости:
   ```bash
   npm install
   ```
   
3. Запустите приложение:
   ```bash
   npm run dev
   ```
   
4. Перейдите по адресу из консоли

### Компоненты

- **TrackComponent** - компонент для отображения и управления воспроизведением отдельного трека. Использует MobX для отслеживания текущего состояния воспроизведения.

## Тестовый стенд
[*Click*](https://zymikcs.github.io/vk-audio-widget.github.io/)
