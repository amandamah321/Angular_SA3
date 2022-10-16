import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.renderizarProdutos()
  }

  renderizarProdutos() {
    let secaoProdutos: any = document.getElementById('secao_produtos')
  
    let listaProdutos = [
      {
        nome: 'Mouse Gamer RGB',
        imagem: '/assets/img/imagegirl.png',
        descrição: 'Esse mouse tem 10.000 dpi',
        preco: 159.9
      },
  
      {
        nome: 'Teclado Gamer RGB',
        imagem: '/assets/img/imagegirl.png',
        descrição: 'Esse teclado possui Switches Blue',
        preco: 229.9
      },
  
      {
        nome: 'Headset Gamer RGB',
        imagem: '/assets/img/imagegirl.png',
        descrição: 'Esse teclado possui microfone integrado',
        preco: 199.99
      },
  
      {
        nome: 'Mousepad Gamer RGB',
        imagem: '/assets/img/imagegirl.png',
        descrição: 'Esse mousepad é top e possui leds na laterais',
        preco: 159.79
      },
  
      {
        nome: 'Mousepad Gamer RGB',
        imagem: '/assets/img/imagegirl.png',
        descrição: 'Esse mousepad é top e possui leds na laterais',
        preco: 159.79
      },
  
      {
        nome: 'Mousepad Gamer RGB',
        imagem: '/assets/img/imagegirl.png',
        descrição: 'Esse mousepad é top e possui leds na laterais',
        preco: 159.79
      },
  
      {
        nome: 'Mousepad Gamer RGB',
        imagem: '/assets/img/imagegirl.png',
        descrição: 'Esse mousepad é top e possui leds na laterais',
        preco: 159.79
      },
  
      {
        nome: 'Mousepad Gamer RGB',
        imagem: '/assets/img/imagegirl.png',
        descrição: 'Esse mousepad é top e possui leds na laterais',
        preco: 159.79
      }
    ]
  
    let template = ''
  
    for (let index = 0; index < listaProdutos.length; index++) {
      template =
        template +
        `
      <div class="card">
      <img src="${listaProdutos[index].imagem}" alt="" />
      <h3>${listaProdutos[index].nome}</h3>
      <p>${listaProdutos[index].descrição}</p>
      <p>R$ ${listaProdutos[index].preco}</p>
      <a href="#">Comprar</a>
      </div>
      `
    }
  
    secaoProdutos.innerHTML = template
  }

}
