import { Injectable } from '@nestjs/common';
import { DeleteObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import S3_CLIENT_CONFIG from '../config/s3-client.config';

@Injectable()
export class PropertyImageService {
  private static readonly MIME_TO_EXT: Map<string, string> = new Map([
    ['image/jpeg', 'jpg'],
    ['image/png', 'png'],
    ['image/gif', 'gif'],
    ['image/webp', 'webp'],
  ]);
  private readonly s3 = S3_CLIENT_CONFIG;
  private readonly bucket = process.env.S3_BUCKET;

  async uploadImage(
    propertyId: number,
    buffer: Buffer,
    mimeType: string
  ): Promise<string> {
    const fileName = `${Date.now()}.${PropertyImageService.MIME_TO_EXT.get(
      mimeType
    )}`;
    const key = `${propertyId}/${fileName}`;

    await this.s3.send(
      new PutObjectCommand({
        Bucket: this.bucket,
        Key: key,
        Body: buffer,
        ContentType: mimeType,
      })
    );

    return fileName;
  }

  async deleteImage(key: string) {
    await this.s3.send(
      new DeleteObjectCommand({ Bucket: this.bucket, Key: key })
    );
  }
}
