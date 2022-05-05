import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address } from '../models/address.model';
import { User } from '../models/User.model';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {

  user!: User;
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      address: this.formBuilder.group({
        cep: [null, [Validators.required]],
        numero: [null, [Validators.required]],
        complemento: [null, [Validators.required]],
        rua: [null, [Validators.required]],
        bairro: [null, [Validators.required]],
        cidade: [null, [Validators.required]],
        estado: [null, [Validators.required]],
      })




    });
  }



  onSubmit() {
    console.log(this.form);
    this.http.post(`https://httpbin.org/post`, JSON.stringify(this.form.value)).subscribe(res => {
    }, (error: any) => {
      console.log(error)
    });

    
  }

  getCepRequest(){
    console.log(this.form.value.address.cep)
    this.http.get(`https://viacep.com.br/ws/${this.form.value.address.cep}/json/`).subscribe(data => {
      console.log(data);
      this.setAddressFields(data);
    });
  }

  fieldVerify(field: string) {
    return this.form.get(field)?.invalid && this.form.get(field)?.touched;
  }

  setAddressFields(data: Address) {

    this.form.patchValue({
      address: {
        numero: data.siafi,
        complemento: data.complemento,
        rua: data.logradouro,
        bairro: data.bairro,
        cidade: data.localidade,
        estado: data.uf,
      }
    });
  }
}
