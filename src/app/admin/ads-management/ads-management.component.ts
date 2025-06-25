import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdsService } from 'src/app/services/ads.service';
import { ConfirmDialogService } from 'src/app/services/confirm-dialog.service';

@Component({
  selector: 'app-ads-management',
  templateUrl: './ads-management.component.html',
  styleUrls: ['./ads-management.component.scss'],
})
export class AdsManagementComponent implements OnInit {

  searchText: string = '';
  adsListOriginal: any[] = [];  // the full list
  adsListFilter: any[] = [];
  itemsPerPage = 10;
  currentPage = 1;

  constructor(
    private router: Router,
    private confirmService: ConfirmDialogService,
    private adsService: AdsService
  ) { }

  ngOnInit(): void {
    this.loadAds();
  }

  loadAds(): void {
    this.adsService.getAds().subscribe((res) => {
      this.adsListOriginal = res.data;
      this.adsListFilter = [...res.data];
      this.filterAds();
    });

  }

  filterAds() {
    const search = this.searchText.toLowerCase();
    this.adsListFilter = this.adsListOriginal.filter(f =>
      f.title?.toLowerCase().includes(search)
    );
    this.currentPage = 1; // reset to first page after filtering
  }

  addNew() {
    this.router.navigate(['/admin/add-ads']);
  }


  editAgent(agent: any): void {
    this.router.navigate(['/admin/edit-ads']);
    this.adsService.setAdsData(agent);
  }

  deleteAgent(agent: any): void {
    this.confirmService
      .confirm('Confirm Deletion', 'Are you sure you want to delete this Ads?')
      .subscribe((result) => {
        if (result) {

          this.adsService.deleteAds(agent.id).subscribe((res) => {
            this.loadAds();
          })

        } else {
          // Deletion cancelled
          console.log('Deletion cancelled');
        }
      });


  }

  get adsListview() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.adsListFilter.slice(startIndex, startIndex + this.itemsPerPage);
  }

  getTotalPages(): number {
    return Math.ceil(this.adsListFilter.length / this.itemsPerPage);
  }

  changePage(newPage: number) {
    if (newPage > 0 && newPage <= this.getTotalPages()) {
      this.currentPage = newPage;
    }
  }
}
