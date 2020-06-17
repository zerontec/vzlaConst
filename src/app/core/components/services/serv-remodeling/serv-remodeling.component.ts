import { Component, OnInit,AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-serv-remodeling',
  templateUrl: './serv-remodeling.component.html',
  styleUrls: ['./serv-remodeling.component.scss']
})
export class ServRemodelingComponent implements OnInit, AfterViewInit {
  cards = [
    {img: './assets/imgSliderS/remodelingA.webp'},
    {img: './assets/imgSliderS/remodelingB.webp'},
    {img: './assets/imgSliderS/remodelingC.webp'},

  ];
  slides: any = [[]];
  
  constructor(private renderer: Renderer2) { }
  
  
  chunk(arr: any, chunkSize: number) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  
  ngOnInit() {
    this.slides = this.chunk(this.cards, 3);
  }
  
  ngAfterViewInit() {
    const buttons = document.querySelectorAll('.btn-floating');
    buttons.forEach((el: any) => {
      this.renderer.removeClass(el, 'btn-floating');
      this.renderer.addClass(el, 'px-3');
      this.renderer.addClass(el.firstElementChild, 'fa-3x');
    });
  }
  }