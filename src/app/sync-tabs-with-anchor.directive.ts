import {
  AfterContentInit,
  DestroyRef,
  Directive,
  OnInit,
  inject,
} from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';

@Directive({
  standalone: true,
  selector: '[appSyncTabsWithAnchor]',
})
export class SyncTabsWithAnchor implements AfterContentInit {
  private group = inject(MatTabGroup, { self: true });
  private router = inject(Router);

  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  ngAfterContentInit() {
    const fragment = this.activatedRoute.snapshot.fragment;

    if (fragment) {
      const indexByLabel = this.group._tabs
        .toArray()
        .findIndex((tab) => tab.textLabel === fragment);

      if (indexByLabel !== -1) {
        this.group.selectedIndex = indexByLabel;
      } else {
        this.group.selectedIndex = +fragment.replace('tab-', '') || 0;
      }
    }

    const tabChangeSub = this.group.selectedTabChange.subscribe((event) =>
      this.router.navigate([], {
        relativeTo: this.activatedRoute,
        fragment: event.tab.textLabel || 'tab-' + event.index.toString(),
        replaceUrl: true,
      })
    );
    this.destroyRef.onDestroy(() => tabChangeSub.unsubscribe());
  }
}
