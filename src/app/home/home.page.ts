import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { TestPage } from '../test/test.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private  modalController: ModalController) {}

  async onClick() {
    
  const modal = await this.modalController.create({ component: TestPage, backdropDismiss: false });
  await modal.present();
 
  }

}
