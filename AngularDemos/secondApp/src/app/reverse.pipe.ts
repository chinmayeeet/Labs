import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(name: string, ...args: unknown[]): any {
    var res:string[] = [];
    var result:string='';
    for (let i=name.length;i>=0;i--)
    {
      
      res.push(name[i])
      
    }
    result=res.join('');
    return result;
   
  }
  
  }


