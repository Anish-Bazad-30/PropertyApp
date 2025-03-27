import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent-management',
  templateUrl: './agent-management.component.html',
  styleUrls: ['./agent-management.component.scss']
})
export class AgentManagementComponent implements OnInit {
  searchTerm: string = '';

  agents = [
    { name: 'Agent A', email: 'agenta@gmail.com', status: 'Active', profilePicture: 'assets/images/image1.png' },
    { name: 'Agent B', email: 'agentb@gmail.com', status: 'Inactive', profilePicture: 'assets/images/image1.png' },
    { name: 'Agent C', email: 'agentc@gmail.com', status: 'Active', profilePicture: 'assets/images/image1.png' },
    { name: 'Agent D', email: 'agentd@gmail.com', status: 'Active', profilePicture: 'assets/images/image1.png' },
    { name: 'Agent E', email: 'agente@gmail.com', status: 'Inactive', profilePicture: 'assets/images/image1.png' },
    { name: 'Agent F', email: 'agentf@gmail.com', status: 'Active', profilePicture: 'assets/images/image1.png' },
    { name: 'Agent G', email: 'agentg@gmail.com', status: 'Active', profilePicture: 'assets/images/image1.png' }
  ];

  filteredAgents = [...this.agents];

  constructor() {}

  ngOnInit(): void {}

  updateSearchTerm(event: Event) {
    const value = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredAgents = this.agents.filter(agent => 
      agent.name.toLowerCase().includes(value) || 
      agent.email.toLowerCase().includes(value)
    );
  }

  confirmDelete(agent: any) {
    const confirmation = window.confirm(`Are you sure you want to delete ${agent.name}?`);
    if (confirmation) {
      this.agents = this.agents.filter(a => a !== agent);
      this.filteredAgents = this.filteredAgents.filter(a => a !== agent);
      alert(`${agent.name} deleted successfully!`);
    }
  }
}
