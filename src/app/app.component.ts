import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  model = [
    {
      name: 'firstName',
      type: 'input',
      value: '',
      required: true
    },
    {
      name: 'lastName',
      type: 'input',
      value: ''
    },
    {
      name: 'gender',
      type: 'select',
      value: 'm',
      options: [
        {key: 'm', label: 'Male'},
        {key: 'f', label: 'Female'}
      ]
    }
  ];

  ngOnInit(): void {
  }

}