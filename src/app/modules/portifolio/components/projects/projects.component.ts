import { Component, inject, signal } from '@angular/core';
//Material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
//Interface
import { IProjects } from '../header/interface/IProjects.interface';

//Enum
import { EDialogPainelClass } from '../enum/EDialogPainelClass';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  #dialog = inject(MatDialog)

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/github.png',
      alt: "Meus Projetos GitHub",
      title: 'Projetos GitHub',
      width: '100px',
      height: '51px',
      description: 'Explore alguns projetos pessoais meus desenvolvidos para portifolio.',
      links: [
        {
          name: 'Acesse meu GitHub',
          href: 'https://github.com/Johnnyv01',
        }
      ]
    }
  ]);

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPainelClass.PROJECTS
    })
  }

}
