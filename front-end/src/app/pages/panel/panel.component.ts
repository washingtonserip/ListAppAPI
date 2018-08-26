import { Component, OnInit } from '@angular/core';
import { faListOl, faPen, faClock, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Menu } from '../../interfaces/menu.interface';

@Component({
  selector: 'component-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  menu: Menu[] = [
    {
      text: 'My lists',
      icon: faListOl,
      onClick: () => {}
    },
    {
      text: 'New list',
      icon: faPen,
      onClick: () => {},
      isInverted: true
    }
  ];
  faListOl = faListOl;
  faClock = faClock;
  faCheck = faCheck;

  constructor() { }

  ngOnInit() {
  }

}
