import { Component } from "@angular/core";

import { product } from "../products";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
    products = product;

    share(){
        window.alert('The Product has been shared!!');
    }

}