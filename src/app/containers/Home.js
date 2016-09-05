angular
  .module('app')
  .component('home', {
    templateUrl: 'app/containers/Home.html',
    controller: Home
  });

function Home() {
  console.log('Home');
}
