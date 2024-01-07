import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterOutlet } from '@angular/router';
import { SyncTabsWithAnchor } from './sync-tabs-with-anchor.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    SyncTabsWithAnchor,
    RouterOutlet,
  ],
  template: `
    <mat-tab-group appSyncTabsWithAnchor animationDuration="0">
      <mat-tab>
        <ng-template mat-tab-label>
          <mat-icon class="example-tab-icon">cookie</mat-icon>
          First
        </ng-template>

        <div class="container">
          <h1>HTML Ipsum Presents</h1>

          <p>
            <strong>Pellentesque habitant morbi tristique</strong> senectus et
            netus et malesuada fames ac turpis egestas. Vestibulum tortor quam,
            feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
            libero sit amet quam egestas semper.
            <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend
            leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum
            erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit
            amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros
            ipsum rutrum orci, sagittis tempus lacus enim ac dui.
            <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut
            felis.
          </p>

          <h2>Header Level 2</h2>

          <ol>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
          </ol>

          <blockquote>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              magna. Cras in mi at felis aliquet congue. Ut a est eget ligula
              molestie gravida. Curabitur massa. Donec eleifend, libero at
              sagittis mollis, tellus est malesuada tellus, at luctus turpis
              elit sit amet quam. Vivamus pretium ornare est.
            </p>
          </blockquote>

          <h3>Header Level 3</h3>

          <ul>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
          </ul>

          <pre><code>
#header h1 a {{ '{' }}
  display: block;
  width: 300px;
  height: 80px;
  {{ '}' }}
</code></pre>
        </div>
      </mat-tab>

      <mat-tab label="Rocket">
        <ng-template mat-tab-label>
          <mat-icon class="example-tab-icon">rocket</mat-icon>
          Second
        </ng-template>
        <div class="container">
          <ul>
            <li>
              Sagittis ullamcorper praesent odio accumsan accumsan taciti
              dictumst nunc nulla.
            </li>
            <li>
              Conubia rutrum rhoncus inceptos magna posuere lobortis penatibus
              euismod torquent.
            </li>
            <li>
              Mauris montes elementum, ultricies nec at etiam senectus laoreet
              nibh.
            </li>
            <li>
              Taciti cursus viverra justo cum ac adipiscing bibendum venenatis
              rhoncus.
            </li>
            <li>
              Egestas diam lectus fermentum odio dolor tristique platea montes
              litora?
            </li>
          </ul>
        </div>
      </mat-tab>

      <mat-tab>
        <ng-template mat-tab-label>
          <mat-icon class="example-tab-icon">change_circle</mat-icon>
          Third
        </ng-template>

        <div class="container">
          <p>
            Neque, cubilia cubilia venenatis malesuada. Aenean justo sed nullam
            aenean velit. Rhoncus nisi convallis nunc magnis felis ipsum commodo
            sed curabitur bibendum? Lectus quisque pellentesque torquent egestas
            dapibus nullam ante mi. Duis iaculis hac justo habitasse vivamus
            vitae tortor sodales iaculis tincidunt vulputate. Ipsum lectus
            senectus risus nec dis fermentum faucibus hendrerit placerat
            interdum? Et magna torquent habitasse hac conubia praesent mollis
            aliquet elementum nulla eleifend? Facilisis magnis lacinia est
            curae; platea ultrices dolor vel odio lacus vel iaculis. Praesent
            nec cras himenaeos ultrices ultricies cubilia.
          </p>
          <p>
            Velit in orci natoque fermentum. Fusce purus turpis metus class,
            varius quam in. Nascetur sollicitudin quam donec ridiculus dignissim
            inceptos gravida taciti nec? Dictum dis lectus curabitur accumsan
            accumsan diam quisque augue volutpat curae; mus ultricies! Imperdiet
            lorem elit quisque morbi mus id. Maecenas malesuada maecenas augue
            interdum nam donec at donec bibendum nam ligula donec. Purus
            porttitor pulvinar lobortis. Diam ut duis.
          </p>
          <p>
            Suscipit tristique curae; adipiscing. Nullam imperdiet maecenas
            blandit a netus interdum adipiscing ac elementum? Torquent
            condimentum porttitor volutpat augue. Magnis morbi enim enim vivamus
            nibh mus, ultricies curabitur! Suscipit gravida quisque placerat
            odio. Vel pretium aenean, facilisis duis taciti nostra justo. Vel
            cursus, hac varius cum! Cras eros curabitur ultrices. Sollicitudin
            convallis velit commodo nullam suscipit mollis lobortis primis massa
            inceptos ut porta! Aptent sed fermentum porta ad iaculis placerat
            elit fringilla lacinia? Ipsum urna maecenas nibh lorem fringilla
            integer cubilia neque sagittis nascetur. Eros lobortis curae; est.
            Neque mus posuere vehicula natoque. Maecenas porta.
          </p>
        </div>
      </mat-tab>
    </mat-tab-group>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .example-tab-icon {
        margin-right: 8px;
      }

      .container {
        padding: 1rem;
      }
    `,
  ],
})
export class PageComponent {}
