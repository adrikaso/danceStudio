import { Component } from '@angular/core';
import { Footer } from '../../components/shared/footer/footer';
import { Header } from '../../components/shared/header/header';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-client-layout',
    standalone: true,
    templateUrl: './client-layout.html',
    styleUrls: ['./client-layout.css'],
    imports: [Header, Footer, RouterOutlet]
})
export class ClientLayoutComponent { }