import { Component, ElementRef, OnInit, QueryList, ViewChildren, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-evolutions',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './evolutions.html',
  styleUrls: ['./evolutions.css']
})
export class EvolutionsComponent implements OnInit {

  @ViewChildren('animar-izquierda') elementosAAnimar!: QueryList<ElementRef>;

  constructor(private el: ElementRef) { }
  
  ngOnInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
      if (entry.isIntersecting) {
        
        entry.target.classList.add('visible');
      } else {
        
        entry.target.classList.remove('visible'); 
      }
      });
    }, { threshold: 0.2 });

    setTimeout(() => {
      const elementos = this.el.nativeElement.querySelectorAll('.animar-izquierda');
      elementos.forEach((elemento: any) => {
        observer.observe(elemento);
      });
    }, 100);
  }
  secciones: string[] = ['sec-1', 'sec-12', 'sec-2', 'sec-3', 'sec-4', 'sec-6', 'sec-7', 'sec-ia', 'sec-ocupacionales' , 'sec-8', 'sec-9', 'sec-10', 'sec-11'];
  seccionActual: number = 0;
  
  @HostListener('window:scroll')
  onScroll() {
    const scrollPosition = window.scrollY + (window.innerHeight / 2);
    
    for (let i = 0; i < this.secciones.length; i++) {
      // ... resto de tu código ...
      const element = document.getElementById(this.secciones[i]);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;
        
        // Si la mitad de la pantalla está dentro de una sección, actualizamos el índice
        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          this.seccionActual = i;
          break;
        }
      }
    }
  }
  // Función ejecutada por las flechas
  navegar(direccion: 'arriba' | 'abajo') {
    if (direccion === 'abajo' && this.seccionActual < this.secciones.length - 1) {
      this.seccionActual++;
    } else if (direccion === 'arriba' && this.seccionActual > 0) {
      this.seccionActual--;
    }
    
    // Desplazamiento suave (Animación)
    const target = document.getElementById(this.secciones[this.seccionActual]);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
}