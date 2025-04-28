import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PropertyUploadFormService } from 'src/app/services/property-upload-form.service';
import { PropertyService } from 'src/app/services/property.service';

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
  propertyDetail: any;
  constructor(
    private fb: FormBuilder,
    private propertyService : PropertyUploadFormService,
    private router : Router,
        private propertyUpload: PropertyService,
  ) {}
 
  ngOnInit(): void {
    this.propertyForm = this.fb.group({
      id:[''],
      propertyName: ['', Validators.required],
      propertyType: ['', Validators.required],
      amount: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      description: ['', Validators.required],
      city: ['', Validators.required],
      area: ['', Validators.required],
      sector: ['', Validators.required],
      address: ['', Validators.required],
      agentMobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });

    this.propertyService.propertyData$.subscribe(data => {
     if(data){
      this.propertyDetail = data;
      console.log(this.propertyDetail);
      
      // Patch the form values from the data
      this.propertyForm.patchValue({
        id: data.id,
        propertyName: data.propertyName || '',
        propertyType: data.propertyType || '',
        amount: data.amount || '',
        description: data.description || '',
        city: data.city || '',
        area: data.area || '',
        sector: data.sector || '',
        address: data.address || '',
        agentMobile: data.agentMobile || ''
      });

      // Assign media (base64) to preview
      this.uploadedFilesBase64 = data.mediaUrls || [];
     }
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
      const data1 ={
        ...this.propertyForm.value,
        mediaUrls: [...this.uploadedFilesBase64],
        agentName: this.propertyDetail.userId,
        
      }
      console.log('Form Data:', data1);
      this.propertyUpload.editProperty(data1,data1.id).subscribe((res)=>{
        console.log(res);
       
      })
      this.propertyForm.reset();
      this.uploadedFilesBase64.push();
      this.router.navigate(['/admin/property-management']);
    } else {
        alert('Please fill out all fields correctly.');
    }
}
 
onCancel(): void {
  
      this.router.navigate(['/admin/property-management']);
    
}
}
