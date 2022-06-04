self.addEventListener('install', (event) => {
  console.log('Установлен');
});

self.addEventListener('activate', (event) => {
  console.log('Активирован');
});

self.addEventListener('fetch', (event) => {
  console.log('Происходит запрос на сервер');
});

export const register = () => {
  if ('serviceWorker' in navigator) {
    ServiceWorkerContainer.register('service-worker.js', { scope: './' }).then(function(registration) {
      console.log('Service worker зарегистрирован:', registration);
    }).catch(function(error) {
      console.log('Ошибка при регистрации service worker-а:', error);
    });
  } else {
    console.log('Текущий браузер не поддерживает service worker-ы');
  }
};