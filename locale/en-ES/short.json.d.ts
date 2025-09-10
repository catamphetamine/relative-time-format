import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-ES';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;