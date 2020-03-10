import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashlist = [
    {
      itemName: "Name",
      result: "0.34",
      type:'number',
      marker:true
    },
    {
      itemName: "PPA Price Base ($)",
      result: "0.34",
      type:'number',
      marker:false
    },
    {
      itemName: "COD",
      result: "01.05.2012",
      type:'Date',
      marker:false
    },
    {
      itemName: "PPA Offtaker",
      result: "N/A",
      type:'number',
      marker:true
    },
    {
      itemName: "Project Life (Years)",
      result: "30",
      type:'number',
      marker:false
    },
    {
      itemName: "SREC Price Base",
      result: "11.20",
      type:'number',
      marker:true
    },
    {
      itemName: "EPC",
      result: "N/A",
      type:'number',
      marker:true
    },
    {
      itemName: "TAX Equty Pratner",
      result: "N/A",
      type:'number',
      marker:true
    }

  ];

  form: FormGroup;


  constructor() { }

  ngOnInit(): void {
  }

}
