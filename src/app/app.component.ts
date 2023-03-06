import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  model = [
    {
      label: '財產編號',
      name: 'assetSN',
      type: 'input',
      value: '',
      required: true
    },
    {
      label: '資產名稱',
      name: 'assetName',
      type: 'input',
      value: ''
    },
    {
      label: '部門',
      name: 'dept',
      type: 'select',
      options: [
        {key: 'dept1', label: '研發一部'},
        {key: 'dept2', label: '軟體服務部'}
      ]
    }
  ];

  ngOnInit(): void {
  }

}