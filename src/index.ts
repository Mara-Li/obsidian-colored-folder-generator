import * as fs from 'node:fs';
import * as path from 'node:path';
import {config} from "../env";

const template = {
	css: fs.readFileSync(path.join(__dirname, 'template', 'styles.scss'), 'utf-8'),
	settings: fs.readFileSync(path.join(__dirname, 'template', 'settings.yml'), 'utf-8'),
}

function generate(folderName: string, number: number, template: string): string {
	return template.replace(/\{\{FOLDER}}/g, folderName).replace(/\{\{FOLDER_NUMBER}}/g, number.toString());
}

function createScss() {
	let output = '';
	for (const folder of config) {
		const folder =
	}
}