import { readdir, stat, unlink, appendFile } from "fs/promises";
import path from "path";

const outputFile = "project_tree.txt";
const directoryToScan = "./src"; // Change this to your project directory

async function generateProjectTree(
  dir: string,
  prefix: string = "",
): Promise<void> {
  // Add the current directory to the output
  await appendFile(outputFile, `${prefix}${path.basename(dir)}\n`);

  const files = await readdir(dir);

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const filePath = path.join(dir, file);
    const fileStat = await stat(filePath);

    if (fileStat.isDirectory()) {
      await generateProjectTree(filePath, `${prefix}│   `);
    } else {
      await appendFile(outputFile, `${prefix}├── ${file}\n`);
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

  // Start generating the project tree
  await generateProjectTree(directoryToScan);

  console.log(`Project tree has been written to ${outputFile}`);
}

// Run the script
main().catch((err) => {
  console.error("Error generating project tree:", err);
});
