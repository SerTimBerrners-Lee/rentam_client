import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  public authModal = false;
  public catalogModal = false;
  public searchModalOpen = false;

  public closeAuthModal() {
    this.authModal = false;
  }

  public searchModal() {
    this.searchModalOpen = true;
  }

  public closeSearchModal() {
    this.searchModalOpen = false;
  }

  public closeCatalogModal() {
    this.catalogModal = false;
  }

  ngOnInit(): void {
  }

}
