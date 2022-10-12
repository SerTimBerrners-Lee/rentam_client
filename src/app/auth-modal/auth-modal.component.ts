import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.sass']
})
export class AuthModalComponent implements OnInit {

  constructor() { }

  @Input() authModal: boolean = false;

  @Output() closeAuthModal = new EventEmitter();

  public close(): void {
    this.closeAuthModal.emit();
  }

  ngOnInit(): void {
  }

}
