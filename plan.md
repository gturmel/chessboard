# Catalan Opening ChessBoard

## Overview:

We are to build a website that displays a chessboard, with some nav buttons that allow us to click through the first several moves in this opening. There are also buttons to fast forward through all of the moves at once, and to proceed to the end of the opening as well.

## HTML

This is pretty basic.
### Header:

* Title: Lets get a title on the page.

   Lets put this in the center.
* Nav bar - links to a few things

   Just a few links aligned to the left, with an icon for the site. Maybe a pawn.

* Drop down to shift to the dream of different openings
   Gotta find some cool openings to list. Jump to openings

### Chessboard:

* 8x8 grid. 8 lists of 8 items?
   * The array will eventually talk to this, with each item in the array of arrays targeting a box. How critical is this. `.join` is going to be a big part of things.
* Icons! These are a thing that I need. Maybe just `imgs`?
* Do I want to have the move list displayed on the side?
   * Add this to your stretch goals

### Navigation bar
* center the four buttons
* little icons in the buttons.
   or not...|< < > >| that works as well...

## CSS

### Body:

* Whole page gets mild color
* Find a font


### Header

* Gets a slightly different color, nothing cray cray.

### Chessboard:

* need to find a way to target the white and the black squares with a color, without targeting each one. (class white/black?)
* Border all the things!
* Do I want to have rank and file notation around everything?
#### Game Squares:
* id for each square (a2, d5, f3, h8)
* class for every square: for border, for sizing
* another class for white and black squares

### Optional notation aids:

* extra ul, extra li on the end, to get the numbers and the letters. Sep class.

### Optional move list:
* list of moves.

### Nav Bar (sorta nav bar?)

* Make the buttons look simple, but nice. Get that stuff obvious, yo.
* See if you can find icons, if not, nbd, use greater than, less than, and pipe.
