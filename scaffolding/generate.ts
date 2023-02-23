import {FilesGenerator} from '@pancodex/sdk-lib';
import * as documentClasses from './documents';
import {stringSelects, textConstants} from './keyValues';

async function run(): Promise<void> {
    await new FilesGenerator()
        .withStringSelects(stringSelects)
        .withTextConstants(textConstants)
        .withDocumentClasses(documentClasses)
        .generate();
}

run()
    .then(() => {
        console.log('DONE');
    })
    .catch(error => {
        console.error(error.message);
    });
