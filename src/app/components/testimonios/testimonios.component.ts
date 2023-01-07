import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.scss']
})
export class TestimoniosComponent implements OnInit {
  @ViewChild('slickModal')
  slickModal!: SlickCarouselComponent;
  str = 'video' as string;

  constructor() {}

  ngOnInit(): void {}

  slides: any[] = [
    {img:'/assets/comentarios.png' },
    {img:'/assets/comentarios.png' },
    {img:'/assets/comentarios.png' },
    {img:'/assets/comentarios.png' },
    {img:'/assets/comentarios.png' },
    {img:'/assets/comentarios.png' },
    {img:'/assets/comentarios.png' },
  ];
  slideConfig = {
    slidesToShow: 2,
    slidesToScroll: 1,
    // dots: true,
    infinite: false,
    nextArrow: false,
    prevArrow: false,
  };

  data = Object.values(this.slides);

  prevImg() {
    this.slickModal.slickPrev();
  }
  nextImg() {
    this.slickModal.slickNext();
  }
}
