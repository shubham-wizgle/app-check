
import { Component } from '@angular/core';
import { AppLauncher } from '@capacitor/app-launcher';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  canAccess:any = {
    GPay: '',
    PhonePe: '',
    Paytm: '',
    PayZapp: '',
    BHIM: ''
  }
  constructor() {
      this.checkList();
  }

  async checkList(){
console.log('******* start checkList **********');

    let GPay = 'com.google.android.apps.nbu.paisa.user';
    let PhonePe = 'com.phonepe.app';
    let Paytm = 'net.one97.paytm';
    let PayZapp = 'com.snapwork.hdfc';
    let BHIM = 'in.org.npci.upiapp';
    this.canAccess.GPay = await this.checkCanOpenUrl(GPay);
    console.log('GPay:', this.canAccess.GPay );

    this.canAccess.PhonePe = await this.checkCanOpenUrl(PhonePe);
    console.log('PhonePe:', this.canAccess.PhonePe );

    this.canAccess.Paytm = await this.checkCanOpenUrl(Paytm);
    console.log('Paytm:', this.canAccess.Paytm );

    this.canAccess.PayZapp = await this.checkCanOpenUrl(PayZapp);
    console.log('PayZapp:', this.canAccess.PayZapp );

    this.canAccess.BHIM = await this.checkCanOpenUrl(BHIM);
    console.log('BHIM:', this.canAccess.BHIM );

   
    console.log('******* end checkList **********');
  }

  checkCanOpenUrl = async (_url:string) => {
    try{
      const { value } = await AppLauncher.canOpenUrl({ url: _url });
      console.log('value:',_url, '->' ,value);
    return value;
    }catch(e){
      console.log(e);
    }
    return '-'
  };
}