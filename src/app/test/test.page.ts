import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  selectedId = 4;

  db = [
    {id: 1, name: 'one'}, 
    {id: 2, name: 'two'},
     {id: 3, name: 'three'}, 
     {id: 4, name: 'four'}, 
     {id: 5, name: 'five'},
     {id: 6, name: 'sex'},
     {id: 7, name: 'siven'},
     {id: 8, name: 'eignt'}]

     categories = this.db;

  constructor(private  modalController: ModalController) { }

  ngOnInit() {
  }

  onSelect(event: any) {
    if (event.detail.value) {
      this.selectedId = event.detail.value;
  }
  }

  onSearchChange(event: any){

    this.categories = this.db.filter(category => category.name.includes(event.detail.value));

  }

  onClose() {
    this.modalController.dismiss();
}

}
