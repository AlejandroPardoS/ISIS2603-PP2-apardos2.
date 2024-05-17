import { Component, OnInit } from '@angular/core';
import { Nave } from '../nave';
import { NavesService } from '../naves.service';

@Component({
  selector: 'app-naves-list',
  templateUrl: './naves-list.component.html',
  styleUrls: ['./naves-list.component.css']
})
export class NavesListComponent implements OnInit {

  naves: Array<Nave> = [];
  navesRebelion: number = 0;
  navesImperio: number = 0;
  navesNeutral: number = 0;
  constructor(private navesService: NavesService) { }

  getNaves(): void {
    this.navesService.getNaves().subscribe((naves) => {
      this.naves = naves;
      this.navesService.getNavesRebelion().subscribe((navesRebelion) => {
        this.navesRebelion = navesRebelion;
      });
      this.navesService.getNavesImperio().subscribe((navesImperio) => {
        this.navesImperio = navesImperio;
      });
      this.navesService.getNavesNeutral().subscribe((navesNeutral) => {
        this.navesNeutral = navesNeutral;
      });
    });
  } 

  selectedNave!: Nave;
  selected = false;

  onSelected(nave: Nave): void {
    this.selected = true;
    this.selectedNave = nave;
  }

  ngOnInit() {
    this.getNaves();
  }

}
