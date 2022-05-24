import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-MU';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;