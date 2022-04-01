---
id: ebiten
title: Ebiten
---

## Summary

import { WebAssembly } from '../src/components/WebAssembly'

[Ebiten](https://github.com/hajimehoshi/ebiten) is a simple open source game library that uses Go.

It supports multiple Platform targets, including WebAssembly.

By using the WebAssembly target it should be possible to embed simple games into a webpage such as this.  Currently testing embedded WebAssembly by following the [Ebiten WebAssembly](https://ebiten.org/documents/webassembly.html) instructions as well as playing around with React components in Docusaurus.

## Game

Here is an example puzzle game I am working on.  It is in a pretty unfinished state,
but I wanted to see if I would be able to build the WebAssembly binary and display
it as a react component.

Simply click somewhere on the map and drag around to cause the tilemap to reconnect in
various ways.

<WebAssembly />

## Todos

- Determine the best way to load WebAssembly binary

Currently just checking in the wasm binary as a static file.

- Attempt to shrink the WebAssembly binary size

I am simply following the Ebiten steps to compile the binary.  The game above is 6.6M.
Would be good to test out optimization options.
