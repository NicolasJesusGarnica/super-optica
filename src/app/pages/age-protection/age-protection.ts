import { Component, ElementRef, OnInit, HostListener, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-age-protection',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './age-protection.html',
  styleUrls: ['./age-protection.css']
})
export class AgeProtectionComponent implements OnInit, AfterViewInit {

  secciones: string[] = ['sec-1', 'sec-2', 'sec-3', 'sec-4', 'sec-5', 'sec-6', 'sec-7', 'sec-8', 'sec-9', 'sec-10'];
  seccionActual: number = 0;

  constructor(private el: ElementRef) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible'); 
        }
      });
    }, { threshold: 0.15 });

    setTimeout(() => {
      const elementos = this.el.nativeElement.querySelectorAll('.animar-izquierda');
      elementos.forEach((elemento: any) => {
        observer.observe(elemento);
      });
    }, 100);
  }

  @HostListener('window:scroll')
  onScroll() {
    const scrollPosition = window.scrollY + (window.innerHeight / 2);
    
    for (let i = 0; i < this.secciones.length; i++) {
      const element = document.getElementById(this.secciones[i]);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          this.seccionActual = i;
          break;
        }
      }
    }
  }

  navegar(direccion: 'arriba' | 'abajo') {
    if (direccion === 'abajo' && this.seccionActual < this.secciones.length - 1) {
      this.seccionActual++;
    } else if (direccion === 'arriba' && this.seccionActual > 0) {
      this.seccionActual--;
    }
    
    const target = document.getElementById(this.secciones[this.seccionActual]);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
}