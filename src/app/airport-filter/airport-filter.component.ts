import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { SubSink } from 'subsink';
import { AirportService } from '../core/airport.service';
import { Airport } from '../model/airport.model';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-airport-filter',
  templateUrl: './airport-filter.component.html',
  styleUrls: ['./airport-filter.component.scss'],
})
export class AirportFilterComponent
  implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('searchFilter') searchFilter: ElementRef;
  public airports: Airport[] = [];
  public airportsToShow: Airport[] = [];
  public dataChunk: number = 5;
  public filteredAirports: Airport[] = [];
  public filters: string[] = [];
  public searchQuery: string = '';
  public startPageIndex: number = 0;
  public endPageIndex: number = this.dataChunk;
  private _sink: SubSink = new SubSink();

  constructor(private airportService: AirportService) {}

  /**
   * Triggers when component is initialized
   */
  ngOnInit(): void {
    this._sink.add(
      this.airportService.getAirports().subscribe((airports: Airport[]) => {
        this.airports = airports;
        const filters: string[] = JSON.parse(localStorage.getItem('filters'));
        if (filters) {
          this.filters = filters;
        }
        this.filterAirports();
        if (this.filteredAirports.length === 0) {
          this.airportsToShow = [...this.airports];
          this.filteredAirports = [...this.airports];
        }
      })
    );
  }

  /**
   * Triggers when view is initialized
   */
  ngAfterViewInit(): void {
    const search = fromEvent(this.searchFilter.nativeElement, 'input').pipe(
      map((event: any) => event.target.value),
      debounceTime(1000)
    );
    this._sink.add(
      search.subscribe((searchQuery: string) => {
        this.searchQuery = searchQuery;
        this.applySearchFilter(searchQuery);
      })
    );
  }

  /**
   * Adds/removes a filter from filters array and applies filter
   * and sets filters in local storage
   * @param filter filter to be added/removed
   */
  applyFilters(filter: string): void {
    const index: number = this.findTypeIndexinFilterArray(filter);
    if (index === -1) {
      this.filters.push(filter.toUpperCase());
    } else {
      this.filters.splice(index, 1);
    }
    localStorage.setItem('filters', JSON.stringify(this.filters));
    this.filterAirports();
  }

  /**
   * Filters airports
   * Checkbox filteration will be done from airPorts array(having all the airports) and set to filteredAirports array
   * and search filteration will be done from the filteredAirports array
   */
  filterAirports(): void {
    const filteredAirports: Airport[] = this.airports.filter(
      (airport: Airport) => {
        if (this.findTypeIndexinFilterArray(airport.type) !== -1) {
          return true;
        }
        return false;
      }
    );
    this.filteredAirports = filteredAirports;
    // if no filters set
    if (this.filters.length === 0 && this.filteredAirports.length === 0) {
      this.filteredAirports = [...this.airports];
    }
    this.applySearchFilter(this.searchQuery);
  }

  /**
   * Applies search filter
   * @param searchQuery search query
   */
  applySearchFilter(searchQuery: string): void {
    searchQuery = searchQuery.toUpperCase();
    this.airportsToShow = this.filteredAirports.filter((airport: Airport) => {
      return (
        airport.name.toUpperCase().includes(searchQuery) ||
        airport.icao.toUpperCase().includes(searchQuery) ||
        airport.iata.toUpperCase().includes(searchQuery) ||
        airport.elevation.toString().toUpperCase().includes(searchQuery) ||
        airport.latitude.toString().toUpperCase().includes(searchQuery) ||
        airport.longitude.toString().toUpperCase().includes(searchQuery)
      );
    });
    this.resetPageIndexes();
  }

  /**
   * Resets page indexes
   */
  resetPageIndexes(): void {
    if (this.airportsToShow.length > 0) {
      this.startPageIndex = 0;
      if (this.airportsToShow[this.dataChunk]) {
        this.endPageIndex = this.dataChunk;
      } else {
        // if airportsToShow length is less than data chunk
        this.endPageIndex = this.airportsToShow.length;
      }
    } else {
      // set start and end index as 0
      this.startPageIndex = -1;
      this.endPageIndex = 0;
    }
  }

  /**
   * Navigates to next page of table
   */
  navigateToNextPage(): void {
    if (!(this.endPageIndex === this.airportsToShow.length)) {
      this.startPageIndex += this.dataChunk;
      if (this.airportsToShow[this.endPageIndex + this.dataChunk]) {
        this.endPageIndex += this.dataChunk;
      } else {
        this.endPageIndex = this.airportsToShow.length;
      }
    }
  }

  /**
   * Navigates to previous page of table
   */
  navigateToPreviousPage(): void {
    if (!(this.startPageIndex <= 0)) {
      if (
        this.airportsToShow.length % this.dataChunk !== 0 &&
        this.endPageIndex === this.airportsToShow.length
      ) {
        this.endPageIndex -= this.airportsToShow.length % this.dataChunk;
      } else {
        if (this.endPageIndex - this.dataChunk !== 0) {
          this.endPageIndex -= this.dataChunk;
        }
      }
      if (this.airportsToShow[this.startPageIndex - this.dataChunk]) {
        this.startPageIndex = this.startPageIndex - this.dataChunk;
      } else {
        this.startPageIndex = 0;
      }
    }
  }

  /**
   * Finds airport type in filters array
   * @param type airport type
   */
  findTypeIndexinFilterArray(type: string): number {
    const index: number = this.filters.indexOf(type.toUpperCase());
    return index;
  }

  /**
   * Unsubscribing subscriptions
   */
  ngOnDestroy(): void {
    this._sink.unsubscribe();
  }
}
