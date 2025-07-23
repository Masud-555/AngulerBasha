import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-cashier',
  standalone: false,
  templateUrl: './add-cashier.html',
  styleUrl: './add-cashier.css'
})
export class AddCashier implements OnInit{

  
form!: FormGroup;
  grandTotal: number = 0;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      items: this.fb.array([]),
    });

    this.addItem(); // Start with one row
  }

  get items(): FormArray {
    return this.form.get('items') as FormArray;
  }

  addItem(): void {
    const itemGroup = this.fb.group({
      itemName: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      price: [0, [Validators.required, Validators.min(0)]],
    });
    this.items.push(itemGroup);
    this.calculateGrandTotal();
  }

  removeItem(index: number): void {
    this.items.removeAt(index);
    this.calculateGrandTotal();
  }

  updateTotal(index: number): void {
    this.calculateGrandTotal();
  }

  getItemTotal(index: number): number {
    const item = this.items.at(index).value;
    return item.quantity * item.price;
  }

  calculateGrandTotal(): void {
    this.grandTotal = this.items.controls.reduce((sum, item) => {
      const val = item.value;
      return sum + (val.quantity * val.price);
    }, 0);
  }
}
