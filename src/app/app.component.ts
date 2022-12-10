import { Component } from '@angular/core';
import { Candidate } from './candidate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TemplateDrivenFormSecond';

  companies = ['JP Morgan', 'Virtusa', 'Citi', 'HSBC'];

  candidateModel = new Candidate('Rohan','rohan@gmail.com', 55555555,
                    'JP Morgan','Kolkata',true);
}
