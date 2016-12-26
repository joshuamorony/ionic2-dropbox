import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Dropbox } from '../../providers/dropbox';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	depth: number = 0;
	folders: any;

	constructor(public navCtrl: NavController, public dropbox: Dropbox, public loadingCtrl: LoadingController) {

	}

	ionViewDidLoad(){

	    this.folders = [];

	    let loading = this.loadingCtrl.create({
	      content: 'Syncing from Dropbox...'
	    });

	    loading.present();

	    this.dropbox.getFolders().subscribe(data => {
	      this.folders = data.entries;
	      loading.dismiss();
	    }, (err) => {
	      console.log(err);
	    });

	}

	ionViewDidEnter(){

		let loading = this.loadingCtrl.create({
		  content: 'Syncing from Dropbox...'
		});

		loading.present();

		this.dropbox.getFolders().subscribe(data => {
		  this.folders = data.entries;
		  loading.dismiss();
		}, (err) => {
		  console.log(err);
		});

	}

	openFolder(path){

		let loading = this.loadingCtrl.create({
		  content: 'Syncing from Dropbox...'
		});

		loading.present();

		this.dropbox.getFolders(path).subscribe(data => {
		  this.folders = data.entries;
		  this.depth++;
		  loading.dismiss();
		}, err => {
		  console.log(err);
		});

	}

	goBack(){

		let loading = this.loadingCtrl.create({
		  content: 'Syncing from Dropbox...'
		});

		loading.present();

		this.dropbox.goBackFolder().subscribe(data => {
		  this.folders = data.entries;
		  this.depth--;
		  loading.dismiss();
		}, err => {
		  console.log(err);
		});

	}

}