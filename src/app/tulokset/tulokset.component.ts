import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tulokset',
  templateUrl: './tulokset.component.html',
  styleUrls: ['./tulokset.component.css']
})

export class TuloksetComponent implements OnInit {
  @Input() supersankari: string;
  @Input() nimi: string;

  tuloslista: any[];

  labels = [];
  datasets = [{
    data: [],
    label: ''
  }];
  options = {
    maintainAspectRatio: false,
    scales: { yAxes: [{ ticks: { beginAtZero: true } }] }
  };

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.paivitaTulokset();
  }

  // ngDoCheck() {
  //   this.paivitaTulokset();
  // }

  public paivitaTulokset() {
    this.dataService.haeTulokset().then((response) => {
      this.asetaTulokset(response.json());
    });
  }

  private asetaTulokset(tulokset) {
    // this.tuloslista = [];
    // console.log(tulokset);
    // for (let t in tulokset) {
    //   this.tuloslista.push([t, tulokset[t]]);
    // }
    // console.log(this.tuloslista);
    //

    let newLabels: string[] = [];
    let newData: number[] = [];
    for (let k in tulokset) {
      this.labels.push(k);
      newLabels.push(k);
      newData.push(tulokset[k]);
    }
    this.labels = newLabels;
    //this.labels = [];
    this.datasets = [
      {data: newData, label: "Suosikit"}
    ];
  }
}
