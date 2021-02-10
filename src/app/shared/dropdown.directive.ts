import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    isOpen = false;
    constructor (private el: ElementRef, private renderer: Renderer2) { }
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
        //Note: we must add show to class of child element from current element by using querySelector
        let part = this.el.nativeElement.querySelector('.dropdown-menu');
        if(this.isOpen)
            this.renderer.addClass(part, 'show');
        else
            this.renderer.removeClass(part, 'show');
    }
}