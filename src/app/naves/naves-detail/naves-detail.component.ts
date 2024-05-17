import { Component, Input, OnInit } from '@angular/core';
import { Nave } from '../nave';

@Component({
  selector: 'app-naves-detail',
  templateUrl: './naves-detail.component.html',
  styleUrls: ['./naves-detail.component.css']
})
export class NavesDetailComponent implements OnInit {

  @Input() naveDetail!: Nave;

  constructor() { }

  ngOnInit() {
  }

}
