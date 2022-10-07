const dxlx = (x:number): JSX.Element => {
  let y = x.toExponential(3);
  let z = Math.log10(x).toFixed(2);
  return <span>{y}, or 10<sup><b>{z}</b></sup></span>;
}

export default dxlx

// vim: set et ff=unix ft=typescriptreact nocp sts=2 sw=2 ts=2:
