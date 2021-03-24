import { Component, OnInit } from '@angular/core';
import { AgmInfoWindow } from '@agm/core';
import { Marcador } from '../../clases/marcador.class';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MapEditComponent } from './map-edit/map-edit.component';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;

  marcador:Marcador[]=[];
  
  constructor(private snackBar: MatSnackBar,public dialog: MatDialog) { 
    /* const newM= new Marcador(this.lat,this.lng);
    this.marcador.push(newM); */
    if (localStorage.getItem('marcadores')) {
      this.marcador= JSON.parse( localStorage.getItem('marcadores'));
    }

  }

  ngOnInit(): void {
  }

  ngNewMar(event){
    const c:{lat:number,lng:number}=event.coords;
    const newM= new Marcador(c.lat,c.lng);
    this.marcador.push(newM);
    this.guardarStorage();
    this.snackBar.open('Marcador agregado', 'Cerrar',{duration:3000});
  }

  guardarStorage(){
    localStorage.setItem('marcadores',JSON.stringify(this.marcador));
  }

  edit(m:Marcador){
    const dialogRef = this.dialog.open(MapEditComponent, {
      width: '250px',
      data: {titulo:m.title, desc: m.desc}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (!result) {
        return;
      }
      m.title=result.titulo;
      m.desc= result.desc;

      this.guardarStorage();
      this.snackBar.open('Marcador actualizado', 'Cerrar',{duration:3000});
    });

  }

  delete(i:number){
    this.marcador.splice(i,1);
    this.guardarStorage();
    this.snackBar.open('Marcador borrado', 'Cerrar',{duration:3000});
  }

}
