import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.sass']
})
export class SearchModalComponent implements OnInit {

  constructor() { 
  }

  @Input() showModal = false;
  @Output() closeSearchModal = new EventEmitter();

  public loadContent = false;

  public close(): void {
    this.closeSearchModal.emit();
  }

  ngOnInit(): void {}
}
