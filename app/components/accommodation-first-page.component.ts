import {Component, OnInit} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';

import {Accommodation} from '../models/accomodation.model';
import {AccommodationService} from '../services/accommodation.service';

@Component({
    selector: 'roomio-accommodation-first-page',
    templateUrl: 'app/templates/accommodation-first-page.component.html',
    inputs: ['accommodation'],
    directives: [ROUTER_DIRECTIVES]
})
export class AccommodationFirstPageComponent implements OnInit{
    private accommodation: Accommodation;
    private errorMessage: string;


    constructor(private _accommodationService: AccommodationService) {
    }

    ngOnInit() {
        this.getAccommodation();
    }

    getAccommodation() {
        this._accommodationService
            .getAccommodationById(1)
            .then(
                accommodation => this.accommodation = accommodation,
                error =>  this.errorMessage = <any>error
            );

    }

    private debug() {
        console.log(this.accommodation);
    }
}