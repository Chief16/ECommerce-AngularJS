const fs = require('fs');
const path = require('path');

// Path to the 'dist/src' folder where your TypeScript files are compiled into JavaScript
const directoryPath = path.join(__dirname, 'dist');
// Check if the directory exists, if not, exit gracefully
if (!fs.existsSync(directoryPath)) {
  console.error(`Error: The directory ${directoryPath} does not exist.`);
  process.exit(1);  // Exit with an error code
}

// Function to remove import/export statements from a single file
const removeImportsExports = (filePath) => {
  let fileContent = fs.readFileSync(filePath, 'utf8');

  // Remove all import statements (including multiline and default imports)
  fileContent = fileContent.replace(/^\s*import\s+.*?;$/gm, '');
  fileContent = fileContent.replace(/^\s*import\s+{[^}]+}\s+from\s+['"][^'"]+['"];$/gm, '');
  fileContent = fileContent.replace(/^\s*import\s+['"][^'"]+['"]\s*;$/gm, '');

  // Remove all export statements (including named exports and default exports)
  fileContent = fileContent.replace(/^\s*export\s+default\s+.*?;$/gm, '');  // Remove default export
  fileContent = fileContent.replace(/^\s*export\s+\{[^}]+\}\s*;$/gm, '');  // Remove named exports
  fileContent = fileContent.replace(/^\s*export\s+.*?;$/gm, '');  // Generic export removal

  // Save the cleaned content back to the file
  fs.writeFileSync(filePath, fileContent, 'utf8');
};

// Function to process all .js files in the directory and subdirectories
const processFiles = (dirPath) => {
  // Read all files in the current directory
  fs.readdirSync(dirPath).forEach((file) => {
    const fullPath = path.join(dirPath, file);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      // If it's a directory, recursively process the files inside it
      processFiles(fullPath);
    } else if (fullPath.endsWith('.js')) {
      // If it's a .js file, remove imports/exports
      removeImportsExports(fullPath);
      console.log(`Processed: ${fullPath}`);
    }
  });
};

// Start processing from the base 'dist/src' folder
processFiles(directoryPath);
