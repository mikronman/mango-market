import { Component, HostListener, ElementRef, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.pageYOffset > 25) {
      let element = this.el.nativeElement.querySelector('.navigation-bar');
      this.renderer.addClass(element, 'scrolled');
    } else {
      let element = this.el.nativeElement.querySelector('.navigation-bar');
      this.renderer.removeClass(element, 'scrolled');
    }
  }
  ngOnInit() {
    const tabLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.getElementById('navbarNav');
  
    tabLinks.forEach(tabLink => {
      tabLink.addEventListener('click', () => {
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
          this.renderer.removeClass(navbarCollapse, 'show');
        }
      });
    });
  }
  
}
