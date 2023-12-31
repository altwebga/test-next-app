# Используем официальный образ Node.js
FROM node:18

# Устанавливаем рабочую директорию в контейнере
WORKDIR /usr/src/app

# Копируем файлы package.json и package-lock.json (если существует) в рабочую директорию
COPY package*.json ./

# Устанавливаем зависимости приложения
RUN npm install

# Копируем все файлы приложения в рабочую директорию
COPY . .

# Собираем приложение
RUN npm run build

# Указываем порт, который будет использоваться приложением
EXPOSE 3000

# Запускаем приложение
CMD [ "npm", "start" ]
