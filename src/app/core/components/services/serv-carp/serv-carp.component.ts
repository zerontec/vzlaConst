
import { Component, OnInit,AfterViewInit, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-serv-carp',
  templateUrl: './serv-carp.component.html',
  styleUrls: ['./serv-carp.component.scss']
})
export class ServCarpComponent implements OnInit, AfterViewInit {
  cards = [
    {img: 'assets/imagenP/piso.webp'},
    {img: 'assets/imagenP/pisob.webp'},
    {img: 'assets/imgSliderS/pisod.webp'},
    {img: 'assets/imgSliderS/pisof.webp'},
    {img: 'assets/imgSliderS/pisog.webp'},

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