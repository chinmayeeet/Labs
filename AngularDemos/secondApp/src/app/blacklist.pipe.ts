import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'blacklist'
})
export class BlacklistPipe implements PipeTransform {

  transform(word: string, ...args: unknown[]): any {
    var wordlist:string[]=['bad','negative','poor','worst']
    var result:string='';
    var flg:boolean = false;
    for (let i=0;i<wordlist.length;i++)
    {
      if(word==wordlist[i])
      {
        result = 'This word is prohibited'
        flg=true;
        
      }
    }
    if (flg==false)
    {
      result='This word is alright!'
    }
    return result;
  }

}
