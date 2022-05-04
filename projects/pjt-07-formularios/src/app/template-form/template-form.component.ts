import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  user: any = {
    // nome: 'Tom',
    // email: 'tom@email.com',
    nome: null,
    email: null
  }

  address: any = {
    cep: "",
    numero: "",
    complemento: "",
    rua: "",
    bairro: "",
    cidade: "",
    estado: ""
  }

  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  onSubmit(form: any) {
    console.log(form.value)
  }
  getCep(cepNumber: string, form: any) {
    console.log(cepNumber);
    this.http.get(`http://viacep.com.br/ws/${cepNumber}/json/`).subscribe(data => {
      console.log(data);
      this.setFieldsAddress(data, form);
    });

  }

  setFieldsAddress(data: any, form: any) {
    this.address.numero = data.siafi;
    this.address.rua = data.logradouro;
    this.address.bairro = data.bairro;
    this.address.cidade = data.localidade;
    this.address.estado = data.uf;
    this.address.complemento = data.complemento;

  }
}
