import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  form: FormGroup = this.fb.group({
    from_name: ['',[Validators.required]],
    to_name: 'Dmytro',
    from_email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder){}
  
  async send() {
    emailjs.init('dNAgTq3eT50HcirAu');
    let response = await emailjs.send("service_1zt9ioy","template_xz0iuiw",{
      from_name: this.form.value.from_name,
      to_name: this.form.value.to_name,
      from_email: this.form.value.from_email,
      message: this.form.value.message,
      })
      alert('Message has been sent');
      this.form.reset();
    };

    reset() {
      this.form.reset();
    }
    
    // form: FormGroup = new FormControl({
    // from_name: '',
    // from_email: '',
    // message: ''
    // })

}
