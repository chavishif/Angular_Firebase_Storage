import { FileUpload } from './file-upload.model';

const file = new File(['content'], 'filename');
const fileUpload = new FileUpload(file, 'file description', 'file title');

describe('FileUpload', () => {
  it('should create an instance', () => {
    expect(fileUpload).toBeTruthy();
  });
});
