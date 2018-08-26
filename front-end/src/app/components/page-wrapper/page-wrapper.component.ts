import { Component, Input } from '@angular/core';
import { Menu } from '../../interfaces/menu.interface';

@Component({
  selector: 'component-page-wrapper',
  templateUrl: './page-wrapper.component.html',
  styleUrls: ['./page-wrapper.component.scss']
})
export class PageWrapperComponent {
  @Input() menu: Menu[];
  @Input() headerOnMobile: boolean = true;
}
