import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-property-edit-form',
  templateUrl: './property-edit-form.component.html',
  styleUrls: ['./property-edit-form.component.scss'],
})
export class PropertyEditFormComponent  implements OnInit {
  propertyForm!: FormGroup;
  uploadedImages: File[] = [];
  propertyTypes = ['House', 'Apartment', 'Commercial', 'Land'];
  cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami'];
  areas = ['Downtown', 'Suburbs', 'Countryside'];
  sectors = ['Sector A', 'Sector B', 'Sector C'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.propertyForm = this.fb.group({
      propertyName: ['', Validators.required],
      propertyType: ['', Validators.required],
      amount: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      description: ['', Validators.required],
      city: ['', Validators.required],
      area: ['', Validators.required],
      sector: ['', Validators.required],
      address: ['', Validators.required],
      agentMobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  goBack(): void {
    window.history.back();
  }

  uploadImages(): void {
    document.getElementById('images')?.click();
  }

  onImageUpload(event: any): void {
    if (event.target.files.length > 0) {
      this.uploadedImages = Array.from(event.target.files);
      console.log('Uploaded Images:', this.uploadedImages);
    }
  }
  onSave(): void {
    if (this.propertyForm.valid) {
        console.log('Form Data:', this.propertyForm.value);
        alert('Property details saved successfully!');
        this.propertyForm.reset();
    } else {
        alert('Please fill out all fields correctly.');
    }
}

onCancel(): void {
    if (confirm('Are you sure you want to cancel?')) {
        this.propertyForm.reset();
    }
}
}


