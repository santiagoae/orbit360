import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.scss'],
})
export class PlanesComponent implements OnInit {
  @ViewChild('slickModal')
  slickModal!: SlickCarouselComponent;
  str = 'video' as string;

  constructor() {}

  ngOnInit(): void {}

  slides: any[] = [
    {
      title: 'PLAN BASIC',
      description: [
        { 
          icon: 'fa-solid fa-video', 
          item: 'Videos ilimitados' 
        },
        {
          icon: 'fa-solid fa-bezier-curve',
          item: 'Diseño marco personalizado',
        },
        {
          icon: 'fa-solid fa-lightbulb',
          item: '2 luces led',
        },
        {
          icon: 'fa-solid fa-person',
          item: '1 Operario',
        },
        {
          icon: 'fa-solid fa-envelopes-bulk',
          item: 'Descarga por QR e E-mail',
        },
      ],
      linkButton: 'https://wa.link/7luy06',
    },
    ////////////////////////////////////// otro item
    {
      title: 'PLAN TOP',
      description: [
        { 
          icon: 'fa-solid fa-video', 
          item: 'Videos ilimitados' 
        },
        {
          icon: 'fa-solid fa-bezier-curve',
          item: 'Diseño marco personalizado',
        },
        {
          icon: 'fa-solid fa-lightbulb',
          item: '4 luces led',
        },
        {
          icon: 'fa-solid fa-person',
          item: '2 Operario',
        },
        {
          icon: 'fa-solid fa-envelopes-bulk',
          item: 'Descarga por QR e E-mail',
        },
        {
          icon: 'fa-solid fa-hard-drive',
          item: 'Máquina burbujas y humo',
        },
        {
          icon: 'fa-solid fa-money-bill-wheat',
          item: 'Money gun',
        },
      ],
      linkButton: 'https://wa.link/lvt7oq',
    },
    ////////////////////////////////////// otro item
    {
      title: 'PLAN BRANDS',
      description: [
        { 
          icon: 'fa-solid fa-caret-up', 
          item: 'Plan top +' 
        },
        {
          icon: 'fa-solid fa-file-video',
          item: 'Video opening',
        },
        {
          icon: 'fa-solid fa-photo-film',
          item: 'Video ending',
        },
        {
          icon: 'fa-solid fa-clapperboard',
          item: 'Marco video',
        },
        {
          icon: 'fa-solid fa-comment-dots',
          item: 'animado',
        },
      ],
      linkButton: 'https://wa.link/en2laf',
    },
    
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
