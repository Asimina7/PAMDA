import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IButtonGroupEventArgs } from 'igniteui-angular';
import { GamesService } from '../services/games.service';
import { Payment } from './payment.model';
import { Register } from './register.model';

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



    register: Register = new Register();
    payment: Payment = new Payment();

    //account
    successful_reg: any;
    message1: any;

    //payment
    successful_pay: any;
    message2:any;


  constructor(private services:GamesService) { }

  ngOnInit(): void {
  }


  onSubmit1(){
    this.services.postDataReg(this.register).subscribe({

        next: data => this.successful_reg = data,
  
        error: err => this.message1 = err,
  
        complete: () => this.message1 = "Register successful"
        
  
      });
      console.log(this.message1)
      console.log(this.register)
    //   if(this.successful_reg !=null){
    //      alert(this.message1)
        
    //   }
      if(this.successful_pay==undefined || this.successful_pay !=null){
        alert("Register successful")
        
      }
  }

  onSubmit2(){
    this.services.postDataPay(this.payment).subscribe({

        next: data => this.successful_pay = data,
  
        error: err => this.message2 = err,
  
        complete: () => this.message2 = "Payment successful"
        
  
      });
      console.log(this.message2)
      console.log(this.payment)
    //   if(this.successful_pay !=null){
    //     alert(this.message2)
        
    //   }
      if(this.successful_pay==undefined || this.successful_pay !=null){
        alert("Payment successful")
        
      }
}
}
