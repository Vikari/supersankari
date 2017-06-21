import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-lomake',
  templateUrl: './lomake.component.html',
  styleUrls: ['./lomake.component.css']
})
export class LomakeComponent implements OnInit {
  nimi: string;
  supersankari: string;
  vaihtoehdot: string[] = [
    'Hessukka',
    'Wonder Woman',
    'Batmobil'
    ];

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

/*  painallus() {
    this.teksti = this.teksti + 'ÖL';
  }*/

  @Output() valmis = new EventEmitter<any>();

  laheta() {
    this.valmis.emit({
      nimi: this.nimi,
      supersankari: this.supersankari,
    });
  }

  tyhjenna() {
    this.dataService.tyhjenna();
  }
}
