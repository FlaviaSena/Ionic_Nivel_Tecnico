import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pessoa: any;

  constructor(private alerta: AlertController, private nav: NavController) {

  this.pessoa={
    nome:'',
    idade:0
  }

  }
async primeira(){
  console.log(this.pessoa);
  let mensagem = await this.alerta.create({
    header: 'Atenção',
    message: 'Olá, ' + this.pessoa.nome,

    buttons:[
    {text:'Ok',
    handler: () =>{
      console.log("O Botão de 'Ok' foi acionado!");
      this.enviar();
    }
    },
    {text:'Cancelar',
    handler: () =>{
      console.log("O Botão de 'Cancelar' foi acionado!");
      
    }},

    ]
  });
  await mensagem.present();
 
}
 enviar(){
  this.nav.navigateForward(["resultado",{
    "nomePessoa": this.pessoa.nome,
    "idadePessoa": this.pessoa.idade
  }]);
 }


}

