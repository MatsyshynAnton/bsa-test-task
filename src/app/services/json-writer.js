import fs from 'fs';

export class JsonWriter {
    static writeToJson(obj) {
        const json = JSON.stringify(obj);
        fs.writeFile('./src/result.json', json, err => {
            if (err) {
                console.log('Error occurs while writing to result.json file', err)
            } else {
                console.log('Successfully wrote to result.json')
            }
        });
    }
}