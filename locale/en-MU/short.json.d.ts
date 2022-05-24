import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-MU';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;