//Interfaces
import { IExperiences } from './../../../../../../../curso-angular-portfolio/src/app/modules/portfolio/interface/IExperiences.interface';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  public arrayExperience = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Java Developer',
        p: "Angulo Sistemas | Marc 2022 - Present"
      },
      text: '<p> Desde 2022, Atuo como Java Developer, Destacando me na area de back-end e front-end'
    }
  ])

}
