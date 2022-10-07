import dxlx from "./dxlx";

export const volume = (x: number): JSX.Element => {
    return (
        <ul>
            <li>{dxlx(x)} L</li>
            <li>{dxlx(1000 * x)} ml</li>
        </ul>
    );
}

export const quart = (): JSX.Element => {
    return (
        <li>1 quart =
            {volume(0.94635295)}
        </li>
    );
}