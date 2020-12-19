import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  buttonText: any = { 
     text: 'Start My Free Trail',
     color: '#DF643A'
  };

  data = [

    {
      controlName: "First Name",
      valueType: "text",
      placeholder: "Enter Your First Name",
      controlType: "text",
      grid: 'col-6',
      validators: {
        required: true
      },
      autoComplete: 'nope',
      style: {
        fontSize: '14px',
        background: '#16004B',
        border: '0.5px solid #5f5e60',
        boxShadow: 'none',
        color: '#fff',
        // width: '50%'
      },
      styleLabel: {
        color: '#fff',
        fontSize: '12px',
      }
    },
    {
      controlName: "Last Name",
      valueType: "text",
      placeholder: "Enter Your Last Name",
      controlType: "text",
      grid: 'col-6',
      validators: {
        required: true
      },
      autoComplete: 'nope',
      style: {
        fontSize: '14px',
        background: '#16004B',
        border: '0.5px solid #5f5e60',
        boxShadow: 'none',
        color: '#fff',
        // width: '50%'
      },
      styleLabel: {
        color: '#fff',
        fontSize: '12px',
      }
    },
    {
      controlName: "Work Email",
      valueType: "email",
      grid: 'col-6',
      placeholder: "name@xyz.com",
      controlType: "text",
      validators: {
        required: true
      },
      autoComplete: 'nope',
      style: {
        fontSize: '14px',
        background: '#16004B',
        border: '0.5px solid #5f5e60',
        boxShadow: 'none',
        color: '#fff',
        // width: '50%'
      },
      styleLabel: {
        color: '#fff',
        fontSize: '12px',
      }
    },
    {
      controlName: "Job Title",
      placeholder: "Select Your Job Title",
      controlType: "select",
      selected: false,
      grid: 'col-6',
      validators: {
        required: true
      },
      autoComplete: 'nope',
      options: [
        {
          optionName: "10",
          value: "10"
        },
        {
          optionName: "Software Engineer",
          value: "Software Engineer"
        },
        {
          optionName: "FrontEnd Developer",
          value: "FrontEnd Developer"
        },
        {
          optionName: "Full Stack Developer",
          value: "Full Stack Developer"
        }
      ],
      style: {
        fontSize: '13px',
        background: '#16004B',
        border: '0.5px solid #5f5e60',
        boxShadow: 'none',
        color: '#6c757d',
        // width: '50%'
      },
      styleLabel: {
        color: '#fff',
        fontSize: '12px',
      }
    },
    {
      controlName: "Company",
      placeholder: "Enter Your Company Name",
      controlType: "text",
      grid: 'col-12',
      validators: {
        required: true
      },
      autoComplete: 'nope',
      style: {
        fontSize: '13px',
        background: '#16004B',
        border: '0.5px solid #5f5e60',
        boxShadow: 'none',
        color: '#6c757d',
        // width: '50%'
      },
      styleLabel: {
        color: '#fff',
        fontSize: '12px',
      }
    },
    {
      controlName: "No of Employees",
      placeholder: "Select No. Of Employees In Your Company",
      controlType: "select",
      selected: false,
      validators: {
        required: true
      },
      autoComplete: 'nope',
      style: {
        fontSize: '13px',
        background: '#16004B',
        border: '0.5px solid #5f5e60',
        boxShadow: 'none',
        color: '#6c757d',
        // width: '50%'
      },
      styleLabel: {
        color: '#fff',
        fontSize: '12px',
      },
      options: [
        {
          optionName: "10",
          value: "10"
        },
        {
          optionName: "20",
          value: "20"
        },
        {
          optionName: "50",
          value: "50"
        },
        {
          optionName: "100",
          value: "100"
        },
        {
          optionName: "200",
          value: "200"
        },
      ]
    },
    {
      controlName: "CTI Vendor",
      placeholder: "CTI Vendor",
      grid: 'col-6',
      controlType: "text",
      validators: {
        required: true
      },
      autoComplete: 'nope',
      style: {
        fontSize: '13px',
        background: '#16004B',
        border: '0.5px solid #5f5e60',
        boxShadow: 'none',
        color: '#6c757d',
        // width: '50%'
      },
      styleLabel: {
        color: '#fff',
        fontSize: '12px',
      }
    },
    {
      controlName: "CRM Vendor",
      placeholder: "CRM Vendor",
      grid: 'col-6',
      controlType: "text",
      validators: {
        required: true
      },
      autoComplete: 'nope',
      style: {
        fontSize: '13px',
        background: '#16004B',
        border: '0.5px solid #5f5e60',
        boxShadow: 'none',
        color: '#6c757d',
        // width: '50%'
      },
      styleLabel: {
        color: '#fff',
        fontSize: '12px',
      }
    },
    {
      controlName: "Phone Number",
      placeholder: "9xxxxxxxxx",
      controlType: "text",
      grid: 'col-6',
      valueType: "phone",
      validators: {
        required: true
      },
      autoComplete: 'nope',
      style: {
        fontSize: '13px',
        background: '#16004B',
        border: '0.5px solid #5f5e60',
        boxShadow: 'none',
        color: '#6c757d',
        // width: '50%'
      },
      styleLabel: {
        color: '#fff',
        fontSize: '12px',
      }
    },
    {
      controlName: "Country",
      placeholder: "Select Your Country",
      controlType: "select",
      selected: false,
      grid: 'col-6',
      validators: {
        required: true
      },
      autoComplete: 'nope',
      options: [
        {
          optionName: "India",
          value: "India"
        },
        {
          optionName: "USA",
          value: "USA"
        },
      ],
      style: {
        fontSize: '13px',
        background: '#16004B',
        border: '0.5px solid #5f5e60',
        boxShadow: 'none',
        color: '#6c757d',
        // width: '50%'
      },
      styleLabel: {
        color: '#fff',
        fontSize: '12px',
      }
    },
    {
      controlName: "CheckBox",
      valueType: "checkbox",
      placeholder: "Enter Your First Name",
      controlType: "checkbox",
      validators: {
        required: true
      },
      autoComplete: 'off',
      style: {
        marginTop: '20px',
      },
      styleLabel: {
        color: '#fff',
        fontSize: '12px',
        paddingLeft: '10px',
      },
      options: [
        {
          optionName: "I Agree To the Master Subscription Agreement.",
          value: "Please Check Terms & Conditions"
        },
      ]
    },
  ];

  constructor(
    private route: Router,
  ) { }

  ngOnInit(): void {
  }

  formInput(event) {
    if (event) {
      // this.route.navigate(['/dashboard'])
      alert("this is form data in signUp");
      console.log("this is form data", event.value);

    } else {
      return null;
    }
    console.log("this is form data in signUp", event);
  }



}
