import { OpenibanResponse } from './types';

export function get(url: string): Promise<OpenibanResponse> {

  return new Promise((resolve, reject) => {
    var oReq = new XMLHttpRequest();

    oReq.addEventListener("load", () => {
      if (oReq.status === 200) {
        resolve(JSON.parse(oReq.responseText));
      } else {
        reject('request failed');
      }
    });

    oReq.open("GET", url);
    oReq.send();
  });
}