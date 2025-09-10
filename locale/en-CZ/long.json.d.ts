import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-CZ';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;