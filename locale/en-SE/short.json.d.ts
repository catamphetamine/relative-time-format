import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-SE';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;