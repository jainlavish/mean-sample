import { Component } from '@angular/core';
import { DataService } from './data.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   // Define a users property to hold our user data
   users: Array<any>;

     // Create an instance of the DataService through dependency injection
     constructor(private _dataService: DataService) {
     }

     ngOnInit() {
              // Access the Data Service's getUsers() method we defined
              this._dataService.getUsers()
              .subscribe(res => this.users = res);
     }
}
