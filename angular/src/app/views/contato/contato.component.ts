import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/contato';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contatoModel = new Contato("", "", "", "")

  onSubmit() {
      console.log(this.contatoModel);
  }
}
