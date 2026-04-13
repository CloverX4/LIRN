% ============================================================================
% lirn.cls — LIRN Solutions Document Class
% ============================================================================
% Usage: \documentclass[report]{lirn}    % for reports/references
%        \documentclass[invoice]{lirn}   % for invoices
% ============================================================================

\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{lirn}[2026/04/13 LIRN Solutions Document Class]

% --- Options ----------------------------------------------------------------
\newif\if@invoice\@invoicefalse
\newif\if@report\@reportfalse

\DeclareOption{invoice}{\@invoicetrue}
\DeclareOption{report}{\@reporttrue}
\DeclareOption*{\PassOptionsToClass{\CurrentOption}{article}}
\ProcessOptions\relax

\LoadClass[a4paper, 11pt]{article}

% --- Packages ---------------------------------------------------------------
\RequirePackage[
  top=12mm, bottom=18mm, left=15mm, right=15mm,
  headheight=14pt, headsep=8pt, footskip=12mm
]{geometry}
\RequirePackage{xcolor}
\RequirePackage{titlesec}
\RequirePackage{fancyhdr}
\RequirePackage{graphicx}
\RequirePackage{tabularx}
\RequirePackage{booktabs}
\RequirePackage{enumitem}
\RequirePackage{hyperref}
\RequirePackage{etoolbox}
\RequirePackage{calc}
\RequirePackage{fontspec}
\RequirePackage{parskip}
\RequirePackage{tikz}
\RequirePackage{colortbl}
\RequirePackage{multirow}
\RequirePackage{array}
\RequirePackage{lastpage}

% --- Colors -----------------------------------------------------------------
\definecolor{LirnBlue}{HTML}{1565C0}
\definecolor{LirnDark}{HTML}{37474F}
\definecolor{LirnText}{HTML}{263238}
\definecolor{LirnMuted}{HTML}{546E7A}
\definecolor{LirnLight}{HTML}{78909C}
\definecolor{LirnBorder}{HTML}{CFD8DC}
\definecolor{LirnBg}{HTML}{F5F7FA}
\definecolor{LirnTableHead}{HTML}{E3F2FD}

% --- Fonts ------------------------------------------------------------------
% Inter works on Overleaf + local. Falls back to Source Sans Pro, then default.
% To use Segoe UI locally on Windows, uncomment the line below instead:
%   \setmainfont{Segoe UI}[BoldFont={Segoe UI Bold},ItalicFont={Segoe UI Italic},BoldItalicFont={Segoe UI Bold Italic}]
\IfFontExistsTF{Inter}{%
  \setmainfont{Inter}[
    BoldFont={Inter Bold},
    ItalicFont={Inter Italic},
    BoldItalicFont={Inter Bold Italic}
  ]
}{%
  \IfFontExistsTF{Source Sans Pro}{%
    \setmainfont{Source Sans Pro}
  }{%
    % Final fallback — LaTeX default
  }%
}

% --- Hyperlinks -------------------------------------------------------------
\hypersetup{
  colorlinks=true,
  linkcolor=LirnBlue,
  urlcolor=LirnBlue,
  pdfborder={0 0 0}
}

% --- Metadata variables -----------------------------------------------------
\newcommand{\@doctitle}{}
\newcommand{\@preparedfor}{}
\newcommand{\@docdate}{}
\newcommand{\@subject}{}
\newcommand{\@process}{}
\newcommand{\@invoiceno}{}

\newcommand{\doctitle}[1]{\renewcommand{\@doctitle}{#1}}
\newcommand{\preparedfor}[1]{\renewcommand{\@preparedfor}{#1}}
\newcommand{\docdate}[1]{\renewcommand{\@docdate}{#1}}
\newcommand{\subject}[1]{\renewcommand{\@subject}{#1}}
\newcommand{\process}[1]{\renewcommand{\@process}{#1}}
\newcommand{\invoiceno}[1]{\renewcommand{\@invoiceno}{#1}}

% --- Header & Footer --------------------------------------------------------
\pagestyle{fancy}
\fancyhf{}
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\footrulewidth}{0pt}

\fancyfoot[C]{%
  \begin{tikzpicture}[overlay, remember picture]
    \draw[LirnBlue, line width=0.5pt] (-0.5\textwidth,0) -- (0.5\textwidth,0);
  \end{tikzpicture}\\[2pt]
  {\footnotesize\color{LirnBlue}\bfseries\addfontfeature{LetterSpace=3.0}LIRN Solutions}%
  \hfill%
  {\footnotesize\color{LirnLight}Process Engineering \& Industrial Consulting}%
  \hfill%
  {\footnotesize\color{LirnLight}\thepage\,/\,\pageref{LastPage}}%
}

\fancypagestyle{plain}{\pagestyle{fancy}}

% --- Section styling --------------------------------------------------------
\titleformat{\section}
  {\large\bfseries\color{LirnDark}}
  {\color{LirnBlue}\thesection}{0.8em}{}
  [\vspace{-4pt}{\color{LirnBorder}\titlerule[0.4pt]}]

\titleformat{\subsection}
  {\normalsize\bfseries\color{LirnDark}}
  {\color{LirnLight}\thesubsection}{0.6em}{}

\titlespacing*{\section}{0pt}{16pt}{8pt}
\titlespacing*{\subsection}{0pt}{12pt}{6pt}

% --- Paragraph spacing ------------------------------------------------------
\setlength{\parskip}{4pt plus 1pt minus 1pt}
\setlength{\parindent}{0pt}

% --- List styling -----------------------------------------------------------
\setlist[itemize]{leftmargin=1.5em, itemsep=2pt, parsep=0pt, topsep=4pt}
\setlist[enumerate]{leftmargin=1.5em, itemsep=2pt, parsep=0pt, topsep=4pt}

% ============================================================================
% SHARED COMPONENTS (injectable)
% ============================================================================

% --- LIRN Header Banner -----------------------------------------------------
\newcommand{\lirnheader}{%
  \begin{center}
    \vspace*{-5mm}
    {\fontsize{22pt}{26pt}\selectfont\color{LirnBlue}\bfseries\addfontfeature{LetterSpace=5.0}LIRN Solutions}\\[4pt]
    {\normalsize\color{LirnMuted}\addfontfeature{LetterSpace=2.0}Process Engineering \& Industrial Consulting}\\[8pt]
    {\color{LirnBlue}\rule{\textwidth}{2pt}}
  \end{center}
  \vspace{8pt}
}

% --- Document Title ---------------------------------------------------------
\newcommand{\lirntitle}[1]{%
  {\Large\bfseries\color{LirnDark}#1}\\[-2pt]
  {\color{LirnBorder}\rule{\textwidth}{0.4pt}}
  \vspace{4pt}
}

% --- Prepared For / Date line -----------------------------------------------
\newcommand{\lirnmeta}{%
  \noindent
  \textbf{Prepared for:} \@preparedfor\hfill\textbf{Date:} \@docdate
  \vspace{2pt}
}

% --- Subject line -----------------------------------------------------------
\newcommand{\lirnsubject}{%
  \ifx\@subject\empty\else
    \noindent\textbf{Subject:} \@subject\\
  \fi
}

% --- Process line -----------------------------------------------------------
\newcommand{\lirnprocess}{%
  \ifx\@process\empty\else
    \noindent\textbf{Process:} \@process
    \vspace{2pt}
  \fi
}

% --- Reference callout box --------------------------------------------------
\newcommand{\lirnrefnote}[2]{%
  % #1 = label (e.g., "REFERENCE DOCUMENT")
  % #2 = content
  \vspace{4pt}
  \noindent
  \begin{tikzpicture}
    \node[
      fill=LirnBg,
      draw=none,
      inner sep=8pt,
      text width=\textwidth-20pt,
      rounded corners=3pt
    ] (box) {%
      \begin{minipage}{\linewidth}
        {\footnotesize\bfseries\color{LirnBlue}\addfontfeature{LetterSpace=2.0}#1}\\[2pt]
        {\small\color{LirnMuted}#2}
      \end{minipage}
    };
    \draw[LirnBlue, line width=2.5pt] (box.north west) -- (box.south west);
  \end{tikzpicture}
  \vspace{4pt}
}

% --- Disclaimer block -------------------------------------------------------
\newcommand{\lirndisclaimers}[1][]{%
  % Optional argument: custom items. Default disclaimers if empty.
  \vspace{8pt}
  {\small\itshape\color{LirnLight}%
    \begin{itemize}[leftmargin=1.2em, itemsep=1pt, label={\color{LirnLight}\textbullet}]
      \ifx\\#1\\%
        % Default disclaimers
        \item This document is intended solely for the use of the client named herein. Distribution to third parties requires prior written consent from LIRN Solutions.
        \item All findings, calculations, and recommendations are based on data available at the time of assessment and standard engineering practices.
        \item LIRN Solutions accepts no liability for operational outcomes resulting from the implementation of recommendations contained in this document.
      \else
        #1
      \fi
    \end{itemize}
  }%
}

% --- End of Document divider ------------------------------------------------
\newcommand{\lirnend}[1][Report]{%
  \vspace{12pt}
  \begin{center}
    {\color{LirnBorder}\rule{0.4\textwidth}{0.4pt}}\\[6pt]
    {\small\color{LirnLight}\itshape End of #1}\\[2pt]
    {\color{LirnBorder}\rule{0.4\textwidth}{0.4pt}}
  \end{center}
}

% --- Horizontal rule --------------------------------------------------------
\newcommand{\lirnrule}{%
  \vspace{2pt}
  {\color{LirnBorder}\rule{\textwidth}{0.4pt}}
  \vspace{2pt}
}

% ============================================================================
% INVOICE-SPECIFIC COMPONENTS
% ============================================================================

% --- Invoice header (no/date line) ------------------------------------------
\newcommand{\lirninvoicemeta}{%
  \noindent
  \textbf{Invoice No:} \@invoiceno\hfill\textbf{Date:} \@docdate
  \vspace{2pt}
}

% --- From / Bill To block ---------------------------------------------------
\newcommand{\lirninvoiceparties}[2]{%
  % #1 = From content, #2 = Bill To content
  \noindent
  \begin{tabularx}{\textwidth}{@{}X X@{}}
    \small\textbf{From} & \small\textbf{Bill To} \\[2pt]
    {\small #1} & {\small #2}
  \end{tabularx}
  \vspace{2pt}
}

% --- Scope table environment ------------------------------------------------
\newcolumntype{R}[1]{>{\raggedleft\arraybackslash}p{#1}}

\newenvironment{lirnscope}{%
  \rowcolors{1}{white}{white}%
  \begin{tabularx}{\textwidth}{@{}
    >{\centering\arraybackslash}p{0.6cm}
    X
    R{2.5cm}
  @{}}
  \rowcolor{LirnTableHead}
  \textbf{\color{LirnBlue}\#} &
  \textbf{\color{LirnBlue}Description} &
  \textbf{\color{LirnBlue}Amount (INR)} \\
  \midrule
}{%
  \end{tabularx}
}

% --- Scope line item --------------------------------------------------------
\newcommand{\scopeitem}[3]{%
  % #1 = number, #2 = description, #3 = amount
  #1 & #2 & #3 \\
}

% --- Total row --------------------------------------------------------------
\newcommand{\scopetotal}[1]{%
  \midrule
  \rowcolor{LirnBg}
  & \textbf{Total} & \textbf{\color{LirnBlue}\large #1} \\
  \bottomrule
}

% --- Amount in words --------------------------------------------------------
\newcommand{\lirnamountwords}[1]{%
  \noindent\textbf{Amount in Words:} #1
}

% --- GST note ---------------------------------------------------------------
\newcommand{\lirngst}{%
  {\footnotesize\color{LirnLight}GST not applicable --- turnover below threshold limit as per Section 22 of CGST Act, 2017.}
}

% ============================================================================
\endinput
