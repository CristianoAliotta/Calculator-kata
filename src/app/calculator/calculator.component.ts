import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  @ViewChild('form') form!: FormGroup;
  result!: number

  addiction() {
    let a: number = this.form.value.firstNumber;
    let b: number = this.form.value.secondNumber;
    this.result = a + b;
  };

  subtraction() {
    let a: number = this.form.value.firstNumber;
    let b: number = this.form.value.secondNumber;
    this.result = a - b;
  };

  multiplication() {
    let a: number = this.form.value.firstNumber;
    let b: number = this.form.value.secondNumber;
    this.result = a * b;
  };

  division() {
    let a: number = this.form.value.firstNumber;
    let b: number = this.form.value.secondNumber;
    this.result = a / b;
  };

}
