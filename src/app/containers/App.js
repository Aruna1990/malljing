angular
  .module('app')
  .component('maojingApp', {
    templateUrl: 'app/containers/App.html',
    controller: App
  });

function App() {
  console.log('App');
}
