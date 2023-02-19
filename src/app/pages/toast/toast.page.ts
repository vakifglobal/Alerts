import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  name="Rky Ertm"
  constructor() { }

  ngOnInit() {
  }

  onCancelClick(params): void {
    console.log(params," onCancelClick")
  }

  onOkClick(params): void {
    console.log(params," onOkClick")
  }

}
