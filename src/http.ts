import { OpenibanResponse } from './types';

const https = require('https');

export function get(url: string): Promise<OpenibanResponse> {
  return new Promise((resolve, reject) => {
    https.get(url, (res: any) => {
      res.on('data', (d: String | Buffer) => {
        resolve(JSON.parse(d.toString()));
      });
    }).on('error', (err: Error) => {
      reject(err);
    });
  });
}