import { ImageService } from './image.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  constructor(private httpClient: HttpClient,private imageService:ImageService) { }

  selectedFile: File;
  imgURL: any;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;

  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }


  onUpload() {
    console.log(this.selectedFile);
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

    this.imageService.uploadImage(uploadImageData)
   // this.httpClient.post('http://localhost:8080/image/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully,OK';
        } else {
          this.message = 'Image not uploaded successfully,Nok';
        }
      }
      );


  }

  getImage() {
    this.imageService.getImage(this.imageName)
   // this.httpClient.get('http://localhost:8080/image/get/' + this.imageName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }



}
