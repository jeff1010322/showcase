import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl';

export const WebAssembly = () => {

  return (
    <iframe 
      src={useBaseUrl("wasm")}
      width="420" 
      height="600"
      allow="autoplay"></iframe>
  )
}
