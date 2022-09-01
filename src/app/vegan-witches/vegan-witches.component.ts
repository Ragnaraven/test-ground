import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-vegan-witches',
  templateUrl: './vegan-witches.component.html',
  styleUrls: ['./vegan-witches.component.scss']
})
export class VeganWitchesComponent implements AfterViewInit {

  @Input() option: string = 'Sans';
  @Input() option2: string = 'Sans';

  @ViewChild("EQ") eq: ElementRef | undefined;
  @ViewChild("VW") vw: ElementRef | undefined;

  constructor() {    }

  ngAfterViewInit(): void {
    this.setUpper(this.option);
    this.setLower(this.option2);
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
    if(this.eq?.nativeElement.style)
      this.eq!.nativeElement.style.fontSize  = size;
    else 
      console.log('error')
  }

  setSizeLower(size: string) {
    if(this.vw?.nativeElement.style)
      this.vw!.nativeElement.style.fontSize  = size;
    else 
      console.log('error')
  }

}
