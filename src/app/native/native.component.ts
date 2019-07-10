import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScanResult } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-native',
  templateUrl: './native.component.html',
  styleUrls: ['./native.component.scss'],
})
export class NativeComponent implements OnInit {

  code: BarcodeScanResult;

  constructor(private bs: BarcodeScanner) { }

  ngOnInit() {}

  async scann() {
    this.code = await this.bs.scan({
      disableAnimations: false,
      disableSuccessBeep: false,
      preferFrontCamera: true,
      prompt: 'Scann code',
      showFlipCameraButton: true,
      showTorchButton: true
    });
  }

}
