import { ComponentFixture } from '@angular/core/testing/index';

export const getDOMElementBuilder = 
    (componentFixture: ComponentFixture<any>) => (selector: string) => {
        const nativeElement = componentFixture.nativeElement as HTMLElement;
        return nativeElement.querySelector(selector) as HTMLElement;
    };