import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';
import 'moment/locale/es';

@Pipe({
  name: 'moment'
})
export class MomentPipe implements PipeTransform {

  transform(value: string, operation: string, param?: any): any {
    moment.locale('es');
    switch (operation) {
      case 'Format':
        return moment(value).format(param);
      case 'Subtract':
        return moment(value).subtract(param, 'days').format('YYYY-MM-DD');
      case 'Add':
        return moment(value).add(param, 'hours').format('YYYY-MM-DD HH:mm:ss');
      case 'Diff':
        return moment(value).diff(param, 'days'); // puedes cambiar 'days' por lo que necesites
      case 'Before':
        return moment(value).isBefore(param);
      case 'After':
        return moment(value).isAfter(param);
      case 'FromNow':
        return moment(value).fromNow();
      case 'FromDate':
        return moment(value).from(moment()); // Compara con la fecha actual
      default:
        return value;
    }
  }

}
