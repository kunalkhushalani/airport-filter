import { Pipe, PipeTransform } from '@angular/core';
import { Airport } from './model/airport.model';

@Pipe({
  name: 'sliceAirports',
})
export class SliceAirportsPipe implements PipeTransform {
  transform(
    airPorts: Airport[],
    startIndex: number,
    endIndex: number
  ): Airport[] {
    if (airPorts[startIndex] && airPorts[endIndex - 1]) {
      return airPorts.slice(startIndex, endIndex);
    }
    return airPorts;
  }
}
