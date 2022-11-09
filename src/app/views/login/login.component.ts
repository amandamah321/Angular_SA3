import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/service/login.service';
import { HomeComponent } from "../home/home.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }
  ngOnInit(): void {
  }

  userModel = new User();

  mensagem = '';

  receberDados() {
    
    this.loginService.login(this.userModel).subscribe({
      next: (response) => {
        console.log(response.body.user.name)
        localStorage.setItem("nomeUsuario", response.body.user.name)
        this.router.navigateByUrl("/")
      }, error: (msgErro) => {
        alert(msgErro.error);
        this.mensagem = msgErro.error

        if (msgErro.error == "Password is too short") {
          this.mensagem = "Senha incorreta";
        }else {
          this.mensagem = msgErro.error
        }
        
      }
    })
    
  }

}
