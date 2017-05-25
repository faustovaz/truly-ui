import {ElementRef, Input} from "@angular/core";
import {ControlValueAccessor,} from '@angular/forms';
import {ComponentCustom} from "./ComponentCustom";
import {ComponentTabIndexGenerator} from "./ComponentTabIndexGenerator";

/**
 * A constant to be used in a function that performs no operations.
 */
const noop = () => {
};

export class ComponentHasModel extends ComponentCustom implements ControlValueAccessor {
    /**
     * Controller to define if the tabulation is with key Enter or key Tab.
     * @type {boolean}
     */
    @Input() enterAsTab: boolean = true;

    public tabIndex: ComponentTabIndexGenerator;
    /**
     * Value of ngModel returned to user.
     */
    public ngValue: string = '';

    /**
     * Function that returns value of ngModel
     * @returns {string}
     */
    public get value(): any {
        return this.ngValue;
    }

    /**
     * Function that receive value to set in ngModel
     * @param v
     */
    public set value(v: any) {
        if (v !== this.ngValue) {
            this.ngValue = v;

            this.onChangeCallback(v);
        }
    }

    public setTabIndex(element: ElementRef) {
        this.tabIndex = new ComponentTabIndexGenerator(element);
        this.setNextTabIndex(this.element.nativeElement.tabIndex + 1);
        this.setPreviousTabIndex(this.element.nativeElement.tabIndex - 1);
    }

    /**
     * Callback of control value accessor to register touched changes
     */
    public onTouchedCallback: () => void = noop;

    /**
     * Callback of control value accessor to register changes
     */
    public onChangeCallback: (_: any) => void = noop;

    /**
     * Function that writes value on ngModel.
     * @param value Value received to write value on ngModel
     */
    writeValue(value: any) {
        if (value !== this.ngValue) {
            this.ngValue = value;
            this.onChangeCallback(this.ngValue)
        }
    }

    /**
     * Function that register change event on input.
     * @param callback Value received to write value on ngModel
     */
    registerOnChange(callback: any) {
        this.onChangeCallback = callback;
    }

    /**
     * Function that register touched change event on input.
     * @param callback Value received to write value on ngModel
     */
    registerOnTouched(callback: any) {
        this.onTouchedCallback = callback;
    }

    onKeyInput(event: KeyboardEvent) {
        if (this.enterAsTab) {
            if (event.keyCode === 13 || event.keyCode === 40) {
                this.nextFocus();
            } else if (event.keyCode === 38) {
                this.previousFocus();
            }
        }
    }

    previousFocus() {
        document.getElementById('tl-' + this.element.nativeElement.localName + '-' + this.previousTabIndex).focus();
    }

    nextFocus() {
        document.getElementById('tl-' + this.element.nativeElement.localName + '-' + this.nextTabIndex).focus();
    }

}