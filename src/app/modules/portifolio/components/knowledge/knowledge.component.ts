import { Component, signal } from '@angular/core';

// Interface
import { IKnowledge } from '../header/interface/IknowLedge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {

  public arrayKnowledge = signal<IKnowledge[]>([

    {
      src: 'assets/icons/knowledge/java.svg',
      alt: 'Ícone de conhecimento de java',
    },
    {
      src: 'assets/icons/knowledge/spring-boot.svg',
      alt: 'Ícone de conhecimento de Spring Boot',
    },

    {
      src: 'assets/icons/knowledge/typescript.svg',
      alt: 'Ícone de conhecimento de TypeScript',
    },
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Icone de conhecimento html5'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Icone de conhecimento html5'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Icone de conhecimento html5'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Icone de conhecimento html5'
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'Icone de conhecimento html5'
    },
  ])

}
