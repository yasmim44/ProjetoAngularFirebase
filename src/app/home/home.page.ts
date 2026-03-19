import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';
import { Livro } from './livros.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
livros: Livro[] = [
  {
    isbn: '123',
    titulo: 'Manifesto do partido Comunista',
    sinopse: 'um livro que te elea de nivel',
    data_lancamento: '26/02/2009',
    paginas: '209',
    autor: [
      {nome: 'Yasmim Marx', email: 'yasmimmarx@gmail.com'}
    ],
    categorias: [
      {nome: 'romance'}
    ],
    editora: {nome: 'bombomproducoes', email:'bombom@hotmail.com'}
  },
  {
    isbn: '124',
    titulo: 'O Código Perdido',
    sinopse: 'uma jornada cheia de mistérios e descobertas',
    data_lancamento: '10/01/2015',
    paginas: '320',
    autor: [
      {nome: 'Carlos Silva', email: 'carlos@gmail.com'}
    ],
    categorias: [
      {nome: 'suspense'}
    ],
    editora: {nome: 'editora alfa', email:'alfa@gmail.com'}
  },
  {
    isbn: '125',
    titulo: 'Amor em Paris',
    sinopse: 'uma história romântica na cidade luz',
    data_lancamento: '14/02/2018',
    paginas: '250',
    autor: [
      {nome: 'Ana Souza', email: 'ana@gmail.com'}
    ],
    categorias: [
      {nome: 'romance'}
    ],
    editora: {nome: 'editora beta', email:'beta@gmail.com'}
  },
  {
    isbn: '126',
    titulo: 'A Última Batalha',
    sinopse: 'conflitos épicos em um mundo fantástico',
    data_lancamento: '20/07/2020',
    paginas: '410',
    autor: [
      {nome: 'Pedro Lima', email: 'pedro@gmail.com'}
    ],
    categorias: [
      {nome: 'fantasia'}
    ],
    editora: {nome: 'editora gama', email:'gama@gmail.com'}
  },
  {
    isbn: '127',
    titulo: 'Segredos do Oceano',
    sinopse: 'aventuras profundas e misteriosas',
    data_lancamento: '05/06/2017',
    paginas: '290',
    autor: [
      {nome: 'Marina Costa', email: 'marina@gmail.com'}
    ],
    categorias: [
      {nome: 'aventura'}
    ],
    editora: {nome: 'editora delta', email:'delta@gmail.com'}
  },
  {
    isbn: '128',
    titulo: 'Tecnologia do Futuro',
    sinopse: 'uma visão sobre o avanço tecnológico',
    data_lancamento: '11/11/2021',
    paginas: '180',
    autor: [
      {nome: 'Lucas Rocha', email: 'lucas@gmail.com'}
    ],
    categorias: [
      {nome: 'tecnologia'}
    ],
    editora: {nome: 'editora tech', email:'tech@gmail.com'}
  },
  {
    isbn: '129',
    titulo: 'Mistérios da Mente',
    sinopse: 'explorando o funcionamento do cérebro humano',
    data_lancamento: '03/03/2016',
    paginas: '300',
    autor: [
      {nome: 'Fernanda Alves', email: 'fernanda@gmail.com'}
    ],
    categorias: [
      {nome: 'psicologia'}
    ],
    editora: {nome: 'editora mente', email:'mente@gmail.com'}
  },
  {
    isbn: '130',
    titulo: 'Histórias do Brasil',
    sinopse: 'relatos marcantes da história brasileira',
    data_lancamento: '22/04/2010',
    paginas: '350',
    autor: [
      {nome: 'João Pereira', email: 'joao@gmail.com'}
    ],
    categorias: [
      {nome: 'historia'}
    ],
    editora: {nome: 'editora brasil', email:'brasil@gmail.com'}
  },
  {
    isbn: '131',
    titulo: 'Culinária Fácil',
    sinopse: 'receitas simples e deliciosas',
    data_lancamento: '09/09/2019',
    paginas: '150',
    autor: [
      {nome: 'Paula Mendes', email: 'paula@gmail.com'}
    ],
    categorias: [
      {nome: 'gastronomia'}
    ],
    editora: {nome: 'editora sabor', email:'sabor@gmail.com'}
  },
  {
    isbn: '132',
    titulo: 'Viagem pelo Mundo',
    sinopse: 'experiências incríveis em diversos países',
    data_lancamento: '18/12/2014',
    paginas: '275',
    autor: [
      {nome: 'Rafael Torres', email: 'rafael@gmail.com'}
    ],
    categorias: [
      {nome: 'turismo'}
    ],
    editora: {nome: 'editora viagem', email:'viagem@gmail.com'}
  },
  {
    isbn: '133',
    titulo: 'O Poder do Hábito',
    sinopse: 'como hábitos moldam nossa vida',
    data_lancamento: '01/05/2013',
    paginas: '240',
    autor: [
      {nome: 'Bruno Castro', email: 'bruno@gmail.com'}
    ],
    categorias: [
      {nome: 'autoajuda'}
    ],
    editora: {nome: 'editora vida', email:'vida@gmail.com'}
  }
]
}

