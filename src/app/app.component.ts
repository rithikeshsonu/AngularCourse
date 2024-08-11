import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularBasics';
  message = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nam temporibus enim harum vel, distinctio a corrupti error, quaerat blanditiis nihil iure libero eveniet, similique voluptatibus dicta nesciunt quibusdam tempora!";
}
