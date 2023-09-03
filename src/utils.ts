import fs from 'fs';

export namespace Utils {
    export function createDocxFile(filename: string, content: string): void {
        if (doesDocxFileExist(filename)) return console.log(`File '${filename}.docx' already exists. Cannot create.`);

        try {
            fs.writeFileSync(`${filename}.docx`, content);
            console.log(`File '${filename}.docx' created successfully.`);
        } catch (error) {
            console.error(`Error creating file '${filename}.docx':`, error);
        }

    }

    export function doesDocxFileExist(filename: string): boolean {
        try {
            return fs.existsSync(`${filename}.docx`);
        } catch (error) {
            console.error(`Error checking if file '${filename}.docx' exists:`, error);
            return false;
        }
    }

    export function deleteDocxFile(filename: string): void {
        if (doesDocxFileExist(filename)) {
            fs.unlinkSync(`${filename}.docx`);
        } else {
            console.log(`File '${filename}.docx' does not exist.`);
        }
    }
}