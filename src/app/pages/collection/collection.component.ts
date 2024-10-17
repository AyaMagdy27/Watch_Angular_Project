import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [RouterLink],
  // templateUrl: './collection.component.html',
  // styleUrl: './collection.component.css'


  template: `
    <section class="Collection Section">
            <img src="/images/Man with watch.png" alt="" class="Collection--img">
            <div class="Collection--Text--container">
                <h2 class="Collection--Title">The Lawson Collection</h2>
                <p class="Collection--Paragraph">
                    Whether you’re about to invest in your first serious watch or looking to add to an already<br>
                    impressive collection, the right luxury watch acts as a milestone in life: a marker of time well<br>
                    spent. If you’re struggling to choose the perfect timepiece then allow us to help. Here are the<br>
                    classics we suggest investing in.</p>
                <button class="Dark--btn"><a routerLink="/shop">Shop collection</a></button>

            </div>
        </section>
  
  `
})
export class CollectionComponent {

}
