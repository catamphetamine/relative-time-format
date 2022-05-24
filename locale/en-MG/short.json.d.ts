import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-MG';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;