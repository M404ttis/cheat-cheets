# VIM 
## basics 
v   - enter visual mode
V   - enter visual mode linewise
~   - change case 
gv  - reselect last visual selection
:   - in V (linewise) mode, do anything ()

## editing
a   - append, append right of cursor
A   - Append, Append at end of line
i   - insert, insert left of cursor
I   - Insert, Insert beginning of line left of first non-empty char
x   - in normal mode, delete current character
c   - change 
C   - delete everything until end of line, enter Insert-mode
D   - delete everything until end of line
dd  - delete whole current line
S   - ^C delete whole line, enter Insert-mode 
s   - cl
y   - yank, in visual mode, higlighted chars
yy  - yankyank, in visual mode whole line
r   - replace current or marked chars with char followed by 'r'


## basic moves
w   - word, go to beginning of next word
e   - end, jump to end of (next) word
b   - back, go to beginning of (former) word
^   - go to first non-empty character
$   - go to last non-empty character
ea  - end append, go into insert mode after current word
bi  - back insert, go into insert mode at beginning of current word
*   - add current word to searched words and jump to next instance
n   - jump to next instance of searched words
N   - lump to last instance of searched words
f   - find/search next typed char
;   - repeat last search performed 
,   - reverse last search performed

## advanced navigation
<c-o> - jump back in vim jumplist 
<c-i> - jump forward 
gg  - go to first line of current buffer
G  - go to last line of current buffer
ma  - set Mark 'a' at current cursor location to jump within file
mA  - set one Mark 'A' at current cursor location to jump between files
'a  - jump to first non-empty char in line of mark 'a' 
`a  - jump to position (line and column) of mark 'a' 
]'  - jump to next line with lowercase mark
['  - jump to previous line with lowercase mark
]`  - jump to next  lowercase mark
[`  - jump to previous lowercase mark
`.  - jump to position where last change occured in current buffer
`"  - jump to position where last exited current buffer
''  - jump back (to LINE in current buffer where jumped from)
``  - jump back (to POSITION in current buffer where jumped from)
`[  - jump to beginnging of previously changed/yanked text
`]  - jump to end of previously changed/yanked text
`<  - jump to beginning of last visual selection
`>  - jump to end of last visual selection
`0  - jump to position in last file edited (when exited vim)
`1  - like `0 but the previous file (`2 according)

## repeat effectively
:2,3 normal @a  - run the @a macro on the lines 2 to 3 at once 
:%s!^!//! -  insert "//" at the beginning of each line (using ! as delimiter instead of /)
{visual}zf or zf{motion} - fold visual selected area; "zo" foldOpen; "zc" fold close 

.   - repeat the latest change
;.  - jump to next last search result and perform latest change  
&   - repeat latest performed substitution 
