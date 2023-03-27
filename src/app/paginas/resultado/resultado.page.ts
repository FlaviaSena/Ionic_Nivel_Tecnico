import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.page.html',
  styleUrls: ['./resultado.page.scss'],
})
export class ResultadoPage implements OnInit {

  nome: string;
  idade: number;
  situacao: string;

  constructor(private rota: ActivatedRoute) { 
    this.nome="";
    this.idade=0;
    this.situacao="";
  }

  ngOnInit() {
    this.nome = this.rota.snapshot.params["nomePessoa"];
    this.idade = this.rota.snapshot.params["idadePessoa"];

    console.log("Nome: "+this.nome);
    console.log("Idade: "+this.idade);

    if(this.idade >= 18){
      this.situacao = "Maior de idade";
    } else{
      this.situacao = "Menor de idade";
    }
    console.log("Situação: "+this.situacao);
  }

  

}
