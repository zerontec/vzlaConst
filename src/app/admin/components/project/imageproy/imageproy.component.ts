import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../../../shared/models/file-item';
import { CargaImagenesService } from '../../../services/cargar-imagenes.service';
@Component({
  selector: 'app-imageproy',
  templateUrl: './imageproy.component.html',
  styleUrls: ['./imageproy.component.scss']
})
export class ImageproyComponent implements OnInit {

  estaSobreElemento = false;
  archivos: FileItem[] = [];

  constructor(public cargaImagenes: CargaImagenesService) { }

  ngOnInit() {
  }


  cargarImagenes() {
    this.cargaImagenes.cargarImagenesFirebase( this.archivos );
  }

  limpiarArchivos() {
    this.archivos = [];
  }

}
