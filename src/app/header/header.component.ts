import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  // This variable lets us decide whether to use
  // minimal logo (for mobile users) or
  // normal logo (for desktop users)
  screenWidth: number = 0;

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  // To update screenWidth when window is resized
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }
}
