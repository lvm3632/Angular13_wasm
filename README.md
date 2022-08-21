# Angular 13 and WASM with no external packages

# Execute cmd

```
emcc fibonacci.c -Os -o fibonacci.wasm --no-entry
```

### Important: 
Run everything after execute emsdk_env.bat in order to compile fibonacci.c

### Reference MDN: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiateStreaming

### Installation emcc: 
https://emscripten.org/docs/getting_started/downloads.html

#### Based on: 
https://dev.to/vishesh/how-to-run-c-code-in-angular-javascript-3mml
