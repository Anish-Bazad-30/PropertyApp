import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgentProfileManagementService } from 'src/app/services/agent-profile-management.service';
import { ConfirmDialogService } from 'src/app/services/confirm-dialog.service';

@Component({
  selector: 'app-agent-management',
  templateUrl: './agent-management.component.html',
  styleUrls: ['./agent-management.component.scss'],
})
export class AgentManagementComponent  implements OnInit {
  searchText: string = '';
agentListOriginal: any[] = [];  // the full list
agentListFilter: any[] = []; 
  itemsPerPage = 10;
  currentPage = 1;

  constructor(
    private router: Router, 
    private agentProfileManagement: AgentProfileManagementService,
     private confirmService: ConfirmDialogService
  ) {}

  ngOnInit(): void {
    this.loadAgents();
  }

  loadAgents(): void {
    this.agentProfileManagement.fetchAllAgentsData().subscribe((res) => {
      this.agentListOriginal = res.data;
      this.agentListFilter = [...res.data];
      this.filterAgents();
  });
   
  }

  filterAgents() {
    const search = this.searchText.toLowerCase();
    this.agentListFilter = this.agentListOriginal.filter(agent =>
      agent.username?.toLowerCase().includes(search)
    );
    this.currentPage = 1; // reset to first page after filtering
  }
    
  addNew(){
    this.router.navigate(['/admin/add-agent']);
  }
  

  editAgent(agent: any): void {
    this.router.navigate(['/admin/edit-agent']);
    this.agentProfileManagement.setAgentData(agent);
  }

  deleteAgent(agent: any): void {
    this.confirmService
      .confirm('Confirm Deletion', 'Are you sure you want to delete this Agent?')
      .subscribe((result) => {
        if (result) {

          this.agentProfileManagement.deleteAgentProfile(agent).subscribe((res)=>{
            this.loadAgents();
          })
       
        } else {
          // Deletion cancelled
          console.log('Deletion cancelled');
        }
      });
    
    
  }

  get agentListview() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.agentListFilter.slice(startIndex, startIndex + this.itemsPerPage);
  }
 
  getTotalPages(): number {
    return Math.ceil(this.agentListFilter.length / this.itemsPerPage);
  }

  changePage(newPage: number) {
    if (newPage > 0 && newPage <= this.getTotalPages()) {
      this.currentPage = newPage;
    }
  }
  }
