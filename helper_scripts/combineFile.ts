import { readdir, readFile, stat, unlink, appendFile } from "fs/promises";
import path from "path";

const outputFile = "combined_code.txt";
const directoryToScan = "./src"; // Change this to your project directory
const fileExtensions = [".tsx", ".ts", ".js"]; // File extensions to include

async function combineFiles(dir: string, outputFilePath: string) {
  const files = await readdir(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const fileStat = await stat(filePath);

    if (fileStat.isDirectory()) {
      await combineFiles(filePath, outputFilePath); // Recursively scan directories
    } else if (fileExtensions.includes(path.extname(file))) {
      const fileContent = await readFile(filePath, "utf8");
      const relativePath = path.relative(process.cwd(), filePath);

      await appendFile(
        outputFilePath,
        `"${relativePath}"\n${fileContent}\n========================================================\n`,
      );
    }
  }
}

async function main() {
  // Clear the output file if it exists
  try {
    await unlink(outputFile);
  } catch (err) {
    // Ignore if the file doesn't exist
  }

  // Start combining files
  await combineFiles(directoryToScan, outputFile);

  console.log(`All files have been combined into ${outputFile}`);
}

// Run the script
main().catch((err) => {
  console.error("Error combining files:", err);
});
