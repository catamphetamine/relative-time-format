import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-CX';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;