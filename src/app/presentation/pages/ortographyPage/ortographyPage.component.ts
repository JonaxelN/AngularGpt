import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChatMessageComponent, MyMessageComponent } from '@components/index';

@Component({
  selector: 'app-ortography-page',
  standalone: true,
  imports: [
    CommonModule,
    ChatMessageComponent,
    MyMessageComponent
  ],
  templateUrl: './ortographyPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrtographyPageComponent { }
