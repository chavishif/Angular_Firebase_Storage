import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { FileUpload } from 'src/app/models/file-upload.model';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent implements OnInit {
  selectedFiles?: FileList;
  desc: string="";
  title: string="";
  currentFileUpload: any;
  percentage: number=0;
  // selectedFiles?: FileList;
  // currentFileUpload?: FileUpload;
  // percentage = 0;
  // desc:string="";
  // price:number=0;

  constructor(private uploadService: FileUploadService) { }

  ngOnInit(): void {
  }

  selectFile(event: any, desc: string, title: string): void {
    this.selectedFiles = event.target.files;
    this.desc = desc;
    this.title = title;
  }

  upload(): void {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;

      if (file) {
        this.currentFileUpload = new FileUpload(file, this.desc, this.title);
        this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
          percentage => {
            this.percentage = Math.round(percentage ? percentage : 0);
          },
          error => {
            console.log(error);
          }
        );
      }
    }
  }
}
