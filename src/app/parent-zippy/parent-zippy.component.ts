import { Component } from '@angular/core';
import { TitleCasePipe } from "../title-case.pipe";
import { ZippyComponent } from "../zippy/zippy.component";

@Component({
    selector: 'app-parent-zippy',
    standalone: true,
    templateUrl: './parent-zippy.component.html',
    styleUrl: './parent-zippy.component.css',
    imports: [TitleCasePipe, ZippyComponent]
})
export class ParentZippyComponent {
    opened(msg: string) {
        setTimeout(() => {
            alert('Ng-content Opened and Visible' + msg);
        },200);
    }
    closed( msg: string) {
        setTimeout(() => {
            alert('Ng-content Closed and Not Visible Click once more to see the content' + msg);
        },200);
    }

}
