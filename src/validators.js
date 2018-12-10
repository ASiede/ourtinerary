

export const required = value => (value ? undefined : 'Required');


export const nonEmpty = value =>
    value.trim() !== '' ? undefined : 'Cannot be empty';

export const tooLong = value =>
	value.length <16 ? undefined : 'Username must be bewteen 1 and 15 characters long';

export const passwordLength = value => 
	(value.length <72 && value.length > 7)? undefined : 'Password must be bewteen 8 and 72 characters long';



// Uses a regular expression (regex) to check whether it looks enough like an
// email address.  Broken down:
// ^ Matches the start the text
// \S+ Matches one or more non-whitespace characters before the @
// @ A literal at sign
// \S+ Matches one or more non-whitespace characters after the @
// $ Matches the end of the text


export const email = value =>
    /^\S+@\S+$/.test(value) ? undefined : 'Must be a valid email address';