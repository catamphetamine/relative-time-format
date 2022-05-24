import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-MT';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;