export interface Filters {
    names?: string[];
    ageFrom?: number;
    ageTo?: number;
    gender?: FiltersGenders;
}

export enum FiltersGenders {
    MALE = 'male',
    FEMALE = 'female',
}
