import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-property-upload',
  templateUrl: './property-upload-form.component.html',
  styleUrls: ['./property-upload-form.component.scss']
})
export class PropertyUploadFormComponent implements OnInit {
  propertyForm!: FormGroup;
  uploadedImages: File[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.propertyForm = this.fb.group({
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      city: ['', Validators.required],
      area: ['', Validators.required],
      sector: ['', Validators.required],
      address: ['', Validators.required],
      agentPhone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  onImageUpload(event: any): void {
    if (event.target.files.length > 0) {
      this.uploadedImages = Array.from(event.target.files);
      console.log('Uploaded Images:', this.uploadedImages);
    }
  }

  onSubmit(): void {
    if (this.propertyForm.valid) {
      console.log('Form Data:', this.propertyForm.value);
      alert('Property uploaded successfully!');
      this.propertyForm.reset();
    } else {
      alert('Please fill out all fields correctly.');
    }
  }
}
