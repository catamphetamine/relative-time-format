import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-UG';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;