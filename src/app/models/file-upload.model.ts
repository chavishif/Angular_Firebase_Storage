export class FileUpload {
  key!: string;
  name!: string;
  url!: string;
  file: File;
  desc! :string;
  title! :string;

  constructor(file: File, desc: string, title: string) {
    this.file = file;
    this.desc = desc;
    this.title = title;
  }
}
