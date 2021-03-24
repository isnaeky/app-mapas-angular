export class Marcador {
  public title = 'Sin titulo';
  public desc = 'Sin descripcion';

  private lat: number;
  private lng: number;
  constructor(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }
}
