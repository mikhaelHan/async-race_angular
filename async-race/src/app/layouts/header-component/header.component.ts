import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { navigationStore } from '@app/app/redux/navigation-store/navigation-store';

@Component({
  selector: 'app-header-component',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  public navStore = inject(navigationStore);

  ngOnInit(): void {
    this.navStore.isOnNavigate();
  }
}
