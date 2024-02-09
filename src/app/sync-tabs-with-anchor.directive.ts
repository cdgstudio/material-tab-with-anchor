import { isPlatformServer } from '@angular/common';
import {
  AfterContentInit,
  DestroyRef,
  Directive,
  ElementRef,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';

@Directive({
  standalone: true,
  selector: '[appSyncTabsWithAnchor]',
})
export class SyncTabsWithAnchor implements AfterContentInit {
  private group = inject(MatTabGroup, { self: true });
  private router = inject(Router);

  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);
  private elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  private server = isPlatformServer(inject(PLATFORM_ID));

  ngAfterContentInit(): void {
    if (this.server) {
      this.elementRef.nativeElement.style.visibility = 'hidden';
      return;
    }

    const fragment = this.activatedRoute.snapshot.fragment;

    if (fragment) {
      const indexByLabel = this.group._tabs
        .toArray()
        .findIndex((tab) => tab.textLabel === fragment);
      if (indexByLabel !== -1) {
        this.group.selectedIndex = indexByLabel;
      } else {
        const index = +fragment.replace('tab-', '') || 0;
        this.group.selectedIndex = index;
      }
    }

    this.listenForTabChanges();
    this.elementRef.nativeElement.style.visibility = '';
  }

  private listenForTabChanges(): void {
    const tabChangeSub = this.group.selectedTabChange
      .pipe(
        map((event) => event.tab.textLabel || 'tab-' + event.index.toString())
      )
      .subscribe((fragment) =>
        this.router.navigate([], {
          relativeTo: this.activatedRoute,
          fragment,
          replaceUrl: true,
        })
      );
    this.destroyRef.onDestroy(() => tabChangeSub.unsubscribe());
  }
}
