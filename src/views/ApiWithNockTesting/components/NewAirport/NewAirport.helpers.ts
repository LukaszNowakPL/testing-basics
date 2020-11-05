export const validate = ({name, iata}: any) => {
    const errors: any = {};

    if (name === '') {
        errors.name = 'required';
    }

    if (iata === '') {
        errors.iata = 'required';
    } else if (iata.length !== 3) {
        errors.iata = 'only 3 chars';
    }

    return errors;
};
