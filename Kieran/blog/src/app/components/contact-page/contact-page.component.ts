import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  contactForm: any;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = formBuilder.group({
      name: '',
      email: '',
      comment: '',
    });
  }

  ngOnInit(): void {}

  //Function for the send button click behaviour
  onSubmit(formVal: any) {
    console.table(formVal);

    this.contactForm.reset();

    window.alert('Thank you, we will be with you shortly');
  }
}
