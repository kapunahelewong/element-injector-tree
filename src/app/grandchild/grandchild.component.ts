import { Component, OnInit } from '@angular/core';
import { FlowerService } from '../flower.service';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.scss'],
  providers: [{ provide: FlowerService, useValue: { emoji: '🌷' } }],
  viewProviders: [{ provide: AnimalService, useValue: { emoji: '🐸' } }]

})
export class GrandchildComponent implements OnInit {

  constructor(public flower: FlowerService, public animal: AnimalService) { }

  ngOnInit() {
  }

}
