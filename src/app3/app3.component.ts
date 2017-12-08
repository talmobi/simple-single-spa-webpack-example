import {Component, NgZone, Inject} from '@angular/core';

@Component({
	selector: 'app3',
	template: `
		<div style="margin-top: 100px;">
			This was rendered by App3 which is written in Angular
		</div>
	`,
})
export class App3 {
}

window.addEventListener( 'click', function () {
  console.log( 'app3 clicked' )
} )
