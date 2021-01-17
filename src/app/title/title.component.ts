import { Component, OnInit, Input } from '@angular/core';
import { showUp } from '../animations/showUp.animation';
import { animation } from '@angular/animations';
//decorador
@Component({
    selector: 'app-title',
    templateUrl: 'title.component.html',
    styleUrls: ['title.component.css'],
    animations:[showUp]   
})
export class TitleComponent implements OnInit{
    public name: string ;
    public moreInformation : boolean = false;
    public isAvailable : boolean = false;
    public category : string; //mobile, web, other
    public topics : string[];
    public launchDate : Date;
    public price : number = 25;
    public seconds : number = 3660;

    @Input() subscribed : boolean;
        //en los constructores  los componentes deben ir en otro componente ngOnInit
    constructor(){}

    //testing unitario
    ngOnInit(){
        this.category = 'wseb';
        this.name = 'Vidal';
        this.launchDate = new Date(2020,11,24);
        this.topics = [
            'Funsamentos de framework',
            'Componenetes',
            'Directivas',
            'Animaciones',
            'Servicios',
            'RxJS',
            'Binding'
        ];

    }
    toggleMoreInformation(){
        this.moreInformation =!this.moreInformation;
    }

}
