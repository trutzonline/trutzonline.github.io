# Define source and destination directories
$sourceDir = "C:\Users\info\Dropbox\Work\Notizen\Artikel\trutzonline"
$destinationDir = "_posts"

# Copy all files from source to destination
Copy-Item -Path "$sourceDir\*" -Destination $destinationDir -Recurse
