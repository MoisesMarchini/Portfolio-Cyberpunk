import { Case } from "../app/models/case";
import { Slide } from "../app/models/slide";

export const environment = {
  cases: [
    new Case({
      title: 'Super NiceBoy',
      category: 'Game Dev',
      body: `<p>Meu primeiro jogo publicado no itch.io, feito usando Construct2.</p><p>O jogo possui a estética nostálgica dos jogos do Mário mas não se engane, é um jogo que foi feito para fazer o player passar mal de raiva por ser um rage game.</p><p>Uma boa parte dos sprites usados no jogo foram edições ou criações minhas. Ele continua no ar no itch.io e pode ser jogado diretamente pelo navegador.</p>`,
      tags:'',
      externalLinks: [
        {
          label: 'itch.io',
          url: 'https://moisesmp.itch.io/superniceboy'
        }
      ]
    }),
    new Case({
      title: 'Super NiceBoy',
      category: 'Game Dev',
      body: `<p>Meu primeiro jogo publicado no itch.io, feito usando Construct2.</p><p>O jogo possui a estética nostálgica dos jogos do Mário mas não se engane, é um jogo que foi feito para fazer o player passar mal de raiva por ser um rage game.</p><p>Uma boa parte dos sprites usados no jogo foram edições ou criações minhas. Ele continua no ar no itch.io e pode ser jogado diretamente pelo navegador.</p>`,
      tags:'',
      externalLinks: [
        {
          label: 'itch.io',
          url: 'https://moisesmp.itch.io/superniceboy'
        }
      ]
    }),
    new Case({
      title: 'Super NiceBoy',
      category: 'Game Dev',
      body: `<p>Meu primeiro jogo publicado no itch.io, feito usando Construct2.</p><p>O jogo possui a estética nostálgica dos jogos do Mário mas não se engane, é um jogo que foi feito para fazer o player passar mal de raiva por ser um rage game.</p><p>Uma boa parte dos sprites usados no jogo foram edições ou criações minhas. Ele continua no ar no itch.io e pode ser jogado diretamente pelo navegador.</p>`,
      tags:'',
      externalLinks: [
        {
          label: 'itch.io',
          url: 'https://moisesmp.itch.io/superniceboy'
        }
      ]
    }),
    new Case({
      title: 'Super NiceBoy',
      category: 'Game Dev',
      body: `<p>Meu primeiro jogo publicado no itch.io, feito usando Construct2.</p><p>O jogo possui a estética nostálgica dos jogos do Mário mas não se engane, é um jogo que foi feito para fazer o player passar mal de raiva por ser um rage game.</p><p>Uma boa parte dos sprites usados no jogo foram edições ou criações minhas. Ele continua no ar no itch.io e pode ser jogado diretamente pelo navegador.</p>`,
      tags:'',
      externalLinks: [
        {
          label: 'itch.io',
          url: 'https://moisesmp.itch.io/superniceboy'
        }
      ]
    }),
    new Case({
      title: 'Super NiceBoy',
      category: 'Game Dev',
      body: `<p>Meu primeiro jogo publicado no itch.io, feito usando Construct2.</p><p>O jogo possui a estética nostálgica dos jogos do Mário mas não se engane, é um jogo que foi feito para fazer o player passar mal de raiva por ser um rage game.</p><p>Uma boa parte dos sprites usados no jogo foram edições ou criações minhas. Ele continua no ar no itch.io e pode ser jogado diretamente pelo navegador.</p>`,
      tags:'',
      externalLinks: [
        {
          label: 'itch.io',
          url: 'https://moisesmp.itch.io/superniceboy'
        }
      ]
    }),
    new Case({
      title: 'Super NiceBoy',
      category: 'Game Dev',
      body: `<p>Meu primeiro jogo publicado no itch.io, feito usando Construct2.</p><p>O jogo possui a estética nostálgica dos jogos do Mário mas não se engane, é um jogo que foi feito para fazer o player passar mal de raiva por ser um rage game.</p><p>Uma boa parte dos sprites usados no jogo foram edições ou criações minhas. Ele continua no ar no itch.io e pode ser jogado diretamente pelo navegador.</p>`,
      tags:'',
      externalLinks: [
        {
          label: 'itch.io',
          url: 'https://moisesmp.itch.io/superniceboy'
        }
      ]
    }),
    new Case({
      title: 'Super NiceBoy',
      category: 'Game Dev',
      body: `<p>Meu primeiro jogo publicado no itch.io, feito usando Construct2.</p><p>O jogo possui a estética nostálgica dos jogos do Mário mas não se engane, é um jogo que foi feito para fazer o player passar mal de raiva por ser um rage game.</p><p>Uma boa parte dos sprites usados no jogo foram edições ou criações minhas. Ele continua no ar no itch.io e pode ser jogado diretamente pelo navegador.</p>`,
      tags:'',
      externalLinks: [
        {
          label: 'itch.io',
          url: 'https://moisesmp.itch.io/superniceboy'
        }
      ]
    }),
    new Case({
      title: 'Super NiceBoy',
      category: 'Game Dev',
      body: `<p>Meu primeiro jogo publicado no itch.io, feito usando Construct2.</p><p>O jogo possui a estética nostálgica dos jogos do Mário mas não se engane, é um jogo que foi feito para fazer o player passar mal de raiva por ser um rage game.</p><p>Uma boa parte dos sprites usados no jogo foram edições ou criações minhas. Ele continua no ar no itch.io e pode ser jogado diretamente pelo navegador.</p>`,
      tags:'',
      externalLinks: [
        {
          label: 'itch.io',
          url: 'https://moisesmp.itch.io/superniceboy'
        }
      ]
    }),
    new Case({
      title: 'Super NiceBoy',
      category: 'Game Dev',
      body: `<p>Meu primeiro jogo publicado no itch.io, feito usando Construct2.</p><p>O jogo possui a estética nostálgica dos jogos do Mário mas não se engane, é um jogo que foi feito para fazer o player passar mal de raiva por ser um rage game.</p><p>Uma boa parte dos sprites usados no jogo foram edições ou criações minhas. Ele continua no ar no itch.io e pode ser jogado diretamente pelo navegador.</p>`,
      tags:'',
      externalLinks: [
        {
          label: 'itch.io',
          url: 'https://moisesmp.itch.io/superniceboy'
        }
      ]
    }),
  ] as Case[],
  get slides(): Slide[] {
    return this.cases.map((_case, index)=>Slide.fromCase(_case, index));
  }
};
