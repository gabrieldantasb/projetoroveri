import { Injectable } from '@angular/core';
import * as json2csv from 'json2csv'; // convert json file to csv
import { saveAs } from 'file-saver'; // save the file
@Injectable({
  providedIn: 'root',
})
export class ToolsService {
  // Json2csvParser = json2csv.Parser;
  constructor() {}
  public downloadFile(data: any, titulo?: string) {
    let csvData = this.convertToCSV(data);
    let file = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
    saveAs(file, titulo || 'data.csv');
  }

  public convertToCSV(objArray: any[]) {
    const fields = Object.keys(objArray[0]);
    const parser = new json2csv.Parser({ fields: fields, delimiter: ';' });
    let csv = parser.parse(objArray);
    // let csv = json2csv.parse(objArray, opts);
    console.log(csv);
    return csv;
  }
}
