if ('serviceWorker' in navigator) {
    console.log('checking for sw')
    window.addEventListener('load', function() {
      console.log('inside load')
      navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
  