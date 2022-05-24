import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-BE';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;