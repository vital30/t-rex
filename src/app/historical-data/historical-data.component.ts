import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../_services/database/database.service';

@Component({
  selector: 'app-historical-data',
  templateUrl: './historical-data.component.html',
  styleUrls: ['./historical-data.component.css']
})
export class HistoricalDataComponent implements OnInit {
  dataSource=[];

  displayedColumns: string[] = ['id', 'access_code', 'access_days_time', 'access_detail_code', 'cards_accepted','date_last_confirmed', 'expected_date', 'fuel_type_code', 'open_date', 'owner_type_code', 'status_code', 'facility_type'];

  constructor(private databaseService: DatabaseService) { }

  ngOnInit(): void {

  this.gettableData();

  }

  gettableData(){
    this.databaseService.gettableData().subscribe(data => {
      this.dataSource = data['fuel_stations']; 
      this.dataSource.push(data['fuel_stations'][0]);
      this.dataSource.push(data['fuel_stations'][0]);
      this.dataSource.push(data['fuel_stations'][0]);
      this.dataSource.push(data['fuel_stations'][0]);
      this.dataSource.push(data['fuel_stations'][0]);
      this.dataSource.push(data['fuel_stations'][0]);
      this.dataSource.push(data['fuel_stations'][0]);
      
     },
     err=>{
      console.log(err);
    });
  }

}
