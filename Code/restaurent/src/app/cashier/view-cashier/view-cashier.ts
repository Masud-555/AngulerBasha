import { Component } from '@angular/core';
import { Cashier } from '../../../model/cashier.model';

@Component({
  selector: 'app-view-cashier',
  standalone: false,
  templateUrl: './view-cashier.html',
  styleUrl: './view-cashier.css'
})
export class ViewCashier {


  cashierList: Cashier[] = [];

  get grandTotal(): number {
    return this.cashierList.reduce((sum, item) => sum + item.total, 0);
  }

  exportToCSV(): void {
    const csvRows = [
      ['Item Name', 'Quantity', 'Price', 'Total'],
      ...this.cashierList.map(c => [
        c.itemName, c.quantity, c.price, c.total
      ]),
      ['', '', 'Total', this.grandTotal]
    ];

    const csvContent = csvRows.map(e => e.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);

    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'cashier-data.csv';
    anchor.click();

    window.URL.revokeObjectURL(url);
  }

}
