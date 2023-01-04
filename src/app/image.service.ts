import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }


  uploadImage(imageData){
  return this.http.post('http://localhost:8080/image/upload', imageData, { observe: 'response' })
  }

  getImage(imageName){
    return this.http.get('http://localhost:8080/image/get/' + imageName)
  }
}
