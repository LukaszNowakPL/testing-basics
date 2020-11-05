export interface CountryDto {
    id: string;
    name: string;
}

export interface AirportDto {
    id: string;
    country_id: string;
    name: string;
    iata: string;
}

export interface NewAirportForm {
    name: string;
    iata: string;
}
