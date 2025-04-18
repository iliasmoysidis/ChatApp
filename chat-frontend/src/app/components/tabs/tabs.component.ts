import { Component } from '@angular/core';
import { NbCardModule, NbTabsetModule } from '@nebular/theme';

@Component({
  selector: 'app-tabs',
  imports: [NbCardModule, NbTabsetModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css',
})
export class TabsComponent {}
