import { ComponentFixture } from '@angular/core/testing/index';
import { By } from '@angular/platform-browser';

export const getComponentBuilder =
    (componentFixture: ComponentFixture<any>) => <T>(selector: string) => {
        const debugElement = componentFixture.debugElement;
        return debugElement.query(By.css(selector)).componentInstance as T;
    };