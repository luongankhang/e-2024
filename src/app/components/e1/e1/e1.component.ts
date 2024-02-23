import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/models/stock.model';

@Component({
  selector: 'app-e1',
  template: `
    <h2>Stocks</h2>
    <div class="stock-container">
      <div class="name">
        {{ stock.name + ' (' + stock.code + ')' }}
      </div>
      <div
        class="price"
        [class]="
          checkPrice(stock.price, stock.previousPrice) ? 'positive' : 'negative'
        "
      >
        \${{ stock.price }}
      </div>
      <button (click)="toggleFavorite($event)" [disabled]="stock.favorite">
        {{ stock.favorite ? 'Remove from Favorite' : 'Add to Favorite' }}
      </button>
    </div>

    <h2>Favorites</h2>
    <ul>
      <li *ngFor="let favoriteStock of favoriteStocks">
        <div class="stock-container">
          <div class="name">
            {{ favoriteStock.name + ' (' + favoriteStock.code + ')' }}
          </div>
          <div
            class="price"
            [class]="
              checkPrice(favoriteStock.price, favoriteStock.previousPrice)
                ? 'positive'
                : 'negative'
            "
          >
            \${{ favoriteStock.price }}
          </div>
          <button (click)="removeFromFavorites(favoriteStock)">Remove</button>
        </div>
      </li>
    </ul>
  `,
})
export class E1Component implements OnInit {
  public stock!: Stock;
  public favoriteStocks!: Stock[];

  constructor() {}
  ngOnInit(): void {
    this.stock = {
      favorite: false,
      name: 'Test Stock Company',
      code: 'TSC',
      price: '85',
      previousPrice: '80',
    };
    this.favoriteStocks = [];
  }

  checkPrice(price: string, previousPrice: string) {
    const numericPrice = parseFloat(price);
    const numericPreviousPrice = parseFloat(previousPrice);
    return numericPrice >= numericPreviousPrice;
  }

  toggleFavorite(event: any) {
    this.stock.favorite = !this.checkPrice(
      this.stock.price,
      this.stock.previousPrice
    );

    if (!this.stock.favorite) {
      const index = this.favoriteStocks.findIndex(
        (favoriteStock) => favoriteStock.code === this.stock.code
      );
      if (index === -1) {
        this.favoriteStocks.push(this.stock);
      }
    } else {
      // const index = this.favoriteStocks.findIndex(
      //   (favoriteStock) => favoriteStock.code === this.stock.code
      // );
      // if (index !== -1) {
      //   this.favoriteStocks.splice(index, 1);
      // }

      alert('Already exist');
    }
  }

  removeFromFavorites(stock: Stock) {
    const index = this.favoriteStocks.findIndex(
      (favoriteStock) => favoriteStock.code === stock.code
    );

    if (index !== -1) {
      this.favoriteStocks.splice(index, 1);
    }
  }
}
