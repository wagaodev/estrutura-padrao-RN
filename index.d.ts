import { TModules } from '@meifacil/types';
import { NavigationAction, NavigationContainerRef } from '@react-navigation/native';
import { RefObject } from 'react';
export declare class AppNavigation {
    static ref: RefObject<NavigationContainerRef<any>>;
    static navigate(name: keyof TModules, params?: {
        screen: string;
        params?: any;
    }): void;
    static reset(index: number, routes: Array<{
        name: keyof TModules;
        params?: {
            screen: string;
            params?: any;
        };
    }>): void;
    static replace(name: keyof TModules, params?: {
        screen: string;
        params?: any;
    }): void;
    static push(name: keyof TModules, params?: {
        screen: string;
        params?: any;
    }): void;
    static pop(): void;
    static popToPop(): void;
    static goBack(): void;
    static jumpTo(name: keyof TModules, params?: {
        screen: string;
        params?: any;
    }): void;
    static getRootState(): Readonly<{
        key: string;
        index: number;
        routeNames: string[];
        history?: unknown[] | undefined;
        routes: (Readonly<{
            key: string;
            name: string;
            path?: string | undefined;
        }> & Readonly<{
            params?: Readonly<object | undefined>;
        }> & {
            state?: Readonly<any> | import("@react-navigation/native").PartialState<Readonly<any>> | undefined;
        })[];
        type: string;
        stale: false;
    }> | undefined;
    static getState(): Readonly<{
        key: string;
        index: number;
        routeNames: string[];
        history?: unknown[] | undefined;
        routes: (Readonly<{
            key: string;
            name: string;
            path?: string | undefined;
        }> & Readonly<{
            params?: Readonly<object | undefined>;
        }> & {
            state?: Readonly<any> | import("@react-navigation/native").PartialState<Readonly<any>> | undefined;
        })[];
        type: string;
        stale: false;
    }> | undefined;
    static isFocused(): boolean | undefined;
    static isReady(): boolean | undefined;
    static dispatchAction(action: NavigationAction): void | undefined;
    static getPreviouslyScreenPath(): Promise<unknown>;
}
