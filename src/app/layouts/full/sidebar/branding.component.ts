import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <div class="branding" >
      <a href="/">
        <img style="width:50% ; height: 50%; "
          src="https://firebasestorage.googleapis.com/v0/b/paratrike-fl.appspot.com/o/image%201.svg?alt=media&token=22ab191e-4010-40eb-931e-9e8d027d79b9"
          class="align-middle ms-5 "
          alt="logo"
        />
      </a>
    </div>
  `,
})
export class BrandingComponent {
  constructor() {}
}
