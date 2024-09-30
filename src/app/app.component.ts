import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ErrorComponent } from "./error/error.component";
import { EmailVerifyComponent } from "./email-verify/email-verify.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ErrorComponent, EmailVerifyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'figmapractice';
}
