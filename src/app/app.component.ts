import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `<h1>{{getPlaceholder()}}</h1>`
})
export class AppComponent {
    private placeholder:string = 'Only placeholder is implemented so far...';

    public getPlaceholder():string {
        return this.placeholder;
    }
}
