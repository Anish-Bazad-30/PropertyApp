import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-property-edit',
  templateUrl: './property-edit.component.html',
  styleUrls: ['./property-edit.component.scss']
})
export class PropertyEditComponent implements OnInit {
  
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
uploadedFilesBase64: string[] = [];
 
  @ViewChild('fileInput') fileInput!: ElementRef;
 
  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }
 
  onImageUpload(event: any) {
    const files: FileList = event.target.files;
 
    if (files && files.length > 0) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          const base64String = reader.result as string;
          this.uploadedFilesBase64.push(base64String);
        };
        reader.readAsDataURL(file);
      });
    }
  }
 
  isImage(fileBase64: string): boolean {
    return fileBase64.startsWith('data:image');
  }
 
  removeFile(index: number): void {
    this.uploadedFilesBase64.splice(index, 1);
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
