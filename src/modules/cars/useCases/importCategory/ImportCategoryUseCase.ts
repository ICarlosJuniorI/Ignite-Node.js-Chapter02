import fs from 'fs';
import { parse as csvParse } from 'csv-parse';

class ImportCategoryUseCase {
  //Recebe o arquivo
  execute(file: Express.Multer.File): void {
    //Cria um stream de leitura passando o caminho do arquivo que será lido
    const stream = fs.createReadStream(file.path);

    //Responsável por ler as linhas do arquivo
    const parseFile = csvParse();

    //Vai pegar o pedaço do arquivo lido e passar para o parseFile
    stream.pipe(parseFile);
    
    parseFile.on('data', async (line) => {
      console.log(line);
    })
  }
}

export { ImportCategoryUseCase };