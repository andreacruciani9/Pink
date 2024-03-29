import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @ViewChild('navbarNavDropdown') dropdownMenu!: ElementRef;

  constructor(private renderer: Renderer2) {}

  toggleDropdown(event: MouseEvent, isOpen: boolean): void {
    const dropdownElement = this.dropdownMenu.nativeElement;
    const parentElement = (event.target as HTMLElement).closest('.dropdown');

    if (isOpen) {
      this.renderer.addClass(dropdownElement, 'show');
      if (parentElement) {
        // Assicurati che il menu a discesa sia visibile
        this.renderer.addClass(
          parentElement.querySelector('.dropdown-menu'),
          'show'
        );
      }
    } else {
      this.renderer.removeClass(dropdownElement, 'show');
      if (parentElement) {
        // Nasconde il menu a discesa
        this.renderer.removeClass(
          parentElement.querySelector('.dropdown-menu'),
          'show'
        );
      }
    }
  }
}
