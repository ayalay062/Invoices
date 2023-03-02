import { AbstractControl, FormControl, ValidatorFn, Validators } from '@angular/forms';


export class validation {


    static resources = {
        regularExpressions: {
            numbers: '^[0-9.]+$',
            Letters: '/^[a-z\u0590-\u05fe]+$/i',
            englishHebrew1: '^[\-\'\"\sa-zA-Zא-ת \(\)]*$',
            englishHebrew: /^[\/a-zA-Z0-9א-ת\-.:,'_\;<=>\?+!\[\]*\(\)\\\…\־\|"\s\n]*$/,
            email: /^[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{1,4}.[A-Za-z]{0,4}.[A-Za-z]{0,4}$/
        }
    }
    static validationMessages: any;






    static checkVal(valueID: any) {
        return (isNaN(valueID) || Number(valueID) <= 0 || valueID.length > 9);
    }

    static isValidID(valueID: any) {
        if (this.checkVal(valueID)) {
            return false;
        }
        var sum = 0;
        var arrChars = valueID.split('');
        //text = text.padLeft(text, '0');
        for (var i = 0; i < arrChars.length; i++) {
            var temp = Number(arrChars[i]) * ((i % 2) + 1);
            sum += Math.floor(temp / 10) + temp % 10;
        }
        return (sum % 10) === 0;
    }

    static isValidIsraeliID() {
        return (control: FormControl): { [key: string]: boolean } | null => {
            if (!control.value) {
                return null;
            }
            if (!this.isValidID(control.value)) {
                return { 'isValid': true }
            }
            return null;
        };
    }
    private idNumValidators = [
        Validators.required,
        // this.isValidID()
    ];




    getNameError(error: any, nameControle: string) {
        for (let e in error) {
            if (error[e]) {
                return validation.validationMessages.name[e];
            }
        }
    }



    static IsHebrewEmailValid() {
        return (control: FormControl): { [key: string]: boolean } | null => {
            if (!control.value) {
                return null;
            }
            var email = control.value
            const pieces = email.split('@')
            const last = pieces[pieces.length - 1]
            const pieces2 = email.split('-')
            const first = pieces2[0]
            debugger
            if (last != 'ekmd.huji.ac.il' && first != 'Grs')
                return { 'isValid': true }
            return null
        }
    }




    static phoneValidator(min: number, max: number) {      //factory function

        return (control: FormControl): { [key: string]: boolean } | null => {
            if (!control.value) {
                return null;
            }
            if (control.value.length < min || control.value.length > max) {
                return { 'phoneValidator': true }
            }
            return null;
        };
    }





}