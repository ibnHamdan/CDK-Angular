import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Direction, Directionality } from '@angular/cdk/bidi';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  private isRtl: boolean;
  // private _dirChangeSubscription = Subscription.EMPTY;
  public direction: Direction;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private readonly dir: Directionality
  ) {
    this.isRtl = dir.value === 'rtl';
    this.direction = dir.value;
    dir.change.subscribe(() => {
      this.changeInDirection();
    });
  }
  changeInDirection() {
    console.log('direction changed : ', this.direction);
  }

  flipDirection() {
    this.direction = this.direction === 'rtl' ? 'ltr' : 'rtl';
  }
}
