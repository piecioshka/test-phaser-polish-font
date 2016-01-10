# test-phaser-polish-font

> :ledger: Test app using a 'Lobster' font with Phaser.js

## Goal

Answer question in comment: http://www.wykop.pl/wpis/16053903/jak-zaladowac-customowy-font-w-phaser-js-zobacz-ja/54801049/#comment-54801049

## Demo

http://piecioshka.github.io/test-phaser-polish-font/app/

## How it works?

1. Download extend version of WebFont by [CSS Import](https://developer.mozilla.org/pl/docs/Web/CSS/@import):

    ```css
    @import url(https://fonts.googleapis.com/css?family=Lobster&subset=latin,latin-ext);
    ```

2. Setup rule for any selector:

    ```css
    font-family: Lobster, sans-serif;
    ```

**You can use polish letters when add: `latin-ext` in subset part.**
