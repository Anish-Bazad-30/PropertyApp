import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PropertyUploadFormService } from 'src/app/services/property-upload-form.service';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-post-property-form',
  templateUrl: './post-property-form.component.html',
  styleUrls: ['./post-property-form.component.scss'],
})
export class PostPropertyFormComponent  implements OnInit {

  propertyForm!: FormGroup;
  uploadedImages: File[] = [];
  propertyTypes = ['House', 'Apartment', 'Commercial', 'Land'];
  cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami'];
  areas = ['Downtown', 'Suburbs', 'Countryside'];
  sectors = ['Sector A', 'Sector B', 'Sector C'];
   propertyTypesOption = ['SALE', 'RENT', 'LEASE'];
  
  userName!: any;
 
  constructor(
    private fb: FormBuilder,
    private propertyUpload: PropertyUploadFormService,
    private router : Router,
     private storageService: StorageService,
  ) {}
 
  async ngOnInit(){
    this.propertyForm = this.fb.group({
      propertyName: ['', Validators.required],
      propertyType: ['', Validators.required],
      option: ['', Validators.required],
      amount: [, [Validators.required, Validators.pattern('^[0-9]+$'),Validators.minLength(1),
        Validators.maxLength(10)]],
      description: ['', Validators.required],
      city: ['', Validators.required],
      area: ['', Validators.required],
      sector: ['', Validators.required],
      address: ['', Validators.required],
      agentMobile: ['', [Validators.required, Validators.pattern('^[0-9]+$'),Validators.minLength(10),
        Validators.maxLength(10)]]
    });

    const userName = await this.storageService.getPreference('userName');
    this.userName = userName || '';
    console.log('User ID:', this.userName);
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
  
  onSubmit(): void {
    // if (this.propertyForm.valid) {
      // const storedUserId = localStorage.getItem('userId');
      // this.userId = storedUserId !== null ? storedUserId : '';
      
      const data1 ={
        ...this.propertyForm.value,
        mediaUrls: [...this.uploadedFilesBase64],
        agentName: this.userName
      }
      console.log('Form Data:', data1);
      this.propertyUpload.uploadProperty(data1).subscribe((res)=>{
        console.log(res);
        this.router.navigate(['user/list-property']);
      })
      this.propertyForm.reset();
      
    // } else {
    //   alert('Please fill out all fields correctly.');
    // }
  }


  onlyDigits(event: KeyboardEvent): void {
    const inputChar = event.key;
    if (!/^\d$/.test(inputChar)) {
      event.preventDefault();
    }
  }
}