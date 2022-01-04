import { Component, OnInit } from '@angular/core';
import {BudgetItem} from "../../shared/models/budget-item.model";
import {UpdateEvent} from "../budget-list/budget-list.component";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem);
    if (newItem.amount) {
      this.totalBudget += newItem.amount;
    }
  }

  deleteItem(item: BudgetItem) {
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    if (item.amount) {
      this.totalBudget -= item.amount;
    }
  }

  updateItem(updateEvent: UpdateEvent) {
    this.budgetItems[this.budgetItems.indexOf((updateEvent.old))] = updateEvent.new;

    if (updateEvent.old.amount) {
      this.totalBudget -= updateEvent.old.amount;
    }

    if (updateEvent.new.amount) {
      this.totalBudget += updateEvent.new.amount;
    }
  }

}
