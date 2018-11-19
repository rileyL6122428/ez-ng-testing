import { getTestBed, ComponentFixture } from '@angular/core/testing/index';
import { Type } from '@angular/core';
import { getDOMElementBuilder } from './get-dom-element.builder';
import { getComponentBuilder } from './get-component.builder';

function wrapComponentCreation() {
    const prewrappedCreateComponent = getTestBed().createComponent;

    getTestBed().createComponent = <T>(component: Type<T>) => {
        const fixture =  prewrappedCreateComponent(component);
    
        _getDOMElement = getDOMElementBuilder(fixture);
        _getComponent = getComponentBuilder(fixture);
    
        return fixture as ComponentFixture<T>;
    };
}

export function wrapTestBed() {
    wrapComponentCreation();
}
