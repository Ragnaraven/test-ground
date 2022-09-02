import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-vegan-witches',
  templateUrl: './vegan-witches.component.html',
  styleUrls: ['./vegan-witches.component.scss']
})
export class VeganWitchesComponent implements AfterViewInit {

  @Input() option: string = 'Sans';
  @Input() option2: string = 'Sans';
  @Input() optionSize: string = '12px';
  @Input() option2Size: string = '24px';

  @ViewChild("EQ") eq: ElementRef | undefined;
  @ViewChild("VW") vw: ElementRef | undefined;

  constructor() {    }

  ngAfterViewInit(): void {    
    this.setUpper(this.option);
    this.setLower(this.option2);
    this.setSizeUpper(this.optionSize);
    this.setSizeLower(this.option2Size);
  }

  setUpper(font: string) {
    this.option = font;
    if(this.eq?.nativeElement.style)
      this.eq!.nativeElement.style.fontFamily = this.option;
    else 
      console.log('error')

  }

  setLower(font: string) {
    this.option2 = font;
    if(this.vw?.nativeElement.style)
      this.vw!.nativeElement.style.fontFamily = this.option2;
    else 
      console.log('error')

  }

  setSizeUpper(size: string) {   
    this.optionSize = size; 
    if(this.eq?.nativeElement.style)
      this.eq!.nativeElement.style.fontSize  = size;
    else 
      console.log('error')
  }

  setSizeLower(size: string) {
    this.option2Size = size; 
    if(this.vw?.nativeElement.style)
      this.vw!.nativeElement.style.fontSize  = size;
    else 
      console.log('error')
  }

}
