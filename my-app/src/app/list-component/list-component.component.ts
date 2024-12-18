import { Component, OnInit } from '@angular/core';

interface Option {
  label: string;
  checked: boolean;
}

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss']
})
export class ListComponentComponent implements OnInit {
  showDropdown = false;
  showSteps = false;
  // showDropdown = true;
  // showSteps = true;
  items = [
    { id: 1, name: 'Продажи', selected: false },
    { id: 2, name: 'Сотрудники', selected: false },
    { id: 3, name: 'Партнёры', selected: false },
    { id: 4, name: 'Ивент', selected: false },
    { id: 5, name: 'Входящие обращения', selected: false }
  ];
  steps = [
    { id: 1, name: 'Неразобранное', color: '#99ccfd', selected: true },
    { id: 2, name: 'Переговоры', color: '#ffff99', 
    selected: false },
    { id: 3, name: 'Принимают решение', 
    color: '#ffcc66',
    selected: false },
    { id: 4, name: 'Успешно', 
    color: '#ccff66', 
    selected: false }
  ]

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  toggleSteps() {
    this.showSteps = !this.showSteps;
  }

  onSelect(item: any) {
    item.selected = !item.selected;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
