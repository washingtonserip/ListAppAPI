import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  public menu: Menu[] = [
    {
      text: 'My lists',
      icon: faListOl,
      onClick: () => this.router.navigate(['/panel']),
    },
    {
      text: 'New list',
      icon: faPen,
      onClick: () => this.goToNewList(),
      isInverted: true
    }
  ];
  public error: string[] = [];
  public theList: IList;
  public listId;
  public newItem: string;
  public success: string;
  public deleteRequest: boolean;
  public faPen = faPen;
  public faTrash = faTrash;
  public faClock = faClock;
  public faCheck = faCheck;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private listService: ListService
  ) { }

  ngOnInit () {
    this.getParams();
    this.getList();
  }

  goToNewList () {
    if (this.listId) {
      this.router.navigate(['/new-list']);
    } else {
      this.newItem = undefined;
      this.listId = undefined;
      this.setListDefault();
    }
  }

  getParams () {
    this.listId = this.activatedRoute.snapshot.params.id;
  }

  getList () {
    if (this.listId) {
      this.listService.read(this.listId)
        .subscribe(
          response => {
            this.theList = response;
          },
          error => { this.error.push('An error has occurred. Try again.'); }
        );
    } else {
      this.setListDefault();
    }
  }

  setListDefault () {
    this.theList = {
      _id: '',
      _user: '',
      title: '',
      text: '',
      list: [
        {
          text: '',
          isCheck: false
        }
      ]
    };
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

  saveOrUpdate () {
    if (!this.listId) {
      this.createList();
    } else {
      this.saveList();
    }
  }

  createList () {
    this.listService.create(this.theList)
      .subscribe(
        response => {
          this.success = 'List created successfully.';
          this.theList = response;
          this.listId = response._id;
        },
        error => { this.error.push('An error has occurred. Try again.'); }
      );
  }

  saveList () {
    this.listService.update(this.listId, this.theList)
      .subscribe(
        response => {
          this.success = 'List edited successfully.';
          this.theList = response;
        },
        error => { this.error.push('An error has occurred. Try again.'); }
      );
  }

  toggleModalDeleteRequest () {
    this.deleteRequest = !this.deleteRequest;
  }

  deleteList () {
    this.listService.delete(this.listId)
      .subscribe(
        response => { this.router.navigate(['/panel']); },
        error => { this.error.push('An error has occurred. Try again.'); }
      );
  }
}
