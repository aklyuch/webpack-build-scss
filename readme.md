# Минимальный набор для webpack
* webpack
* scss
* handlebars

## Системные требования
* node.js
* npm

## Установка
```
git clone git@github.com:aklyuch/webpack-build-scss.git .
npm install
```

Все статичные элементы, которые не обрабатываются вебпаком, 
складываются в папку src/assets и добавляются в правило переноса в webpack.config.build.js, в patterns плагина CopyWebpackPlugin.

Dev server ссылается на эту папку (при желании можно поменять в настройках webpack.config.json)

## Запуск
* npm run dev - сервер для разработки, поддержка scss + sourceMap + шаблонизатор handelbars
* npm run build - сборка минифицированного кода в папку dist 
