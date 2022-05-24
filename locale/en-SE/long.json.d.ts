import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-SE';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;