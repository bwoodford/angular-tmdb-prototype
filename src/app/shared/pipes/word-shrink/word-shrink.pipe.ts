import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordShrink'
})
export class WordShrinkPipe implements PipeTransform {

  transform(value: string, length = 25): string{
    if (value.split(" ").length > length) {
      // Find nth occurence of SPACE in the string
      // SPACE will denote a word break...
      let wordIndex = value.split(" ", length).join(" ").length;
      value = value.substring(0, wordIndex);
    }
    return value + "...";
  }

}
