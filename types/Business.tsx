export interface Address {
    line1: string;
    line2: string;
    line3: string;
    line4: string;
    postCode: string;
}

export interface MapPoint {
    x: number;
    y: number;
}

export interface Location {
    address: Address;
    mapPoint: MapPoint;
}

export interface Business {
    id: string;
    title: string;
    category: string; 
    location: Location;
    emailAddresses: string[];
    telephoneNumbers: string[];
}