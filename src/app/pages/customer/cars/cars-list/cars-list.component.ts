import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { CarsListService } from './cars-list.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss'],
})
export class CarsListComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    this.service.getAllSales();
  }
  Sales: any[] = [];
  SalesLocalCopy: any[] = [];
  SearchValue: string;
  Value: number = 0;
  @ViewChild('digit1') digit1Ref!: ElementRef;
  @ViewChild('digit2') digit2Ref!: ElementRef;
  @ViewChild('digit3') digit3Ref!: ElementRef;
  @ViewChild('digit4') digit4Ref!: ElementRef;
  @ViewChild('digit5') digit5Ref!: ElementRef;

  updateNumberDisplay() {
    const valueAsString = this.SalesLocalCopy.length
      .toString()
      .padStart(5, '0');
    const digits = valueAsString.split('');
    this.digit1Ref.nativeElement.textContent = digits[0];
    this.digit2Ref.nativeElement.textContent = digits[1];
    this.digit3Ref.nativeElement.textContent = digits[2];
    this.digit4Ref.nativeElement.textContent = digits[3];
    this.digit5Ref.nativeElement.textContent = digits[4];
  }
  constructor(private service: CarsListService) {
    this.service.component = this;
    this.service.openHubEmitters()

  }


  searchByVinCode() {
    this.Sales = this.SalesLocalCopy.filter((x) =>
      x.vin.toLowerCase().includes(this.SearchValue.toLowerCase()),
    );
    console.log(this.Sales);
  }

  getSalesDetail(item: any) {
    this.service.getSalesDetail(item)
  }
}
