# VIM

## make it a habbit - current learnings

<code>o</code> - in visual mode, move to other side of highlighted text<br>
<code>''</code> - jump back (to LINE in current buffer where jumped from)<br>
<code>mA</code> - set one Mark 'A' at current cursor location to jump between files<br>
<code>\`a</code> - jump to position (line and column) of mark 'a' <br>

## basics

<code>v</code> - enter visual mode<br>
<code>V</code> - enter visual mode linewise<br>
<code>~</code> - change case <br>
<code>gv</code> - reselect last visual selection<br>
<code>:</code> - in V (linewise) mode, do anything ()<br>

## editing

<code>a</code> - append, append right of cursor<br>
<code>A</code> - Append, Append at end of line<br>
<code>i</code> - insert, insert left of cursor<br>
<code>I</code> - Insert, Insert beginning of line left of first non-empty char<br>
<code>x</code> - in normal mode, delete current character<br>
<code>c</code> - change <br>
<code>C</code> - delete everything until end of line, enter Insert-mode<br>
<code>D</code> - delete everything until end of line<br>
<code>dd</code> - delete whole current line<br>
<code>S</code> - ^C delete whole line, enter Insert-mode <br>
<code>s</code> - cl<br>
<code>y</code> - yank, in visual mode, higlighted chars<br>
<code>yy</code> - yankyank, in visual mode whole line<br>
<code>r</code> - replace current or marked chars with char followed by 'r'<br>

## basic moves

<code>w</code> - word, go to beginning of next word<br>
<code>e</code> - end, jump to end of (next) word<br>
<code>b</code> - back, go to beginning of (former) word<br>
<code>^</code> - go to first non-empty character<br>
<code>$</code> - go to last non-empty character<br>
<code>ea</code> - end append, go into insert mode after current word<br>
<code>bi</code> - back insert, go into insert mode at beginning of current word<br>
<code>\*</code> - add current word to searched words and jump to next instance<br>
<code>n</code> - jump to next instance of searched words<br>
<code>N</code> - lump to last instance of searched words<br>
<code>f</code> - find/search next typed char<br>
<code>;</code> - repeat last search performed <br>
<code>,</code> - reverse last search performed<br>

## advanced navigation

<code>\<c-o\></code> - jump back in vim jumplist <br>
<code>\<c-i\></code> - jump forward <br>
<code>gg</code> - go to first line of current buffer<br>
<code>G</code> - go to last line of current buffer<br>
<code>ma</code> - set Mark 'a' at current cursor location to jump within file<br>
<code>mA</code> - set one Mark 'A' at current cursor location to jump between files<br>
<code>'a</code> - jump to first non-empty char in line of mark 'a' <br>
<code>\`a</code> - jump to position (line and column) of mark 'a' <br>
<code>]'</code> - jump to next line with lowercase mark<br>
<code>['</code> - jump to previous line with lowercase mark<br>
<code>]\`</code> - jump to next lowercase mark<br>
<code>[\`</code> - jump to previous lowercase mark<br>
<code>\`.</code> - jump to position where last change occured in current buffer<br>
<code>\`"</code> - jump to position where last exited current buffer<br>
<code>''</code> - jump back (to LINE in current buffer where jumped from)<br>
<code>\`\`</code> - jump back (to POSITION in current buffer where jumped from)<br>
<code>\`[</code> - jump to beginnging of previously changed/yanked text<br>
<code>\`]</code> - jump to end of previously changed/yanked text<br>
<code>\`<</code> - jump to beginning of last visual selection<br>
<code>\`></code> - jump to end of last visual selection<br>
<code>\`0</code> - jump to position in last file edited (when exited vim)<br>
<code>\`1</code> - like `0 but the previous file (`2 according)<br>

## repeat effectively

<code>:2,3 normal @a</code> - run the @a macro on the lines 2 to 3 at once <br>
<code>:%s!^!//!</code> - insert "//" at the beginning of each line (using ! as delimiter instead of /)<br>
<code>{visual}zf or zf{motion}</code> - fold visual selected area; "zo" foldOpen; "zc" fold close <br>
<code>.</code> - repeat the latest change<br>
<code>;.</code> - jump to next last search result and perform latest change <br>
<code>&</code> - repeat latest performed substitution <br>

## macros

<code>:put a</code>pastes the content of the 'a' register
<code>:reg</code>peek into the register contents
<code>"ayy</code>yank whole line into the 'a' register
<code>@a</code>use the 'a' makro/ apply steps from 'a' register
