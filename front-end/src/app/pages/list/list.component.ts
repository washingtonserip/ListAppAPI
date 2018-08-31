import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faListOl, faPen, faClock, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ListService } from '../../services/list/list.service';
import { IList } from '../../interfaces/list.interface';
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
      onClick: () => this.router.navigate(['/panel']),
    },
    {
      text: 'New list',
      icon: faPen,
      onClick: () => this.router.navigate(['/new-list']),
      isInverted: true
    }
  ];
  error: string[] = [];
  theList: IList = {
    _user: '',
    title: '',
    text: '',
    list: [
      {
        text: '',
        isCheck: false
      }
    ]
  }
  newItem: string;
  success: string;
  faPen = faPen;
  faTrash = faTrash;
  faClock = faClock;
  faCheck = faCheck;

  constructor(
    private router: Router,
    private listService: ListService
  ) { }

  ngOnInit() {
  }

  addItem () {
    if (this.newItem) {
      this.theList.list.push({
        isCheck: false,
        text: this.newItem
      });
      this.newItem = '';
    }
  }

  validateList () {
    this.error = [];
    if (!this.theList.title) {
      this.error.push('The title is required.');
    }

    if (this.theList.list.length === 1 && this.theList.list[0].text === '') {
      this.error.push('Please enter at least one item.');
    }

    return !this.error.length;
  }

  saveList () {
    this.listService.create(this.theList)
      .subscribe(
        response => {
          this.success = 'List created successfully.';
          this.theList = response;
        },
        error => { this.error.push('An error has occurred. Try again.'); }
      );
  }
}
