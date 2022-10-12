import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-catalog-modal',
  templateUrl: './catalog-modal.component.html',
  styleUrls: ['./catalog-modal.component.sass']
})
export class CatalogModalComponent implements OnInit {

  @Input() showModal = false;
  @Output() closeCatalogModal = new EventEmitter();

  constructor() { }

  close(): void {
    this.closeCatalogModal.emit();
  }

  ngOnInit(): void {
  }

}
