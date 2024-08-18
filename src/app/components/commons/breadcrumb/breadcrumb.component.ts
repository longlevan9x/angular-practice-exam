import { Component, OnInit } from '@angular/core';
import { BreadcrumbModel } from '../../../models/breadcrumb.model';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs';
import { Location } from '@angular/common';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent implements OnInit {
    breadcrumbs: BreadcrumbModel[] = [];

    constructor(
        private router: Router, 
        private activatedRoute: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map(() => this.buildBreadcrumb(this.activatedRoute.root))
        ).subscribe(breadcrumbs => {
            this.breadcrumbs = breadcrumbs;
        });
    }

    buildBreadcrumb(route: ActivatedRoute, url: string = '', breadcrumbs: BreadcrumbModel[] = []): BreadcrumbModel[] {
        const routeConfig = route.routeConfig;
        const label = routeConfig?.data?.['breadcrumb'];
        const path = routeConfig?.path;
        
        // Combine the current URL with the parent route path and dynamic params
        if (path) {
            const lastRoutePart: string|any = path.split('/').pop(); // Get the last part of the route
            const isDynamicRoute = lastRoutePart?.startsWith(':');
            if (isDynamicRoute && route.snapshot) {
                const paramName: any = lastRoutePart?.substring(1);
                const paramValue = route.snapshot.params[paramName];
                url += path.replace(lastRoutePart, paramValue);
            } else {
                url += `/${path}`;
            }
        }

        if (label) {
            breadcrumbs.push({ label, url });
        }

        if (route.firstChild) {
            return this.buildBreadcrumb(route.firstChild, url, breadcrumbs);
        }

        return breadcrumbs;
    }

    backToPrev(): void {
        this.location.back();
    }
}
