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
    if(this.eq?.nativeElement.style)
      this.eq!.nativeElement.style.fontFamily = this.option;
    else 
      console.log('error')

    if(this.vw?.nativeElement.style)
      this.vw!.nativeElement.style.fontFamily = this.option2;
    else 
      console.log('error')
  }

}
