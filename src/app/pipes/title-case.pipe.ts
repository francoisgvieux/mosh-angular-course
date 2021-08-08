import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(inputText: string, ...args: unknown[]): unknown {
    if (!inputText) return ''
    
    let sentences = inputText.split('.').map(e => e.split(' ').map( (element, index) => {
        if (element=='') return null
        if (this.isProposition(element) && index) return element.toLowerCase();
        return element[0].toUpperCase() + element.substr(1).toLowerCase()
    }).join(' ')).join('.');
    
    return sentences;
  }

  private isProposition(input: string) {
    let prepositionsList: string[] = ['about', 'above', 'across', 'after', 'against', 'along', 'among', 'around', 'at',
    'because of', 'before', 'behind', 'below', 'beneath', 'beside', 'besides', 'between',
    'beyond', 'but', 'by', 'concerning', 'despite', 'down', 'during', 'except', 'excepting',
    'for', 'from', 'in', 'in front of', 'inside', 'in spite of', 'instead of', 'into',
    'like', 'near', 'of', 'off', 'on', 'onto', 'out', 'outside', 'over', 'past', 'regarding',
    'since', 'through', 'throughout', 'to', 'toward', 'under', 'underneath', 'until', 'up',
    'upon', 'up to', 'with', 'within', 'without', 'with regard to', 'with respect to', 'the']; 
    return prepositionsList.includes(input.toLowerCase());
  }

}

