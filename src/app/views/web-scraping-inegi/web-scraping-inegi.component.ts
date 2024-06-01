import { Component, OnInit } from '@angular/core';
import { WebScrapingInegiService } from './services/web-scraping-inegi.services';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Entities } from './interfaces/entities.interfaces';

@Component({
  selector: 'app-web-scraping-inegi',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './web-scraping-inegi.component.html',
  styleUrl: './web-scraping-inegi.component.css'
})
export class WebScrapingInegiComponent implements OnInit {

  formEntity!: FormGroup;

  data: any;

  view_entity_data: boolean = false;

  entities: any[] = [
    { id: '01', name: 'Aguascalientes' },
    { id: '02', name: 'Baja California' },
    { id: '03', name: 'Baja California Sur' },
    { id: '04', name: 'Campeche' },
    { id: '05', name: 'Coahuila' },
    { id: '06', name: 'Colima' },
    { id: '07', name: 'Chiapas' },
    { id: '08', name: 'Chihuahua' },
    { id: '09', name: 'Ciudad de México' },
    { id: '10', name: 'Durango' },
    { id: '11', name: 'Guanajuato' },
    { id: '12', name: 'Guerrero', },
    { id: '13', name: 'Hidalgo' },
    { id: '14', name: 'Jalisco' },
    { id: '15', name: 'México' },
    { id: '16', name: 'Michoacán' },
    { id: '17', name: 'Morelos' },
    { id: '18', name: 'Nayarit' },
    { id: '19', name: 'Nuevo León' },
    { id: '20', name: 'Oaxaca' },
    { id: '21', name: 'Puebla' },
    { id: '22', name: 'Querétaro' },
    { id: '23', name: 'Quintana Roo' },
    { id: '24', name: 'San Luis Potosí' },
    { id: '25', name: 'Sinaloa' },
    { id: '26', name: 'Sonora' },
    { id: '27', name: 'Tabasco' },
    { id: '28', name: 'Tamaulipas' },
    { id: '29', name: 'Tlaxcala' },
    { id: '30', name: 'Veracruz' },
    { id: '31', name: 'Yucatán' },
    { id: '32', name: 'Zacatecas' }
  ]

  constructor(
    private webScrapingInegiService: WebScrapingInegiService,
    private fb: FormBuilder
  ) { }
  
  ngOnInit(): void {
    this.consultGeneralCountryData();
    this.createFormEntity()
    this.view_entity_data = true;
  }

  createFormEntity() {
    this.formEntity = this.fb.group({
      state: ['']
    });
  }

  consultGeneralCountryData() {
    this.webScrapingInegiService.getGeneralCountryData().subscribe({
      next: (data) => {
        this.data = data;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  consultDataByState(state: string) {
    this.webScrapingInegiService.getDataByState(state).subscribe({
      next: (data) => {
        this.data = data;
        console.log(this.data);
      },
      error: (error) => {
        console.log(error);
      }
    })
    this.view_entity_data = false;
  }

}
