import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgentProfileManagementService } from 'src/app/services/agent-profile-management.service';

@Component({
  selector: 'app-agent-management',
  templateUrl: './agent-management.component.html',
  styleUrls: ['./agent-management.component.scss'],
})
export class AgentManagementComponent  implements OnInit {
  agentList: any[] = [];
  searchText: string = '';
  itemsPerPage = 10;
  currentPage = 1;

  constructor(private router: Router, private agentProfileManagement: AgentProfileManagementService) {}

  ngOnInit(): void {
    this.loadAgents();
  }

  loadAgents(): void {
    this.agentProfileManagement.fetchAllAgentsData().subscribe((res) => {
      this.agentList = res.data;
  });

    // this.agentList = [
    //   {
    //     username: 'ankith@033',
    //     mobile: '1234567890',
    //     status: 'Pending',
    //     profilePic: 'assets/images/image1.png'
    //   },
    //   {
    //     username: 'ankith@033',
    //     mobile: '1234567890',
    //     status: 'Pending',
    //     profilePic: 'assets/images/image1.png'
    //   },
    //   {
    //     username: 'ankith@033',
    //     mobile: '1234567890',
    //     status: 'Pending',
    //     profilePic: 'assets/images/image1.png'
    //   },
    //   {
    //     username: 'ankith@033',
    //     mobile: '1234567890',
    //     status: 'Pending',
    //     profilePic: 'assets/images/image1.png'
    //   },
    //   {
    //     username: 'ankith@033',
    //     mobile: '1234567890',
    //     status: 'Pending',
    //     profilePic: 'assets/images/image1.png'
    //   }
    // ];
  }
    
  addNew(){
    this.router.navigate(['/admin/add-agent']);
  }
  

  editAgent(agent: any): void {
    console.log('Editing agent:', agent);
  }

  deleteAgent(agent: any): void {
    console.log('Deleted agent:', agent);
  }

    
  get agentListview() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.agentList.slice(startIndex, startIndex + this.itemsPerPage);
  }
 
  getTotalPages(): number {
    return Math.ceil(this.agentList.length / this.itemsPerPage);
  }
 
  changePage(newPage: number) {
    if (newPage > 0 && newPage <= this.getTotalPages()) {
      this.currentPage = newPage;
    }
  }
  }
