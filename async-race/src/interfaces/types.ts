import carMake from '../data/car-makers';
import carModel from '../data/car-models';

export default interface ElementParams {
    tag: string;
    classNames: Array<string>;
    textContent: string;
    callback: unknown;
}
export const storeAnimation: { [key: number]: { [key: string]: number } } = {};

export type CarName = `${(typeof carMake)[number]} ${(typeof carModel)[number]}`;

export interface Car {
    name: CarName;
    color: Color;
    id: number;
}

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
export type Color = RGB | RGBA | HEX;

export type Status = 'started' | 'stopped';
export type Sort = 'id' | 'wins' | 'time';
export type Order = 'ASC' | 'DESC';
export type Page = 'Garage' | 'Winners';
export type SVGSizes = { width: `${number}px`; height: `${number}px` };
export type Actions = '+' | '-';

export interface Winner {
    id: number;
    wins: number;
    time: number;
}

export interface WinnerAndCar extends Winner {
    car: Car;
}
export type GetWinnersParams = {
    page: number;
    limit?: number;
    sort: string | null;
    order: string | null;
};
export interface GetWinnerParam {
    index: number;
    id: number;
    name: string;
    color: string;
    wins: number;
    time: number;
}
export interface Winn {
    id: number;
    wins: number;
    time: number;
    car: CarOBJ;
}
export interface CarsResponse {
    items: Car[];
    count: string;
}

export interface WinnersResponse {
    items: WinnerAndCar[];
    count: string;
}
export interface CarOBJ {
    color: string;
    id: number;
    name: string;
}

export interface Update {
    color: string;
    name: string;
}

export interface Cars {
    items: Array<CarOBJ>;
    count: number;
}
export interface Start {
    success: boolean;
    id: number;
    time: number;
}

export interface Race {
    color: string;
    id: number;
    name: string;
    time: number;
}

export interface Createwinner {
    car?: { name: any };
    id: number;
    wins: number;
    time: number;
}

export interface Save {
    id: number;
    time: number;
}
export interface Engine {
    velocity: number;
    distance: number;
}
export interface Winners {
    items: Array<Createwinner>;
    count: number;
}
