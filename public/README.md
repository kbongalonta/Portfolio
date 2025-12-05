Place your image and SVG assets here so Next.js can serve them from the site root.

Examples:
- `Karla Tianes Bongalonta.png`
- `SVG.png`
- `SVG (1).png`

How to move from PowerShell (run in project root):

Move a single file:

    Move-Item -Path .\"Karla Tianes Bongalonta.png" -Destination .\public\

Move multiple files by pattern (e.g., PNGs):

    Move-Item -Path .\*.png -Destination .\public\

Or open the project folder in File Explorer and drag images into `public/`.
