import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-padrehijo',
  templateUrl: './padrehijo.component.html',
  styleUrls: ['./padrehijo.component.css']
})
export class PadrehijoComponent implements OnInit {
@Input() userhijo= '';
  constructor() { }

  ngOnInit(): void {
  }

}
