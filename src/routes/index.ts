export type Route = string;
export type RouteParam = Route | number;
export type RouteFunction1 = (p?: RouteParam) => Route;
export type RouteFunction2 = (p1?: RouteParam, p2?: RouteParam) => Route;
export type RouteFunction3 = (p1?: RouteParam, p2?: RouteParam, p3?: RouteParam) => Route;

export type GVRTRouteMap = {
    Root: Route,
    NotImplemented: Route,
    Login: Route,
    TaxRegistrationSelector: Route
};

export const Routes: GVRTRouteMap = {
    Root: '/',
    NotImplemented: '/under-construction',
    Login: '/login',
    TaxRegistrationSelector: '/tax-registrations',
};