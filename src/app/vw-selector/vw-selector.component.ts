import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VeganWitchesComponent } from '../vegan-witches/vegan-witches.component';

export interface VWData {
  t: number,
  ts: number,
  b: number,
  bs: number
}

@Component({
  selector: 'app-vw-selector',
  templateUrl: './vw-selector.component.html',
  styleUrls: ['./vw-selector.component.scss']
})
export class VwSelectorComponent {

  @ViewChild("CUSTOM") VWC !: VeganWitchesComponent;

  @Input() options !: string[];

  @Input() t !: FormControl;
  @Input() ts !: FormControl;
  @Input() b !: FormControl;
  @Input() bs !: FormControl;

  @Output() remove: EventEmitter<any> = new EventEmitter();

  constructor() { 
  }
  
  updateFont(top: boolean, value: any)
  {
    if(top)
      this.VWC.setUpper(this.options[value]);
    else
      this.VWC.setLower(this.options[value]);
  }

  updateSize(top: boolean, value: number | null) {
    value = value ?? 0;

    if(top)
      this.VWC.setSizeUpper(value + "px");
    else
      this.VWC.setSizeLower(value + "px");
  }

  formatLabel(value: number) {
    return value + 'px';
  }
}
