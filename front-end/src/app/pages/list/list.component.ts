import { Component, OnInit } from '@angular/core';
import { faListOl, faPen, faClock, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Menu } from '../../interfaces/menu.interface';

@Component({
  selector: 'component-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
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
  faPen = faPen;
  faTrash = faTrash;
  faClock = faClock;
  faCheck = faCheck;

  constructor() { }

  ngOnInit() {
  }

}
