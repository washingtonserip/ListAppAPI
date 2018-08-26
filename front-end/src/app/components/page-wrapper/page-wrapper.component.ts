import { Component, Input } from '@angular/core';
import { faListOl, faPen } from '@fortawesome/free-solid-svg-icons';
import { Menu } from '../../interfaces/menu.interface';

@Component({
  selector: 'component-page-wrapper',
  templateUrl: './page-wrapper.component.html',
  styleUrls: ['./page-wrapper.component.scss']
})
export class PageWrapperComponent {
  @Input() menu: Menu[];
  @Input() headerOnMobile: boolean = true;
  faListOl = faListOl;
  faPen = faPen;
}
