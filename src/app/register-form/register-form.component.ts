import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IButtonGroupEventArgs } from 'igniteui-angular';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterFormComponent implements OnInit {


  public orientation = 'horizontal';
    public titlePosition = 'bottom';
    public stepperOrientations: any[] = [
        {
            label: 'Horizontal', orientation: 'horizontal',
            selected: this.orientation === 'horizontal', togglable: true
        },
        {
            label: 'Vertical', orientation: 'vertical',
            selected: this.orientation === 'vertical', togglable: true
        }
    ];

    public stepperTitlePositions: any[] = [
        {
            label: 'Bottom', titlePosition: 'bottom',
            selected: this.titlePosition === 'bottom', togglable: true
        },
        {
            label: 'Top', titlePosition: 'top',
            selected: this.titlePosition === 'top', togglable: true
        },
        {
            label: 'End', titlePosition: 'end',
            selected: this.titlePosition === 'end', togglable: true
        },
        {
            label: 'Start', titlePosition: 'start',
            selected: this.titlePosition === 'start', togglable: true
        }
    ];

    public toggleOrientation(event: IButtonGroupEventArgs): void {
        this.orientation = this.stepperOrientations[event.index].orientation;
    }

    public toggleTitlePosition(event: IButtonGroupEventArgs): void {
        this.titlePosition = this.stepperTitlePositions[event.index].titlePosition;
    }



  constructor() { }

  ngOnInit(): void {
  }

}
