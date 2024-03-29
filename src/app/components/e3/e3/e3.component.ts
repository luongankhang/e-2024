import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Stock } from 'src/app/models/stock.model';

@Component({
  selector: 'app-e3',
  template: `<form [formGroup]="reacForm">
      <div class="form-group">
        <input
          type="text"
          id="name"
          name="name"
          formControlName="name"
          placeholder="Stock Name"
          required
          [ngClass]="{
            'ng-invalid': reacForm.get('name')?.invalid,
            'ng-valid': reacForm.get('name')?.valid
          }"
        />
        <div
          *ngIf="
            reacForm.get('name')?.invalid &&
            reacForm.get('name')?.touched &&
            check
          "
          class="text-danger"
        >
          The following element changes form green to red when it is invalid
        </div>
      </div>
      <div class="form-group">
        <input
          type="text"
          id="code"
          name="code"
          formControlName="code"
          placeholder="Code"
          required
          [ngClass]="{
            'ng-invalid': reacForm.get('code')?.invalid,
            'ng-valid': reacForm.get('code')?.valid
          }"
        />
        <div
          *ngIf="reacForm.get('code')?.invalid && reacForm.get('code')?.touched"
          class="text-danger"
        >
          The following element changes form green to red when it has been
          modified
        </div>
      </div>
      <div class="form-group">
        <input
          type="number"
          id="price"
          name="price"
          formControlName="price"
          placeholder="Price"
          required
          [ngClass]="{
            'ng-invalid': reacForm.get('price')?.invalid,
            'ng-valid': reacForm.get('price')?.valid
          }"
        />
        <div
          *ngIf="
            reacForm.get('price')?.invalid && reacForm.get('price')?.touched
          "
          class="text-danger"
        >
          The following element changes form green to red when it is visited by
          the user
        </div>
      </div>
      <div class="form-group">
        <select class="form-select" formControlName="exchange">
          <option
            *ngFor="let option of exchanges"
            [value]="option"
            [ngClass]="{
              'ng-invalid': reacForm.get('exchange')?.invalid,
              'ng-valid': reacForm.get('exchange')?.valid
            }"
          >
            {{ option }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <input type="checkbox" id="instock" name="instock" />
        <label for="instock"
          >I confirm that the information provided above is accurate!</label
        >
      </div>
      <button type="submit" class="btn" (click)="create(reacForm, $event)">
        Create
      </button>
    </form>

    <h4>Stock {{ stock | json }}</h4>`,
  styles: [
    `
      .ng-invalid {
        border-color: pink;
      }

      .ng-valid {
        border-color: lightgreen;
      }
    `,
  ],
})
export class E3Component implements OnInit {
  public reacForm!: FormGroup;
  public exchanges!: string[];
  public stock!: Stock[];
  public check!: boolean;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.exchanges = ['NYSE', 'NASDAQ', 'OTHER'];
    this.initForm();
  }

  private initForm() {
    this.reacForm = this.fb.group({
      name: ['', Validators.required],
      code: ['', Validators.required],
      price: ['', Validators.required],
      exchange: ['', Validators.required],
    });
  }

  public create(form: any, event: any) {
    if (form.valid) {
      this.stock = [
        {
          name: this.reacForm.get('name')?.value,
          code: this.reacForm.get('code')?.value,
          price: this.reacForm.get('price')?.value,
          previousPrice: this.reacForm.get('price')?.value,
          exchange: this.reacForm.get('exchange')?.value,
          favorite: false,
        },
      ];
    }
  }
}
