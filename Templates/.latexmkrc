# Use XeLaTeX (required for Segoe UI / fontspec)
$pdflatex = 'xelatex -interaction=nonstopmode -synctex=1 %O %S';
$pdf_mode = 1;

# Add cls/ to search path so \documentclass{lirn} works from any subfolder
ensure_path('TEXINPUTS', './cls//');
