echo off
set @arg1=%1
echo %@arg1%

set edge=edge
set chrome=chrome

if %@arg1%==edge (echo "Building Edge" & copy .\manifest.edge.json manifest.json)
if %@arg1%==chrome (echo "Building Chrome" & copy .\manifest.edge.json manifest.json)

echo "Done!"
pause
