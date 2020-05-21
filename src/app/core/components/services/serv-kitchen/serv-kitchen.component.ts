import { Component, OnInit,AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-serv-kitchen',
  templateUrl: './serv-kitchen.component.html',
  styleUrls: ['./serv-kitchen.component.scss']
})


  export class ServKitchenComponent implements OnInit, AfterViewInit {
    cards = [
      {img: 'assets/imgSliderS/cocinab.webp'},
      {img: 'assets/imgSliderS/cocinac.webp'},
      {img: 'assets/imgSliderS/cocinaD.webp'},
      
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