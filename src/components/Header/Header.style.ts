import {css} from 'emotion';

export const headerContainer = css({
    marginBottom: '100px',
});

export const headerMenu = css({
    marginTop: '20px',
});

const buttonBase = {
    cursor: 'pointer',
    textDecoration: 'none',
};

export const headerButtonSelected = css({
    ...buttonBase,
    textDecoration: 'underline',
    fontWeight: 'bold',
});

export const headerButton = css(buttonBase);
