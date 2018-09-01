import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faListOl, faPen, faClock, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Menu } from '../../interfaces/menu.interface';
import { ListService } from '../../services/list/list.service';
import { IList } from '../../interfaces/list.interface';

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
      onClick: () => this.getLists(),
    },
    {
      text: 'New list',
      icon: faPen,
      onClick: () => this.router.navigate(['/new-list']),
      isInverted: true
    }
  ];
  public lists: IList[];
  public error;
  public faListOl = faListOl;
  public faClock = faClock;
  public faCheck = faCheck;

  constructor(
    private router: Router,
    private listService: ListService
  ) { }

  ngOnInit() {
    this.getLists();
  }

  getLists () {
    this.listService.getAll()
      .subscribe(
        response => { this.lists = response; },
        error => { this.error = 'An error has occurred. Try again.'; }
      );
  }

  openList (listId) {
    this.router.navigate(['/list', listId]);
  }
}
