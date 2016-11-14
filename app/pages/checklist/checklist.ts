import {Component} from '@angular/core';
import {NavController, AlertController, NavParams} from 'ionic-angular';
import {Data} from "../../providers/data/data";
import {HomePage} from '../home/home';
import {ChecklistModel} from '../../providers/checklist-model/checklist-model';


/*
 Generated class for the ChecklistPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/checklist/checklist.html',
})
export class ChecklistPage {

  public checklist:ChecklistModel;

  constructor(public navCtrl: NavController, public dataService: Data, public alertCtrl: AlertController, params: NavParams) {
    this.checklist = params.get("checklist");
  }

  addItem() {
    // console.log(checklist);
    let prompt = this.alertCtrl.create({
      title: "Add",
      message: "Enter the name",
      inputs: [
        {
          name: 'name',
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            data.checked = false;
            this.checklist.items.push(data);
            // this.checklist.items.subscribe(update => {
            //   this.save();
            // });
            this.save();
          }
        }
      ]
    });
    prompt.present();
  }

  renameItem(item) {
    let prompt = this.alertCtrl.create({
      title: "Rename",
      message: "Enter the new name",
      inputs: [
        {
          name: 'name',
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            this.checklist.renameItem(item, data.name);
          }
        }
      ]
    });
    prompt.present();
  }

  removeItem(item) {
    this.checklist.removeItem(item);
    // let index = this.checklist.items.indexOf(item);
    //
    // if(index > -1) {
    //   this.checklist.items.splice(index, 1);
    // }
  }

  uncheckItems(): void {
    //will set checked to false for all the items.

  }

  toggleItem(item): void {
    //
    // this.checklist.toggleItem(item);
    // let index = this.checklist.items.indexOf(item);
    //
    // if (index > -1) {
    //   if (item.checked == false) {
    //     this.checklist.items[index].checked = true;
    //   }
    // }

    this.checklist.items.forEach((item) => {
      if(item.checked){
        this.checklist.toggleItem(item);
      }
    })
  }

  save(): void {
    console.log("saving");
  }

}
