import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'pl';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;