import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AdsService } from 'src/app/services/ads.service';

@Component({
  selector: 'app-edit-ads',
  templateUrl: './edit-ads.component.html',
  styleUrls: ['./edit-ads.component.scss'],
})
export class EditAdsComponent implements OnInit {
  adForm!: FormGroup;
  selectedFiles: File[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private adsService: AdsService,
    private toastCtrl: ToastController,
  ) { }

  ngOnInit(): void {
    this.adForm = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: [null, Validators.required],
      partnerName: ['', Validators.required],
      approvedByAdmin: [false]
    });
    

    this.adsService.adsData$.subscribe(data => {
      this.adForm.patchValue({
        id: data.id,
        title: data.title,
        description: data.description,
        imageUrl: data.imageUrl,
        partnerName: data.partnerName,
        approvedByAdmin: data.approvedByAdmin
      });
    });
  }

  selectedFile!: File;
  fileError: string | null = null;
  mediaPreview: string | null = null;

  onMediaChange(event: any): void {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.mediaPreview = reader.result as string;

        this.adForm.patchValue({ imageUrl: this.mediaPreview });
        this.adForm.get('imageUrl')?.markAsTouched();
      };
      reader.readAsDataURL(file);
    } else {
      this.adForm.patchValue({ imageUrl: null });
      this.mediaPreview = null;
    }
  }

  removeMedia(): void {
    this.mediaPreview = null;
    this.adForm.patchValue({ imageUrl: null });
  }

  isImage(fileUrl: string): boolean {
    return fileUrl.startsWith('data:image');
  }


  onSubmit() {
    if (this.adForm.invalid) {
      this.adForm.markAllAsTouched();
      return;
    }
    console.log(this.adForm.value);

    const partnerAd = {
      ...this.adForm.value

    }
    this.adsService.updateAds(partnerAd.id,partnerAd).subscribe({
      next: async (res) => {
        // console.log('Ad submitted successfully:', res);
        this.adForm.reset();
        this.mediaPreview = null;
        const toast = await this.toastCtrl.create({
          message: 'Login successful!',
          duration: 4000,
          color: 'success'
        });
        await toast.present();
      },
      error: (err) => {
        console.error('Error submitting ad:', err);

      }
    });
  }

}
