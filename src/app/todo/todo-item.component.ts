import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  constructor() {}

  @Input() Text!: string;
  @Input() Id!: number;
  @Input() Checked!: boolean;
  @Output() onCheck: EventEmitter<any> = new EventEmitter();
  @Output() onDelete: EventEmitter<any> = new EventEmitter();

  check() {
    this.onCheck.emit('');
  }

  delete() {
    this.onDelete.emit('');
  }

  ngOnInit(): void {}
}
