import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ro';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;