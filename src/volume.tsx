import { ReactNode } from "react";
import dxlx from "./dxlx";

export const volume = (x: number): JSX.Element => {
    return (
        <ul>
            <li>{dxlx(x)} ml</li>
            <li>{dxlx(x / 1000)} L</li>
        </ul>
    );
}

export const pint = (): JSX.Element => {
    return (
        <li>1 pint =
            {volume(473.17647)}
        </li>
    )
}
export const quart = (): JSX.Element => {
    return (
        <li>1 quart =
            {volume(946.35295)}
        </li>
    );
}

export const volumes = (): JSX.Element => {
    return (
        <ul>
            <li>{pint()}</li>
            <li>{quart()}</li>
        </ul>
    )
}