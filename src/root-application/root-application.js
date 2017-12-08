import * as singleSpa from 'single-spa';
import 'zone.js';

singleSpa.declareChildApplication('app-1', () => import('../app1/app1.js'), hashPrefix('/app1'));
//singleSpa.declareChildApplication('app-2', () => import('../app2/app2.js'), hashPrefix('/app2'));
//singleSpa.declareChildApplication('app-3', () => import('../app3/app3.js'), hashPrefix('/app3'));
singleSpa.declareChildApplication('app-2', () => SystemJS.import('../src/app2/dist/main.bundle.js'), hashPrefix('/app2'));
singleSpa.declareChildApplication('app-3', () => SystemJS.import('../src/app3/dist/main.bundle.js'), hashPrefix('/app3'));

singleSpa.start();

function reset () {
  // call before mounting new apps e.g.
  // ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
  var r = {}
  r.__proto__ = window.Reflect
  window.Reflect = r
}

function hashPrefix(prefix) {
	return function(location) {
    reset()

		return location.hash.startsWith(`#${prefix}`);
	}
}
