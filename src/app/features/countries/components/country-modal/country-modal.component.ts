import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, HostListener, ElementRef, Renderer2, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Country, Languages, CurrencyInfo, Name } from '../../../../core/models/country.model';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-country-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-modal.component.html',
  styleUrl: './country-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('modalAnimation', [
      state( 'void', style({ 
        opacity: 0,
        transform: 'scale(0.95) translateY(10px)'
      })),
      state('*', style({ // '*' es el estado cuando el elemento está en el DOM (*ngIf=true)
        opacity: 1,
        transform: 'scale(1) translateY(0)' // Tamaño y posición normal
      })),
      transition('void <=> *', [ // Transición entre 'void' y cualquier otro estado (y viceversa)
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)') // Duración y curva de aceleración
      ])
    ])
  ]
})
export class CountryModalComponent {
    @Input() country: Country | null = null;
    @Input() isOpen: boolean = false;
    @Output() closeModalEvent = new EventEmitter<void>();

    @HostListener('document:keydown.escape', ['$event'])
    onEscapeKeydown(event: KeyboardEvent): void {
      if (this.isOpen) {
      this.close();
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    if (!this.country) {
      console.error("CountryModalComponent: 'country' input is missing!");
    }
  }

ngOnChanges(changes: SimpleChanges): void {
        console.log('Modal ngOnChanges:', changes);
        if (changes['isOpen']) {
            console.log('isOpen cambió. Nuevo valor:', this.isOpen, 'Valor anterior:', changes['isOpen'].previousValue);
            if (this.isOpen) {
                console.log('Modal DEBERÍA ABRIRSE VISUALMENTE');
                this.renderer.setStyle(document.body, 'overflow', 'hidden');
            } else {
                console.log('Modal DEBERÍA CERRARSE VISUALMENTE');
                this.renderer.removeStyle(document.body, 'overflow');
            }
        }

        if (changes['country']) {
            console.log('Modal recibió nuevo país:', this.country);
            if (!this.country && this.isOpen) {
                console.warn("CountryModalComponent: 'country' input es null, pero isOpen es true. Esto podría ser inesperado si no se está cerrando.");
            } else if (this.country && !this.isOpen) {
                console.warn("CountryModalComponent: 'country' tiene datos, pero isOpen es false. El modal no se mostrará.");
            }
        }
    }
  close(): void {
    this.closeModalEvent.emit();
  }

  getOfficialName(name?: Name): string {
    return name?.official || 'N/A';
  }

  getNativeNames(nativeName?: { [key: string]: { official: string; common: string } }): string {
    if (!nativeName) return 'N/A';
    return Object.values(nativeName).map(n => `${n.common} (${n.official})`).join('; ');
  }

  getCurrencies(currencies?: { [key: string]: CurrencyInfo }): string {
    if (!currencies) return 'N/A';
    return Object.values(currencies).map(c => `${c.name} (${c.symbol})`).join(', ');
  }

  
  getLanguages(languages?: Languages): string {
    if (!languages) return 'N/A';
    return Object.values(languages).join(', ');
  }

  getDemonyms(demonyms?: any): string { // 'any' porque la estructura puede variar
    if (!demonyms || !demonyms.eng) return 'N/A';
    return `Fem: ${demonyms.eng.f}, Masc: ${demonyms.eng.m}`;
  }

  // Evita que el clic dentro del contenido del modal cierre el modal
  onModalContentClick(event: MouseEvent): void {
    event.stopPropagation();
  }
}
