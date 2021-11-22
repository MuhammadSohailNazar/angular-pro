import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent {
  user: any = {
    name: 'Sohail',
    age: 30,
    location: 'London',
  };

  addProp() {
    this.user.email = "sohail@ticg.co";
  }

  changeName() {
    this.user.name = "Sohail Nazar";
  }
  changeUser(){
    this.user = {
      name: 'Msn',
      age: 20,
      location: 'Bahrain',
    };
  }
}
