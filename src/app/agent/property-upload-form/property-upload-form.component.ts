import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PropertyUploadFormService } from 'src/app/services/property-upload-form.service';
 
@Component({
  selector: 'app-property-upload',
  templateUrl: './property-upload-form.component.html',
  styleUrls: ['./property-upload-form.component.scss']
})
export class PropertyUploadFormComponent implements OnInit {
  propertyForm!: FormGroup;
  uploadedImages: File[] = [];
  propertyTypes = ['House', 'Apartment', 'Commercial', 'Land'];
  cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami'];
  areas = ['Downtown', 'Suburbs', 'Countryside'];
  sectors = ['Sector A', 'Sector B', 'Sector C'];
  userId!: any;
 
  constructor(
    private fb: FormBuilder,
    private propertyUpload: PropertyUploadFormService
  ) {}
 
  ngOnInit(): void {
    this.propertyForm = this.fb.group({
      propertyName: ['', Validators.required],
      propertyType: ['', Validators.required],
      amount: [, [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      description: ['', Validators.required],
      city: ['', Validators.required],
      area: ['', Validators.required],
      sector: ['', Validators.required],
      address: ['', Validators.required],
      agentMobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }
 
  goBack(): void {
    window.history.back();
  }
 
  @ViewChild('fileInput') fileInput: any;
 
uploadedFilesBase64: string[] = [];
 
triggerFileInput() {
  this.fileInput.nativeElement.click(); // triggers the hidden file input
}
 
onImageUpload(event: any) {
  const files: FileList = event.target.files;
  this.uploadedFilesBase64 = []; // clear previous files if needed
 
  if (files && files.length > 0) {
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        this.uploadedFilesBase64.push(base64String);
        console.log('Base64:', base64String); // You can use this for upload or preview
      };
      reader.readAsDataURL(file); // this converts file to base64
    });
  }
}
 
  onSubmit(): void {
    // if (this.propertyForm.valid) {
      const storedUserId = localStorage.getItem('userId');
      this.userId = storedUserId !== null ? storedUserId : '';
    
      const data1 ={
        ...this.propertyForm.value,
        mediaUrls: [...this.uploadedFilesBase64],
        agentName: this.userId
      }
      console.log('Form Data:', data1);
      this.propertyUpload.uploadProperty(data1).subscribe((res)=>{
        console.log(res);
       
      })
      this.propertyForm.reset();
    // } else {
    //   alert('Please fill out all fields correctly.');
    // }
  }
}