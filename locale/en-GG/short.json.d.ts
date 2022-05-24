import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-GG';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;